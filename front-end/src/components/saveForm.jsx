import React, {useEffect, useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {createTaskRequest, taskByIdRequest, updateTaskRequest} from "../ApiRequest/apiRequest.js";
import {Link, useNavigate} from "react-router-dom";


const SaveForm = () => {

    let navigate=useNavigate();


    let [formValue,setFormValue]=useState({
        email:"",title:"",description:"",status:""})

    const InputOnChange=(name,value)=>{
        setFormValue((formValue)=>({
            ...formValue,
            [name]:value
        }))
    }

    const [updateID,setUpdateId]=useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        setUpdateId(id);

        (async ()=>{
            if(id!==null){
                await fillForm(id)
            }

        })()
    }, []);

    const fillForm=async (id)=>{
        let res=await taskByIdRequest(id);
        setFormValue( {
            email:res['email'],
            title:res['title'],
            description:res['description'],
            status:res['status']}
        )

    }

    const save=async ()=>{
        if(formValue.email.length===0){
            toast.error("please Enter your Email!");
        }
        else if(formValue.title.length===0){
            toast.error("please Enter your title!")
        }
        else if(formValue.description.length===0){
            toast.error("please Enter your description!")
        }
        else if(formValue.status.length===0){
            toast.error("please Enter your Status!")
        }
        else{
            if(updateID===null){
                let res=await createTaskRequest(formValue)
                if(res){
                    toast.success("create request success")
                    navigate('/');
                }
                else{
                    toast.error('create request Fail')
                }
            }
            else {
                let res=await updateTaskRequest(formValue,updateID)
                if(res){
                    toast.success("update request success")
                    navigate('/');
                }
                else{
                    toast.error('update request Fail')
                }
            }

        }
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 p-2">
                    <label className="form-label">Your Email Address</label>
                    <input value={formValue.email} type="text" className="form-control" onChange={(e)=>InputOnChange("email",e.target.value)} placeholder="Email"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your Title</label>
                    <input value={formValue.title} type="text" className="form-control" onChange={(e)=>InputOnChange("title",e.target.value)} placeholder="Title"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your Description</label>
                    <input value={formValue.description} type="text" className="form-control" onChange={(e)=>InputOnChange("description",e.target.value)} placeholder="Description"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Your Status</label>
                    <input value={formValue.status} type="text" className="form-control" onChange={(e)=>InputOnChange("status",e.target.value)} placeholder="Status"/>
                </div>
                <div className="col-md-4 p-2">
                    <label className="form-label">Save Change</label><br/>
                   <button className="btn w-100 btn-success" onClick={save}>Submit</button>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default SaveForm;
import axios from "axios";

export async function listTaskRequest(){
    try{
        let res=await fetch("http://localhost:5010/api/v1/list-task");
        let JsonData=await res.json();
        return JsonData['data'];
    }catch (e) {
        return [];

    }
 }

 export async function createTaskRequest(postbody){
     try{
         let res=await axios.post("http://localhost:5010/api/v1/create-task",postbody);
         if(res.status===200){
             return true;
         }
         else {
             return false;
         }
     }catch (e) {
         return false;

     }
 }



export async function updateTaskRequest(postbody,id){
    try{
        let res=await axios.post("http://localhost:5010/api/v1/update-task/"+id,postbody);
        if(res.status===200){
            return true;
        }
        else {
            return false;
        }
    }catch (e) {
        return false;

    }
}

export async function deleteTaskRequest(id){
    try{
        let res=await fetch("http://localhost:5010/api/v1/delete-task/"+id);
        let JsonData=await res.json();
        if(JsonData['status']==='success'){
            return true;
        }
        else{
            return false;
        }
    }catch (e) {
        return false;

    }
}

export async function taskByIdRequest(id){
    try{
        let res=await fetch("http://localhost:5010/api/v1/task-by-id/"+id);
        const jsonData=await res.json();
        return jsonData['data'][0];
    }
    catch (e) {
        return [];
    }
}

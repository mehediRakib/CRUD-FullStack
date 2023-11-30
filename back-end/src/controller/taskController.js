const taskModel=require('../model/taskModel');

//create-Task
exports. createTask=async (req,res)=>{
    const data=req.body;
    try{
        let result=await taskModel.create(data);
        res.status(200).json({status:"Success",data:result})
    }
    catch(e){
        res.status(200).json({status:"fail",data:e})
    }
}



//delete-Task

exports.deleteTask=async (req,res)=>{
    let id=req.params.id;
    let query={_id:id};
    try{
        let result=await taskModel.deleteOne(query);
        res.status(200).json({status:"success",data:result});
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }

}


//Update-Task
exports.updateTask=async (req,res)=>{
    const reqBody=req.body;
    const id=req.params.id;
    const query={_id:id};
    try{
        const result=await taskModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e});
    }
}

//Read-task

exports.listTask=async (req,res)=>{
    try{
        const result=await taskModel.find();
        res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()});
    }
}



//find by id
exports.taskById=async (req,res)=>{
    const id=req.params.id;
    const query={_id:id};
    try{
      const result=await taskModel.find(query);
      res.status(200).json({status:"success",data:result});
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()});
    }
}


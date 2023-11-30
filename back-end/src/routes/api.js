const express=require("express");
const router=express.Router();
const controller=require('../controller/taskController');



router.post('/create-task',controller.createTask);
router.get('/delete-task/:id',controller.deleteTask);
router.post('/update-task/:id',controller.updateTask);
router.get('/list-task',controller.listTask);
router.get('/task-by-id/:id',controller.taskById);


module.exports=router;
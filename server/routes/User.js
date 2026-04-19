const express = require('express');
const router = express.Router();
const {AddUser,GetUsers,DeleteUser,UpdateUser}=require("../controller/UserController"); 
router.post("/add",AddUser);
router.get("/getAllUsers",GetUsers);
router.delete("/delete/:id",DeleteUser);
router.put("/update/:id",UpdateUser);
module.exports=router;
const User = require("../models/User");

module.exports.AddUser=async(req,res)=>{
    try {
        const {name,email,age,gender,city}=req.body;
        if(!name || !email || !age || !gender || !city){
            return res.status(400).json({message:"All fields are required"});
        }   
        const newUser=new User({name,email,age,gender,city});
        await newUser.save();
        res.status(201).json({message:"User added successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};

module.exports.GetUsers=async(req,res)=>{
    try {
        const users=await User.find();  
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};

module.exports.DeleteUser=async(req,res)=>{
    try {
        const {id}=req.params; 
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
};
module.exports.UpdateUser=async(req,res)=>{
    try {
        const {id}=req.params; 
        const {name ,email,age,gender,city}=req.body;
        await User.findByIdAndUpdate(id, {name ,email,age,gender,city});
        res.status(200).json({message:"User updated successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }   
}

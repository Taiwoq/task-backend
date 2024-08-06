const User = require("../models/userModel");




const registerUser = async (request,response) => {
    const {firstName,email,phone,lastName,password,dateOfBirth} = request.body
    const userExists = await User.findOne({email});
    if(userExists) {
        response.status(400).json({
            error:"user already exists"
        })
    }

    const newUser = await User.create({firstName,email,phone,lastName,password,dateOfBirth})
    if(newUser){
        response.status(201).json({
            message:"user created successfully"
        })
    } else{
        response.status(500).json({
            error:"invalid data error"
        })

    }
} 
module.exports = {registerUser}

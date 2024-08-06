const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    dateOfBirth:{
        type:Date,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: false
    },
    password:{
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("User",userSchema)

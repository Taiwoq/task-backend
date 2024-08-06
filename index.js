const express = require("express")
const connectDb = require("./config/db")
const userRoute = require("./routes/userRoutes")
const app = express()
const port = 8300



connectDb()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/api",(request,response) => {
    response.json({message:"welcome"})
})

app.use("/api",userRoute)

app.listen(port,() =>{
    console.log("server started successfully");
})
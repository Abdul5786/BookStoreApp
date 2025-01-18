import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./router/book.router.js"
import userRoute from "./router/user.route.js"
import cors from "cors"

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 4000

const URI=process.env.MongoDBURI;

try {

    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true

    });

    console.log("connected to db")
    
} catch (error) {
    console.log("error",error)  
}

  app.use("/book",bookRoute)
  app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
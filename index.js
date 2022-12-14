const express =require("express");
const mongoose =require("mongoose");
const userRoute =require("./routes/user")
const authRoute =require("./routes/auth")
const productRoute =require("./routes/product")
const cartRoute =require("./routes/cart")
const orderRoute =require("./routes/order")
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
const dotenv =require("dotenv")
const app =express()
dotenv.config()



mongoose.connect(process.env.MONGO_URL)
.then(()=>
    console.log("DB Connect Successfully"))
.catch((err)=>{console.log(err)})


app.use(cors());
app.use(express.json())


app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



app.listen(5000,(req,res)=>{
    console.log("server running on port ")
})
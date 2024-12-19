const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")

dotenv.config()

const app = express()
app.use(express.json())

app.use("/api/users",userRoutes)

mongoose
  .connect("mongodb://localhost:27017/bigbasket")
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
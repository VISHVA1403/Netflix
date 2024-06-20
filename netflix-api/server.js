const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const RegisterRouter = require("./routes/Register")
const mongoose = require("mongoose");
const LoginRoute = require("./routes/Login");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://vishva:vishva1403@base.h2d3xch.mongodb.net/base?retryWrites=true&w=majority&appName=base")
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
app.use("/register",RegisterRouter);
app.use("/login",LoginRoute);
app.listen(5000, () => {
  console.log("server started on port 5000");
});

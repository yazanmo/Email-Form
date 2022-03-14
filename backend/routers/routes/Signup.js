const express = require("express");

const signUpRouter = express.Router();

const {
  createNewUser,getAllDAta
} = require("../controllers/Signup");
const authentication = require("../../routers/middlewares/authentication");

signUpRouter.post("/signup", createNewUser);
signUpRouter.get("/data", authentication, getAllDAta);





module.exports = signUpRouter;
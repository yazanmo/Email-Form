const express = require("express");
const cors = require("cors");
const db = require("./db/db");

const app = express();

//routers

const signUpRouter = require("./routers/routes/signup");
const loginRouter = require("./routers/routes/login");

//built-in middlewares
app.use(express.json());
app.use(cors());

//third-party middleware

//app routers

app.use(signUpRouter);
app.use(loginRouter);


const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

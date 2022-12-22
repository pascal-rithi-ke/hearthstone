import express from "express";
import helmet from "helmet";
// import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Imports des routes
const helloRoute = require("./routes/hello");
const userRoute = require("./routes/user");

const dbConfig = require("./config/db");

require("dotenv").config();

const app = express();

app.use(helmet());
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/hello", helloRoute);
app.use("/api/user", userRoute);

module.exports = app;

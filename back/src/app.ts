import express from "express";
import helmet from "helmet";
// import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Imports des routes
const userRoute = require("./controllers/user-controllers");
const cardsRoute = require("./controllers/cards-controllers")
//
const dbConfig = require("./config/db");

require("dotenv").config();

const app = express();

app.use(helmet());
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/user", userRoute);
app.use('/api/cards', cardsRoute);

module.exports = app;

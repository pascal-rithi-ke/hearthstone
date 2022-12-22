import express from "express";
import helmet from "helmet";
// import cors from "cors";
import cookieParser from "cookie-parser";

// Imports des routes
const helloRoute = require("./routes/hello");
const userRoute = require("./routes/user");

// Importe le fichier de config de la connexion à la bdd
// const dbConfig = require("./config/db");

require("dotenv").config();

const app = express();

app.use(helmet());
// app.use(cors);
// app.use(express.json());

app.use(cookieParser());

// Routes
app.use("/api/hello", helloRoute);
app.use("/api/user", userRoute);

module.exports = app;

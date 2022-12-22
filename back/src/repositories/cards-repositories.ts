import { NextFunction, Request, Response } from "express";

const dbConfig = require("../config/db");
require("dotenv").config();

exports.getCards = async () => {


    try {
      const sql = "SELECT * from cards";
      const db = dbConfig.getDB();

      const data = await db.execute(sql);
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }

 
};

import { NextFunction, Request, Response } from "express";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dbConfig = require("../config/db");

require("dotenv").config();

exports.signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs" });
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = {
      username,
      password: encryptedPassword,
    };

    // Requête SQL
    const sql = "INSERT INTO players SET ?";
    const db = dbConfig.getDB();

    // TODO: Vérifier si l'utilisateur existe déjà, enlever le any
    db.query(sql, [user], (err: Error, result: any) => {
      if (!result) {
        res.status(200).json({ message: "Utilisateur déjà existant" });
      } else {
        res.status(201).json({ message: "Utilisateur créé" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

import { Request, Response } from "express";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dbConfig = require("../config/db");

require("dotenv").config();

exports.signup = async (req: Request, res: Response) => {
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

exports.getAllUsers = async (_req: Request, res: Response) => {
  const sqlRequest = "SELECT * FROM players";
  const db = dbConfig.getDB();
  // TODO: Enlever le any
  db.query(sqlRequest, async (err: Error, result: any) => {
    if (err) {
      res.status(400).json({ err });
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getOneUser = async (req: Request, res: Response) => {
  const sqlRequest = "SELECT * FROM players WHERE id = ?";
  const db = dbConfig.getDB();
  // TODO: Enlever le any
  db.query(sqlRequest, [req.params.id], async (err: Error, result: any) => {
    if (err) {
      res.status(400).json({ err });
      throw err;
    }

    // si aucun user ne correspond à l'id demandé
    if (result.length === 0) {
      res.status(404).json({ error: "Utilisateur inconnu" });
      throw err;
    }

    res.status(200).json(result);
  });
};

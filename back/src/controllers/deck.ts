import { Request, Response } from "express";

const dbConfig = require("../config/db");

require("dotenv").config();

exports.getUserDeck = async (req: Request, res: Response) => {
  const sqlRequest = "SELECT name,cost,spell,attack,health FROM `deck_players` INNER JOIN cards on card_id = cards.id WHERE player_id = ?";
  const db = dbConfig.getDB();
  // TODO: Enlever le any
  db.query(sqlRequest, [req.params.player_id], async (err: Error, result: any) => {
    if (err) {
      res.status(400).json({ err });
      throw err;
    }

    // si aucun deck ne correspond à l'id demandé
    if (result.length === 0) {
      res.status(404).json({ error: "Deck inconnu" });
      throw err;
    }

    res.status(200).json(result);
  });
};

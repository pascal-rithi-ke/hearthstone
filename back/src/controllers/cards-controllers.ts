import { Router } from "express";
import {  Request, Response } from "express";

const router = Router();

const cardsService = require("../services/cards-business");

router.get("/", async (req: Request, res: Response) => {
  const data = await cardsService.getCards()
  res.status(200).json(data)
});

module.exports = router;
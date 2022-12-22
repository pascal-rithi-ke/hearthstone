import { Router } from "express";
import {  Request, Response } from "express";

const router = Router();

const cardsService = require("../services/cards-business");

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(cardsService.getCards())
});

module.exports = router;
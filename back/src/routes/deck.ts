import { Router } from "express";

const router = Router();

const userCtrl = require("../controllers/deck");

router.get("/:player_id", userCtrl.getUserDeck);

module.exports = router;
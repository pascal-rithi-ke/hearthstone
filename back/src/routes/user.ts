import { Router } from "express";

const router = Router();

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);

router.get("/", (_req, res) => {
  res.send("user route");
});

module.exports = router;

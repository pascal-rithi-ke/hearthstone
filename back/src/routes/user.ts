import { Router } from "express";

const router = Router();

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOneUser);

module.exports = router;

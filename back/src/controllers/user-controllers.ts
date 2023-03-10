import { Router } from "express";

const router = Router();

const userCtrl = require("../repositories/user-repositories");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOneUser);

module.exports = router;

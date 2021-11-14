import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login")
});

router.post("/login", new AuthenticateUserController().handle);

export { router };
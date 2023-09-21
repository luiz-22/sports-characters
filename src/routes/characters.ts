import { Router } from "express";
import { charactersController } from "../controllers";

const router = Router();

router.get("/", charactersController.getCharacters);

export default router;

import { Router } from "express";
import { charactersController } from "../controllers";

const router = Router();

router.get("/", charactersController.getCharacters);
router.get("/:id", charactersController.getCharacterById);

export default router;

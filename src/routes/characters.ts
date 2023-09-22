import { Router } from "express";
import { charactersController } from "../controllers";

const router = Router();

router.get("/", charactersController.getCharacters);
router.get("/:id", charactersController.getCharacterById);
router.post("/", charactersController.createCharacter);

export default router;

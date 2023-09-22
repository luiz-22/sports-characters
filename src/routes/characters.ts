import { Router } from "express";
import { charactersController } from "../controllers";

const router = Router();

router.get("/", charactersController.getCharacters);
router.get("/:id", charactersController.getCharacterById);
router.get("/", charactersController.getCharacterByGender);
router.get("/", charactersController.getCharacterByCountry);
router.get("/", charactersController.getCharacterBySport);
router.post("/", charactersController.createCharacter);

export default router;

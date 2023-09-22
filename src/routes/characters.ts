import { Router } from "express";
import { charactersController } from "../controllers";

const router = Router();

router.get("/", charactersController.getCharacters);
router.get("/:id", charactersController.getCharacterById);
router.get("/gender/:gender", charactersController.getCharacterByGender);
router.get("/country/:country", charactersController.getCharacterByCountry);
router.get("/sport/:sport", charactersController.getCharacterBySport);
router.post("/", charactersController.createCharacter);

export default router;

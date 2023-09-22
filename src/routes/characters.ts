import { Router } from "express";
import { charactersController } from "../controllers";
import characterValidation from "../middlewares/characterValidation";

const router = Router();

router.get("/", charactersController.getCharacters);
router.get("/:id", charactersController.getCharacterById);
router.get("/gender/:gender", charactersController.getCharacterByGender);
router.get("/country/:country", charactersController.getCharacterByCountry);
router.get("/sport/:sport", charactersController.getCharacterBySport);
router.post("/", characterValidation, charactersController.createCharacter);

export default router;

import { Router } from "express";
import { countriesController } from "../controllers";

const router = Router();

router.get("/", countriesController.getCountries);

export default router;

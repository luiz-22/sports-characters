import { Router } from "express";
import { sportsController } from "../controllers";

const router = Router();

router.get("/", sportsController.getSports);

export default router;

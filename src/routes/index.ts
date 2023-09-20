import { Router } from "express";
import sportsRouter from "./sports"; 

const router = Router();

router.use("/characters", sportsRouter);

export default router;

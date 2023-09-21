import { Router } from "express";
import sportsRouter from "./sports";
import coutriesRouter from "./countries";
import charactersRouter from "./characters";

const router = Router();

router.use("/sports", sportsRouter);
router.use("/countries", coutriesRouter);
router.use("/characters", charactersRouter);

export default router;

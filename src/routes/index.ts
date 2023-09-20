import { Router } from "express";
import sportsRouter from "./sports";
import coutriesRouter from "./countries";

const router = Router();

router.use("/sports", sportsRouter);
router.use("/countries", coutriesRouter);

export default router;

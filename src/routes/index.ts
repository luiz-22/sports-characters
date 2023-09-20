import { Router } from "express";

const router = Router();

router.get("/characters", (req, res) => {
  res.send("Ruta /characters");
});

export default router;

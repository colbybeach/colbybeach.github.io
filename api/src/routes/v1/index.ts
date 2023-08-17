import { Router } from "express";

import skills from "./skills.route";
import experience from "./experience.route";

const router = Router();

router.use("/skills", skills);
router.use("/experience", experience);


export default router;

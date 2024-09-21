import express from "express";

import { createWatch, deleteWatch, getWatches, updateWatch } from "../controllers/watch.controller.js";

const router = express.Router();

router.post("/", createWatch);
router.get("/", getWatches);
router.delete("/:id", deleteWatch);
router.put("/:id", updateWatch);

export default router
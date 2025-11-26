import express from "express";
import {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement,
} from "../controller/announcementController.js";

const router = express.Router();

router.post("/", createAnnouncement);
router.get("/", getAnnouncements);
router.delete("/:id", deleteAnnouncement);

export default router;

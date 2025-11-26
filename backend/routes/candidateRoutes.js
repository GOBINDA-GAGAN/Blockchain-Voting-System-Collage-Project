// backend/routes/candidateRoutes.js
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {
  castVote,
  createCandidate,
  deleteCandidate,
  getAllCandidates,
  getCandidateById,
  getWinner,
  updateCandidate,
} from "../controller/candidateController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Set up uploads folder
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.get("/winner", getWinner);
router.post("/", upload.single("photo"), createCandidate);
router.put("/:id", upload.single("photo"), updateCandidate);
router.get("/", getAllCandidates);
router.get("/:id", getCandidateById);
router.delete("/:id", deleteCandidate);
router.put("/vote/:id", authMiddleware, castVote);

export default router;



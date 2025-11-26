import Candidate from "../model/Candidate.js";

import { UserModel } from "../model/User.js";

export const createCandidate = async (req, res) => {
  try {
    const {
      role_for_Election,
      email,
      password,
      department,
      year,
      age,
      gender,
      manifesto,
      firstName,
      lastName,
      contactEmail,
      contactPhone,
    } = req.body;

    console.log(
      role_for_Election,
      email,
      password,
      department,
      year,
      age,
      gender,
      manifesto,
      firstName,
      lastName,
      contactEmail,
      contactPhone
    );

    // Validation
    if (!firstName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "First name, email and password are required",
      });
    }

    // Check for duplicate email
    const existing = await Candidate.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Candidate with this email already exists",
      });
    }

    const newCandidate = new Candidate({
      role_for_Election,
      email,
      password,
      department,
      year,
      age,
      gender,
      manifesto: manifesto ? manifesto.split(",") : [],
      name: { firstName, lastName },
      contact: { email: contactEmail, phone: contactPhone },
      image_of_Candidate: req.file ? `/uploads/${req.file.filename}` : "",
    });

    await newCandidate.save();

  return  res.status(201).json({
      success: true,
      message: "Candidate created successfully",
      candidate: newCandidate,
    });
  } catch (err) {
    console.error(err);
   return res
      .status(500)
      .json({ success: false, message: "Error creating candidate" });
  }
};

export const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    console.log(candidates);
    
    res.status(200).json({ success: true, candidates });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching candidates",
      error: error.message,
    });
  }
};

export const getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }
    res.status(200).json({ success: true, candidate });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching candidate",
      error: error.message,
    });
  }
};

export const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }
    res.status(200).json({
      success: true,
      message: "Candidate updated successfully",
      candidate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error updating candidate",
      error: error.message,
    });
  }
};

export const deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndDelete(req.params.id);
    if (!candidate) {
      return res
        .status(404)
        .json({ success: false, message: "Candidate not found" });
    }
    res.status(200).json({
      success: true,
      message: "Candidate deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting candidate",
      error: error.message,
    });
  }
};

export const castVote = async (req, res) => {
  try {
    const userId = req.user.id;
    const candidateId = req.params.id;

    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (user.hasVoted) {
      return res.status(400).json({ msg: "You have already voted!" });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) return res.status(404).json({ msg: "Candidate not found" });

    // ADD THIS
    if (candidate.votes.includes(userId)) {
      return res.status(400).json({ msg: "You already voted for this candidate!" });
    }

    // Push vote
    candidate.votes.push(userId);

    // IMPORTANT: update totalVotes
    candidate.totalVotes = candidate.votes.length;

    await candidate.save();

    // Mark user as voted
    user.hasVoted = true;
    await user.save();

    return res.status(200).json({ msg: "Vote cast successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getWinner = async (req, res) => {
  try {
    const candidates = await Candidate.find();

    if (!candidates.length)
      return res.json({ success: false, message: "No candidates found" });

    const winner = candidates.reduce((a, b) =>
      a.totalVotes >= b.totalVotes ? a : b
    );

    res.json({ success: true, winner });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching winner",
      error: err.message,
    });
  }
};




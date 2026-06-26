const express = require("express");
const router = express.Router();

const Note = require("../models/Note");
const auth = require("../middleware/authMiddleware");

router.get("/notes:userId", auth, async (req, res) => {
  try {
    const notes = await Note.find({
      userId: req.user.id
    });

    res.status(200).json({
      loggedInUserId: req.user.id,
      notes
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
router.get("/notes", auth, async (req, res) => {

    const notes = await Note.find({
        userId: req.user.id
    });

    res.json(notes);

});
router.delete("/notes/:id", auth, async (req, res) => {

    await Note.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id
    });

    res.json({
        message: "Deleted Successfully"
    });

});
router.post("/notes", auth, async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({
        message: "Encrypted note data is required"
      });
    }

    const note = await Note.create({
      userId: req.user.id,
      data
    });

    res.status(201).json({
      message: "Note created successfully",
      // note
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
module.exports = router;
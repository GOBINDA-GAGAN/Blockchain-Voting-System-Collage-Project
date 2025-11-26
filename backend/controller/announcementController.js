import Announcement from "../model/announcementSchema.js";

export const createAnnouncement = async (req, res) => {
  try {
    const { title, message, postedBy } = req.body;

    const newAnn = await Announcement.create({
      title,
      message,
      postedBy,
    });

    res.json({ success: true, data: newAnn });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getAnnouncements = async (req, res) => {
  try {
    const data = await Announcement.find().sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

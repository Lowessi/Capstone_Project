import Profile from "../models/ProfileModel.js";
import User from "../models/UserModel.js";

// Create or update user profile
export const createProfile = async (req, res) => {
  try {
    const userId = req.user._id; // from auth middleware
    const { name, email, age, address, dob, civil, role } = req.body;

    const profileData = { name, email, age, address, dob, civil, role };

    const updatedProfile = await Profile.findOneAndUpdate(
      { userId },
      profileData,
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get user profile

const getUserProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
    } else {
      res.status(200).json(profile);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get other user profile

export const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await ProfileModel.findOne({ userId: id });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createProfile, getUserProfile, getProfileById };

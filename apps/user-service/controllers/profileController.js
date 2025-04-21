// controllers/profileController.js
const { getUserProfile, updateUserProfile } = require('../models/ProfileModel');

async function getProfile(req, res) {
  const userId = req.headers['x-user-id']; // ✅ replace with token-based auth later
  if (!userId) return res.status(401).json({ message: 'Missing user ID' });

  const user = await getUserProfile(userId);
  res.json(user);
}

async function updateProfile(req, res) {
  const userId = req.headers['x-user-id'];
  if (!userId) return res.status(401).json({ message: 'Missing user ID' });

  const updated = await updateUserProfile(userId, req.body);
  res.json(updated);
}

module.exports = { getProfile, updateProfile };

const { register, login } = require('../services/AuthService');
const { validateAuthPayload } = require('../dtos/authDTO');

async function registerController(req, res) {
  try {
    const { email, password } = validateAuthPayload(req.body);
    const user = await register(email, password);
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function loginController(req, res) {
  try {
    const { email, password } = validateAuthPayload(req.body);
    const token = await login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

module.exports = { registerController, loginController };

const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes'); // <- correct relative path

dotenv.config();

const app = express();
app.use(express.json()); // <-- this is important

app.use('/auth', authRoutes); // <- this means: /auth/register

app.get('/health', (req, res) => res.send('Auth service healthy!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));

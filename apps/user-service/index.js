const express = require('express');
const dotenv = require('dotenv');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/me', profileRoutes);

app.get('/health', (req, res) => res.send('User service is healthy'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));

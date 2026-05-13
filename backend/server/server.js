const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const problemRoutes = require('./routes/ProblemRoutes');

dotenv.config();
const app = express();

// Database Connect
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ⚠️ Yahan 'problems' small mein rakhein
app.use('/api/problems', problemRoutes);

app.get('/', (req, res) => {
    res.send("LogicLens Server is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});
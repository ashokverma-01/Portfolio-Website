const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoute");
const cors = require("cors");
const path = require("path");

// deploye
const _dirname = path.resolve();

dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
const coreOptions = {
  origin: "https://portfolio-website-hqf0.onrender.com",
  credentials: "true",
};
app.use(cors(coreOptions));

// Routes
app.use("/api", userRoutes);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

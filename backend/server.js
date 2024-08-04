const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

mongoose
  .connect(
    "mongodb+srv://sarthak:lama@cluster0.l8sqnbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // ,
    //   {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

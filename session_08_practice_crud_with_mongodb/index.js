import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";

import { client } from "./configs/connectDB.js";
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
<<<<<<< HEAD
=======
import uploadRoutes from "./routes/uploadRoutes.js";
>>>>>>> bb4ea394665731f52326a94dd4cd7ef01fdedd2d

const app = express();
const PORT = process.env.PORT;

async function main() {
  try {
    // connect to mongodb
    await client.connect();
    console.log("Connected to mongodb successfully");

    // set up middlewares
    app.use(express.json());
    app.use(cors());
<<<<<<< HEAD
    app.use("/api/v1/students", studentRoutes);
    app.use("/api/v1/auth", authRoutes);
=======
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));

    app.use("/api/v1/students", studentRoutes);
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/upload", uploadRoutes);
>>>>>>> bb4ea394665731f52326a94dd4cd7ef01fdedd2d

    // run server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // handle error here
  }
}

main();

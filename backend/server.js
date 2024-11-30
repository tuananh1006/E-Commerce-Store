import express from "express";
import { envVars } from "./config/envVars.js";
import authRoutes from "./routes/auth.route.js";
const app = express();

const PORT = envVars.PORT;

app.use("/api/auth/", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

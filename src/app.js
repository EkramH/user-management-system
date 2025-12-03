import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("User Management API Running");
});

export default app;

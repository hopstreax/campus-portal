import express from "express";
import cors from "cors";
import resourceRoutes from "./routes/resources.js";
import lostFoundRoutes from "./routes/lostfound.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resources", resourceRoutes);
app.use("/api/lostfound", lostFoundRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const swaggerDocument = YAML.load("./src/docs/swagger.yaml");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
  res.send("Career OS Backend is Running 🚀");
});

export default app;
import express, { Express } from "express";
import dotenv from "dotenv";
import roomRoutes from "./src/routes/roomRoutes";
import bookingRoutes from "./src/routes/bookingRoutes";
import { Request } from "express";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT; //Edit this line

app.use(express.json());

app.use(cors<Request>());

app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

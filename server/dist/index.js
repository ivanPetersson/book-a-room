"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const roomRoutes_1 = __importDefault(require("./src/routes/roomRoutes"));
const bookingRoutes_1 = __importDefault(require("./src/routes/bookingRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/rooms", roomRoutes_1.default);
app.use("/bookings", bookingRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

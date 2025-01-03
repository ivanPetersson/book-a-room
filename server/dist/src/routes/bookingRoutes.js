"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controller/bookingController");
const router = express_1.default.Router();
router.get("/", bookingController_1.getBookings);
router.get("/room", bookingController_1.getBookingsForRoom);
router.post("/", bookingController_1.createNewBooking);
router.post("/available-timeslots", bookingController_1.getAvailableTimeSlotsForRoom);
exports.default = router;

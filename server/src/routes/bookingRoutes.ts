import express from "express";
import {
  getBookings,
  getBookingsForRoom,
  createNewBooking,
  getAvailableTimeSlotsForRoom,
} from "../controller/bookingController";

const router = express.Router();

router.get("/", getBookings);

router.get("/room", getBookingsForRoom);

router.post("/", createNewBooking);

router.post("/available-timeslots", getAvailableTimeSlotsForRoom);

export default router;

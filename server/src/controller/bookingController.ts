import { Request, Response } from "express";
import {
  fetchAllBookings,
  fetchAllBookingsForRoom,
  fetchAvailableTimeSlots,
  makeNewBooking,
} from "../service/bookingService";
import { BookingRequest } from "../model/bookingRequest";

export const getBookings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const rooms = await fetchAllBookings();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getBookingsForRoom = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const bookings = await fetchAllBookingsForRoom(name);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAvailableTimeSlotsForRoom = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, date } = req.body;
    if (!name || !date) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const availableTimeSlots = await fetchAvailableTimeSlots(name, date);
    res.status(200).json(availableTimeSlots);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createNewBooking = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const bookingRequest: BookingRequest = req.body;
    if (!bookingRequest) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const result = await makeNewBooking(bookingRequest);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

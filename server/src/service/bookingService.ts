import { Booking } from "../model/booking";
import {
  getAllBookings,
  getAllBookingsForRoom,
  createBooking,
} from "../dao/bookingDAO";
import { fetchRoomByName } from "./roomService";
import { BookingRequest } from "../model/bookingRequest";

const TIMESLOTS = [
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
];

export const fetchAllBookings = async (): Promise<Booking[] | unknown[]> => {
  try {
    const bookings = await getAllBookings();
    return bookings;
  } catch (error) {
    throw new Error("Error fetching bookings: " + error);
  }
};

export const fetchAllBookingsForRoom = async (
  roomName: string
): Promise<Booking[] | unknown[]> => {
  try {
    const room = await fetchRoomByName(roomName);
    const bookings = await getAllBookingsForRoom(room.id);
    return bookings;
  } catch (error) {
    throw new Error("Error fetching bookings: " + error);
  }
};

export const makeNewBooking = async (
  bookingRequest: BookingRequest
): Promise<string> => {
  try {
    if (!TIMESLOTS.includes(bookingRequest.timeSlot)) {
      throw new Error(
        `The only timeslots allowed are: ${TIMESLOTS.join(", ")}`
      );
    }
    const room = await fetchRoomByName(bookingRequest.roomName);
    const result = await createBooking(room.id, bookingRequest);
    return result;
  } catch (error) {
    throw new Error("Error: " + error);
  }
};

export const fetchAvailableTimeSlots = async (
  roomName: string,
  date: string
): Promise<string[]> => {
  try {
    const bookings = await fetchAllBookingsForRoom(roomName);
    const bookedSlots = bookings
      .filter((booking: any) => booking.date === date)
      .map((booking: any) => booking.time_slot);

    const availableSlots = TIMESLOTS.filter(
      (slot) => !bookedSlots.includes(slot)
    );
    return availableSlots;
  } catch (error) {
    throw new Error("Error fetching available timeslots: " + error);
  }
};

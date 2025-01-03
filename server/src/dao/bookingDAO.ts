import { Booking } from "../model/booking";
import connection from "../db/connection";
import { BookingRequest } from "../model/bookingRequest";

export const getAllBookings = async (): Promise<Booking[]> => {
  return new Promise((resolve, reject) => {
    connection.all("SELECT * FROM bookings", [], (error, rows) => {
      if (error) {
        return reject(error);
      }
      resolve(rows as Booking[]);
    });
  });
};

export const getAllBookingsForRoom = async (
  roomId: number
): Promise<Booking[]> => {
  return new Promise((resolve, reject) => {
    connection.all(
      "SELECT * FROM bookings WHERE room_id = ?",
      [roomId],
      (error, rows) => {
        if (error) {
          return reject(error);
        }
        resolve(rows as Booking[]);
      }
    );
  });
};

export const createBooking = async (
  roomId: number,
  bookingRequest: BookingRequest
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const { date, timeSlot, user } = bookingRequest;
    const sql = `
      INSERT INTO bookings (room_id, date, time_slot, user)
      VALUES (?, ?, ?, ?)
    `;
    connection.run(
      sql,
      [roomId, date, timeSlot, user],
      function (error: Error) {
        if (error) {
          reject(error);
        } else {
          resolve("Booking successfully created");
        }
      }
    );
  });
};

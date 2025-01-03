"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = exports.getAllBookingsForRoom = exports.getAllBookings = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        connection_1.default.all("SELECT * FROM bookings", [], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
});
exports.getAllBookings = getAllBookings;
const getAllBookingsForRoom = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        connection_1.default.all("SELECT * FROM bookings WHERE room_id = ?", [roomId], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
});
exports.getAllBookingsForRoom = getAllBookingsForRoom;
const createBooking = (roomId, bookingRequest) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const { date, timeSlot, user } = bookingRequest;
        const sql = `
      INSERT INTO bookings (room_id, date, time_slot, user)
      VALUES (?, ?, ?, ?)
    `;
        connection_1.default.run(sql, [roomId, date, timeSlot, user], function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve("Booking successfully created");
            }
        });
    });
});
exports.createBooking = createBooking;

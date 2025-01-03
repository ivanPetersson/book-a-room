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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAvailableTimeSlots = exports.makeNewBooking = exports.fetchAllBookingsForRoom = exports.fetchAllBookings = void 0;
const bookingDAO_1 = require("../dao/bookingDAO");
const roomService_1 = require("./roomService");
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
const fetchAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield (0, bookingDAO_1.getAllBookings)();
        return bookings;
    }
    catch (err) {
        throw new Error("Error fetching bookings: " + err);
    }
});
exports.fetchAllBookings = fetchAllBookings;
const fetchAllBookingsForRoom = (roomName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, roomService_1.fetchRoomByName)(roomName);
        const bookings = yield (0, bookingDAO_1.getAllBookingsForRoom)(room.id);
        return bookings;
    }
    catch (err) {
        throw new Error("Error fetching bookings: " + err);
    }
});
exports.fetchAllBookingsForRoom = fetchAllBookingsForRoom;
const makeNewBooking = (bookingRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!TIMESLOTS.includes(bookingRequest.timeSlot)) {
            throw new Error(`Invalid time slot. Allowed time slots are: ${TIMESLOTS.join(", ")}`);
        }
        const room = yield (0, roomService_1.fetchRoomByName)(bookingRequest.roomName);
        const result = yield (0, bookingDAO_1.createBooking)(room.id, bookingRequest);
        return result;
    }
    catch (err) {
        throw new Error("Error: " + err);
    }
});
exports.makeNewBooking = makeNewBooking;
const fetchAvailableTimeSlots = (roomName, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield (0, exports.fetchAllBookingsForRoom)(roomName);
        const bookedSlots = bookings
            .filter((booking) => booking.date === date)
            .map((booking) => booking.time_slot);
        const availableSlots = TIMESLOTS.filter((slot) => !bookedSlots.includes(slot));
        return availableSlots;
    }
    catch (err) {
        throw new Error("Error fetching available timeslots: " + err);
    }
});
exports.fetchAvailableTimeSlots = fetchAvailableTimeSlots;

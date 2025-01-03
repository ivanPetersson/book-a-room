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
exports.createNewBooking = exports.getAvailableTimeSlotsForRoom = exports.getBookingsForRoom = exports.getBookings = void 0;
const bookingService_1 = require("../service/bookingService");
const getBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, bookingService_1.fetchAllBookings)();
        res.status(200).json(rooms);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getBookings = getBookings;
const getBookingsForRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ error: "Bad request" });
            return;
        }
        const bookings = yield (0, bookingService_1.fetchAllBookingsForRoom)(name);
        res.status(200).json(bookings);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getBookingsForRoom = getBookingsForRoom;
const getAvailableTimeSlotsForRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, date } = req.body;
        if (!name || !date) {
            res.status(400).json({ error: "Bad request" });
            return;
        }
        const availableTimeSlots = yield (0, bookingService_1.fetchAvailableTimeSlots)(name, date);
        res.status(200).json(availableTimeSlots);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getAvailableTimeSlotsForRoom = getAvailableTimeSlotsForRoom;
const createNewBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingRequest = req.body;
        if (!bookingRequest) {
            res.status(400).json({ error: "Bad request" });
            return;
        }
        const result = yield (0, bookingService_1.makeNewBooking)(bookingRequest);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.createNewBooking = createNewBooking;

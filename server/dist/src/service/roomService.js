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
exports.fetchRoomBySize = exports.fetchRoomByName = exports.fetchAllRooms = void 0;
const roomDAO_1 = require("../dao/roomDAO");
const fetchAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, roomDAO_1.getAllRooms)();
        return rooms;
    }
    catch (err) {
        throw new Error("Error fetching rooms: " + err);
    }
});
exports.fetchAllRooms = fetchAllRooms;
const fetchRoomByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, roomDAO_1.getRoomByName)(name);
        if (rooms.length === 0) {
            throw new Error(`No room found with the name ${name}`);
        }
        return rooms[0];
    }
    catch (err) {
        throw new Error("" + err);
    }
});
exports.fetchRoomByName = fetchRoomByName;
const fetchRoomBySize = (size) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield (0, roomDAO_1.getRoomBySize)(size);
        return room;
    }
    catch (err) {
        throw new Error("" + err);
    }
});
exports.fetchRoomBySize = fetchRoomBySize;

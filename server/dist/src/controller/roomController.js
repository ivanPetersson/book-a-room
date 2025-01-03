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
exports.getRoomBySize = exports.getRoomByName = exports.getRooms = void 0;
const roomService_1 = require("../service/roomService");
const getRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, roomService_1.fetchAllRooms)();
        res.status(200).json(rooms);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
});
exports.getRooms = getRooms;
const getRoomByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ error: "Bad request" });
            return;
        }
        const room = yield (0, roomService_1.fetchRoomByName)(name);
        res.status(200).json(room);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Internal server error";
        res.status(500).json({ error: errorMessage });
    }
});
exports.getRoomByName = getRoomByName;
const getRoomBySize = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { size } = req.body;
        if (!size || typeof size != "number") {
            res.status(400).json({ error: "Bad request" });
            return;
        }
        const room = yield (0, roomService_1.fetchRoomBySize)(size);
        res.status(200).json(room);
    }
    catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Internal server error";
        res.status(500).json({ error: errorMessage });
    }
});
exports.getRoomBySize = getRoomBySize;

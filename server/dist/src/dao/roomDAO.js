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
exports.getRoomBySize = exports.getRoomByName = exports.getAllRooms = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const getAllRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        connection_1.default.all("SELECT * FROM rooms", [], (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
});
exports.getAllRooms = getAllRooms;
const getRoomByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        connection_1.default.all("SELECT * FROM rooms WHERE name = ?", [name], (err, rows) => {
            if (err) {
                return reject(err);
            }
            if (rows.length === 0) {
                return reject(new Error(`There is no room with the name ${name}`));
            }
            resolve(rows);
        });
    });
});
exports.getRoomByName = getRoomByName;
const getRoomBySize = (size) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        connection_1.default.all("SELECT * FROM rooms WHERE size >= ?", [size], (err, rows) => {
            if (err) {
                return reject(err);
            }
            if (rows.length === 0) {
                return reject(new Error(`There is no available room with the capacity ${size}`));
            }
            resolve(rows);
        });
    });
});
exports.getRoomBySize = getRoomBySize;

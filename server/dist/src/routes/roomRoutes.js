"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomController_1 = require("../controller/roomController");
const router = express_1.default.Router();
router.get("/", roomController_1.getRooms);
router.get("/name", roomController_1.getRoomByName);
router.get("/size", roomController_1.getRoomBySize);
exports.default = router;

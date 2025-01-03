import express from "express";
import {
  /*getRoomByName,
  getRoomBySize,*/
  getRooms,
} from "../controller/roomController";

const router = express.Router();

router.get("/", getRooms);

//router.get("/name", getRoomByName);

//router.get("/size", getRoomBySize);

export default router;

import { Request, Response } from "express";
import {
  fetchAllRooms,
  fetchRoomByName,
  fetchRoomBySize,
} from "../service/roomService";

export const getRooms = async (_req: Request, res: Response): Promise<void> => {
  try {
    const rooms = await fetchAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getRoomByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name || typeof name != "string") {
      res.status(400).json({ error: "Bad request" });
      return;
    }

    const room = await fetchRoomByName(name);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getRoomBySize = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { size } = req.body;
    if (!size || typeof size != "number") {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const room = await fetchRoomBySize(size);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

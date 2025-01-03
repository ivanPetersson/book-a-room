import { Room } from "../model/room";
import { getAllRooms, getRoomByName, getRoomBySize } from "../dao/roomDAO";

export const fetchAllRooms = async (): Promise<Room[] | unknown[]> => {
  try {
    const rooms = await getAllRooms();
    return rooms;
  } catch (error) {
    throw new Error("Error fetching rooms: " + error);
  }
};

export const fetchRoomByName = async (name: string): Promise<Room> => {
  try {
    const rooms = await getRoomByName(name);
    if (rooms.length === 0) {
      throw new Error(`No room found with the name ${name}`);
    }
    return rooms[0];
  } catch (error) {
    throw new Error("" + error);
  }
};

export const fetchRoomBySize = async (
  size: number
): Promise<Room | unknown> => {
  try {
    const room = await getRoomBySize(size);
    return room;
  } catch (error) {
    throw new Error("" + error);
  }
};

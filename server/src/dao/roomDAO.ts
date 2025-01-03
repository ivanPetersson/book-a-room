import { Room } from "../model/room";
import connection from "../db/connection";

export const getAllRooms = async (): Promise<Room[]> => {
  return new Promise((resolve, reject) => {
    connection.all("SELECT * FROM rooms", [], (error, rows) => {
      if (error) {
        return reject(error);
      }
      resolve(rows as Room[]);
    });
  });
};

export const getRoomByName = async (name: string): Promise<Room[]> => {
  return new Promise((resolve, reject) => {
    connection.all(
      "SELECT * FROM rooms WHERE name = ?",
      [name],
      (error, rows) => {
        if (error) {
          return reject(error);
        }
        if (rows.length === 0) {
          return reject(new Error(`There is no room with the name ${name}`));
        }
        resolve(rows as Room[]);
      }
    );
  });
};

export const getRoomBySize = async (size: number): Promise<Room[]> => {
  return new Promise((resolve, reject) => {
    connection.all(
      "SELECT * FROM rooms WHERE size >= ?",
      [size],
      (error, rows) => {
        if (error) {
          return reject(error);
        }
        if (rows.length === 0) {
          return reject(
            new Error(`There is no available room with the capacity ${size}`)
          );
        }
        resolve(rows as Room[]);
      }
    );
  });
};

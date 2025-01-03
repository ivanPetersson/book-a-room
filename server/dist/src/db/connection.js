"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
sqlite3_1.default.verbose();
const connection = new sqlite3_1.default.Database("./rooms.db", sqlite3_1.default.OPEN_READWRITE | sqlite3_1.default.OPEN_CREATE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successfully connected to database");
});
connection.run("PRAGMA foreign_keys = ON");
connection.serialize(() => {
    //connection.run("DROP TABLE bookings");
    /* connection.run(
      `CREATE TABLE IF NOT EXISTS bookings (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              room_id INTEGER,
              date DATE NOT NULL,
              time_slot TEXT NOT NULL,
              user TEXT NOT NULL,
              FOREIGN KEY (room_id) REFERENCES rooms(id),
              UNIQUE (room_id, date, time_slot)
          )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        } else {
          console.log("Table created or already exists.");
        }
      }
    );
  
    const stmt1 = connection.prepare(
      `INSERT INTO bookings (room_id, date, time_slot, user) VALUES (?, ?, ?, ?)`
    );
    stmt1.run([1, "2024-12-31", "09:00-10:00", "Ivan Petersson"], (err) => {
      if (err) {
        console.error("Error inserting data:", err.message);
      } else {
        console.log("Data inserted successfully.");
      }
    });
    stmt1.finalize();
    */
});
/*connection.serialize(() => {
  connection.run(
    `CREATE TABLE IF NOT EXISTS rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            size INTEGER NOT NULL
        )`,
    (err) => {
      if (err) {
        console.error("Error creating table:", err.message);
      } else {
        console.log("Table created or already exists.");
      }
    }
  );

  const stmt1 = connection.prepare(
    `INSERT INTO rooms (name, size) VALUES (?, ?)`
  );
  stmt1.run(["Bill", 5], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  stmt1.finalize();

  const stmt2 = connection.prepare(
    `INSERT INTO rooms (name, size) VALUES (?, ?)`
  );
  stmt2.run(["Steve", 60], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  stmt2.finalize();
});*/
exports.default = connection;

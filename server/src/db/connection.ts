import sqlite3 from "sqlite3";

sqlite3.verbose();

const connection = new sqlite3.Database(
  "./rooms.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successfully connected to database");
  }
);

connection.run("PRAGMA foreign_keys = ON");

connection.serialize(() => {
  //Remove comments if needed
  /*
  //DROP TABLES

  connection.run("DROP TABLE bookings");

  connection.run("DROP TABLE rooms");

  //CREATE TABLES

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

  connection.run(
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

  //POPULATE ROOMS

  const room = connection.prepare(
    `INSERT INTO rooms (name, size) VALUES (?, ?)`
  );
  room.run(["Ada", 10], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  room.finalize();

  const room1 = connection.prepare(
    `INSERT INTO rooms (name, size) VALUES (?, ?)`
  );
  room1.run(["Bill", 5], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  room1.finalize();

  const room2 = connection.prepare(
    `INSERT INTO rooms (name, size) VALUES (?, ?)`
  );
  room2.run(["Steve", 60], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  room2.finalize();

  //POPULATE BOOKINGS

  const booking = connection.prepare(
    `INSERT INTO bookings (room_id, date, time_slot, user) VALUES (?, ?, ?, ?)`
  );
  booking.run([1, "2025-01-15", "09:00-10:00", "Ivan Petersson"], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  booking.finalize();

  const booking1 = connection.prepare(
    `INSERT INTO bookings (room_id, date, time_slot, user) VALUES (?, ?, ?, ?)`
  );
  booking1.run([2, "2025-01-15", "09:00-10:00", "Snurre Sprett"], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  booking1.finalize();

  const booking2 = connection.prepare(
    `INSERT INTO bookings (room_id, date, time_slot, user) VALUES (?, ?, ?, ?)`
  );
  booking2.run([3, "2025-01-15", "11:00-12:00", "Kungen"], (err) => {
    if (err) {
      console.error("Error inserting data:", err.message);
    } else {
      console.log("Data inserted successfully.");
    }
  });
  booking2.finalize();
  */
});
export default connection;

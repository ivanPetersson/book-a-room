//Edit url with your port number
export const fetchRooms = async () => {
  const response = await fetch("http://localhost:3200/rooms");
  return await response.json();
};

//Edit url with your port number
export const checkAvailability = async (roomName, date) => {
  const response = await fetch(
    "http://localhost:3200/bookings/available-timeslots",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: roomName, date: date }),
    }
  );
  if (!response.ok)
    throw new Error(`An error occurred: Status: ${response.status}`);
  return await response.json();
};

//Edit url with your port number
export const bookRoom = async ({ roomName, date, timeSlot, user }) => {
  try {
    const response = await fetch("http://localhost:3200/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomName, date, timeSlot, user }),
    });

    if (!response.ok) {
      throw new Error(`An error occurred: status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
};

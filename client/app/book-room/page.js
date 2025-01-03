"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Confirmation from "@/components/Confirmation";
import { bookRoom } from "@/service/services";

export default function BookRoom() {
  const searchParams = useSearchParams();
  const roomName = searchParams.get("roomName");
  const date = searchParams.get("date");
  const timeSlot = searchParams.get("timeSlot");

  const [user, setUser] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNameChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!roomName || !date || !timeSlot || !user) {
      alert("Vänlig fyll i alla uppgifter");
      return;
    }

    try {
      await bookRoom({ roomName, date, timeSlot, user });
      setShowConfirmation(true);
    } catch (error) {
      console.error("Booking failed: ", error);
    }

    setUser("");
  };

  return (
    <main>
      <div className="inner-content">
        <h1>Vem bokar?</h1>
        <form className="submit-name" onSubmit={handleSubmit}>
          <label htmlFor="name">Förnamn och efternamn</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Skriv in ditt fullständiga namn här"
            value={user}
            onChange={handleNameChange}
          />
          <button className="book-button" type="submit">
            Boka
          </button>
        </form>
        {showConfirmation && (
          <Confirmation onClose={() => setShowConfirmation(false)} />
        )}
      </div>
    </main>
  );
}

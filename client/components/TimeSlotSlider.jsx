import React from "react";
import { formatDate } from "@/utils/dateUtils";

export default function TimeSlotSlider({
  dates,
  timeslotsForRoom,
  onSelectTimeSlot,
}) {
  return (
    <div className="carousel-container">
      {dates.map((date) => (
        <div key={date} className="carousel-column">
          <h3>{formatDate(date)}</h3>
          {timeslotsForRoom[date] &&
            timeslotsForRoom[date].map((room, roomIndex) => (
              <div key={roomIndex}>
                <ul>
                  {room.timeslots.map((timeslot, timeslotIdex) => (
                    <li key={timeslotIdex}>
                      <button
                        className="timeslot-button"
                        onClick={() => onSelectTimeSlot(room, date, timeslot)}
                      >
                        <span>{room.roomName} &nbsp;</span>
                        <span>({room.roomSize})</span>
                        <br />
                        <span>{timeslot}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

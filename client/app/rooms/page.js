"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import TimeSlotSlider from "@/components/TimeSlotSlider";
import { fetchRooms, checkAvailability } from "@/service/services";
import { formatDate, calculateDates } from "@/utils/dateUtils";

const SMALL_SCREEN = 768;
const FIVE_DATES = 5;
const THREE_DATES = 3;

export default function Rooms() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [timeslotsForRoom, setTimeslotsForRoom] = useState({});
  const [selectedRooms, setSelectedRooms] = useState(new Set());
  const [dates, setDates] = useState(() =>
    calculateDates(window.innerWidth > SMALL_SCREEN ? FIVE_DATES : THREE_DATES)
  );
  const [bookingsRequest, setBookingsRequest] = useState({});

  const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);

  const changeDates = (direction) => {
    setDates((prevDates) =>
      prevDates.map((date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + direction);
        return newDate.toISOString().split("T")[0];
      })
    );
  };

  const getTimeSlotsForAllRooms = useCallback(async () => {
    try {
      const roomsData = await fetchRooms();
      setRooms(roomsData);

      const filteredRooms = roomsData.filter(
        (room) => selectedRooms.size === 0 || selectedRooms.has(room.id)
      );

      const roomsAndTimeslots = {};
      for (const date of dates) {
        const roomAndTimeslots = await Promise.all(
          filteredRooms.map(async (room) => {
            const timeslots = await checkAvailability(room.name, date);
            return { roomName: room.name, roomSize: room.size, timeslots };
          })
        );
        roomsAndTimeslots[date] = roomAndTimeslots;
      }

      setTimeslotsForRoom(roomsAndTimeslots);
    } catch (error) {
      console.error("Error: ", error);
    }
  }, [dates, selectedRooms]);

  const handleRoomSelection = (roomId) => {
    setSelectedRooms((prevSelectedRooms) => {
      const newSelectedRooms = new Set(prevSelectedRooms);
      if (newSelectedRooms.has(roomId)) {
        newSelectedRooms.delete(roomId);
      } else {
        newSelectedRooms.add(roomId);
      }
      return newSelectedRooms;
    });
  };

  const handleSelectTimeSlot = (room, date, timeSlot) => {
    setBookingsRequest({ roomName: room.roomName, date, timeSlot });
  };

  useEffect(() => {
    const handleResize = () => {
      const datesToShow =
        window.innerWidth > SMALL_SCREEN ? FIVE_DATES : THREE_DATES;
      setDates(calculateDates(datesToShow));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    getTimeSlotsForAllRooms();
  }, [dates, selectedRooms, getTimeSlotsForAllRooms]);

  return (
    <main>
      <div className="inner-content">
        <h1>Välj en tid</h1>
        <Dropdown
          rooms={rooms}
          selectedRooms={selectedRooms}
          onRoomSelection={handleRoomSelection}
          onSelectRooms={toggleDropdown}
          onDeselectRooms={() => setSelectedRooms(new Set())}
          isDropdownOpen={dropdownIsOpen}
        />
        <div className="date-navigation">
          <button
            onClick={() => changeDates(-1)}
            className="arrow-button left-arrow"
          >
            &#11207;
          </button>
          <p>
            {formatDate(dates[0]) + " - " + formatDate(dates[dates.length - 1])}
          </p>
          <button
            onClick={() => changeDates(1)}
            className="arrow-button right-arrow"
          >
            &#11208;
          </button>
        </div>
        <TimeSlotSlider
          dates={dates}
          timeslotsForRoom={timeslotsForRoom}
          onSelectTimeSlot={handleSelectTimeSlot}
        />
      </div>
      <div className="next-button-container">
        <Link
          className="next-button"
          href={{
            pathname: "/book-room",
            query: {
              roomName: bookingsRequest.roomName,
              date: bookingsRequest.date,
              timeSlot: bookingsRequest.timeSlot,
            },
          }}
          onClick={(event) => {
            if (
              !bookingsRequest.roomName ||
              !bookingsRequest.date ||
              !bookingsRequest.timeSlot
            ) {
              event.preventDefault();
              alert("Vänligen välj ett rum och en tid först.");
            }
          }}
        >
          Nästa
        </Link>
      </div>
    </main>
  );
}

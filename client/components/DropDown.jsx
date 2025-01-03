import React from "react";

export default function DropDown({
  rooms,
  selectedRooms,
  onRoomSelection,
  onSelectRooms,
  onDeselectRooms,
  isDropdownOpen,
}) {
  const numSelectedRooms = selectedRooms.size;

  return (
    <div>
      <button onClick={onSelectRooms} className="dropdown-menu-button">
        <span>
          {numSelectedRooms > 0 ? `${numSelectedRooms} valda rum` : "Mötesrum"}
        </span>{" "}
        &#11206;
      </button>
      {isDropdownOpen && (
        <form className="dropdown-content">
          {rooms.map((room) => (
            <div key={room.id} className="room-item">
              <label htmlFor={room.id} className="room-label">
                {room.name + " " + " (" + room.size + ")"}
              </label>
              <input
                type="checkbox"
                className="room-checkbox"
                id={room.id}
                checked={selectedRooms.has(room.id)}
                onChange={() => onRoomSelection(room.id)}
              />
            </div>
          ))}
          <button className="dropdown-button" onClick={onSelectRooms}>
            Välj
          </button>
          <button className="dropdown-button" onClick={onDeselectRooms}>
            Avmarkera
          </button>
        </form>
      )}
    </div>
  );
}

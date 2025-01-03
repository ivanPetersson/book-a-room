export default function Confirmation({ onClose }) {
  return (
    <div className="pop-up-window">
      <div className="pop-up-content">
        <p>Ditt rum är bokat!</p>
        <p>&#128522;</p>
        <button className="close-pop-up-button" onClick={onClose}>
          Stäng
        </button>
      </div>
    </div>
  );
}

export default function Seat({
  seat,
  isSelected,
  onSelect,
}) {
  return (
    <button
      onClick={() => onSelect(seat)}
      className={`p-3 rounded-lg font-medium transition ${
        isSelected
          ? "bg-green-500 text-white"
          : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {seat}
    </button>
  );
}
import CheatCard from "../CheatCard/CheatCard.jsx";

export default function CheatGrid({ cheats }) {
  if (cheats.length === 0) {
    return <p className="grid-empty">No cheat sheet items yet.</p>;
  }

  return (
    <div className="cheat-grid">
      {cheats.map((cheat) => (
        <CheatCard key={cheat.id} cheat={cheat} />
      ))}
    </div>
  );
}


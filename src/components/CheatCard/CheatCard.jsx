export default function CheatCard({ cheat }) {
  return (
    <article className="cheat-card" aria-labelledby={`cheat-${cheat.id}`}>
      <div className="card-meta">
        <span className="category-badge">{cheat.category}</span>
        <span className="level-badge">{cheat.level}</span>
      </div>

      <h3 id={`cheat-${cheat.id}`}>{cheat.title}</h3>
      <p>{cheat.summary}</p>

      <ul className="tag-list" aria-label={`${cheat.title} tags`}>
        {cheat.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}


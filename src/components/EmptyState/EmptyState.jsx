export default function EmptyState({ query }) {
  return (
    <div className="empty-state" role="status">
      <p className="eyebrow">No results</p>
      <h3>No cheat sheet items found</h3>
      <p>
        Nothing matches "{query}". Try a concept like props, state, list, event,
        or JSX.
      </p>
    </div>
  );
}


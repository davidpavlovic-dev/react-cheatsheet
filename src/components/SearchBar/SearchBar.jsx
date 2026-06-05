export default function SearchBar({ query, onQueryChange }) {
  return (
    <label className="search-control">
      <span className="placeholder-label">Search</span>
      <input
        className="search-input"
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search cheats, snippets, mistakes, or interview answers"
      />
    </label>
  );
}


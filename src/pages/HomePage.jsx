import AppLayout from "../components/AppLayout/AppLayout.jsx";
import CheatGrid from "../components/CheatGrid/CheatGrid.jsx";
import EmptyState from "../components/EmptyState/EmptyState.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { useCheatSearch } from "../hooks/useCheatSearch.js";

export default function HomePage({ cheats }) {
  const { query, results, resultCount, setQuery } = useCheatSearch(cheats);

  return (
    <AppLayout>
      <section className="toolbar" aria-label="Cheat sheet controls">
        <SearchBar query={query} onQueryChange={setQuery} />

        <div className="placeholder-control">
          <span className="placeholder-label">Filters</span>
          <div className="filter-row" aria-hidden="true">
            <span>All</span>
            <span>Basics</span>
            <span>Hooks</span>
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="cheat-grid-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Cheat sheet</p>
            <h2 id="cheat-grid-title">All cards</h2>
          </div>
          <span className="result-count">
            {resultCount} of {cheats.length} cards
          </span>
        </div>

        {resultCount > 0 ? (
          <CheatGrid cheats={results} />
        ) : (
          <EmptyState query={query} />
        )}
      </section>
    </AppLayout>
  );
}


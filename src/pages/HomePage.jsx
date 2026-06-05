import { useMemo, useState } from "react";

import AppLayout from "../components/AppLayout/AppLayout.jsx";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter.jsx";
import CheatGrid from "../components/CheatGrid/CheatGrid.jsx";
import EmptyState from "../components/EmptyState/EmptyState.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { useCheatSearch } from "../hooks/useCheatSearch.js";

const ALL_CATEGORIES = "All";

export default function HomePage({ cheats }) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const categories = useMemo(
    () => [
      ALL_CATEGORIES,
      ...Array.from(new Set(cheats.map((cheat) => cheat.category))).sort(),
    ],
    [cheats],
  );

  const categoryResults = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES) {
      return cheats;
    }

    return cheats.filter((cheat) => cheat.category === selectedCategory);
  }, [cheats, selectedCategory]);

  const { query, results, resultCount, setQuery } =
    useCheatSearch(categoryResults);

  return (
    <AppLayout>
      <section className="toolbar" aria-label="Cheat sheet controls">
        <SearchBar query={query} onQueryChange={setQuery} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
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


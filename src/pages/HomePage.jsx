import AppLayout from "../components/AppLayout/AppLayout.jsx";
import CheatGrid from "../components/CheatGrid/CheatGrid.jsx";

export default function HomePage({ cheats }) {
  return (
    <AppLayout>
      <section className="toolbar" aria-label="Cheat sheet controls">
        <div className="placeholder-control">
          <span className="placeholder-label">Search</span>
          <span className="placeholder-field">Search cheats</span>
        </div>

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
          <span className="result-count">{cheats.length} cards</span>
        </div>

        <CheatGrid cheats={cheats} />
      </section>
    </AppLayout>
  );
}


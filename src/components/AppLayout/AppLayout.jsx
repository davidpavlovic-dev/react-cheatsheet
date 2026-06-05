import CheatGrid from "../CheatGrid/CheatGrid.jsx";

export default function AppLayout({ cheats }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-container header-content">
          <p className="eyebrow">Personal React notes</p>
          <h1>React Cheat Sheet</h1>
          <p className="subtitle">
            React rules, examples, snippets, and interview answers in one
            searchable study workspace.
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="app-container">
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
        </div>
      </main>
    </div>
  );
}


export default function AppLayout() {
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
              <p className="eyebrow">Cheat sheet</p>
              <h2 id="cheat-grid-title">Cards</h2>
            </div>

            <div className="placeholder-grid" aria-hidden="true">
              <article className="placeholder-card">
                <span className="card-kicker">Basics</span>
                <h3>Components</h3>
                <p>Reusable UI pieces with their own props and rendering logic.</p>
              </article>
              <article className="placeholder-card">
                <span className="card-kicker">JSX</span>
                <h3>Rendering Rules</h3>
                <p>Short syntax notes and examples for writing React markup.</p>
              </article>
              <article className="placeholder-card">
                <span className="card-kicker">State</span>
                <h3>useState</h3>
                <p>Local state patterns for events, forms, and UI changes.</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


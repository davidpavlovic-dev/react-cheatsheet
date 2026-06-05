import { Link } from "react-router-dom";

export default function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-container header-content">
          <p className="eyebrow">Personal React notes</p>
          <h1>
            <Link className="home-link" to="/">
              React Cheat Sheet
            </Link>
          </h1>
          <p className="subtitle">
            React rules, examples, snippets, and interview answers in one
            searchable study workspace.
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="app-container">{children}</div>
      </main>
    </div>
  );
}


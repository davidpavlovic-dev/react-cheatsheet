import { Link, useParams } from "react-router-dom";

import AppLayout from "../components/AppLayout/AppLayout.jsx";
import CodeBlock from "../components/CodeBlock/CodeBlock.jsx";

export default function CheatDetailPage({ cheats }) {
  const { cheatId } = useParams();
  const cheat = cheats.find((item) => item.id === cheatId);

  if (!cheat) {
    return (
      <AppLayout>
        <section className="detail-page">
          <Link className="back-link" to="/">
            Back to all cards
          </Link>

          <div className="not-found-panel">
            <p className="eyebrow">Not found</p>
            <h2>Cheat sheet item not found</h2>
            <p>
              This route does not match an existing cheat sheet item. Go back to
              the grid and choose a card from the current data.
            </p>
          </div>
        </section>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <article className="detail-page">
        <Link className="back-link" to="/">
          Back to all cards
        </Link>

        <header className="detail-header">
          <div className="card-meta">
            <span className="category-badge">{cheat.category}</span>
            <span className="level-badge">{cheat.level}</span>
          </div>
          <h2>{cheat.title}</h2>
          <p>{cheat.summary}</p>

          <ul className="tag-list detail-tags" aria-label={`${cheat.title} tags`}>
            {cheat.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </header>

        <div className="detail-grid">
          <section className="detail-panel">
            <h3>When to use it</h3>
            <p>{cheat.whenToUse}</p>
          </section>

          <section className="detail-panel">
            <h3>What to do</h3>
            <ul className="detail-list">
              {cheat.do.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-panel">
            <h3>What not to do</h3>
            <ul className="detail-list">
              {cheat.dont.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="detail-section" aria-labelledby="code-snippets-title">
          <div className="detail-section-heading">
            <p className="eyebrow">Practical example</p>
            <h2 id="code-snippets-title">Code snippets</h2>
          </div>

          <div className="code-stack">
            {cheat.codeSnippets.map((snippet) => (
              <CodeBlock key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </section>

        <div className="detail-grid">
          <section className="detail-panel">
            <h3>Common mistake</h3>
            <p>{cheat.commonMistake}</p>
          </section>

          <section className="detail-panel">
            <h3>Interview question</h3>
            <p>{cheat.interviewQuestion}</p>
            <p className="answer-text">{cheat.interviewAnswer}</p>
          </section>

          <section className="detail-panel course-panel">
            <h3>Course reference</h3>
            <dl className="reference-list">
              <div>
                <dt>Course</dt>
                <dd>{cheat.courseReference.course}</dd>
              </div>
              <div>
                <dt>Project</dt>
                <dd>{cheat.courseReference.project}</dd>
              </div>
              <div>
                <dt>Folder</dt>
                <dd>{cheat.courseReference.repoFolder}</dd>
              </div>
              <div>
                <dt>Notes</dt>
                <dd>{cheat.courseReference.notes}</dd>
              </div>
            </dl>
          </section>
        </div>
      </article>
    </AppLayout>
  );
}


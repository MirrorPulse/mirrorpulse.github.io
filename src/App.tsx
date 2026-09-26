import './App.css'

const githubUrl = 'https://github.com/MirrorPulse'
const cfSharpUrl = 'https://github.com/MirrorPulse/CfSharp'

function App() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="MirrorPulse home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>MirrorPulse</span>
        </a>
        <a className="nav-link" href={githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Coming soon · building in public</p>
          <h1 id="hero-title">Infrastructure that keeps your files in rhythm.</h1>
          <p className="hero-lede">
            MirrorPulse is shaping dependable, observable foundations for software that moves
            data between the cloud and the devices people use every day.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/cfsharp/">
              Explore CfSharp <span aria-hidden="true">→</span>
            </a>
            <a className="button button-quiet" href={cfSharpUrl} target="_blank" rel="noreferrer">
              View the repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="signal-card" aria-label="MirrorPulse signal visualization">
          <div className="signal-orbit orbit-one" />
          <div className="signal-orbit orbit-two" />
          <div className="signal-core">
            <span className="core-pulse" />
            <span className="core-label">M / P</span>
          </div>
          <div className="signal-label label-top">stable paths</div>
          <div className="signal-label label-bottom">quiet complexity</div>
        </div>
      </section>

      <section className="project-grid" aria-label="Featured project">
        <article className="project-card project-card-featured">
          <div className="card-heading">
            <div>
              <p className="card-kicker">Featured project</p>
              <h2>CfSharp</h2>
            </div>
            <span className="card-badge">In development</span>
          </div>
          <p>
            A safe, idiomatic .NET surface for the Windows Cloud Files API, with durable state,
            explicit lifecycles, and complete native coverage.
          </p>
          <a className="card-link" href="/cfsharp/">
            Read the documentation <span aria-hidden="true">→</span>
          </a>
        </article>
        <article className="project-card project-card-muted">
          <p className="card-kicker">Next on the horizon</p>
          <h2>More signals soon</h2>
          <p>
            Small, focused tools for systems that should feel calm even when the network does not.
          </p>
          <a className="card-link" href={githubUrl} target="_blank" rel="noreferrer">
            Follow along <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} MirrorPulse Team</span>
        <span className="footer-separator" aria-hidden="true">•</span>
        <span>Thoughtful infrastructure, one pulse at a time.</span>
      </footer>
    </main>
  )
}

export default App

const fileTree = [
  {
    type: 'folder',
    name: 'src',
    children: [
      { type: 'file', name: 'App.jsx' },
      { type: 'file', name: 'main.jsx' },
      { type: 'file', name: 'styles.css' }
    ]
  },
  { type: 'file', name: 'package.json' },
  { type: 'file', name: 'README.md' },
  { type: 'file', name: '.gitignore' }
]

const recentProjects = [
  { name: 'landing-page-id', language: 'React', updated: '2 menit lalu' },
  { name: 'api-dashboard', language: 'Node.js', updated: '12 menit lalu' },
  { name: 'ai-assistant', language: 'Python', updated: '1 jam lalu' },
  { name: 'ecommerce-demo', language: 'Next.js', updated: 'Kemarin' }
]

const terminalLines = [
  '$ npm install',
  'added 182 packages in 4.2s',
  '$ npm run dev',
  'Local: http://localhost:3000',
  'ready in 1.1s'
]

const tabs = ['App.jsx', 'styles.css', 'package.json']

function FolderNode({ node }) {
  if (node.type === 'folder') {
    return (
      <div className="tree-node folder">
        <span className="node-name">{node.name}</span>
        <div className="tree-children">
          {node.children.map((child) => (
            <FolderNode key={child.name} node={child} />
          ))}
        </div>
      </div>
    )
  }

  return <div className="tree-node file">{node.name}</div>
}

function App() {
  return (
    <div className="workspace-shell">
      <aside className="sidebar-left">
        <div className="sidebar-brand">
          <div className="brand-badge">R</div>
          <span>Replit ID</span>
        </div>

        <button className="new-project-btn">+ Project baru</button>

        <div className="nav-section">
          <span className="nav-label">Workspace</span>
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Deployments</div>
          <div className="nav-item">Templates</div>
        </div>

        <div className="nav-section">
          <span className="nav-label">Recent</span>
          {recentProjects.map((project) => (
            <div key={project.name} className="project-pill">
              <div className="dot-indicator" />
              <div>
                <strong>{project.name}</strong>
                <span>{project.language}</span>
              </div>
              <small>{project.updated}</small>
            </div>
          ))}
        </div>
      </aside>

      <main className="workspace-main">
        <header className="topbar-app">
          <div className="project-meta">
            <span className="chip success">Running</span>
            <strong>landing-page-id</strong>
          </div>

          <div className="top-actions">
            <button className="btn-outline">Share</button>
            <button className="btn-primary">Deploy</button>
          </div>
        </header>

        <section className="content-grid">
          <aside className="files-panel">
            <div className="panel-header">
              <span>Files</span>
              <button className="mini-btn">+</button>
            </div>
            <div className="tree-wrap">
              {fileTree.map((node) => (
                <FolderNode key={node.name} node={node} />
              ))}
            </div>
          </aside>

          <section className="editor-panel">
            <div className="editor-tabs">
              {tabs.map((tab, index) => (
                <button key={tab} className={`tab ${index === 0 ? 'active' : ''}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="code-area">
              <pre>
                <code>{`import React from 'react';

export default function App() {
  return (
    <main className="page-shell">
      <header className="hero">
        <nav>
          <span>Replit Indonesia</span>
          <button>Mulai gratis</button>
        </nav>
        <section className="content">
          <h1>Bangun produk digital lebih cepat.</h1>
          <p>Workspace cloud untuk tim, startup, dan developer Indonesia.</p>
        </section>
      </header>
    </main>
  );
}`}</code>
              </pre>
            </div>
          </section>

          <aside className="right-panel">
            <div className="preview-box">
              <div className="preview-header">
                <span>Preview</span>
                <button className="mini-btn">⟳</button>
              </div>
              <div className="preview-window">
                <div className="preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-content">
                  <div className="preview-card">
                    <h3>Replit Indonesia</h3>
                    <p>Platform coding cloud modern untuk produk lokal.</p>
                    <button className="tiny-btn">Lihat demo</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-box">
              <div className="terminal-header">Terminal</div>
              <div className="terminal-body">
                {terminalLines.map((line, index) => (
                  <div key={line + index} className="terminal-line">{line}</div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default App

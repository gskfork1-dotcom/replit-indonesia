import { useEffect, useMemo, useState } from 'react'

const API = '/api'

const starterTemplate = {
  React: `import React from 'react'

export default function App() {
  return (
    <main className="page-shell">
      <h1>Halo dari Replit Indonesia</h1>
      <p>Project React Anda siap dikembangkan.</p>
    </main>
  )
}
`,
  'Node.js': `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Halo dari API Replit Indonesia' });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
`,
  Python: `print('Halo dari Replit Indonesia')
print('Project Python Anda siap dibuat.')
`
}

function makeStarterFile(language) {
  return {
    path: language === 'React' ? 'src/App.jsx' : language === 'Node.js' ? 'server.js' : 'main.py',
    content: starterTemplate[language] || starterTemplate.React
  }
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || 'Request gagal')
  }

  return data
}

function App() {
  const [authMode, setAuthMode] = useState('login')
  const [authForm, setAuthForm] = useState({
    name: '',
    email: 'demo@replit.id',
    password: 'demo123'
  })
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [me, setMe] = useState(null)
  const [projects, setProjects] = useState([])
  const [selectedProjectId, setSelectedProjectId] = useState('')
  const [newProject, setNewProject] = useState({ name: 'new-project', language: 'React' })
  const [editorValue, setEditorValue] = useState('')
  const [status, setStatus] = useState({ type: 'info', message: 'Siap membuat project baru.' })
  const [loading, setLoading] = useState(false)

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) || null,
    [projects, selectedProjectId]
  )

  useEffect(() => {
    if (!token) {
      setProjects([])
      setSelectedProjectId('')
      setMe(null)
      return
    }

    const load = async () => {
      try {
        const profile = await fetchJson(`${API}/me`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setMe(profile.user)

        const projectResponse = await fetchJson(`${API}/projects`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        setProjects(projectResponse.projects || [])
        if ((projectResponse.projects || []).length > 0 && !selectedProjectId) {
          setSelectedProjectId(projectResponse.projects[0].id)
        }
      } catch (error) {
        setStatus({ type: 'error', message: error.message })
        logout()
      }
    }

    load()
  }, [token])

  useEffect(() => {
    if (selectedProject && selectedProject.files && selectedProject.files[0]) {
      setEditorValue(selectedProject.files[0].content)
    }
  }, [selectedProject])

  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setMe(null)
    setProjects([])
    setSelectedProjectId('')
    setStatus({ type: 'info', message: 'Anda berhasil logout.' })
  }

  const handleAuthSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      const endpoint = authMode === 'login' ? 'login' : 'register'
      const payload = authMode === 'login'
        ? { email: authForm.email, password: authForm.password }
        : { name: authForm.name, email: authForm.email, password: authForm.password }

      const response = await fetchJson(`${API}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(payload)
      })

      localStorage.setItem('token', response.token)
      setToken(response.token)
      setStatus({ type: 'success', message: authMode === 'login' ? 'Login berhasil.' : 'Registrasi berhasil.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handleCreateProject = async () => {
    if (!token || !newProject.name.trim()) {
      setStatus({ type: 'error', message: 'Nama project wajib diisi.' })
      return
    }

    setLoading(true)

    try {
      const response = await fetchJson(`${API}/projects`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          name: newProject.name,
          language: newProject.language,
          description: `Project ${newProject.name} dibuat dengan ${newProject.language}`
        })
      })

      setProjects((previous) => [response.project, ...previous])
      setSelectedProjectId(response.project.id)
      setStatus({ type: 'success', message: `Project ${response.project.name} berhasil dibuat.` })
      setNewProject({ name: '', language: 'React' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  const saveFile = async () => {
    if (!selectedProject) return

    setLoading(true)

    try {
      await fetchJson(`${API}/projects/${selectedProject.id}/files`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          path: selectedProject.files[0].path,
          content: editorValue
        })
      })

      setStatus({ type: 'success', message: 'File berhasil disimpan.' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  const runProject = async () => {
    if (!selectedProject) return

    setLoading(true)

    try {
      const data = await fetchJson(`${API}/projects/${selectedProject.id}/run`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          path: selectedProject.files[0].path,
          content: editorValue
        })
      })

      setStatus({ type: 'success', message: 'Project berhasil dijalankan.' })
      setProjects((previous) => previous.map((project) =>
        project.id === selectedProject.id
          ? { ...project, lastRunOutput: data.output }
          : project
      ))
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setLoading(false)
    }
  }

  if (!token) {
    return (
      <div className="auth-shell">
        <div className="auth-card">
          <div className="auth-header">
            <div className="brand-mark">R</div>
            <div>
              <p className="eyebrow">Replit Indonesia</p>
              <h1>{authMode === 'login' ? 'Masuk ke workspace' : 'Buat akun baru'}</h1>
            </div>
          </div>

          <div className="auth-switch">
            <button className={authMode === 'login' ? 'switch active' : 'switch'} onClick={() => setAuthMode('login')}>
              Login
            </button>
            <button className={authMode === 'register' ? 'switch active' : 'switch'} onClick={() => setAuthMode('register')}>
              Register
            </button>
          </div>

          <form onSubmit={handleAuthSubmit} className="auth-form">
            {authMode === 'register' && (
              <label>
                Nama lengkap
                <input
                  value={authForm.name}
                  onChange={(event) => setAuthForm({ ...authForm, name: event.target.value })}
                  placeholder="Nama Anda"
                />
              </label>
            )}

            <label>
              Email
              <input
                type="email"
                value={authForm.email}
                onChange={(event) => setAuthForm({ ...authForm, email: event.target.value })}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={authForm.password}
                onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
                placeholder="••••••••"
              />
            </label>

            <button type="submit" className="primary-btn full" disabled={loading}>
              {loading ? 'Memproses...' : authMode === 'login' ? 'Masuk' : 'Daftar'}
            </button>
          </form>

          <div className="demo-box">
            <strong>Demo akun</strong>
            <p>Email: demo@replit.id</p>
            <p>Password: demo123</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="workspace-shell">
      <aside className="sidebar-left">
        <div className="sidebar-brand">
          <div className="brand-mark">R</div>
          <span>Replit ID</span>
        </div>

        <button className="primary-btn full small" onClick={handleCreateProject} disabled={loading}>
          + Project baru
        </button>

        <div className="project-create-row">
          <input
            value={newProject.name}
            onChange={(event) => setNewProject({ ...newProject, name: event.target.value })}
            placeholder="Nama project"
          />
          <select
            value={newProject.language}
            onChange={(event) => setNewProject({ ...newProject, language: event.target.value })}
          >
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className="nav-section">
          <span className="nav-label">Workspace</span>
          <div className="nav-item active">Dashboard</div>
          <div className="nav-item">Projects</div>
          <div className="nav-item">Deployments</div>
          <div className="nav-item">Templates</div>
        </div>

        <div className="nav-section">
          <span className="nav-label">Project terbaru</span>
          {projects.length === 0 ? (
            <div className="empty-projects">Belum ada project.</div>
          ) : (
            projects.map((project) => (
              <button
                key={project.id}
                className={selectedProjectId === project.id ? 'project-card active' : 'project-card'}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className="project-dot" />
                <div className="project-meta-block">
                  <strong>{project.name}</strong>
                  <small>{project.language}</small>
                </div>
              </button>
            ))
          )}
        </div>
      </aside>

      <main className="workspace-main">
        <header className="topbar-app">
          <div className="project-meta">
            <span className="chip success">Online</span>
            <strong>{selectedProject ? selectedProject.name : 'Belum memilih project'}</strong>
          </div>

          <div className="top-actions">
            <span className="user-tag">{me?.name || 'User'}</span>
            <button className="btn-outline" onClick={logout}>Keluar</button>
            <button className="btn-primary" onClick={runProject}>Deploy</button>
          </div>
        </header>

        <section className="content-grid">
          <aside className="files-panel">
            <div className="panel-header">
              <span>Files</span>
              <button className="mini-btn">+</button>
            </div>

            <div className="tree-wrap">
              {selectedProject?.files?.map((file) => (
                <button
                  key={file.path}
                  className={selectedProject.files[0].path === file.path ? 'tree-node file active' : 'tree-node file'}
                  onClick={() => setEditorValue(file.content)}
                >
                  {file.path}
                </button>
              )) || <div className="tree-node file">Belum ada file</div>}
            </div>
          </aside>

          <section className="editor-panel">
            <div className="editor-tabs">
              <button className="tab active">{selectedProject?.files?.[0]?.path || 'main.js'}</button>
              <button className="btn-outline small" onClick={saveFile}>Simpan</button>
            </div>

            <div className="code-area">
              <textarea
                value={editorValue}
                onChange={(event) => setEditorValue(event.target.value)}
                spellCheck={false}
              />
            </div>
          </section>

          <aside className="right-panel">
            <div className="preview-box">
              <div className="preview-header">
                <span>Preview</span>
                <button className="mini-btn" onClick={runProject}>⟳</button>
              </div>

              <div className="preview-window">
                <div className="preview-topbar">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="preview-content">
                  <div className="preview-card">
                    <h3>{selectedProject ? selectedProject.name : 'Project Anda'}</h3>
                    <p>{selectedProject ? selectedProject.description : 'Mulai dengan project baru.'}</p>
                    <button className="tiny-btn" onClick={runProject}>Jalankan</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="terminal-box">
              <div className="terminal-header">Output</div>
              <div className="terminal-body">
                {selectedProject?.lastRunOutput ? (
                  <pre>{selectedProject.lastRunOutput}</pre>
                ) : (
                  <div className="terminal-line">$ running project...</div>
                )}
              </div>
            </div>
          </aside>
        </section>
      </main>

      {status.message && <div className={`toast ${status.type}`}>{status.message}</div>}
    </div>
  )
}

export default App

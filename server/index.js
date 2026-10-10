@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #070d17;
  --bg-2: #0d1825;
  --panel: rgba(15, 23, 33, 0.95);
  --panel-soft: rgba(18, 29, 40, 0.9);
  --panel-border: rgba(148, 163, 184, 0.15);
  --text: #edf7ff;
  --muted: #9fb5c9;
  --primary: #6d76ff;
  --primary-strong: #5ad6ff;
  --success: #7fe4b2;
  --danger: #ff7a7a;
  --shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #050d16 0%, #091521 100%);
  color: var(--text);
}

button, input, select, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

input, select, textarea {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 0.8rem 0.9rem;
}

textarea {
  width: 100%;
  height: 100%;
  min-height: 500px;
  resize: none;
  padding: 20px;
  background: rgba(7, 12, 19, 0.9);
  border: 0;
  color: #dfeaf7;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 0.92rem;
  line-height: 1.7;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, rgba(109, 118, 255, 0.18), transparent 25%);
}

.auth-card {
  width: min(480px, calc(100% - 30px));
  background: rgba(13, 21, 30, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 28px 22px;
}

.auth-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  font-weight: 700;
  box-shadow: 0 12px 26px rgba(109, 118, 255, 0.4);
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.auth-header h1 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.04em;
}

.auth-switch {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 6px;
  margin: 20px 0;
}

.switch {
  background: transparent;
  border: 0;
  color: var(--muted);
  border-radius: 10px;
  padding: 0.75rem;
  font-weight: 600;
}

.switch.active {
  background: rgba(109, 118, 255, 0.14);
  color: var(--text);
  border: 1px solid rgba(109, 118, 255, 0.18);
}

.auth-form {
  display: grid;
  gap: 16px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-size: 0.9rem;
}

.primary-btn,
.btn-primary,
.btn-outline,
.switch,
.tiny-btn,
.mini-btn {
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.primary-btn,
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: white;
  border: 0;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
  box-shadow: 0 14px 24px rgba(109, 118, 255, 0.28);
}

.full {
  width: 100%;
}

.small {
  padding: 0.7rem 0.9rem;
}

.primary-btn:hover,
.btn-primary:hover,
.btn-outline:hover,
.switch:hover,
.tiny-btn:hover,
.mini-btn:hover {
  transform: translateY(-1px);
}

.demo-box {
  margin-top: 18px;
  padding: 14px 16px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  color: var(--muted);
}

.demo-box strong {
  display: block;
  margin-bottom: 6px;
  color: var(--text);
}

.workspace-shell {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: radial-gradient(circle at top, rgba(109, 118, 255, 0.14), transparent 25%);
}

.sidebar-left {
  width: 280px;
  background: rgba(11, 18, 24, 0.96);
  border-right: 1px solid var(--panel-border);
  padding: 18px 16px 20px;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  margin-bottom: 22px;
}

.project-create-row {
  display: grid;
  gap: 8px;
  margin: 14px 0 22px;
}

.nav-section {
  margin-top: 26px;
}

.nav-label {
  display: block;
  margin-bottom: 10px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.nav-item {
  border-radius: 10px;
  padding: 0.75rem 0.8rem;
  color: var(--muted);
  margin-bottom: 6px;
}

.nav-item.active {
  background: rgba(109, 118, 255, 0.12);
  border: 1px solid rgba(109, 118, 255, 0.18);
  color: var(--text);
}

.project-card {
  width: 100%;
  text-align: left;
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 10px;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  background: rgba(255,255,255,0.02);
  padding: 0.7rem 0.6rem;
  margin-bottom: 10px;
  color: var(--text);
}

.project-card.active {
  background: rgba(109, 118, 255, 0.12);
  border-color: rgba(109, 118, 255, 0.28);
}

.project-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7fe4b2;
}

.project-meta-block {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.project-meta-block strong {
  font-size: 0.9rem;
}

.project-meta-block small,
.empty-projects {
  color: var(--muted);
}

.workspace-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.topbar-app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 74px;
  padding: 0 20px;
  border-bottom: 1px solid var(--panel-border);
  background: rgba(10, 17, 24, 0.72);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.72rem;
  border: 1px solid transparent;
}

.chip.success {
  background: rgba(127, 228, 178, 0.12);
  border-color: rgba(127, 228, 178, 0.18);
  color: var(--success);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-tag {
  color: var(--muted);
  font-size: 0.9rem;
}

.btn-outline {
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  padding: 0.7rem 1rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 220px minmax(450px, 1.2fr) 340px;
  min-height: calc(100vh - 74px);
}

.files-panel,
.editor-panel,
.right-panel {
  min-width: 0;
}

.files-panel {
  background: rgba(14, 22, 30, 0.9);
  border-right: 1px solid var(--panel-border);
  padding: 18px 12px;
}

.panel-header,
.preview-header,
.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  color: var(--muted);
  font-weight: 600;
}

.mini-btn {
  width: 26px;
  height: 26px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  color: var(--text);
}

.tree-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tree-node {
  width: 100%;
  text-align: left;
  background: transparent;
  border: 0;
  color: var(--muted);
  padding: 0.5rem 0.45rem;
  border-radius: 8px;
}

.tree-node.file.active {
  background: rgba(109, 118, 255, 0.08);
  color: var(--text);
  border: 1px solid rgba(109, 118, 255, 0.12);
}

.editor-panel {
  border-right: 1px solid var(--panel-border);
  background: rgba(8, 14, 20, 0.9);
}

.editor-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--panel-border);
  background: rgba(255,255,255,0.02);
}

.tab {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  background: rgba(109, 118, 255, 0.08);
  border: 1px solid rgba(109, 118, 255, 0.18);
  color: var(--text);
  padding: 0.5rem 0.8rem;
  border-radius: 10px;
}

.code-area {
  height: calc(100% - 58px);
  overflow: hidden;
}

.right-panel {
  background: rgba(13, 19, 29, 0.8);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.preview-box,
.terminal-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--panel-border);
  border-radius: 18px;
  padding: 12px;
}

.preview-window {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  overflow: hidden;
  background: rgba(10, 18, 27, 0.9);
}

.preview-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.preview-topbar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: rgba(255,255,255,0.2);
}

.preview-content {
  min-height: 200px;
  display: grid;
  place-items: center;
  padding: 18px;
}

.preview-card {
  background: linear-gradient(180deg, rgba(109, 118, 255, 0.18), rgba(28, 35, 50, 0.9));
  border: 1px solid rgba(109, 118, 255, 0.22);
  border-radius: 18px;
  width: 100%;
  padding: 22px;
}

.preview-card h3 {
  margin: 0 0 8px;
}

.preview-card p {
  margin: 0 0 14px;
  color: var(--muted);
  line-height: 1.6;
}

.tiny-btn {
  padding: 0.55rem 0.9rem;
  border: 0;
  background: rgba(255,255,255,0.08);
  color: var(--text);
}

.terminal-body {
  background: rgba(4, 9, 13, 0.95);
  border-radius: 12px;
  min-height: 180px;
  padding: 14px;
  font-family: 'SFMono-Regular', Consolas, monospace;
  color: #dbeaf7;
  font-size: 0.82rem;
  line-height: 1.9;
}

.terminal-body pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.terminal-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toast {
  position: fixed;
  right: 22px;
  bottom: 20px;
  padding: 0.85rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(10,18,27,0.95);
  box-shadow: var(--shadow);
  color: var(--text);
  max-width: 320px;
}

.toast.success {
  border-color: rgba(127, 228, 178, 0.22);
  color: var(--success);
}

.toast.error {
  border-color: rgba(255, 122, 122, 0.22);
  color: var(--danger);
}

@media (max-width: 1100px) {
  .content-grid {
    grid-template-columns: 220px 1fr;
  }

  .right-panel {
    grid-column: 1 / -1;
    border-top: 1px solid var(--panel-border);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
}

@media (max-width: 820px) {
  .workspace-shell {
    flex-direction: column;
  }

  .sidebar-left {
    width: 100%;
    border-right: 0;
    border-bottom: 1px solid var(--panel-border);
  }

  .content-grid {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .files-panel, .editor-panel, .right-panel {
    border-right: 0;
    border-bottom: 1px solid var(--panel-border);
  }

  .right-panel {
    grid-template-columns: 1fr;
  }

  .topbar-app {
    padding: 12px 14px;
    gap: 12px;
    flex-wrap: wrap;
  }
}

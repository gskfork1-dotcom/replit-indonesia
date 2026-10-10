const stats = [
  { value: '3M+', label: 'pengembang aktif' },
  { value: '95%', label: 'waktu deploy lebih cepat' },
  { value: '900K+', label: 'project dibuat' }
]

const features = [
  {
    title: 'Workspace paling cepat',
    text: 'Tulis, jalankan, dan preview app tanpa setup rumit.'
  },
  {
    title: 'Kolaborasi real-time',
    text: 'Mengedit bersama tim, review code, dan mengirim update dengan cepat.'
  },
  {
    title: 'Deploy satu klik',
    text: 'Deploy ke internet dalam hitungan menit dengan infrastruktur siap pakai.'
  },
  {
    title: 'AI untuk coding',
    text: 'Dapatkan bantuan otomatis dalam menulis, debugging, dan menjelaskan kode.'
  }
]

const steps = [
  'Buat project baru dari template or start from scratch',
  'Kembangkan app dengan editor web yang powerful',
  'Deploy ke production dan bagikan ke tim atau publik'
]

const templates = [
  'Website landing page',
  'API Node.js',
  'Bot Discord',
  'Dashboard React',
  'E-commerce demo',
  'AI app starter'
]

const ecosystems = [
  'Frontend',
  'Backend',
  'Data',
  'AI',
  'Automation',
  'Mobile'
]

const testimonials = [
  {
    name: 'Rina P.',
    role: 'Product Engineer',
    quote: 'Bisa build dan deploy app tanpa setup seharian. Tim kami betah kerja di satu workspace.'
  },
  {
    name: 'Hafiz A.',
    role: 'Startup Founder',
    quote: 'Replit Indonesia terasa seperti IDE yang selalu siap saat ide datang. Proses demo jadi jauh lebih cepat.'
  },
  {
    name: 'Ayu N.',
    role: 'Mahasiswa & Freelancer',
    quote: 'Awalnya sederhana, tetapi terasa sangat lengkap untuk project kecil dan eksperimen teknologi.'
  }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Gratis',
    desc: 'Untuk belajar dan mulai eksperimen.',
    features: ['1 workspace', 'Template dasar', 'AI terbatas', 'Deploy preview']
  },
  {
    name: 'Pro',
    price: 'Rp 149.000',
    desc: 'Untuk developer yang serius membangun.',
    popular: true,
    features: ['Unlimited project', 'Deploy production', 'AI lengkap', 'Collab tim']
  },
  {
    name: 'Team',
    price: 'Rp 399.000',
    desc: 'Untuk startup dan tim yang membutuhkan scale.',
    features: ['Workspace tim', 'Shared billing', 'Access management', 'Priority support']
  }
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav">
          <div className="brand-wrap">
            <div className="brand-mark">R</div>
            <span>Replit Indonesia</span>
          </div>

          <nav className="main-nav">
            <a href="#product">Product</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
            <a href="#community">Community</a>
          </nav>

          <div className="nav-actions">
            <button className="ghost-btn">Masuk</button>
            <button className="primary-btn">Coba gratis</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Buat app. Jalankan. Deploy.</span>
              <h1>
                Platform coding cloud untuk <span>Indonesia</span> yang siap tumbuh bersama Anda.
              </h1>
              <p>
                Menulis code, menguji di browser, kolaborasi dengan tim, dan deploy produk tanpa setup yang melelahkan.
              </p>

              <div className="cta-row">
                <button className="primary-btn large">Mulai gratis</button>
                <button className="ghost-btn large">Lihat demo</button>
              </div>

              <div className="trust-row">
                {stats.map((item) => (
                  <div className="stat-badge" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-window">
                <div className="window-bar">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="window-content">
                  <div className="sidebar-mini">
                    <span className="active">app.js</span>
                    <span>server.js</span>
                    <span>db.json</span>
                  </div>

                  <div className="editor-panel">
                    <div className="editor-line"><span className="purple">const</span> app = <span className="green">'Replit Indonesia'</span>;</div>
                    <div className="editor-line"><span className="purple">const</span> startup = <span className="blue">buildFast</span>();</div>
                    <div className="editor-line"><span className="purple">const</span> users = <span className="yellow">300000</span>;</div>
                    <div className="editor-line">app.deploy({</div>
                    <div className="editor-line indent">region: <span className="green">'jakarta'</span>,</div>
                    <div className="editor-line indent">quality: <span className="green">'production'</span></div>
                    <div className="editor-line">});</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container">
            <p>Dipercaya oleh tim digital, startup, dan komunitas developer di Indonesia</p>
            <div className="logo-row">
              <span>Tokopedia</span>
              <span>Gojek</span>
              <span>Traveloka</span>
              <span>Blibli</span>
              <span>Jenius</span>
            </div>
          </div>
        </section>

        <section className="features-section" id="product">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Kenapa developer pilih kami</span>
              <h2>Semua kebutuhan coding dalam satu workspace.</h2>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-icon">✦</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="container workflow-grid">
            <div className="workflow-copy">
              <span className="eyebrow">Workflow yang lebih smooth</span>
              <h2>Mulai dari ide, lalu langsung jadi produk.</h2>
              <ul>
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>

            <div className="stats-panel">
              <div className="mini-card large">
                <div className="mini-label">Build time</div>
                <strong>2x lebih cepat</strong>
                <span>Landing page, API, AI app siap dianalisa.</span>
              </div>
              <div className="mini-card">
                <div className="mini-label">Uptime</div>
                <strong>99.9%</strong>
              </div>
              <div className="mini-card">
                <div className="mini-label">Tim</div>
                <strong>24/7</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="templates-section" id="templates">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">Template siap pakai</span>
              <h2>Bangun produk dengan konteks yang relevan.</h2>
            </div>

            <div className="template-pills">
              {templates.map((template) => (
                <span key={template}>{template}</span>
              ))}
            </div>

            <div className="ecosystem-row">
              {ecosystems.map((eco) => (
                <div className="ecosystem-card" key={eco}>{eco}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-section" id="community">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Komunitas dan feedback</span>
              <h2>Developer di Indonesia makin produktif.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <div className="quote-mark">“</div>
                  <p>{item.quote}</p>
                  <div className="person">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Harga yang jelas</span>
              <h2>Mulai dari belajar sampai scale.</h2>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="badge">Paling populer</span>}
                  <h3>{plan.name}</h3>
                  <div className="price-line">
                    <strong>{plan.price}</strong>
                    <span>/bulan</span>
                  </div>
                  <p>{plan.desc}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <button className={plan.popular ? 'primary-btn' : 'ghost-btn'}>{plan.popular ? 'Pilih Pro' : 'Mulai'}</button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-wrap footer-brand">
              <div className="brand-mark">R</div>
              <span>Replit Indonesia</span>
            </div>
            <p>Platform coding cloud untuk membangun produk digital yang lebih cepat.</p>
          </div>

          <div>
            <h4>Product</h4>
            <ul>
              <li>Workspace</li>
              <li>Templates</li>
              <li>Deploy</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

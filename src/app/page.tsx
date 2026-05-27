import styles from "./page.module.css";
import { 
  Server, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  ArrowRight,
  Mail,
  Cpu,
  Globe,
  Database
} from "lucide-react";

// Simple Icons SVG Paths
const GITHUB_SVG = "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";
const LINKEDIN_SVG = "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>NH.ARCHITECT</div>
        <nav className={styles.navLinks}>
          <a href="#pillars">Expertise</a>
          <a href="#work">Case Studies</a>
          <a href="#trajectory">Trajectory</a>
          <a href="mailto:nayanmoni318@gmail.com">Contact</a>
        </nav>
        <div className={styles.navLinks}>
          <a href="https://github.com/nayan100" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d={GITHUB_SVG} />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nayan-moni-hazarika-981022186/" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d={LINKEDIN_SVG} />
            </svg>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Nayan Moni Hazarika</div>
        <h1 className={styles.title}>Principal IoT Systems Architect & Tech Strategist</h1>
        <p className={styles.subtitle}>
          Engineering the Autonomy of Things at Scale. I bridge the gap between low-level hardware constraints and high-concurrency cloud scaling.
        </p>
        
        <div className={styles.badge}>
          <Zap size={18} fill="currentColor" />
          <span>Delivering enterprise-grade systems with <strong>70% greater efficiency</strong> via Agentic Workflows.</span>
        </div>

        <div className={styles.ctaGroup}>
          <a href="#work" className={styles.primaryBtn}>
            View Architecture Case Studies
          </a>
          <a href="https://www.linkedin.com/in/nayan-moni-hazarika-981022186/" className={styles.secondaryBtn}>
            Consultation / LinkedIn
          </a>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section id="pillars" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Strategic Pillars</h2>
          <p>Core competencies defined by industrial rigor and massive-scale engineering.</p>
        </div>
        
        <div className={styles.pillarsGrid}>
          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <Server size={24} />
            </div>
            <h3 className={styles.pillarTitle}>Massive Scale Infrastructure</h3>
            <p className={styles.pillarDesc}>
              Architecting high-concurrency backend ecosystems on AWS/GCP to support 100,000+ concurrent vehicles and 70,000+ real-time MQTT streams with 99.9% uptime.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={24} />
            </div>
            <h3 className={styles.pillarTitle}>Industrial Rigor & Compliance</h3>
            <p className={styles.pillarDesc}>
              Designing secure edge-to-cloud architectures that strictly adhere to MISRA C/C++ safety guidelines, ISA-95 for industrial control, and AIS-140 telematics.
            </p>
          </div>

          <div className={styles.pillarCard}>
            <div className={styles.iconWrapper}>
              <Terminal size={24} />
            </div>
            <h3 className={styles.pillarTitle}>AI-Native Process Innovation</h3>
            <p className={styles.pillarDesc}>
              Pioneering the AI-Native SDLC. Replacing manual code review and research cycles with AI-driven validation (Gemini CLI, Agentic Workflows) to reduce latency by 60%.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies / Work */}
      <section id="work" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Proof of Impact</h2>
          <p>Selected architectural implementations and "Clean-Room" reference projects.</p>
        </div>

        <div className={styles.workGrid}>
          <div className={styles.workCard}>
            <div className={styles.workContent}>
              <div className={styles.eyebrow}>Enterprise Reference</div>
              <h3 className={styles.workTitle}>AIS-140 Telemetry Architecture</h3>
              <p>Handling 100k+ concurrent IoT streams with sub-second latency and high availability.</p>
              <div className={styles.workTags}>
                <span className={styles.tag}>Kubernetes</span>
                <span className={styles.tag}>Go</span>
                <span className={styles.tag}>Kafka</span>
                <span className={styles.tag}>TimescaleDB</span>
              </div>
              <a href="https://github.com/nayan100/reference-ais140-scale" target="_blank" className={styles.workLink}>
                View Technical Spec <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.workVisual}>
              <Globe size={120} color="var(--accent-cloud)" opacity={0.2} />
            </div>
          </div>

          <div className={styles.workCard}>
            <div className={styles.workContent}>
              <div className={styles.eyebrow}>Industrial IoT</div>
              <h3 className={styles.workTitle}>Mining 4.0 Digital Twin (ISA-95)</h3>
              <p>Secure Edge-to-Cloud mesh network for hazardous environments featuring OTA and Secure Boot.</p>
              <div className={styles.workTags}>
                <span className={styles.tag}>ESP32 Mesh</span>
                <span className={styles.tag}>Yocto Project</span>
                <span className={styles.tag}>MQTT</span>
                <span className={styles.tag}>FreeRTOS</span>
              </div>
              <a href="https://github.com/nayan100/mining-4.0-digital-twin-poc" target="_blank" className={styles.workLink}>
                View Architecture <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.workVisual}>
              <Cpu size={120} color="var(--accent-iot)" opacity={0.2} />
            </div>
          </div>

          <div className={styles.workCard}>
            <div className={styles.workContent}>
              <div className={styles.eyebrow}>AI-Native SDLC</div>
              <h3 className={styles.workTitle}>Safety-Critical Automation</h3>
              <p>Deterministic 60-second audits and MISRA-C:2012 modernization of legacy firmware stacks.</p>
              <div className={styles.workTags}>
                <span className={styles.tag}>CLI Trace Proof</span>
                <span className={styles.tag}>MISRA C Audit</span>
                <span className={styles.tag}>IEC 62304</span>
                <span className={styles.tag}>AI-SDLC</span>
              </div>
              <a href="https://github.com/nayan100/safety-critical-automation" target="_blank" className={styles.workLink}>
                View Live Audit Trace <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.workVisual}>
              <Database size={120} color="var(--accent-ai)" opacity={0.2} />
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory */}
      <section id="trajectory" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Trajectory</h2>
          <p>A 5-year sprint from Engineer to VP, defining a career of rapid technical adaptation.</p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2025 - PRESENT</div>
            <h3 className={styles.timelineTitle}>Principal Hardware Architect & IIoT Lead</h3>
            <div className={styles.timelineCompany}>Vyomchara (IIT Dhanbad Incubated)</div>
            <div className={styles.timelineDesc}>
              Leading Mining 4.0 initiatives and Govt. 5G infrastructure.
              <ul>
                <li>Architected mesh-networked Digital Twins for hazardous mines.</li>
                <li>Implemented Secure Boot & HSM-based edge security.</li>
                <li>Pioneered AI-driven hardware/software test automation.</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineDate}>2020 - 2025</div>
            <h3 className={styles.timelineTitle}>VP of Technology</h3>
            <div className={styles.timelineCompany}>TrackX (formerly CarX.io)</div>
            <div className={styles.timelineDesc}>
              Scaled from Intern to VP, managing India's largest fleet telemetry engine.
              <ul>
                <li>Managed backend for 100k+ concurrent vehicles (99.9% uptime).</li>
                <li>Led AIS-140 regulatory compliance and government contracts.</li>
                <li>Owned P&L for Tech Dept, optimizing multi-million dollar OpEx/CapEx.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          © 2026 Nayan Moni Hazarika. Verified Principal IoT Architect.
        </div>
        <div className={styles.navLinks} style={{ display: 'flex' }}>
          <a href="https://github.com/nayan100" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d={GITHUB_SVG} />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nayan-moni-hazarika-981022186/" target="_blank" rel="noopener noreferrer">
            <svg role="img" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d={LINKEDIN_SVG} />
            </svg>
          </a>
          <a href="mailto:nayanmoni318@gmail.com"><Mail size={20} /></a>
        </div>
      </footer>
    </main>
  );
}

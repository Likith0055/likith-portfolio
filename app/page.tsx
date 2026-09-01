import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Cpu,
  Database,
  CloudCog,
  Workflow,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const skills = [
  {
    title: "Generative AI & Agents",
    icon: Workflow,
    items: ["LLMs", "Agentic AI", "RAG", "LangGraph", "MCP", "Tool Calling"],
  },
  {
    title: "ML & NLP",
    icon: Cpu,
    items: ["PyTorch", "Hugging Face", "NVIDIA NeMo", "Embeddings", "Reranking"],
  },
  {
    title: "Inference & Serving",
    icon: Gauge,
    items: ["TensorRT-LLM", "Triton", "vLLM", "CUDA", "FlashAttention"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: ["FastAPI", "gRPC", "Kafka", "Redis", "PostgreSQL", "Spark"],
  },
  {
    title: "Cloud & MLOps",
    icon: CloudCog,
    items: ["AWS", "Kubernetes", "Docker", "Terraform", "MLflow", "GitHub Actions"],
  },
  {
    title: "Evaluation & Reliability",
    icon: ShieldCheck,
    items: ["LLM Evaluation", "DeepEval", "Observability", "Guardrails", "Tracing"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">
          LP<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="navCta"
          href="mailto:likithchilakalapadiprabhu@gmail.com"
        >
          Let&apos;s talk
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroLeft">
          <p className="kicker">AI / ML ENGINEER</p>

          <h1 className="heroName">
            Likith
            <br />
            Chilakalapadi Prabhu
          </h1>

          <h2 className="heroRole">
            Building reliable AI systems from retrieval to inference.
          </h2>

          <p className="heroCopy">
            I design and build production-grade Generative AI, RAG, agentic
            workflows, LLM evaluation platforms, and scalable inference
            infrastructure.
          </p>

          <div className="techLine">
            Python · PyTorch · RAG · LangGraph · FastAPI · AWS · Kubernetes
          </div>

          <div className="heroActions">
            <a className="primaryBtn" href="#work">
              View Projects <ArrowRight size={17} />
            </a>

            <a
  className="secondaryBtn"
  href="/Likith_Chilakalapadi_Prabhu_Resume.pdf"
  download="Likith_Chilakalapadi_Prabhu_Resume.pdf"
>
              <Download size={17} />
              Resume
            </a>

            <a
              className="secondaryBtn"
              href="https://github.com/Likith0055"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>

            <a
              className="secondaryBtn"
              href="https://linkedin.com/in/likith-chilakalapadiprabhu/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="systemMap">
            <div className="systemNode node1">AGENT</div>
            <div className="systemNode node2">RAG</div>
            <div className="systemNode node3">LLM</div>
            <div className="systemNode node4">EVAL</div>

            <div className="systemCenter">
              <span>PRODUCTION</span>
              <strong>AI SYSTEM</strong>
              <span>RELIABLE · SCALABLE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="heroStats shell">
        <div>
          <strong>5+</strong>
          <span>Years in AI / ML</span>
        </div>

        <div>
          <strong>34%</strong>
          <span>Inference latency reduction</span>
        </div>

        <div>
          <strong>35K+</strong>
          <span>Enterprise users supported</span>
        </div>

        <div>
          <strong>20+</strong>
          <span>Evaluation configurations benchmarked</span>
        </div>
      </section>

      <section className="section shell aboutSection" id="about">
        <div className="aboutGrid">
          <div>
            <p className="kicker">ABOUT</p>

            <h2>
              Engineering AI systems that work beyond the demo.
            </h2>
          </div>

          <div className="aboutCopy">
            <p>
              I focus on the full production AI lifecycle: retrieval,
              orchestration, model serving, evaluation, observability, and
              infrastructure.
            </p>

            <p>
              My work centers on building AI systems that are not only accurate,
              but also measurable, scalable, reliable, and maintainable in
              real-world environments.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeading">
          <div>
            <p className="kicker">SELECTED WORK</p>

            <h2>
              Evaluation infrastructure for production LLM systems.
            </h2>
          </div>

          <p>
            The flagship project focuses on quality regression detection,
            experiment tracking, concurrency, latency, and repeatable LLM
            evaluation.
          </p>
        </div>

        <article className="featuredCard">
          <div className="featuredTop">
            <div>
              <p className="projectEyebrow">FLAGSHIP PROJECT</p>

              <h3>EvalForge</h3>

              <h4>LLM Evaluation & Regression Testing Platform</h4>
            </div>

            <div className="projectIndex">01</div>
          </div>

          <p className="projectDescription">
            Automated evaluation platform for benchmarking model, prompt, and
            retrieval configurations across correctness, groundedness, citation
            accuracy, hallucination rate, latency, and cost.
          </p>

          <div className="architecture">
            <div className="archStep">
              <span>01</span>
              <strong>Test Dataset</strong>
              <p>Versioned evaluation cases and expected behavior.</p>
            </div>

            <div className="archArrow">→</div>

            <div className="archStep">
              <span>02</span>
              <strong>LLM Pipeline</strong>
              <p>Model, prompt, and retrieval configurations.</p>
            </div>

            <div className="archArrow">→</div>

            <div className="archStep">
              <span>03</span>
              <strong>Evaluation</strong>
              <p>Deterministic and LLM-as-a-judge scoring.</p>
            </div>

            <div className="archArrow">→</div>

            <div className="archStep">
              <span>04</span>
              <strong>Regression Gate</strong>
              <p>Blocks releases when quality thresholds fail.</p>
            </div>
          </div>

          <div className="metrics">
            <div className="metric">
              <strong>93%</strong>
              <span>intentional regressions detected</span>
            </div>

            <div className="metric">
              <strong>72%</strong>
              <span>less manual evaluation effort</span>
            </div>

            <div className="metric">
              <strong>&lt;250ms</strong>
              <span>P95 API latency</span>
            </div>

            <div className="metric">
              <strong>50+</strong>
              <span>concurrent evaluation jobs</span>
            </div>
          </div>

          <div className="cardFooter">
            <div className="tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>PyTorch</span>
              <span>MLflow</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>AWS</span>
            </div>
            <span className="caseStudy">
             LLM Evaluation Platform
           </span>
          </div>
        </article>
      </section>

      <section className="section shell" id="experience">
        <div className="sectionHeading">
          <div>
            <p className="kicker">EXPERIENCE</p>

            <h2>
              Production AI from models to infrastructure.
            </h2>
          </div>
        </div>

        <div className="timeline">
          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineMeta">
              <strong>NVIDIA</strong>
              <span>Mar 2025 — Present</span>
            </div>

            <div>
              <h3>AI/ML Engineer</h3>

              <p>
                Production AI systems spanning multi-agent orchestration,
                enterprise RAG, distributed GPU inference, cloud-native
                deployment, LLMOps, and observability.
              </p>
            </div>
          </div>

          <div className="timelineItem">
            <div className="timelineDot" />

            <div className="timelineMeta">
              <strong>Accenture</strong>
              <span>Oct 2020 — Jul 2024</span>
            </div>

            <div>
              <h3>Machine Learning Engineer</h3>

              <p>
                Built AI/ML platforms involving RAG, scalable Python services,
                MLOps, event-driven data pipelines, cloud infrastructure, and
                enterprise integrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="sectionHeading">
          <div>
            <p className="kicker">TECHNICAL STACK</p>

            <h2>
              Focused on the production AI lifecycle.
            </h2>
          </div>
        </div>

        <div className="skillGrid">
          {skills.map(({ title, icon: Icon, items }) => (
            <article className="skillCard" key={title}>
              <Icon size={22} />

              <h3>{title}</h3>

              <p>{items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell credentials">
        <div>
          <p className="kicker">EDUCATION</p>

          <h3>Master of Science in Computer Science</h3>
          <p>University at Buffalo, New York</p>

          <h3 className="secondCredential">
            Bachelor of Technology in Software Engineering
          </h3>

          <p>Vellore Institute of Technology</p>
        </div>

        <div>
          <p className="kicker">CERTIFICATIONS</p>

          <ul>
            <li>NVIDIA Certified Associate — Generative AI LLMs</li>
            <li>AWS Certified Machine Learning Engineer — Associate</li>
            <li>Databricks Certified Generative AI Engineer Associate</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
          </ul>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="kicker">CONTACT</p>

        <h2>
          Interested in building production AI systems?
        </h2>

        <p>
          Open to AI/ML engineering opportunities and technically ambitious
          teams.
        </p>

        <div className="heroActions">
          <a
            className="primaryBtn"
            href="mailto:likithchilakalapadiprabhu@gmail.com"
          >
            <Mail size={17} />
            Email me
          </a>

          <a
            className="secondaryBtn"
            href="https://linkedin.com/in/likith-chilakalapadiprabhu/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Likith Chilakalapadi Prabhu</span>
        <span>AI / ML Engineer</span>
      </footer>
    </main>
  );
}
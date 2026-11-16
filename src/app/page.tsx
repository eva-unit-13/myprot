import { certifications, education, profile, projects, skills } from "@/data/resume";

const nav = ["about", "skills", "projects", "education"];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-12">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted">{children}</span>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-semibold">
            Aman<span className="text-accent">.</span>
          </a>
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map((n) => (
              <li key={n}>
                <a href={`#${n}`} className="capitalize hover:text-foreground">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="mb-3 font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-muted">
            Python · Django · FastAPI · MongoDB · Machine Learning — based in {profile.location}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 dark:text-black"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-card"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-card"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.summary}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-3 font-semibold">{s.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent"
              >
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <ul className="mt-3 flex-1 list-disc space-y-2 pl-5 text-sm text-muted">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-xs text-accent">
                      #{t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <ol className="relative space-y-8 border-l border-border pl-6">
            {education.map((e) => (
              <li key={e.degree} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-accent">{e.school}</p>
                <p className="text-sm text-muted">
                  {e.date} · {e.place}
                </p>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 mb-4 font-semibold">Certifications</h3>
          <ul className="grid gap-4 sm:grid-cols-3">
            {certifications.map((c) => (
              <li key={c.title} className="rounded-xl border border-border bg-card p-4">
                <p className="font-medium">{c.title}</p>
                {c.issuer && <p className="mt-1 text-sm text-muted">{c.issuer}</p>}
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer id="contact" className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© {profile.name}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
              {profile.phone}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

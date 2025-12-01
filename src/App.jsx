import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top navigation */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold tracking-[0.18em] uppercase">
              EX
            </div>
            <div className="hidden text-xs font-medium text-slate-500 sm:block">
              Esther L Xu · Portfolio
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-slate-900 transition-colors">
              Work
            </a>
            <a href="#resume" className="hover:text-slate-900 transition-colors">
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-sky-500 px-3 py-1 text-xs font-medium text-sky-600 hover:bg-sky-50 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Hero / Landing */}
        <section className="flex flex-col gap-10 border-b border-slate-200 pb-16 pt-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">
              Portfolio · Product / UX Design
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Esther L Xu
            </h1>
            <p className="text-sm font-medium text-sky-700">
              Cognitive Science, Design & Interaction @ UC San Diego
            </p>
            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              I'm Esther, a designer with a background in Design, Art, and Cognitive Science.
              I'm passionate about visual and emotional design and building products that bridge
              digital and physical realms.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <a
                href="#work"
                className="rounded-full bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 transition-colors"
              >
                View selected work
              </a>
              <a
                href="#resume"
                className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="mt-4 w-full max-w-xs md:mt-0">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Currently</span>
                <span className="rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                  Open to opportunities
                </span>
              </div>
              <div className="mt-4 space-y-3 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Location</span>
                  <span>San Diego · Bay Area</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Focus</span>
                  <span>UX / Product Design</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Background</span>
                  <span>Design · Art · CogSci</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                About
              </h2>
            </div>
            <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-slate-700">
              <p>
                I'm Esther, a designer with a background in Design, Art, and Cognitive Science.
                I'm passionate about visual and emotional design and building products that bridge
                digital and physical realms.
              </p>
              <p>
                At UC San Diego, I study Cognitive Science with a specialization in Design and
                Interaction, which lets me combine human-centered research with visual storytelling.
                I care deeply about how products feel, not just how they look, and how small design
                details can shape emotion, memory, and behavior.
              </p>
              <p>
                Outside of class, I love experimenting with layouts, typography, and motion,
                and I&apos;m always collecting small moments from everyday life as inspiration for
                future projects.
              </p>
            </div>
          </div>
        </section>

        {/* Work / Case Studies */}
        <section id="work" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Work
              </h2>
            </div>

            <div className="max-w-2xl space-y-6">
              <p className="text-sm text-slate-600">
                A few projects I&apos;ve been working on. I&apos;ll add full case studies with
                process, prototypes, and reflections.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Case Study · 01 – Netswitch / DiD */}
                <a
                  href="#did-case-study"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-600">
                      Case Study · 01
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Defense-in-Depth web application
                    </h3>
                    <p className="text-xs text-slate-600">
                      Translating a complex cybersecurity framework into an interactive pathway
                      inspired by CyberSeek to help non-technical leaders understand risk.
                    </p>
                  </div>
                  <span className="mt-4 inline-flex w-max items-center gap-1 text-xs font-medium text-slate-700 group-hover:text-sky-700">
                    <span>View case study</span>
                    <span className="text-[10px]">↗</span>
                  </span>
                </a>

                {/* Case Study · 02 – Booking App Research */}
                <a
                  href="#booking-case-study"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-600">
                      Case Study · 02
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Hair Stylist Booking App UX Research
                    </h3>
                    <p className="text-xs text-slate-600">
                      User research and opportunity discovery for improving booking experiences
                      for stylists and clients.
                    </p>
                  </div>
                  <span className="mt-4 inline-flex w-max items-center gap-1 text-xs font-medium text-slate-700 group-hover:text-sky-700">
                    <span>View case study</span>
                    <span className="text-[10px]">↗</span>
                  </span>
                </a>

                {/* Case Study · 03 – MelodyBloom */}
                <a
                  href="#melodybloom-case-study"
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-600">
                      Case Study · 03
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900">
                      MelodyBloom Summer Drop & Brand Refresh
                    </h3>
                    <p className="text-xs text-slate-600">
                      Visual identity, campaign design, and website updates for a renewable
                      fashion brand with designers across CA, Ireland, and Korea.
                    </p>
                  </div>
                  <span className="mt-4 inline-flex w-max items-center gap-1 text-xs font-medium text-slate-700 group-hover:text-sky-700">
                    <span>View case study</span>
                    <span className="text-[10px]">↗</span>
                  </span>
                </a>
              </div>

              {/* NOTE: When you&apos;re ready, replace each card above with your full case study
                  layout (overview, role, tools, process, outcomes). */}
            </div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Resume
              </h2>
            </div>

            <div className="max-w-2xl space-y-5 text-sm text-slate-700">
              <p>
                You can download my latest resume or reach out if you&apos;d like a version
                tailored to a specific role or team.
              </p>
              <a
                href="/esther-xu-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 transition-colors"
              >
                <span>Download resume</span>
                <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Defense-in-Depth Case Study */}
        <section id="did-case-study" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <aside className="md:w-1/3 space-y-6 text-xs text-slate-600">
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Case Study · Defense-in-Depth
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Building an interactive pathway to make cybersecurity risk tangible for
                  small and mid-sized businesses.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Role</p>
                  <p className="mt-1 text-xs text-slate-700">UX / Product Designer</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Team</p>
                  <p className="mt-1 text-xs text-slate-700">
                    CEO (Stanley Li), Design intern (me), Design partner (Ellen),
                    Strategy liaison (Sena)
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Timeline</p>
                  <p className="mt-1 text-xs text-slate-700">10 weeks · Summer 2025</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Tools</p>
                  <p className="mt-1 text-xs text-slate-700">Figma, Miro, Google Docs, Keynote</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">My contributions</p>
                <ul className="space-y-1 text-xs list-disc pl-4">
                  <li>Interpreted the CRG Defense-in-Depth matrix into user-friendly language.</li>
                  <li>Created the information architecture and page layout for the web app.</li>
                  <li>Designed low- to mid-fidelity wireframes inspired by the CyberSeek pathway.</li>
                  <li>Documented interaction patterns for developers to implement later.</li>
                </ul>
              </div>
            </aside>

            <div className="md:w-2/3 space-y-10 text-sm leading-relaxed text-slate-700">
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Overview</h3>
                <p>
                  Netswitch helps small and mid-sized businesses understand and manage cyber risk,
                  but most of their clients are non-technical leaders who feel overwhelmed by
                  jargon-heavy dashboards and reports. During my internship, I partnered with the
                  CEO to design an interactive web experience that explains Netswitch&apos;s
                  Defense-in-Depth (DiD) framework in a way that feels as intuitive as the
                  CyberSeek career pathway.
                </p>
                <p>
                  The goal was not to ship production code, but to define the structure, content,
                  and interaction patterns so a professional developer could later build a custom
                  WordPress plugin around our design.
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900">Problem</h3>
                  <p>
                    The existing CRG materials clearly described the six pillars of Defense-in-Depth
                    (Discovery, Defense, Asset Protection, Governance, Risk Mitigation, and Business
                    Continuity), but they lived in static PDFs and slides that were hard to navigate
                    and disconnected from day-to-day decision making.
                  </p>
                  <p>
                    SMB leaders needed a way to see how their pain points mapped to concrete
                    controls and services, without reading a dense matrix or learning security
                    vocabulary first.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900">Outcome</h3>
                  <p>
                    I designed an interactive pathway concept where each card represents a common
                    business problem and reveals the related DiD pillars and services when selected.
                    The final deliverable was a clickable wireframe and a design spec handoff
                    that detailed layout, states, and content rules for future development.
                  </p>
                  <p>
                    This gave the team a concrete artifact to align marketing, sales, and
                    engineering around a shared vision of the CRG Defense-in-Depth microsite.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">Process</h3>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">01 · Understand</h4>
                  <p>
                    I started by studying the CyberSeek pathway to understand how it uses spatial
                    layout, color, and interaction to make a complex system feel approachable.
                    In parallel, I reviewed the CRG Defense-in-Depth matrix and internal docs to
                    learn how Netswitch currently talks about risk, controls, and business outcomes.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">02 · Translate the matrix</h4>
                  <p>
                    Next, I worked with the team to cluster the most important SMB pain points and
                    map them to the six DiD pillars. I rewrote technical statements into
                    plain-language problem cards (for example, "False sense of security" or
                    "Complexity & overwhelm") and paired each with a short, benefits-focused
                    description that business owners could quickly scan.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">03 · Design the pathway</h4>
                  <p>
                    Using Figma, I explored variations of a horizontal pathway that mirrored the
                    CyberSeek layout but adapted it to Netswitch&apos;s content. Each column represented
                    a DiD pillar, and each row grouped related business problems. Hover and tap
                    states revealed more detail, including service descriptions and example
                    scenarios.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">04 · Prepare for development</h4>
                  <p>
                    Finally, I documented interaction rules (how cards expand, how connectors
                    animate, what changes on smaller screens) and captured content guidelines so the
                    CEO and future developer could keep the experience consistent as they scaled
                    the microsite. This documentation was handed off along with the clickable
                    prototype.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">What I learned</h3>
                <p>
                  This project taught me how to translate dense, technical frameworks into visual
                  stories that feel human and grounded in real problems. I also learned how to
                  design with implementation constraints in mind, thinking ahead to how a developer
                  would fetch data, generate cards, and keep SVG relationships responsive inside a
                  WordPress plugin.
                </p>
                <p>
                  Most importantly, it reinforced that good UX for expert domains isn&apos;t about
                  hiding complexity, but revealing just enough of the system at the right time so
                  people can make confident decisions.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Booking App Case Study */}
        <section id="booking-case-study" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <aside className="md:w-1/3 space-y-6 text-xs text-slate-600">
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Case Study · Booking App Research
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Understanding stylist and client needs to inform a better booking experience.
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Role</p>
                <p className="mt-1 text-xs text-slate-700">UX Researcher</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Timeline</p>
                <p className="mt-1 text-xs text-slate-700">3 weeks · Spring 2025</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Methods</p>
                <p className="mt-1 text-xs text-slate-700">Surveys · Interviews · Thematic synthesis</p>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">My contributions</p>
                <ul className="space-y-1 text-xs list-disc pl-4">
                  <li>Defined research problem + objectives.</li>
                  <li>Conducted interviews with stylists + clients.</li>
                  <li>Identified pain points and opportunity areas.</li>
                  <li>Synthesized themes to guide product direction.</li>
                </ul>
              </div>
            </aside>
            <div className="md:w-2/3 space-y-10 text-sm leading-relaxed text-slate-700">
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Overview</h3>
                <p>
                  This research project explored what makes a booking app enjoyable and efficient for
                  hairstylists and their clients. The goal was to uncover core needs, frustrations,
                  and nonnegotiables to inform the direction of a future booking app.
                </p>
              </section>
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Problem</h3>
                <p>
                  Stylists struggle with cancellations, inconsistent UI, poor payment integration,
                  and difficulty managing availability. Clients struggle with unclear service
                  descriptions, hidden fees, and confusing booking flows.
                </p>
              </section>
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Methods</h3>
                <p>
                  I conducted surveys and interviews with stylists and clients to understand pain
                  points, platform preferences, and unmet needs.
                </p>
              </section>
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Key Insights</h3>
                <ul className="space-y-2 list-disc pl-4 text-xs">
                  <li>Stylists need customizable availability, cancellation enforcement, and easy payment tools.</li>
                  <li>Clients want transparent pricing, clean UI, and fast appointment confirmation.</li>
                  <li>Both groups want fewer steps and clearer communication.</li>
                </ul>
              </section>
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Opportunities</h3>
                <ul className="space-y-2 list-disc pl-4 text-xs">
                  <li>Simplified booking flow with clearer service add-ons.</li>
                  <li>Smart availability with buffer time recommendations.</li>
                  <li>Reliable reminders and transparent cancellation rules.</li>
                </ul>
              </section>
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">What I learned</h3>
                <p>
                  This project strengthened my UX research process—structuring interviews,
                  synthesizing qualitative data, and translating insights into product opportunities.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* MelodyBloom Case Study */}
        <section id="melodybloom-case-study" className="border-b border-slate-200 py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <aside className="md:w-1/3 space-y-6 text-xs text-slate-600">
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Case Study · MelodyBloom
                </h2>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Designing the Summer Drop campaign identity and refreshing key brand touchpoints
                  for a global renewable fashion brand.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Role</p>
                  <p className="mt-1 text-xs text-slate-700">Visual Designer · UX Contributor</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Team</p>
                  <p className="mt-1 text-xs text-slate-700">
                    MelodyBloom founders, social team (Shaun & Roselin), designers, and media team
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Timeline</p>
                  <p className="mt-1 text-xs text-slate-700">6 weeks · Spring 2025</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Tools</p>
                  <p className="mt-1 text-xs text-slate-700">Figma, Adobe Illustrator, Notion, Wix</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">My contributions</p>
                <ul className="space-y-1 text-xs list-disc pl-4">
                  <li>Created the Summer Drop hero graphic and campaign visual direction.</li>
                  <li>Redesigned website sections like the Summer Drop highlight and team story.</li>
                  <li>Explored logo directions based on brand goals and constraints.</li>
                  <li>Reviewed basic social + Wix metrics to inform audience and content focus.</li>
                </ul>
              </div>
            </aside>

            <div className="md:w-2/3 space-y-10 text-sm leading-relaxed text-slate-700">
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Overview</h3>
                <p>
                  MelodyBloom is a renewable fashion brand with designers in California, Ireland,
                  and Korea. With a Summer Drop and an upcoming fashion show, the team wanted a more
                  polished digital presence: a campaign identity that matched their denim, brown,
                  and pastel green palette, and a website that felt as thoughtful as their clothes.
                </p>
                <p>
                  I joined as a design contributor to help clarify the Summer Drop visual direction,
                  refresh key website elements, and support the team&apos;s goal of growing online
                  reach before the show.
                </p>
              </section>

              <section className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900">Problem</h3>
                  <p>
                    MelodyBloom&apos;s garments had a strong point of view, but the visuals across
                    their flyers, website, and social media felt inconsistent. The existing flyer
                    was image-heavy, the website didn&apos;t highlight the team or upcoming drops,
                    and metrics weren&apos;t being used to shape content strategy.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900">Outcome</h3>
                  <p>
                    I delivered a set of updated poster layouts, a Summer Drop hero graphic,
                    recommendations for a more detailed website structure, and a simple metrics
                    summary the team could use to focus on their most engaged audience segments.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-900">Process</h3>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">01 · Discover</h4>
                  <p>
                    I started by reviewing meeting notes, their current Wix site, Instagram feed,
                    and existing campaign flyers. I noted strengths (community-driven storytelling,
                    unique silhouettes) and gaps (unclear hierarchy, inconsistent typography,
                    limited emphasis on sustainability and team story).
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">02 · Explore</h4>
                  <p>
                    I built moodboards and color studies around denim blues, earthy browns, and
                    pastel greens, leaning into a soft vintage aesthetic. I also sketched alternate
                    flyer compositions that simplified imagery and focused on a clearer message:
                    what the Summer Drop is, when it&apos;s happening, and why it&apos;s special.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">03 · Design</h4>
                  <p>
                    In Figma, I created a hero graphic system that could flex across stories, feed
                    posts, and printed assets. For the website, I proposed new sections—like a
                    &quot;Meet the Team&quot; strip and a featured Summer Drop area—to bring the
                    brand&apos;s personality and upcoming collection forward.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900">04 · Iterate</h4>
                  <p>
                    After sharing concepts with the team, I tweaked hierarchy, spacing, and color
                    balance to keep the visuals aligned with their vintage yet playful tone. I also
                    summarized simple next steps around data—like watching saves and shares on
                    specific posts—to guide future creative decisions.
                  </p>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">What I learned</h3>
                <p>
                  This project reinforced how much brand perception is shaped by the details: type
                  choices, color balance, and how information is layered. It also helped me practice
                  connecting visual design decisions to growth goals, collaborating closely with a
                  small team that balances creativity, logistics, and marketing.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <div className="flex flex-col gap-6 border border-slate-200 bg-slate-50/60 px-6 py-7 rounded-3xl md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-slate-900">Let&apos;s connect</h2>
              <p className="text-xs text-slate-600 max-w-md">
                I&apos;m always happy to chat about design, cognitive science, internships, or
                potential collaborations.
              </p>
            </div>
            <div className="space-y-1 text-right text-xs md:text-left md:text-xs">
              <p className="text-slate-500">Email</p>
              <a
                href="mailto:elx001@ucsd.edu"
                className="font-medium text-sky-700 hover:underline break-all"
              >
                elx001@ucsd.edu
              </a>
            </div>
          </div>

          <footer className="mx-auto mt-8 flex max-w-5xl items-center justify-between pb-6 text-[11px] text-slate-400">
            <span>© {new Date().getFullYear()} Esther L Xu</span>
            <span>Designed with intention and ocean blue accents.</span>
          </footer>
        </section>
      </main>
    </div>
  );
}




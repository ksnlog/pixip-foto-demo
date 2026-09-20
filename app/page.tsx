"use client";

import { useEffect, useRef, useState } from "react";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const serif = "font-[family-name:var(--font-fraunces)]";

const portfolio = [
  {
    title: "The Wedding Story",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1754782915524-714d8534a5df?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "A Moment Together",
    category: "Couples",
    image:
      "https://images.unsplash.com/photo-1719857646787-38c9c5f79312?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "The Bride",
    category: "Bridal Portrait",
    image:
      "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Forever Begins",
    category: "Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Celebration",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1574017144578-85168ddb5040?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Quiet Emotions",
    category: "Candid",
    image:
      "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?auto=format&fit=crop&w=1400&q=85",
  },
];

const services = [
  {
    title: "Wedding Photography",
    text: "Authentic moments, emotions and details documented with a candid, contemporary approach.",
    image:
      "https://images.unsplash.com/photo-1679937698873-6065742c8d32?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Pre-Wedding",
    text: "Personalised sessions built around your personality, your relationship and the story you want told.",
    image:
      "https://images.unsplash.com/photo-1727430256509-0f897d6f4765?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cinematography",
    text: "Moving images crafted with atmosphere, restraint and a cinematic sense of pacing.",
    image:
      "https://images.unsplash.com/photo-1633104502699-b2ecf0fee294?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wedding Films",
    text: "Films that bring back the sounds, the emotion and the small unrepeatable moments of your day.",
    image:
      "https://images.unsplash.com/photo-1722952934708-749c22eb2e58?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Portraits",
    text: "Natural, elegant portraits with an editorial feel and a timeless, understated character.",
    image:
      "https://images.unsplash.com/photo-1727430228383-aa1fb59db8bf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Family Celebrations",
    text: "From Annaprasan to maternity and family milestones, we keep the moments that matter.",
    image:
      "https://images.unsplash.com/photo-1587271449604-04bb40332709?auto=format&fit=crop&w=900&q=80",
  },
];

const reviews = [
  {
    name: "Kapil",
    text: "Really good photography and good job. I highly recommend this team.",
  },
  {
    name: "Monash",
    text: "Excellent photographer. They capture your memorable moments flawlessly.",
  },
  {
    name: "Shrikant",
    text: "Reliable wedding photographer. Very nice work and excellent quality.",
  },
];

const navLinks = [
  { href: "#stories", label: "Stories" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#awards", label: "Awards" },
  { href: "#reviews", label: "Reviews" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const servicesRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleServicesMouseMove = (e) => {
    const rect = servicesRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <main
      className={`${fraunces.variable} ${inter.variable} font-[family-name:var(--font-inter)] bg-[#F6F1E7] text-[#211C18] antialiased`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background: #7a2432;
          color: #f6f1e7;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        .grain::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 60;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        @keyframes kenburns {
          from {
            transform: scale(1.02);
          }
          to {
            transform: scale(1.13);
          }
        }
        .kenburns {
          animation: kenburns 16s ease-out forwards;
        }
        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="grain" />

      {/* NAVIGATION */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-[#F6F1E7]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#home"
            className={`${serif} text-lg tracking-[0.08em] transition-colors ${
              scrolled ? "text-[#211C18]" : "text-white"
            }`}
          >
            Pixip <span className="italic font-light">Foto</span>
          </a>

          <div
            className={`hidden items-center gap-9 text-[13px] transition-colors md:flex ${
              scrolled ? "text-[#211C18]/70" : "text-white/85"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition hover:opacity-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setShowForm(true)}
            className={`hidden rounded-full px-6 py-3 text-[13px] transition md:block ${
              scrolled
                ? "bg-[#211C18] text-[#F6F1E7] hover:bg-[#7A2432]"
                : "border border-white/50 text-white hover:bg-white hover:text-[#211C18]"
            }`}
          >
            Check availability
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-6 transition ${
                scrolled ? "bg-[#211C18]" : "bg-white"
              } ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 transition ${
                scrolled ? "bg-[#211C18]" : "bg-white"
              } ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </nav>

        {menuOpen && (
          <div className="relative bg-[#211C18] px-6 py-8 text-white md:hidden">
            <div className="flex flex-col gap-6 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setShowForm(true);
                }}
                className="mt-2 rounded-full border border-white/30 px-5 py-4 text-left text-sm"
              >
                Check availability
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-end overflow-hidden bg-[#171310]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="kenburns absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1754782915842-aa4fca6c203a?auto=format&fit=crop&w=2200&q=90')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 text-white md:px-10 md:pb-24">
          <div className="max-w-4xl">
            <p
              className={`mb-6 text-sm text-white/70 transition-all duration-700 ${
                mounted ? "opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              Wedding photography &amp; films, based in Kolkata
            </p>

            <h1 className={`${serif} text-5xl font-normal leading-[1.02] tracking-[-0.02em] md:text-7xl lg:text-[96px]`}>
              {["We preserve the", "moments you'll", "wish to relive."].map(
                (line, i) => (
                  <span key={line} className="block overflow-hidden">
                    <span
                      className="block transition-all duration-700 ease-out"
                      style={{
                        transitionDelay: `${150 + i * 130}ms`,
                        transform: mounted ? "translateY(0)" : "translateY(100%)",
                        opacity: mounted ? 1 : 0,
                      }}
                    >
                      {line}
                    </span>
                  </span>
                )
              )}
            </h1>

            <p
              className={`mt-8 max-w-lg text-[15px] leading-7 text-white/75 transition-all delay-500 duration-700 ${
                mounted ? "opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              Candid wedding photography, cinematic films and timeless
              stories, built around the people, emotions and details that
              make your celebration yours.
            </p>

            <div
              className={`mt-9 flex flex-wrap gap-3 transition-all delay-700 duration-700 ${
                mounted ? "opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <a
                href="#stories"
                className="rounded-full bg-white px-7 py-4 text-[13px] text-[#211C18] transition hover:bg-white/85"
              >
                View stories
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="rounded-full border border-white/50 bg-white/5 px-7 py-4 text-[13px] backdrop-blur-sm transition hover:bg-white hover:text-[#211C18]"
              >
                Check availability
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-xs text-white/60 md:flex">
          <span className="h-px w-10 bg-white/40" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* INTRO */}
      <Reveal className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1250px] gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <h2 className={`${serif} text-4xl leading-[1.08] tracking-[-0.01em] text-[#7A2432] md:text-6xl`}>
            Every wedding has a story.
          </h2>
          <div className="max-w-xl">
            <p className="text-xl leading-9 text-[#211C18]/75 md:text-2xl md:leading-10">
              Pixip Foto documents weddings through authentic moments,
              emotions and details — creating photographs and films that let
              couples experience their celebration again and again.
            </p>
            <p className={`${serif} mt-8 italic text-[#211C18]/45`}>
              Candid, contemporary, and unmistakably yours.
            </p>
          </div>
        </div>
      </Reveal>

      {/* FEATURE IMAGE */}
      <section className="relative h-[75vh] min-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1500px] px-6 pb-14 text-white md:px-10 md:pb-20">
          <h2 className={`${serif} max-w-2xl text-4xl leading-tight md:text-7xl`}>
            Stories that feel like memories.
          </h2>
        </div>
      </section>

      {/* STORIES */}
      <Reveal id="stories" className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className={`${serif} text-5xl tracking-[-0.02em] md:text-7xl`}>
              Stories we&apos;ve told
            </h2>
            <p className="max-w-sm text-sm leading-7 text-[#211C18]/55">
              A collection of weddings, portraits and celebrations,
              documented through an honest and contemporary lens.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolio.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden ${
                  index === 1 || index === 4 ? "md:mt-24" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.category} photography by Pixip Foto`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                    style={{ transitionProperty: "transform, opacity" }}
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <p className="text-xs text-[#211C18]/45">{item.category}</p>
                    <h3 className={`${serif} mt-2 text-2xl`}>{item.title}</h3>
                  </div>
                  <span className="mt-2 overflow-hidden text-sm text-[#7A2432]">
                    <span className="block translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                      View story
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* FAMILY CELEBRATIONS BANNER */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587271449604-04bb40332709?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1500px] px-6 pb-14 text-white md:px-10 md:pb-20">
          <h2 className={`${serif} max-w-3xl text-4xl leading-tight md:text-7xl`}>
            The little moments become the memories.
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/75">
            From Annaprasan and maternity celebrations to family milestones,
            every chapter deserves to be remembered.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <Reveal id="services" className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1250px]">
          <h2 className={`${serif} max-w-2xl text-5xl leading-[1.05] tracking-[-0.02em] md:text-7xl`}>
            More than photographs.
          </h2>

          <div
            ref={servicesRef}
            onMouseMove={handleServicesMouseMove}
            onMouseLeave={() => setHoveredService(null)}
            className="relative mt-20 border-t border-[#211C18]/15"
          >
            {services.map((service) => (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredService(service)}
                className="group grid cursor-default gap-3 border-b border-[#211C18]/15 py-8 transition-colors md:grid-cols-[1.2fr_2fr] md:items-center md:py-10"
              >
                <h3
                  className={`${serif} text-3xl transition-colors md:text-4xl ${
                    hoveredService?.title === service.title
                      ? "text-[#7A2432]"
                      : ""
                  }`}
                >
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-7 text-[#211C18]/55">
                  {service.text}
                </p>
              </div>
            ))}

            {/* cursor-follow preview */}
            <div
              className="pointer-events-none absolute z-10 hidden h-40 w-32 overflow-hidden rounded-sm shadow-2xl transition-opacity duration-200 md:block"
              style={{
                left: cursor.x,
                top: cursor.y,
                transform: "translate(-50%, -115%)",
                opacity: hoveredService ? 1 : 0,
              }}
            >
              {hoveredService && (
                <img
                  src={hoveredService.image}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                  className="h-full w-full bg-[#171310] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ABOUT */}
      <Reveal id="about" className="bg-[#171310] px-6 py-24 text-white md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1250px] gap-16 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1743684821666-05b9c5046937?auto=format&fit=crop&w=1400&q=85"
              alt="Newlywed Indian couple sharing a quiet moment after their ceremony"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
              className="h-[620px] w-full bg-[#0F0D0B] object-cover transition-opacity duration-500"
            />
          </div>
          <div>
            <h2 className={`${serif} text-5xl leading-[1.05] tracking-[-0.02em] md:text-7xl`}>
              Photographs with truth.
              <br />
              <span className="italic font-light text-[#B99361]">
                Films with emotion.
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-sm leading-8 text-white/65">
              Pixip Foto is a Kolkata-based photography and cinematography
              studio specialising in candid wedding photography, contemporary
              portraits and cinematic storytelling.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-8 text-white/65">
              The approach is simple: observe the moments that happen
              naturally, preserve the emotion honestly, and create
              photographs that stay meaningful long after the celebration
              ends.
            </p>
            <div className="mt-12 flex items-baseline gap-4 border-t border-white/15 pt-8">
              <p className={`${serif} text-3xl text-[#B99361]`}>2013</p>
              <p className="text-sm text-white/45">
                Documenting celebrations since, through to today.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* AWARDS */}
      <Reveal id="awards" className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className={`${serif} text-5xl md:text-7xl`}>
            Celebrated for the work.
          </h2>
          <div className="mx-auto mt-16 max-w-xl border-y border-[#211C18]/15 py-12">
            <div className={`${serif} text-3xl italic text-[#B99361]`}>✦</div>
            <p className="mt-6 text-sm text-[#211C18]/45">WeddingWire</p>
            <h3 className={`${serif} mt-3 text-3xl`}>Wedding Awards 2023</h3>
            <p className="mt-3 text-sm text-[#211C18]/50">Winner</p>
          </div>
        </div>
      </Reveal>

      {/* REVIEWS */}
      <Reveal id="reviews" className="bg-[#DED8CF] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1250px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className={`${serif} text-5xl tracking-[-0.02em] md:text-7xl`}>
              From our clients.
            </h2>
            <div className="md:text-right">
              <p className={`${serif} text-5xl text-[#7A2432]`}>4.8</p>
              <p className="mt-1 text-xs text-[#211C18]/50">
                out of 5, on WeddingWire
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="bg-[#F6F1E7] p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10"
              >
                <div className="flex gap-1 text-[#B99361]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className={`${serif} mt-8 text-2xl italic leading-9`}>
                  {review.text}
                </p>
                <p className="mt-8 text-xs text-[#211C18]/45">
                  {review.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="relative overflow-hidden bg-[#171310] px-6 py-28 text-white md:px-10 md:py-40">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className={`${serif} text-5xl leading-[1.05] tracking-[-0.02em] md:text-8xl`}>
            Let&apos;s create
            <br />
            <span className="italic font-light">something timeless.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/55">
            Tell us about your celebration, and let&apos;s create photographs
            and films you&apos;ll want to return to for years to come.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-10 rounded-full bg-white px-8 py-4 text-[13px] text-[#211C18] transition hover:bg-[#B99361] hover:text-white"
          >
            Start your story
          </button>
        </div>
      </Reveal>

      {/* FOOTER */}
      <footer className="bg-[#0F0D0B] px-6 py-12 text-white md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className={`${serif} text-xl`}>
              Pixip <span className="italic font-light">Foto</span>
            </p>
            <p className="mt-3 text-xs text-white/40">
              Candid stories. Cinematic memories.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#stories" className="hover:text-white">Stories</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
          </div>
          <p className="text-xs text-white/30">© 2026 Pixip Foto</p>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/?text=Hello%20Pixip%20Foto%2C%20I%20would%20like%20to%20enquire%20about%20photography%20for%20my%20upcoming%20event."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Pixip Foto on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.02 3C9.4 3 4 8.35 4 14.94c0 2.21.6 4.28 1.65 6.06L4 29l8.24-1.6a12.9 12.9 0 0 0 3.78.56h.01c6.62 0 12.02-5.35 12.02-11.94C28.05 8.35 22.65 3 16.02 3zm0 21.7c-1.2 0-2.4-.24-3.5-.71l-.25-.11-4.9.95.95-4.72-.16-.27a9.7 9.7 0 0 1-1.48-5.2c0-5.4 4.44-9.79 9.9-9.79 2.65 0 5.13 1.02 7 2.87a9.6 9.6 0 0 1 2.9 6.86c0 5.4-4.44 9.12-9.46 9.12zm5.44-7.29c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.37-.27.3-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.95.15.2 2.02 3.1 4.9 4.34.68.3 1.22.47 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.56-.35z" />
        </svg>
      </a>

      {/* ENQUIRY MODAL */}
      {showForm && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#F6F1E7] p-7 md:p-10">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 text-2xl leading-none text-[#211C18]/60 transition hover:text-[#211C18]"
              aria-label="Close enquiry form"
            >
              ×
            </button>

            <h2 className={`${serif} text-4xl md:text-5xl`}>
              Let&apos;s tell your story.
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you. Your enquiry has been received. We will get back to you shortly."
                );
                setShowForm(false);
              }}
              className="mt-10 grid gap-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  placeholder="Your name"
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
                />
                <input
                  placeholder="Partner's name"
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  required
                  type="tel"
                  placeholder="Phone"
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <select
                  defaultValue=""
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none focus:border-[#7A2432]"
                >
                  <option value="" disabled>
                    Event type
                  </option>
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Engagement</option>
                  <option>Annaprasan</option>
                  <option>Maternity</option>
                  <option>Family Celebration</option>
                  <option>Portrait</option>
                </select>
                <input
                  type="date"
                  className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none focus:border-[#7A2432]"
                />
              </div>
              <input
                placeholder="Event location"
                className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
              />
              <textarea
                rows={4}
                placeholder="Tell us a little about your celebration..."
                className="border-b border-[#211C18]/20 bg-transparent px-1 py-4 outline-none placeholder:text-[#211C18]/40 focus:border-[#7A2432]"
              />
              <button
                type="submit"
                className="mt-3 rounded-full bg-[#211C18] px-7 py-4 text-[13px] text-white transition hover:bg-[#7A2432]"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
    </svg>
  );
}

function Reveal({ children, className = "", id }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal ${visible ? "in" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
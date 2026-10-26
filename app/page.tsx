"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X, ChevronDown, CheckCircle2, Mail, ExternalLink, Sparkles, Send } from "lucide-react";
import { WORKS_DATA, SKILLS_DATA } from "../data/content";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Quick luxury loading transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 700);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 15,
        y: (e.clientY / innerHeight - 0.5) * 15,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#08090D] text-[#F5F4F0] min-h-screen selection:bg-[#8B83FF] selection:text-[#08090D] overflow-x-hidden">
      {/* 1. Subtle Loading Curtain */}
      <div
        className={`fixed inset-0 z-50 bg-[#08090D] flex flex-col items-center justify-center transition-all duration-700 ease-out pointer-events-none ${
          isLoaded ? "opacity-0 -translate-y-full" : "opacity-100"
        }`}
      >
        <p className="font-serif-cormorant text-2xl tracking-[0.3em] uppercase text-[#F5F4F0] mb-3 animate-pulse">
          YUKI NAKAMURA
        </p>
        <div className="w-16 h-[1px] bg-[#8B83FF]/60 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#F5F4F0] animate-pulse"></div>
        </div>
      </div>

      {/* 2. Global Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#08090D]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="group flex flex-col text-left focus:outline-none"
            aria-label="Yuki Nakamura Portfolio Top"
          >
            <span className="font-serif-cormorant text-xl md:text-2xl tracking-[0.25em] font-medium text-[#F5F4F0] group-hover:text-[#8B83FF] transition-colors">
              YUKI NAKAMURA
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#A7A7AE] uppercase mt-0.5">
              Portfolio
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-9">
            {["about", "skills", "works", "strength", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-[11px] uppercase tracking-[0.25em] text-[#A7A7AE] hover:text-[#F5F4F0] transition-colors duration-300 py-1 group focus:outline-none"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B83FF] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-medium rounded-full bg-[#F5F4F0] text-[#08090D] hover:bg-[#8B83FF] hover:text-white transition-all duration-300 shadow-md transform hover:-translate-y-0.5 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F4F0] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-30 bg-[#08090D]/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-7 text-center">
          {["about", "skills", "works", "strength", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="font-serif-cormorant text-2xl tracking-[0.25em] uppercase text-[#F5F4F0] hover:text-[#8B83FF] transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 px-8 py-3 text-xs uppercase tracking-[0.2em] rounded-full bg-[#8B83FF] text-[#08090D] font-medium"
          >
            お問い合わせ
          </button>
        </nav>
      </div>

      {/* 3. Hero Section (Image 1: 01-hero.png) */}
      <section
        id="hero"
        className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Visual with Parallax */}
        <div
          className="absolute inset-0 w-full h-full scale-105 transition-transform duration-700 ease-out"
          style={{
            transform: `scale(1.04) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          }}
        >
          <Image
            src="/images/portfolio/01-hero.png"
            alt="Yuki Nakamura Portfolio Hero Visual"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Subtle Multi-layer Cinematic Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090D]/95 via-[#08090D]/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-[#08090D]/50"></div>
          <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 z-10 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B83FF] animate-pulse"></span>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#A7A7AE] font-poppins font-medium">
                Web Design × Front-end Development
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#F5F4F0] leading-[1.15] mb-6">
              想いを、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] via-[#F5F4F0] to-[#8B83FF]">
                伝わるデザインへ。
              </span>
            </h1>

            <p className="text-sm md:text-base text-[#A7A7AE] leading-relaxed mb-10 max-w-lg font-light">
              見た人の心を動かす。<br className="hidden sm:inline" />
              美しくて、使いやすいWebサイトをつくります。
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("works")}
                className="group relative inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-[#F5F4F0] text-[#08090D] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#8B83FF] hover:text-white transition-all duration-300 shadow-xl shadow-black/40 transform hover:-translate-y-0.5 focus:outline-none"
              >
                <span>制作実績を見る</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center space-x-3 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 text-[#F5F4F0] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#8B83FF] hover:bg-[#8B83FF]/10 transition-all duration-300 backdrop-blur-sm focus:outline-none"
              >
                <span>お問い合わせ</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10 opacity-70">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#A7A7AE] mb-2 font-mono">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#8B83FF] to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* 4. About Section (Image 2: 02-about-working.jpg) */}
      <section id="about" className="relative py-28 md:py-36 bg-[#08090D] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image 2 with Editorial Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src="/images/portfolio/02-about-working.jpg"
                  alt="Yuki Nakamura working on Web Design and Front-end Development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.92] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Floating Aesthetic Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#08090D]/80 backdrop-blur-md border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono">Philosophy</p>
                  <p className="text-xs text-[#F5F4F0] mt-1 font-light">「伝わる」「使いやすい」「心地よい」体験設計</p>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Typography */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-3">
                <Sparkles size={13} />
                <span>02. ABOUT / About Me</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F4F0] leading-snug mb-8">
                想いをカタチにできる<br />
                <span className="text-[#8B83FF]">Webクリエイター</span>を目指して。
              </h2>

              <div className="space-y-5 text-sm md:text-base text-[#A7A7AE] leading-relaxed font-light">
                <p>
                  私は、Webデザインとフロントエンド開発を通じて、見た人に「伝わる」「使いやすい」「心地よい」と感じてもらえるWebサイトづくりを大切にしています。
                </p>
                <p>
                  デザインの美しさだけでなく、情報の伝わりやすさ、操作性、表示速度、スマートフォンでの使いやすさまで考え、一つひとつ丁寧に制作します。
                </p>
                <p>
                  クライアントの想いや事業の魅力を理解し、デザインと技術の両面から価値を届けられるWebクリエイターを目指しています。
                </p>
              </div>

              <div className="mt-10 flex items-center space-x-6">
                <button
                  onClick={() => scrollToSection("works")}
                  className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#F5F4F0] hover:text-[#8B83FF] transition-colors py-2 border-b border-white/20 hover:border-[#8B83FF]"
                >
                  <span>詳しく見る</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills Section (Image 3: 03-skills.jpg) */}
      <section id="skills" className="relative py-28 md:py-36 bg-[#0D1015] border-t border-white/[0.08] overflow-hidden">
        {/* Background Visual with Low Opacity Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/03-skills.jpg"
            alt="Skills Coding Environment"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.22] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-[#0D1015]/85 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-noise opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-2">
              03. SKILLS / Technical Capabilities
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F4F0] mb-4">
              確かな技術で、<br />
              理想をカタチに。
            </h2>
            <p className="text-sm md:text-base text-[#A7A7AE] leading-relaxed font-light">
              HTML・CSS・JavaScriptをはじめとしたフロントエンド技術を中心に、Webサイトの制作に必要なスキルを活用しています。
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SKILLS_DATA.map((skill, idx) => (
              <div
                key={skill.name}
                className="group p-5 md:p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#8B83FF]/50 hover:bg-white/[0.06] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base md:text-lg font-medium text-[#F5F4F0] group-hover:text-[#8B83FF] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A7A7AE] font-mono">
                    {skill.category}
                  </span>
                </div>
                <p className="text-xs text-[#A7A7AE] leading-relaxed font-light">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Works Section (Image 4: 04-works.jpg for Header visual, and 5 detailed sample works) */}
      <section id="works" className="relative py-28 md:py-36 bg-[#08090D] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header with Image 4 Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-20 p-8 md:p-14 bg-[#0D1015]/70 backdrop-blur-md shadow-2xl">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/portfolio/04-works.jpg"
                alt="Selected Works Presentation"
                fill
                sizes="100vw"
                className="object-cover object-center filter brightness-[0.32]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08090D] via-[#08090D]/85 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-2">
                04. WORKS / Selected Works
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F4F0] mb-4">
                想いをカタチにした<br />
                制作実績。
              </h2>
              <p className="text-sm md:text-base text-[#A7A7AE] leading-relaxed font-light">
                Webサイト制作を中心に、さまざまな業種やサービスを想定したプロジェクトに取り組んでいます。目的やターゲットに合わせて、デザインから実装まで丁寧に制作しています。
              </p>
            </div>
          </div>

          {/* 5 Works Grid */}
          <div className="space-y-16 md:space-y-24">
            {WORKS_DATA.map((work, idx) => (
              <div
                key={work.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#8B83FF]/5"
              >
                {/* Thumbnail Image */}
                <div className="lg:col-span-7 order-1 lg:order-1">
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-[#08090D] group-hover:border-[#8B83FF]/40 transition-colors"
                  >
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F5F4F0] text-[#08090D] text-xs font-medium uppercase tracking-wider">
                        <span>サイトを見る</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </a>
                </div>

                {/* Info Column */}
                <div className="lg:col-span-5 order-2 lg:order-2 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif-cormorant text-3xl font-light text-[#8B83FF]">
                        {work.number}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-[#A7A7AE] font-mono">
                        {work.badge}
                      </span>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-1">
                      {work.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F5F4F0] mb-4 group-hover:text-white transition-colors">
                      {work.title}
                    </h3>

                    <p className="text-sm text-[#A7A7AE] leading-relaxed font-light mb-6">
                      {work.description}
                    </p>

                    <div className="space-y-1.5 mb-8">
                      {work.points.map((pt, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-[#A7A7AE]">
                          <CheckCircle2 size={13} className="text-[#8B83FF]" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F4F0] group-hover:text-[#8B83FF] transition-colors"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight
                        size={15}
                        className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Strength Section (Image 5: 05-strength.jpg) */}
      <section id="strength" className="relative py-28 md:py-36 bg-[#0D1015] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column with Camera Lens (Image 5) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src="/images/portfolio/05-strength.jpg"
                  alt="Strength Camera Lens Precision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center filter brightness-[0.88] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1015]/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#08090D]/85 backdrop-blur-md border border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono">Detail Oriented</p>
                  <p className="text-xs text-[#F5F4F0] mt-1 font-light">1pxの細部まで妥協しない実装クオリティ</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-2">
                05. STRENGTH / Core Values
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F5F4F0] mb-4">
                デザイン × コーディングで<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F4F0] to-[#8B83FF]">
                  ワンランク上のWebサイトを。
                </span>
              </h2>
              <p className="text-sm md:text-base text-[#A7A7AE] leading-relaxed font-light mb-10">
                見た目の美しさだけではなく、見やすさ、使いやすさ、表示速度まで考えたWebサイト制作を目指しています。
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#8B83FF]/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-serif-cormorant text-2xl text-[#8B83FF]">01</span>
                    <h3 className="text-lg font-medium text-[#F5F4F0]">Design</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#A7A7AE] leading-relaxed font-light pl-9">
                    目的とターゲットに合わせて、情報が伝わりやすいデザインを考えます。
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#8B83FF]/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-serif-cormorant text-2xl text-[#8B83FF]">02</span>
                    <h3 className="text-lg font-medium text-[#F5F4F0]">Development</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#A7A7AE] leading-relaxed font-light pl-9">
                    デザインを丁寧に実装し、レスポンシブ対応や操作性を重視します。
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#8B83FF]/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-serif-cormorant text-2xl text-[#8B83FF]">03</span>
                    <h3 className="text-lg font-medium text-[#F5F4F0]">Communication</h3>
                  </div>
                  <p className="text-xs md:text-sm text-[#A7A7AE] leading-relaxed font-light pl-9">
                    制作の目的や要望を確認し、認識をすり合わせながら進行します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Section (Image 6: 06-contact.jpg) */}
      <section id="contact" className="relative py-28 md:py-36 bg-[#08090D] border-t border-white/[0.08] overflow-hidden">
        {/* Background Visual (Image 6: 06-contact.jpg) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/portfolio/06-contact.jpg"
            alt="Night Cityscape and Desk Workspace"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.3] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-[#08090D]/85 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-noise opacity-30"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 md:px-12 z-10 text-center">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#8B83FF] font-mono mb-3">
            <Mail size={13} />
            <span>06. CONTACT / Get In Touch</span>
          </div>

          <h2 className="font-serif-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F4F0] tracking-wide mb-4">
            Let’s Work Together
          </h2>

          <p className="text-xl sm:text-2xl font-medium text-[#F5F4F0] mb-6">
            一緒に、想いをカタチにしませんか？
          </p>

          <p className="text-sm md:text-base text-[#A7A7AE] leading-relaxed font-light max-w-lg mx-auto mb-10">
            Webサイト制作のご相談・お見積もりなど、お気軽にお問い合わせください。<br />
            LP制作、コーポレートサイト、ECサイト制作など柔軟に対応いたします。
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@example.com?subject=Webサイト制作のご相談・お見積もり"
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#F5F4F0] text-[#08090D] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#8B83FF] hover:text-white transition-all duration-300 shadow-2xl transform hover:-translate-y-0.5"
            >
              <span>お問い合わせ →</span>
            </a>
          </div>

          <p className="text-[11px] text-[#A7A7AE]/70 mt-4 font-mono">
            ※ メールクライアントが起動します（正式な送信先メールアドレスはお手元の環境に合わせてご指定ください）
          </p>
        </div>
      </section>

      {/* 9. Global Footer */}
      <footer className="relative py-12 bg-[#050608] border-t border-white/[0.08] text-xs text-[#A7A7AE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif-cormorant text-lg tracking-[0.2em] text-[#F5F4F0]">YUKI NAKAMURA</p>
            <p className="text-[10px] tracking-[0.15em] text-[#A7A7AE] mt-0.5">
              Web Designer / Front-end Developer
            </p>
            <p className="text-[10px] text-[#A7A7AE]/60 mt-2">
              © 2026 Yuki Nakamura. All Rights Reserved.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["about", "skills", "works", "strength", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[10px] uppercase tracking-[0.2em] text-[#A7A7AE] hover:text-[#F5F4F0] transition-colors focus:outline-none"
              >
                {item}
              </button>
            ))}
          </nav>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.2em] text-[#A7A7AE] hover:text-[#8B83FF] transition-colors py-1.5 px-3 rounded border border-white/10 hover:border-[#8B83FF]/40"
            >
              <span>PAGE TOP</span>
              <span className="transform -rotate-90 text-[10px]">→</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, ListChecks, ShieldCheck, Sparkles, Timer, Utensils, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: IronCoreSalesPage });

const story = [
  "Tudo começa com uma inquietação.",
  "Sempre acreditei que grandes transformações começam quando surge uma vontade real de mudar e descobrir até onde podemos chegar.",
  "O esporte sempre esteve presente na minha vida, mas foi na musculação que encontrei algo diferente. Quanto mais eu treinava, mais queria entender por que algumas pessoas evoluíam tanto enquanto outras passavam anos se esforçando sem alcançar os resultados que buscavam.",
  "Foi essa busca que me levou a estudar Educação Física.",
  "Com o tempo, percebi que treinamento era apenas uma parte da transformação. Passei a estudar também nutrição, estratégia e tudo aquilo que poderia transformar esforço em resultado.",
  "E então percebi algo que me marcou:",
  "a maioria das pessoas não desiste porque não quer mudar. Elas desistem porque não sabem exatamente como mudar.",
  "Foi nesse momento que nasceu uma ideia.",
  "Reunir conhecimento, profissionais e estratégias em um só lugar, tornando acessível aquilo que muitas vezes depende de personal, experiência ou anos de tentativa e erro.",
  "Foi assim que começou a nascer a Iron Core.",
  "Não como mais um programa de treino, mas como um caminho claro para quem quer transformar o próprio corpo e não sabe por onde começar.",
  "Porque, no fim, talvez o que separa você do físico que deseja não seja falta de esforço.",
  "Talvez seja apenas nunca ter tido a direção certa.",
];

function AnatomicalModel() {
  return (
    <div className="relative mx-auto h-[500px] w-[280px] [perspective:1000px] sm:h-[620px] sm:w-[360px]">
      <div className="absolute inset-0 rounded-full bg-[#b9ff00]/10 blur-[90px]" />
      <div className="anatomy-spin relative h-full w-full [transform-style:preserve-3d]"><div className="anatomy-breath relative h-full w-full">
        <svg viewBox="0 0 260 620" className="relative z-10 h-full w-full" aria-label="Modelo anatômico futurista">
          <ellipse cx="130" cy="64" rx="35" ry="45" fill="none" stroke="#eaff9b" strokeWidth="5" />
          <path d="M108 52 Q130 40 152 52 M105 68 Q130 58 155 68 M108 84 Q130 76 152 84" fill="none" stroke="#dffb82" strokeWidth="3" />
          <path d="M118 106 L142 106 L150 145 L145 185 L115 185 L110 145 Z" fill="none" stroke="#eaff9b" strokeWidth="4" />
          <path d="M115 110 Q93 116 84 143 L99 205 L115 185 L130 143 Z" fill="#d9ff55" opacity=".9" />
          <path d="M145 110 Q167 116 176 143 L161 205 L145 185 L130 143 Z" fill="#d9ff55" opacity=".9" />
          <path d="M99 137 Q130 158 161 137 M98 159 Q130 181 162 159 M102 181 Q130 202 158 181" fill="none" stroke="#efffb0" strokeWidth="2" />
          <path d="M84 143 L57 260 M176 143 L203 260" fill="none" stroke="#eaff9b" strokeWidth="10" strokeLinecap="round" />
          <path d="M57 260 L45 365 M203 260 L215 365" stroke="#eaff9b" strokeWidth="9" strokeLinecap="round" />
          <path d="M108 184 L112 310 L130 337 L148 310 L152 184" fill="none" stroke="#eaff9b" strokeWidth="5" />
          <path d="M105 190 Q130 210 155 190 L149 302 L130 325 L111 302 Z" fill="none" stroke="#d9ff55" strokeWidth="3" />
          <path d="M112 307 L94 455 M148 307 L166 455" fill="none" stroke="#eaff9b" strokeWidth="11" strokeLinecap="round" />
          <path d="M94 455 L83 590 M166 455 L177 590" stroke="#eaff9b" strokeWidth="9" strokeLinecap="round" />
        </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#d9ff00]/25 bg-black/70 px-4 py-2 text-[9px] font-black uppercase tracking-[.3em] text-[#d9ff00]">Muscle protocol • 360°</div>
    </div>
  );
}


function QuizAndOffer() {
  const questions = [
    {
      title: "Qual é o seu principal objetivo hoje?",
      options: [
        "Perder gordura e ficar mais definido",
        "Ganhar massa muscular",
        "Ganhar massa e ficar mais definido",
        "Construir um shape mais completo",
        "Melhorar meu físico e minha autoestima",
      ],
    },
    {
      title: "Como você se sente em relação ao seu corpo atualmente?",
      options: [
        "Estou satisfeito, mas quero evoluir",
        "Tenho pouca massa muscular",
        "Tenho gordura que quero eliminar",
        "Estou sem definição",
        "Não estou satisfeito com meu físico",
      ],
    },
    {
      title: "O que mais está impedindo você de chegar no shape que deseja?",
      options: [
        "Não sei como treinar corretamente",
        "Não consigo manter uma alimentação adequada",
        "Não sei o que fazer para ganhar massa",
        "Tenho dificuldade para perder gordura",
        "Começo, mas não consigo manter consistência",
        "Já tentei várias coisas e não tive o resultado esperado",
      ],
    },
    {
      title: "Há quanto tempo você treina?",
      options: [
        "Ainda não treino",
        "Menos de 6 meses",
        "6 meses a 1 ano",
        "1 a 3 anos",
        "Mais de 3 anos",
      ],
    },
    {
      title: "O que você mais gostaria de mudar no seu corpo?",
      options: [
        "Ganhar mais músculos",
        "Diminuir a barriga",
        "Ficar mais definido",
        "Aumentar braços, peito e costas",
        "Melhorar pernas e glúteos",
        "Melhorar meu físico como um todo",
      ],
    },
    {
      title: "Você já tentou transformar seu físico antes?",
      options: [
        "Sim, mas não consegui manter",
        "Sim, mas não tive o resultado que queria",
        "Sim, e tive algum resultado, mas quero evoluir mais",
        "Já tentei várias vezes",
        "Ainda não, estou começando agora",
      ],
    },
    {
      title: "Se você tivesse um caminho claro para seguir, quanto você estaria disposto a se dedicar para mudar seu físico?",
      options: [
        "Quero começar de verdade",
        "Estou disposto a mudar minha rotina",
        "Quero levar isso a sério",
        "Quero transformar meu físico o mais rápido possível",
      ],
    },
  ];

  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(2 * 60 * 60 + 37 * 60);
  const [exitWarning, setExitWarning] = useState(false);

  useEffect(() => {
    if (!finished) return;
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 8) setExitWarning(true);
    };
    window.addEventListener("mouseout", handleExitIntent);
    return () => window.removeEventListener("mouseout", handleExitIntent);
  }, [finished]);

  useEffect(() => {
    if (!finished || secondsLeft <= 0) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((value) => Math.max(0, value - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [finished, secondsLeft]);

  const chooseAnswer = (answer: string) => {
    const nextAnswers = [...answers];
    nextAnswers[current] = answer;
    setAnswers(nextAnswers);
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((value) => value + 1);
    }
  };

  const resetQuiz = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
    setSecondsLeft(2 * 60 * 60 + 37 * 60);
  };

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  if (!started) {
    return (
      <div className="mx-auto mt-14 max-w-xl">
        <button
          onClick={() => setStarted(true)}
          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-5 text-xs font-black uppercase tracking-[.16em] !text-black transition hover:-translate-y-1 hover:bg-white/90"
        >
          QUERO DESCOBRIR MEU CAMINHO <ArrowRight size={17} />
        </button>
      </div>
    );
  }

  if (!finished) {
    const question = questions[current];
    return (
      <div className="mx-auto mt-14 max-w-2xl">
        <div className="mb-5 flex items-center justify-between text-[10px] font-black uppercase tracking-[.25em] text-white/30">
          <span>PERGUNTA {String(current + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}</span>
          <span>{Math.round(((current + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="mb-10 h-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-white transition-all duration-300" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[.025] p-6 sm:p-10">
          <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">{question.title}</h3>
          <div className="mt-8 grid gap-3">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => chooseAnswer(option)}
                className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-left text-sm font-semibold text-white/65 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[.04] hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-14 max-w-2xl text-center">
      {exitWarning && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm" onClick={() => setExitWarning(false)}>
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-[#0a0a0a] p-7 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <p className="text-[10px] font-black uppercase tracking-[.3em] text-white/40">ATENÇÃO</p>
            <h4 className="mt-4 text-2xl font-black uppercase leading-tight">Sua condição especial pode ser perdida.</h4>
            <p className="mt-4 text-sm leading-6 text-white/50">Você acabou de liberar uma condição de entrada na Iron Core. Se sair agora, poderá não encontrá-la novamente quando voltar.</p>
            <button onClick={() => setExitWarning(false)} className="mt-7 w-full rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-[.15em] !text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/90 active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">QUERO GARANTIR MINHA CONDIÇÃO</button>
            <button onClick={() => setExitWarning(false)} className="mt-4 rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white/30 transition-all duration-300 hover:scale-105 hover:text-white/60 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20">Sair mesmo assim</button>
          </div>
        </div>
      )}
      <div className="rounded-[30px] border border-white/10 bg-white/[.025] p-7 sm:p-12">
        <p className="text-[10px] font-black uppercase tracking-[.35em] text-white/35">IRON CORE • DIREÇÃO CERTA</p>
        <h3 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-5xl">SEU CAMINHO ESTÁ PRONTO. 🔥</h3>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50">
          Com base nas suas respostas, encontramos o melhor caminho para você começar a construir o shape que deseja.
        </p>

        <div className="my-10 h-px bg-white/10" />

        <p className="text-xs font-black uppercase tracking-[.22em] text-white/45">VOCÊ LIBEROU UMA CONDIÇÃO ESPECIAL DE ENTRADA NA IRON CORE.</p>
        <p className="mt-7 text-5xl font-black tracking-[-.04em] sm:text-7xl">65% OFF</p>
        <p className="mt-5 text-sm text-white/35 line-through">De R$ 79,90</p>
        <p className="mt-1 text-xl font-black uppercase text-white/60">POR APENAS</p>
        <p className="mt-1 text-4xl font-black sm:text-5xl">R$ 27,31</p>
        <p className="mt-4 text-[10px] font-black uppercase tracking-[.25em] text-white/30">CONDIÇÃO ÚNICA DE ENTRADA</p>
        <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-white/35">
          Essa condição especial foi criada para novos alunos que estão começando agora e fica disponível enquanto o contador estiver ativo.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl border border-white/10 bg-black/60 p-5">
          <p className="text-[10px] font-black uppercase tracking-[.25em] text-white/35">SUA CONDIÇÃO ESPECIAL TERMINA EM:</p>
          <p className="mt-3 font-mono text-4xl font-bold tracking-[.08em] text-white sm:text-5xl">{hours}:{minutes}:{seconds}</p>
        </div>

        <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-white/30">
          Depois que o contador chegar a zero, essa condição promocional sairá do ar.
        </p>

        <a
          href="#checkout"
          className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-7 py-5 text-xs font-black uppercase tracking-[.16em] text-black transition hover:-translate-y-1 hover:bg-white/90"
        >
          QUERO COMEÇAR MEU SHAPE <ArrowRight size={18} />
        </a>

        <button onClick={resetQuiz} className="mt-5 text-[10px] font-black uppercase tracking-[.2em] text-white/25 transition hover:text-white/50">
          Refazer quiz
        </button>
      </div>
    </div>
  );
}

function IronCoreSalesPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [demoNotice, setDemoNotice] = useState(false);
  const demoPurchases = [60,75,45,90,20,40,50,50,70,25,35,53,75,23,64];
  const [demoPurchaseIndex, setDemoPurchaseIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDemoPurchaseIndex((value) => (value + 1) % demoPurchases.length);
      setDemoNotice(true);
      window.setTimeout(() => setDemoNotice(false), 5000);
    }, 15000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const testimonials = [
    "ESPAÇO PARA FOTO DE ANTES E DEPOIS",
    "ESPAÇO PARA MENSAGEM DE CLIENTE",
    "ESPAÇO PARA OUTRO RESULTADO",
    "ESPAÇO PARA OUTRO DEPOIMENTO",
  ];

  const cards = [
    [Dumbbell, "Treino personalizado", "Treinos pensados para você e para o seu objetivo."],
    [Zap, "Mais praticidade", "Direção para treinar melhor, sem depender de personal."],
    [ListChecks, "Cabe na rotina", "Estratégia simples para evoluir sem complicar seu dia."],
    [ShieldCheck, "7 dias de garantia", "Não fez sentido? Você pode pedir seu dinheiro de volta."],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {demoNotice && (
        <div className="fixed bottom-5 left-5 z-[90] max-w-[calc(100vw-40px)] rounded-2xl border border-white/15 bg-[#0a0a0a]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-7 sm:bottom-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black text-sm font-black">✓</div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.08em] text-white">{demoPurchases[demoPurchaseIndex]} pessoas garantiram</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[.16em] text-white/35">oferta especial</p>
            </div>
          </div>
        </div>
      )}
      <style>{`

        .hero-landing { isolation: isolate; }
        .reveal-on-scroll {
          opacity: 0;
          transform: translate3d(0, 28px, 0);
          filter: blur(4px);
          transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1), filter .8s cubic-bezier(.22,1,.36,1);
          will-change: opacity, transform, filter;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .reveal-on-scroll,
          .reveal-on-scroll.is-visible {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }
          article:hover { transform: none; }
        }

        /* Remove the original neon palette without touching any existing copy. */
        [class*="d9ff00"], [class*="d9ff55"], [class*="eaff9b"], [class*="efffb0"], [class*="dffb82"], [class*="b9ff00"] {
          color: #fff !important;
          border-color: rgba(255,255,255,.18) !important;
          background-color: rgba(255,255,255,.025) !important;
        }
        [class*="bg-[#d9ff00]"] { background: #fff !important; color: #000 !important; }
        [class*="text-[#d9ff00]"] { color: #fff !important; }
        [class*="border-[#d9ff00]"] { border-color: rgba(255,255,255,.18) !important; }

        h1, h2, h3, .font-black {
          font-family: 'Montserrat', Arial, sans-serif;
          font-weight: 800 !important;
          letter-spacing: -.025em;
          text-shadow: none !important;
        }
        h1 { font-weight: 800 !important; }
        h2 { font-weight: 800 !important; letter-spacing: -.03em; }

        /* Hero: sculpture-card / dark luxury treatment. */
        #hero-trust-strip {
          display: grid !important;
          visibility: visible !important;
          position: relative;
          z-index: 30;
        }
        #hero-trust-strip {
          grid-template-columns: repeat(3, max-content);
          align-items: center;
          justify-content: center;
          gap: 0;
          max-width: 760px !important;
          margin-left: auto;
          margin-right: auto;
          padding: 12px 18px;
          border-radius: 999px;
          background: radial-gradient(circle at center, rgba(255,255,255,.09), rgba(255,255,255,.025) 65%, transparent 100%);
          box-shadow: 0 0 55px rgba(255,255,255,.055);
        }
        #hero-trust-strip > div {
          min-height: auto;
          border: 0 !important;
          background: transparent !important;
          box-shadow: none !important;
          padding: 8px 20px !important;
          position: relative;
        }
        #hero-trust-strip > div:not(:last-child)::after {
          content: "•";
          position: absolute;
          right: -3px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255,255,255,.42);
          font-size: 14px;
        }
        section:first-of-type { background: #000 !important; }
        section:first-of-type > div:last-child {
          grid-template-columns: 1fr;
        }
        section:first-of-type h1 span { color: #fff !important; }
        section:first-of-type p { color: rgba(255,255,255,.52); }
        section:first-of-type p:first-child { color: rgba(255,255,255,.55) !important; }

        /* Luxury cards: white edge, black glass center, no neon. */
        article {
          border-color: rgba(255,255,255,.12) !important;
          background: rgba(255,255,255,.025) !important;
          box-shadow: 0 24px 70px rgba(0,0,0,.45);
          border-radius: 20px !important;
        }
        article:hover {
          border-color: rgba(255,255,255,.3) !important;
          transform: translateY(-2px);
          transition: .25s ease;
        }

        footer { background: #000 !important; border-color: rgba(255,255,255,.12) !important; }

        button { color: #fff; }
        a { transition: transform .2s ease, opacity .2s ease, border-color .2s ease; }

        /* Desktop + mobile layout system. */
        @media (min-width: 769px) {
          section > div, footer > div { width: min(100% - 64px, 1280px); }
          section:first-of-type > div:last-child { padding-top: 28px; padding-bottom: 28px; }
          section:first-of-type h1 { max-width: 980px; }
           #impactamos > div > div { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          #impactamos article { min-height: 0; padding: 16px; }
          #como-funciona > div > div { gap: 22px; }
          #como-funciona article { min-height: 280px; }
          #quiz-iron-core > div { max-width: 920px; }
        }

        @media (max-width: 768px) {
          main { overflow-x: hidden; }
          nav .mx-auto { height: 60px; padding-left: 16px; padding-right: 16px; }
          nav span { font-size: 11px; letter-spacing: .22em; }
          nav a { font-size: 9px; letter-spacing: .14em; }

          section { overflow: hidden; }
          section > div, footer > div { width: 100%; max-width: 100%; }
          section > div { padding-left: 20px; padding-right: 20px; }
          section { padding-top: 72px !important; padding-bottom: 72px !important; }

          section:first-of-type { min-height: auto; padding-top: 60px !important; }
          section:first-of-type > div:last-child { min-height: calc(100svh - 60px); padding-top: 54px; padding-bottom: 54px; }
          section:first-of-type h1 { font-size: clamp(3rem, 14.5vw, 4.8rem) !important; line-height: .9 !important; letter-spacing: -.05em !important; }
          section:first-of-type p:first-child { margin-bottom: 22px; font-size: 9px; line-height: 1.5; letter-spacing: .28em; }
          section:first-of-type p.text-xl { font-size: 1.15rem !important; margin-top: 22px; }
          section:first-of-type a { width: 100%; justify-content: center; margin-top: 28px; padding: 16px 18px; }
          section:first-of-type .grid { width: 100%; }
          #hero-trust-strip { grid-template-columns: 1fr; width: min(100%, 520px) !important; border-radius: 22px; padding: 8px 10px; }
          #hero-trust-strip > div { padding: 9px 12px !important; }
          #hero-trust-strip > div:not(:last-child)::after { display: none; }
          #hero-trust-strip > div:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,.08) !important; }

          h2 { font-size: clamp(2.25rem, 11vw, 4rem) !important; line-height: .94 !important; letter-spacing: -.045em !important; }
          h3 { letter-spacing: -.02em; }

          #impactamos > div > div { grid-template-columns: 1fr !important; gap: 10px; margin-top: 24px; }
          #impactamos article { padding: 14px; min-height: 0; }
          #impactamos article > div { width: 40px; height: 40px; margin-bottom: 10px; }
          #impactamos article svg { width: 21px; height: 21px; }
          #impactamos article h3 { font-size: .9rem; }
          #impactamos article p { font-size: .78rem; line-height: 1.5; }

          #como-funciona > div > div { grid-template-columns: 1fr !important; gap: 14px; margin-top: 36px; }
          #como-funciona article { min-height: 0; padding: 24px; }
          #como-funciona article h3 { margin-top: 20px; font-size: 1rem; }
          #como-funciona article p { margin-top: 12px; font-size: .82rem; line-height: 1.65; }
          #como-funciona > div > p { margin-top: 32px; font-size: 1rem; line-height: 1.65; }

          #quiz-iron-core > div { padding-left: 16px; padding-right: 16px; }
          #quiz-iron-core h2 { font-size: clamp(2.15rem, 10.5vw, 3.5rem) !important; }
          .reveal-on-scroll { transform: translate3d(0, 18px, 0); filter: blur(3px); }

          footer { padding-top: 28px !important; padding-bottom: 28px !important; }
          footer > div { font-size: 8px; letter-spacing: .18em; line-height: 1.7; }

          /* Prevent long labels and prices from overflowing narrow screens. */
          button, a { max-width: 100%; }
          .font-mono { font-size: clamp(2rem, 11vw, 3rem) !important; letter-spacing: .04em !important; }
        }

        @media (max-width: 380px) {
          nav a { font-size: 8px; }
          section > div { padding-left: 16px; padding-right: 16px; }
          section:first-of-type h1 { font-size: 2.8rem !important; }
          #impactamos article { padding: 12px; }
          #como-funciona article { padding: 20px; }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center"><span className="text-sm font-black tracking-[.3em]">IRON CORE</span></div>
          <a href="#como-funciona" className="text-xs font-bold uppercase tracking-[.2em] text-white/45 hover:text-[#d9ff00]">Como funciona</a>
        </div>
      </nav>

      <section className="reveal-on-scroll relative min-h-screen overflow-hidden pt-16 hero-landing">
<div className="absolute inset-0 bg-black/45 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/ocean-bg.svg')" }} />
        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_440px]">
          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[.4em] text-[#d9ff00]">IRON CORE • PROTOCOLO DE EVOLUÇÃO</p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.045em] sm:text-7xl lg:text-[6.5rem]">DO ZERO AO<br/><span className="text-[#d9ff00]">SHAPE DE PRAIA</span></h1>
            <p className="mt-7 text-xl font-semibold text-white/70 sm:text-2xl">sem depender de personal.</p>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">Treinamento pensado para a sua realidade, com direção profissional e uma estratégia que cabe na sua rotina.</p>
            <a href="#como-funciona" className="mx-auto mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d9ff00] px-7 py-4 text-xs font-black uppercase tracking-[.14em] text-black hover:-translate-y-1">Conhecer a Iron Core <ArrowRight size={17}/></a>
            <div id="hero-trust-strip" className="relative z-30 mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[.025] px-4 py-4 text-center">
                <p className="text-lg font-black">+5 MIL</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">Alunos</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[.025] px-4 py-4 text-center">
                <p className="text-lg font-black">✓ CONFIÁVEL</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">Site seguro</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[.025] px-4 py-4 text-center">
                <p className="text-lg font-black">GARANTIA</p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">De resultado</p>
              </div>
            </div>
            <div id="hero-impact-cards" className="mx-auto mt-6 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                [Dumbbell, "Treino personalizado"],
                [Zap, "Mais praticidade"],
                [ListChecks, "Cabe na rotina"],
                [ShieldCheck, "7 dias de garantia"],
              ].map(([Icon, title]) => {
                const I = Icon as typeof Dumbbell;
                return (
                  <div key={String(title)} className="flex min-h-[64px] flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[.025] px-2 py-3 text-center">
                    <I size={17} strokeWidth={1.7} />
                    <p className="mt-2 text-[9px] font-black uppercase leading-tight tracking-[.05em] text-white/75">{String(title)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="reveal-on-scroll py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">COMO FUNCIONA A <span className="text-[#d9ff00]">IRON CORE?</span></h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01","ENTENDEMOS VOCÊ","Entendemos seus objetivos, sua rotina, seu nível atual e o físico que você quer construir."],
              ["02","IDENTIFICAMOS O QUE VOCÊ PRECISA","Você não precisa ficar tentando descobrir sozinho qual treino seguir ou por onde começar. A partir do seu objetivo, encontramos a direção mais adequada para você."],
              ["03","VOCÊ RECEBE SUA ESTRATÉGIA","Tenha acesso a estratégias de treino e orientação para saber exatamente o que fazer, sem depender de tentativa e erro."],
              ["04","VOCÊ SABE O QUE FAZER","Chega de entrar na academia sem saber qual exercício fazer, quantas séries ou como organizar sua evolução. Você passa a ter um caminho claro para seguir."],
              ["05","VOCÊ EVOLUI COM MAIS CLAREZA","Conforme avança, você entende melhor seu corpo, acompanha sua evolução e sabe quais pontos precisa melhorar."],
              ["06","MENOS COMPLICAÇÃO. MAIS DIREÇÃO.","A Iron Core reúne o conhecimento e as estratégias que você precisa em um só lugar, para que você possa focar no que realmente importa: construir o seu shape."],
            ].map(([number,heading,description]) => <article key={number} className="rounded-2xl border border-white/10 bg-[#090909] p-8">
              <span className="text-sm font-black text-[#d9ff00]">{number}</span>
              <h3 className="mt-8 text-xl font-black uppercase leading-tight">{heading}</h3>
              <p className="mt-4 text-sm leading-7 text-white/45">{description}</p>
            </article>)}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-semibold leading-8 text-white/65 sm:text-xl">Você não precisa passar anos tentando descobrir sozinho o que funciona. A Iron Core organiza o caminho para você.</p>
        </div>
      </section>

      <section className="reveal-on-scroll border-y border-white/10 bg-[#080808] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">ANTES X DEPOIS<br/><span className="text-white/35">E MENSAGENS REAIS</span></h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">Os espaços abaixo já estão preparados. Quando você enviar as fotos e mensagens, elas entram aqui sem precisar reconstruir a seção.</p>
          <div className="mt-12 overflow-hidden">
            <div className="flex gap-4 transition-transform duration-500" style={{transform:`translateX(-${testimonialIndex * 25}%)`}}>
              {testimonials.map((item,i)=><article key={i} className="min-w-[78%] sm:min-w-[42%] lg:min-w-[31%]">
                <div className="flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-6 text-center">
                  <Sparkles size={42} className="text-white/10"/>
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[.25em] text-[#d9ff00]">{item}</p>
                </div>
              </article>)}
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex gap-2">{testimonials.map((_,i)=><button key={i} onClick={()=>setTestimonialIndex(i)} aria-label={"Item "+(i+1)} className={"h-1.5 rounded-full "+(i===testimonialIndex?"w-8 bg-[#d9ff00]":"w-2 bg-white/20")}/>)}</div>
            <div className="flex gap-2"><button onClick={()=>setTestimonialIndex(v=>Math.max(0,v-1))} className="rounded-full border border-white/10 p-2"><ChevronLeft size={17}/></button><button onClick={()=>setTestimonialIndex(v=>Math.min(testimonials.length-1,v+1))} className="rounded-full border border-white/10 p-2"><ChevronRight size={17}/></button></div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">A HISTÓRIA<br/><span className="text-[#d9ff00]">POR TRÁS</span></h2>
              <div className="mt-10 aspect-[4/5] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[.02]">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center"><Utensils size={42} className="text-white/10"/><p className="mt-4 text-[10px] font-black uppercase tracking-[.25em] text-white/25">Espaço reservado para a foto</p><p className="mt-2 text-xs text-white/20">Envie a foto e ela será colocada aqui.</p></div>
              </div>
            </div>
            <article className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              {story.map((p,i)=><p key={i} className={i===0||i===6||i===11||i===14 ? "mb-5 text-lg font-bold leading-7 text-white sm:text-xl" : "mb-5"}>{p}</p>)}
            </article>
          </div>
        </div>
      </section>


      <section id="quiz-iron-core" className="reveal-on-scroll border-t border-white/10 bg-[#050505] py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 text-4xl font-black uppercase leading-[.95] sm:text-6xl">DESCUBRA O MELHOR CAMINHO PARA O SEU SHAPE</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              Responda algumas perguntas rápidas sobre seus objetivos e seu momento atual. No final, vamos direcionar o melhor caminho para o seu shape.
            </p>
          </div>

          <QuizAndOffer />
        </div>
      </section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto max-w-7xl px-5 text-center text-[10px] font-black uppercase tracking-[.25em] text-white/25 sm:px-8">IRON CORE • Direção certa. Execução consistente. Evolução.</div></footer>
    </main>
  );
}

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, ListChecks, ShieldCheck, Sparkles, Timer, Utensils, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
const storyPhoto = "data:image/webp;base64,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";
const ironCoreLogo = "data:image/webp;base64,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";

export const Route = createFileRoute("/")({ component: IronCoreSalesPage });

const story = [
  "Tudo começa com uma inquietação.",
  "Aquela sensação de olhar para o próprio corpo e pensar: “Eu sei que posso chegar mais longe.”",
  "Talvez você conheça essa sensação. Você treina, tenta se alimentar melhor, começa cheio de motivação… mas, depois de um tempo, percebe que o resultado não acompanha todo o esforço.",
  "Foi exatamente essa inquietação que me levou a buscar respostas.",
  "O esporte sempre esteve presente na minha vida, mas foi na musculação que essa busca se tornou ainda maior. Quanto mais eu treinava, mais queria entender por que algumas pessoas evoluíam tanto enquanto outras passavam anos se esforçando e continuavam longe do físico que desejavam.",
  "Foi isso que me levou a estudar Educação Física.",
  "E quanto mais eu aprendia, mais uma coisa ficava clara: um físico realmente transformado não acontece por acaso.",
  "Treinamento, alimentação, estratégia, recuperação e consistência precisam trabalhar juntos. Não basta simplesmente fazer mais. É preciso saber o que fazer e por quê.",
  "Foi então que percebi algo que me marcou:",
  "a maioria das pessoas não desiste porque não quer mudar. Elas desistem porque passam tempo demais tentando mudar sem direção.",
  "E o problema é que o tempo continua passando.",
  "Você pode passar os próximos meses trocando de treino, testando dietas, seguindo dicas aleatórias e tentando descobrir sozinho o que funciona.",
  "Ou pode começar a construir seu físico com uma estratégia por trás.",
  "Foi dessa ideia que nasceu a IRON CORE.",
  "Um sistema criado para quem cansou de improvisar e decidiu levar a própria transformação a sério.",
  "Porque existe uma versão sua que você ainda não conhece.",
  "Mais forte. Mais confiante. Com o físico que hoje você apenas imagina.",
  "E ela não vai aparecer por acaso.",
  "Quanto antes você começar a construir, mais cedo poderá olhar para trás e perceber o quanto mudou.",
  "A pergunta é:",
  "você vai continuar tentando descobrir sozinho ou finalmente vai dar uma direção para o esforço que já está fazendo?",
];

function AnatomicalModel() {
  return (
    <div className="relative mx-auto h-[500px] w-[280px] [perspective:1000px] sm:h-[620px] sm:w-[360px]">
      <div className="absolute inset-0 rounded-full bg-[#E3EF27]/10 blur-[90px]" />
      <div className="anatomy-spin relative h-full w-full [transform-style:preserve-3d]"><div className="anatomy-breath relative h-full w-full">
        <svg viewBox="0 0 260 620" className="relative z-10 h-full w-full" aria-label="Modelo anatômico futurista">
          <ellipse cx="130" cy="64" rx="35" ry="45" fill="none" stroke="#E3EF27" strokeWidth="5" />
          <path d="M108 52 Q130 40 152 52 M105 68 Q130 58 155 68 M108 84 Q130 76 152 84" fill="none" stroke="#E3EF27" strokeWidth="3" />
          <path d="M118 106 L142 106 L150 145 L145 185 L115 185 L110 145 Z" fill="none" stroke="#E3EF27" strokeWidth="4" />
          <path d="M115 110 Q93 116 84 143 L99 205 L115 185 L130 143 Z" fill="#E3EF27" opacity=".9" />
          <path d="M145 110 Q167 116 176 143 L161 205 L145 185 L130 143 Z" fill="#E3EF27" opacity=".9" />
          <path d="M99 137 Q130 158 161 137 M98 159 Q130 181 162 159 M102 181 Q130 202 158 181" fill="none" stroke="#E3EF27" strokeWidth="2" />
          <path d="M84 143 L57 260 M176 143 L203 260" fill="none" stroke="#E3EF27" strokeWidth="10" strokeLinecap="round" />
          <path d="M57 260 L45 365 M203 260 L215 365" stroke="#E3EF27" strokeWidth="9" strokeLinecap="round" />
          <path d="M108 184 L112 310 L130 337 L148 310 L152 184" fill="none" stroke="#E3EF27" strokeWidth="5" />
          <path d="M105 190 Q130 210 155 190 L149 302 L130 325 L111 302 Z" fill="none" stroke="#E3EF27" strokeWidth="3" />
          <path d="M112 307 L94 455 M148 307 L166 455" fill="none" stroke="#E3EF27" strokeWidth="11" strokeLinecap="round" />
          <path d="M94 455 L83 590 M166 455 L177 590" stroke="#E3EF27" strokeWidth="9" strokeLinecap="round" />
        </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#E3EF27]/25 bg-black/70 px-4 py-2 text-[9px] font-black uppercase tracking-[.3em] text-[#E3EF27]">Muscle protocol • 360°</div>
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
      if (event.clientY <= 0 && !event.relatedTarget) setExitWarning(true);
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
          className="iron-path-cta group flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-5 text-xs font-black uppercase tracking-[.16em] shadow-[0_12px_40px_rgba(255,255,255,.08)] transition hover:-translate-y-1" style={{ background: "#ffffff", backgroundColor: "#ffffff", color: "#000000", opacity: 1 }}
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
            <button onClick={() => setExitWarning(false)} className="mt-7 w-full rounded-2xl border-0 bg-white px-6 py-4 text-xs font-black uppercase tracking-[.15em] !text-black shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-white active:scale-[.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50" style={{ background: "#ffffff", backgroundColor: "#ffffff", color: "#000000", opacity: 1 }}>QUERO GARANTIR MINHA OFERTA</button>
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
        <p className="mt-7 text-5xl font-black tracking-[-.04em] sm:text-7xl">57% OFF</p>
        <p className="mt-5 text-sm text-white/35 line-through">De R$ 79,90</p>
        <p className="mt-1 text-xl font-black uppercase text-white/60">POR APENAS</p>
        <p className="mt-1 text-4xl font-black sm:text-5xl">R$ 34,11</p>
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
          className="final-opportunity-cta mt-9 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-5 text-xs font-black uppercase tracking-[.16em] text-black transition hover:-translate-y-1"
          style={{ background: "#ffffff", backgroundColor: "#ffffff", color: "#000000", opacity: 1 }}
        >
          QUERO GARANTIR A OPORTUNIDADE <ArrowRight size={18} />
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
    <main className="min-h-screen text-white">
      {demoNotice && (
        <div className="fixed bottom-5 left-5 z-[90] max-w-[calc(100vw-40px)] rounded-2xl border border-white/15 bg-black/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:left-7 sm:bottom-7">
          <div className="flex items-center gap-3">
            <div className="purchase-check-circle flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black text-sm font-black">✓</div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.08em] text-white">{demoPurchases[demoPurchaseIndex]} pessoas garantiram</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[.16em] text-white/50">oferta especial</p>
            </div>
          </div>
        </div>
      )}
      <style>{`

        .hero-landing { isolation: isolate; }
        /* Subtle sugarcane-green atmosphere: contrast, depth and corner accents without overpowering the page. */
        main {
          background:
            radial-gradient(ellipse 90% 55% at 8% 8%, rgba(82, 145, 48, .12), transparent 72%),
            radial-gradient(ellipse 75% 50% at 92% 38%, rgba(72, 132, 46, .075), transparent 74%),
            radial-gradient(ellipse 85% 58% at 50% 78%, rgba(45, 98, 38, .07), transparent 76%),
            linear-gradient(180deg, #020302 0%, #050805 32%, #071007 58%, #030503 100%) !important;
          background-attachment: scroll;
        }
        /* Uma única atmosfera contínua: as seções não podem criar blocos pretos/verdes. */
        main > section,
        main > footer,
        main > section[class*="bg-"],
        main > section[class*="border-"],
        main > footer[class*="border-"] {
          background: transparent !important;
          border-top: 0 !important;
          border-bottom: 0 !important;
        }
        main > section::before,
        main > section::after,
        main > footer::before,
        main > footer::after {
          display: none !important;
        }
        /* CTA "QUERO DESCOBRIR MEU CAMINHO": branco sólido, sem transparência. */
        .iron-path-cta,
        .iron-path-cta:hover {
          background: #fff !important;
          background-color: #fff !important;
          color: #000 !important;
          opacity: 1 !important;
          border: 0 !important;
        }
        .iron-path-cta, .iron-path-cta:hover, .iron-path-cta:focus, .iron-path-cta:active { background: #ffffff !important; background-color: #ffffff !important; color: #000000 !important; opacity: 1 !important; }\n        .iron-path-cta svg { color: #000 !important; stroke: #000 !important; }\n        /* Círculo de confirmação da notificação: branco sólido, sem herdar o verde global. */\n        .purchase-check-circle,\n        .purchase-check-circle:hover,\n        .purchase-check-circle:focus,\n        .purchase-check-circle:active {\n          background: #ffffff !important;\n          background-color: #ffffff !important;\n          background-image: none !important;\n          color: #000000 !important;\n          opacity: 1 !important;\n          box-shadow: none !important;\n        }\n        .purchase-check-circle::before,\n        .purchase-check-circle::after {\n          display: none !important;\n        }

        /* CTA final sempre legível. */
        [class*="bg-[#E3EF27]"] {
          background: #fff !important;
          color: #000 !important;
        }
        [class*="bg-[#E3EF27]"] * {
          color: #000 !important;
        }
        section {
          position: relative;
        }
        section > div {
          position: relative;
          z-index: 1;
        }
        #hero-trust-strip {
          background: linear-gradient(90deg, rgba(111, 170, 62, .035), rgba(255,255,255,.025), rgba(111, 170, 62, .08));
          border: 1px solid rgba(166, 229, 101, .05);
        }
        article {
          background:
            linear-gradient(145deg, rgba(145, 215, 82, .025), rgba(255,255,255,.018) 45%, rgba(0,0,0,.18)) !important;
        }
        @media (max-width: 768px) {
          section::before,
          section::after { width: 90px; height: 90px; opacity: .3; }
          section:first-of-type::before { width: 130px; height: 130px; }
        }


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
        [class*="bg-[#E3EF27]"] { background: #fff !important; color: #000 !important; }
        [class*="text-[#E3EF27]"] { color: #fff !important; }
        [class*="border-[#E3EF27]"] { border-color: rgba(255,255,255,.18) !important; }

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
        section:first-of-type { background: transparent !important; }
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
        .story-copy,
        .story-copy:hover {
          background: transparent !important;
          border: 0 !important;
          box-shadow: none !important;
          transform: none !important;
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
          <div className="flex items-center gap-2.5"><img src={ironCoreLogo} alt="Logo IRON CORE" className="h-8 w-8 rounded-md object-contain" /><span className="text-sm font-black tracking-[.3em]">IRON CORE</span></div>
          <a href="#como-funciona" className="bg-transparent !bg-transparent shadow-none text-xs font-bold uppercase tracking-[.2em] text-white/45 hover:text-[#E3EF27]">Como funciona</a>
        </div>
      </nav>

      <section className="reveal-on-scroll relative min-h-screen overflow-hidden pt-16 hero-landing">
<div className="absolute inset-0 bg-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_440px]">
          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[.4em] text-[#E3EF27]">IRON CORE • PROTOCOLO DE EVOLUÇÃO</p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.045em] sm:text-7xl lg:text-[6.5rem]">DO ZERO AO<br/><span className="text-[#E3EF27]">SHAPE DE PRAIA</span></h1>
            <p className="mt-3 text-2xl font-black uppercase leading-[.88] tracking-[-.045em] text-white/70 sm:text-3xl">sem depender de personal.</p>
            <div id="hero-impact-cards" className="mx-auto mt-20 grid w-full max-w-3xl grid-cols-2 gap-2 sm:mt-24 sm:grid-cols-4">
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
            <a href="#como-funciona" className="mx-auto mt-16 inline-flex items-center gap-3 rounded-xl bg-[#E3EF27] px-7 py-4 text-xs font-black uppercase tracking-[.14em] text-black hover:-translate-y-1">Conhecer a Iron Core <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="reveal-on-scroll py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="bg-transparent !bg-transparent shadow-none mt-2 text-3xl font-black uppercase leading-none sm:text-5xl">COMO FUNCIONA A <span className="bg-transparent !bg-transparent shadow-none text-[#E3EF27]">IRON CORE?</span></h2>
          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["01","ENTENDEMOS VOCÊ","Entendemos seus objetivos, sua rotina, seu nível atual e o físico que você quer construir."],
              ["02","IDENTIFICAMOS O QUE VOCÊ PRECISA","Você não precisa ficar tentando descobrir sozinho qual treino seguir ou por onde começar. A partir do seu objetivo, encontramos a direção mais adequada para você."],
              ["03","VOCÊ RECEBE SUA ESTRATÉGIA","Tenha acesso a estratégias de treino e orientação para saber exatamente o que fazer, sem depender de tentativa e erro."],
              ["04","VOCÊ SABE O QUE FAZER","Chega de entrar na academia sem saber qual exercício fazer, quantas séries ou como organizar sua evolução. Você passa a ter um caminho claro para seguir."],
              ["05","VOCÊ EVOLUI COM MAIS CLAREZA","Conforme avança, você entende melhor seu corpo, acompanha sua evolução e sabe quais pontos precisa melhorar."],
              ["06","MENOS COMPLICAÇÃO. MAIS DIREÇÃO.","A Iron Core reúne o conhecimento e as estratégias que você precisa em um só lugar, para que você possa focar no que realmente importa: construir o seu shape."],
            ].map(([number,heading,description]) => <article key={number} className="rounded-2xl border border-white/10 bg-[#090909] p-8">
              <span className="text-sm font-black text-[#E3EF27]">{number}</span>
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
                  <p className="mt-5 text-[10px] font-black uppercase tracking-[.25em] text-[#E3EF27]">{item}</p>
                </div>
              </article>)}
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex gap-2">{testimonials.map((_,i)=><button key={i} onClick={()=>setTestimonialIndex(i)} aria-label={"Item "+(i+1)} className={"h-1.5 rounded-full "+(i===testimonialIndex?"w-8 bg-[#E3EF27]":"w-2 bg-white/20")}/>)}</div>
            <div className="flex gap-2"><button onClick={()=>setTestimonialIndex(v=>Math.max(0,v-1))} className="rounded-full border border-white/10 p-2"><ChevronLeft size={17}/></button><button onClick={()=>setTestimonialIndex(v=>Math.min(testimonials.length-1,v+1))} className="rounded-full border border-white/10 p-2"><ChevronRight size={17}/></button></div>
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="bg-transparent !bg-transparent shadow-none mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">A HISTÓRIA<br/><span className="bg-transparent !bg-transparent shadow-none text-[#E3EF27]">POR TRÁS</span></h2>
              <div className="mt-6 aspect-[4/5] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[.02]">
                <img src={storyPhoto} alt="Foto da história por trás da Iron Core" className="h-full w-full object-cover" />
              </div>
            </div>
            <article className="story-copy bg-transparent text-[13px] leading-[1.45] text-white/60 sm:text-sm sm:leading-[1.55]">
              {story.map((p,i)=><p key={i} className={i===0||i===6||i===11||i===14 ? "mb-2 text-base font-bold leading-[1.35] text-white sm:text-lg" : "mb-2"}>{p}</p>)}
            </article>
          </div>
        </div>
      </section>


      <section id="quiz-iron-core" className="reveal-on-scroll border-t border-white/10 bg-[#050505] py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div id="final-trust-strip" className="mx-auto mb-10 grid max-w-2xl grid-cols-3">
            <div className="px-3 py-4 text-center">
              <p className="text-lg font-black">+5 MIL</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">Alunos</p>
            </div>
            <div className="border-x border-white/20 px-3 py-4 text-center">
              <p className="text-lg font-black">✓ CONFIÁVEL</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">Site seguro</p>
            </div>
            <div className="px-3 py-4 text-center">
              <p className="text-lg font-black">GARANTIA</p>
              <p className="mt-1 text-[9px] font-black uppercase tracking-[.18em] text-white/35">De resultado</p>
            </div>
          </div>
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

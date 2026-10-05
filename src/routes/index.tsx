import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ChevronLeft, Clock3, Dumbbell, Flame, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IronCoreSalesPage,
});

const CHECKOUT_URL = import.meta.env.VITE_IRON_CORE_CHECKOUT_URL || "/checkout";
const TIMER_SECONDS = 2 * 60 * 60 + 37 * 60;

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

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
}

function IronCoreSalesPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showOffer, setShowOffer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    if (typeof window === "undefined") return TIMER_SECONDS;
    const saved = Number(window.localStorage.getItem("iron-core-offer-start"));
    if (!saved) return TIMER_SECONDS;
    return Math.max(0, TIMER_SECONDS - Math.floor((Date.now() - saved) / 1000));
  });

  useEffect(() => {
    if (!showOffer || typeof window === "undefined") return;

    const key = "iron-core-offer-start";
    let startedAt = Number(window.localStorage.getItem(key));

    if (!startedAt) {
      startedAt = Date.now();
      window.localStorage.setItem(key, String(startedAt));
    }

    const tick = () => {
      setTimeLeft(Math.max(0, TIMER_SECONDS - Math.floor((Date.now() - startedAt) / 1000)));
    };

    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [showOffer]);

  const progress = useMemo(
    () => Math.round(((currentQuestion + (answers.length > currentQuestion ? 1 : 0)) / questions.length) * 100),
    [currentQuestion, answers.length],
  );

  const chooseAnswer = (optionIndex: number) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = optionIndex;
    setAnswers(nextAnswers);

    if (currentQuestion < questions.length - 1) {
      window.setTimeout(() => setCurrentQuestion((value) => value + 1), 180);
      return;
    }

    setIsAnalyzing(true);
    window.setTimeout(() => {
      setIsAnalyzing(false);
      setShowOffer(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1600);
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setIsAnalyzing(false);
    setShowOffer(false);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isAnalyzing) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <div className="relative flex min-h-screen items-center justify-center px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,255,0,0.13),transparent_35%)]" />
          <div className="relative z-10 w-full max-w-xl text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#d9ff00]/30 bg-[#d9ff00]/10 shadow-[0_0_80px_rgba(217,255,0,0.15)]">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/15 border-t-[#d9ff00]" />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d9ff00]">IRON CORE</p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Analisando suas respostas...</h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/55">
              Cruzando seu objetivo, momento atual e nível de dedicação para direcionar o melhor caminho para você.
            </p>
            <div className="mx-auto mt-8 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 animate-pulse rounded-full bg-[#d9ff00]" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (showOffer) {
    return (
      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,255,0,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-14">
          <header className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9ff00] text-black">
                <Dumbbell size={19} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-black uppercase tracking-[0.28em]">IRON CORE</span>
            </div>
            <div className="hidden items-center gap-2 text-xs font-semibold text-white/45 sm:flex">
              <Lock size={14} /> Condição segura de entrada
            </div>
          </header>

          <section className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9ff00]/20 bg-[#d9ff00]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#d9ff00]">
              <Sparkles size={14} /> Resultado da sua jornada
            </div>
            <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl">
              Seu caminho está pronto. <span className="text-[#d9ff00]">🔥</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Com base nas suas respostas, encontramos o melhor caminho para você começar a construir o shape que deseja.
            </p>
          </section>

          <section className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur sm:p-10">
            <div className="rounded-2xl border border-[#d9ff00]/15 bg-[#d9ff00]/[0.045] p-5 text-center sm:p-7">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d9ff00]">E por ter chegado até aqui...</p>
              <h2 className="mt-3 text-2xl font-black uppercase sm:text-4xl">Você liberou uma condição especial de entrada</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/55">
                Uma condição criada para novos alunos que estão começando agora, permitindo acesso ao método por um valor muito menor durante esta campanha de entrada.
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
              <div className="text-center md:text-left">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d9ff00] px-3 py-1.5 text-xs font-black uppercase text-black">
                  65% OFF
                </div>
                <p className="text-sm text-white/40 line-through">De: R$ 79,90</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/50">Por apenas:</p>
                <p className="mt-1 text-6xl font-black tracking-tight text-[#d9ff00] sm:text-7xl">R$ 27,31</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-white/45">Condição única de entrada</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-[#d9ff00]" size={22} />
                  <div>
                    <p className="text-sm font-bold">Você não precisa pagar o valor integral para começar.</p>
                    <p className="mt-1 text-xs leading-5 text-white/45">
                      Esta condição foi liberada exclusivamente nesta jornada.
                    </p>
                  </div>
                </div>
                <div className="my-6 h-px bg-white/10" />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d9ff00]">Sua condição especial termina em:</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Clock3 size={17} className="text-white/50" />
                      <span className="font-mono text-3xl font-black tabular-nums sm:text-4xl">{formatTime(timeLeft)}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[11px] leading-5 text-white/35">
                  Depois que o contador chegar a zero, essa condição promocional sairá do ar.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={CHECKOUT_URL}
                className="group flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#d9ff00] px-6 text-center text-sm font-black uppercase tracking-[0.08em] text-black shadow-[0_0_40px_rgba(217,255,0,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(217,255,0,0.2)]"
              >
                Quero começar meu shape
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </a>
              <p className="mt-3 text-center text-xs text-white/35">Acesso imediato à Iron Core.</p>
            </div>
          </section>

          <footer className="mt-10 text-center">
            <button onClick={restartQuiz} className="text-xs font-semibold text-white/30 transition hover:text-white/70">
              Refazer quiz
            </button>
          </footer>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(217,255,0,0.1),transparent_38%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-5 py-8 sm:px-8 sm:py-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9ff00] text-black">
              <Dumbbell size={19} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.28em]">IRON CORE</span>
          </div>
          <div className="hidden items-center gap-2 text-xs font-semibold text-white/40 sm:flex">
            <ShieldCheck size={14} /> Uma jornada pensada para você
          </div>
        </header>

        {!started ? (
          <section className="flex flex-1 items-center justify-center py-14 sm:py-20">
            <div className="w-full max-w-3xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9ff00]/20 bg-[#d9ff00]/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d9ff00]">
                <Flame size={14} /> IRON CORE • PROTOCOLO DE EVOLUÇÃO
              </div>
              <h1 className="text-5xl font-black uppercase leading-[0.94] tracking-[-0.035em] sm:text-7xl">
                Descubra o melhor caminho
                <span className="block text-[#d9ff00]">para o seu shape</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Antes de começar, queremos entender melhor o seu momento, seus objetivos e o que você realmente busca.
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/35">
                Responda algumas perguntas rápidas e, no final, vamos direcionar o melhor shape para você.
              </p>

              <button
                onClick={() => setStarted(true)}
                className="group mx-auto mt-9 flex min-h-16 w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-[#d9ff00] px-7 text-sm font-black uppercase tracking-[0.08em] text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(217,255,0,0.2)]"
              >
                Quero descobrir meu caminho
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
              <p className="mt-3 text-xs text-white/30">Leva apenas alguns minutos.</p>

              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 text-left">
                {["Treino direcionado", "Estratégia prática", "Caminho claro"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/8 bg-white/[0.025] p-4">
                    <Check size={15} className="mb-3 text-[#d9ff00]" />
                    <p className="text-xs font-bold text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="flex flex-1 items-center justify-center py-10 sm:py-16">
            <div className="w-full max-w-3xl">
              <div className="mb-8">
                <div className="mb-3 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-white/35">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{progress}% concluído</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#d9ff00] transition-all duration-500"
                    style={{ width: progress + "%" }}
                  />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur sm:p-10">
                <button
                  onClick={() => {
                    if (currentQuestion === 0) setStarted(false);
                    else setCurrentQuestion((value) => value - 1);
                  }}
                  className="mb-8 inline-flex items-center gap-1 text-xs font-bold text-white/35 transition hover:text-white"
                >
                  <ChevronLeft size={15} /> Voltar
                </button>

                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#d9ff00]">Seu momento</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  {questions[currentQuestion].title}
                </h2>
                <p className="mt-3 text-sm text-white/35">Escolha a alternativa que mais representa você.</p>

                <div className="mt-8 grid gap-3">
                  {questions[currentQuestion].options.map((option, index) => {
                    const selected = answers[currentQuestion] === index;
                    return (
                      <button
                        key={option}
                        onClick={() => chooseAnswer(index)}
                        className={
                          "group flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-semibold transition duration-200 " +
                          (selected
                            ? "border-[#d9ff00] bg-[#d9ff00]/10 text-white"
                            : "border-white/10 bg-black/20 text-white/70 hover:border-white/25 hover:bg-white/[0.055] hover:text-white")
                        }
                      >
                        <span>{option}</span>
                        <span
                          className={
                            "ml-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition " +
                            (selected ? "border-[#d9ff00] bg-[#d9ff00] text-black" : "border-white/20 text-transparent")
                          }
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

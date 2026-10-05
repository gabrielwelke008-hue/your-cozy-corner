import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, ShieldCheck, Sparkles, Timer, Utensils, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: IronCoreSalesPage });

const story = [
  "Tudo começa com uma inquietação.",
  "Sempre acreditei que grandes transformações não acontecem simplesmente porque alguém decidiu mudar. Elas começam quando surge uma insatisfação com o lugar onde estamos e uma vontade quase impossível de ignorar de descobrir até onde podemos chegar.",
  "O esporte sempre esteve presente na minha vida. Futebol, artes marciais, basquete… mas foi na musculação que encontrei algo diferente. Quanto mais eu treinava, mais queria entender. Por que algumas pessoas evoluíam tanto enquanto outras passavam anos se esforçando e continuavam sem os resultados que buscavam?",
  "Foi essa pergunta que me levou a estudar Educação Física.",
  "Mas, quanto mais eu aprendia, mais percebia que o treinamento era apenas uma parte da transformação. Comecei a me aprofundar em nutrição, estratégia e em tudo aquilo que poderia fazer o esforço de uma pessoa realmente se transformar em resultado.",
  "E então percebi algo que me marcou:",
  "a maioria das pessoas não desiste porque não quer mudar. Elas desistem porque não sabem exatamente como mudar.",
  "Foi nesse momento que nasceu uma ideia.",
  "Por que não reunir todo esse conhecimento em um lugar só? Por que não tornar acessível aquilo que, durante tanto tempo, parecia depender de personal, experiência ou de passar anos errando até descobrir o que realmente funciona?",
  "Foi assim que comecei a reunir profissionais que compartilhavam da mesma visão.",
  "E, pouco a pouco, aquela ideia ganhou forma.",
  "Nascia a Iron Core.",
  "Não como mais um programa de treino, mas como a materialização de tudo aquilo que eu gostaria que alguém tivesse colocado nas minhas mãos quando comecei: um caminho claro para quem quer transformar o próprio corpo, mas não sabe por onde começar.",
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

function IronCoreSalesPage() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    "ESPAÇO PARA FOTO DE ANTES E DEPOIS",
    "ESPAÇO PARA MENSAGEM DE CLIENTE",
    "ESPAÇO PARA OUTRO RESULTADO",
    "ESPAÇO PARA OUTRO DEPOIMENTO",
  ];

  const cards = [
    [Dumbbell, "Treino específico para você", "Imagine ter um treino específico para você por um profissional, sem te cobrar um absurdo por isso."],
    [Zap, "Treine de forma rápida", "Você não precisa correr atrás de personal para tirar dúvidas. Já te oferecemos respostas e direção."],
    [Timer, "Treino que cabe na sua rotina", "Um treino rápido e pensado para o seu dia a dia, para que o treino não seja mais um fardo da sua correria."],
    [ShieldCheck, "Garantia de 1 semana", "Se o que entregamos não fizer sentido para você neste momento, devolvemos seu dinheiro dentro do período de garantia."],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <style>{`
        html { scroll-behavior: smooth; background: #000; }
        body { margin: 0; background: #000; }
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;600;700;800;900&display=swap');

        @keyframes anatomySpin { 0%,100% { transform: rotateY(-8deg); } 50% { transform: rotateY(8deg); } }
        @keyframes anatomyBreath { 0%,100% { transform: scaleY(1) scaleX(1); } 50% { transform: scaleY(1.018) scaleX(1.008); } }
        @keyframes anatomyGlow { 0%,100% { opacity:.22; transform:scale(.98); } 50% { opacity:.5; transform:scale(1.03); } }

        .anatomy-spin { animation: anatomySpin 7s ease-in-out infinite; transform-style: preserve-3d; }
        .anatomy-breath { animation: anatomyBreath 4.2s ease-in-out infinite; transform-origin:center bottom; }
        .anatomy-spin svg { filter: grayscale(1) contrast(1.12) brightness(1.12) drop-shadow(0 24px 45px rgba(255,255,255,.08)); }
        .anatomy-spin svg * { stroke: #c8c8c8 !important; }
        .anatomy-spin svg path[fill] { fill: #a9a9a9 !important; }
        .anatomy-spin + div { color: #aaa !important; border-color: rgba(255,255,255,.14) !important; }

        main {
          position: relative;
          isolation: isolate;
          background:
            radial-gradient(circle at 50% 12%, rgba(255,255,255,.045), transparent 30%),
            #000 !important;
          font-family: 'Montserrat', Arial, sans-serif;
        }
        main::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .15;
          background-image:
            radial-gradient(ellipse at 20% 30%, rgba(255,255,255,.11) 0 1px, transparent 2px),
            radial-gradient(ellipse at 80% 70%, rgba(255,255,255,.07) 0 1px, transparent 2px),
            linear-gradient(115deg, transparent 20%, rgba(255,255,255,.035) 21%, transparent 22%, transparent 48%, rgba(255,255,255,.025) 49%, transparent 50%);
          background-size: 140px 110px, 180px 150px, 420px 360px;
          mix-blend-mode: screen;
        }

        main > nav {
          background: rgba(0,0,0,.82) !important;
          border-color: rgba(255,255,255,.12) !important;
          backdrop-filter: blur(18px);
        }
        main > nav a { color: rgba(255,255,255,.55) !important; }
        main > nav a:hover { color: #fff !important; }
        main > nav > div > div:first-child > div {
          background: #fff !important;
          color: #000 !important;
        }

        section { position: relative; }
        section > div, footer > div { position: relative; z-index: 2; }

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
          font-family: 'Anton', 'Montserrat', Arial, sans-serif;
          font-weight: 900 !important;
          letter-spacing: -.035em;
        }
        h1 {
          text-shadow: 0 10px 45px rgba(255,255,255,.06);
        }
        h2 { letter-spacing: -.045em; }

        /* Hero: sculpture-card / dark luxury treatment. */
        section:first-of-type {
          background:
            radial-gradient(ellipse at 72% 50%, rgba(255,255,255,.075), transparent 23%),
            linear-gradient(180deg,#000,#030303 60%,#000) !important;
        }
        section:first-of-type > div:last-child {
          grid-template-columns: minmax(0,1fr) 440px;
        }
        section:first-of-type .anatomical-model,
        section:first-of-type .relative.mx-auto {
          border-radius: 32px;
        }
        section:first-of-type .relative.mx-auto::before {
          content: "";
          position: absolute;
          inset: 4%;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 32px;
          box-shadow: 0 0 90px rgba(255,255,255,.05), inset 0 0 70px rgba(255,255,255,.025);
          pointer-events: none;
          z-index: 0;
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

        @media (max-width: 768px) {
          section:first-of-type > div:last-child { grid-template-columns: 1fr !important; }
          section:first-of-type .relative.mx-auto { width: min(86vw, 360px); }
          h1 { font-size: clamp(3.4rem, 16vw, 6rem) !important; }
          h2 { font-size: clamp(2.7rem, 12vw, 4.5rem) !important; }
        }
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9ff00] text-black"><Dumbbell size={19}/></div><span className="text-sm font-black tracking-[.3em]">IRON CORE</span></div>
          <a href="#como-funciona" className="text-xs font-bold uppercase tracking-[.2em] text-white/45 hover:text-[#d9ff00]">Como funciona</a>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(217,255,0,.11),transparent_30%),linear-gradient(120deg,#050505,#090b03,#050505)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_440px]">
          <div className="relative z-10">
            <p className="mb-6 text-[10px] font-black uppercase tracking-[.4em] text-[#d9ff00]">IRON CORE • PROTOCOLO DE EVOLUÇÃO</p>
            <h1 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.045em] sm:text-7xl lg:text-[6.5rem]">DO ZERO AO<br/><span className="text-[#d9ff00]">SHAPE DE PRAIA</span></h1>
            <p className="mt-7 text-xl font-semibold text-white/70 sm:text-2xl">sem depender de personal.</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">Treinamento pensado para a sua realidade, com direção profissional e uma estratégia que cabe na sua rotina.</p>
            <a href="#impactamos" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d9ff00] px-7 py-4 text-xs font-black uppercase tracking-[.14em] text-black hover:-translate-y-1">Conhecer a Iron Core <ArrowRight size={17}/></a>
          </div>
          <AnatomicalModel />
        </div>
      </section>

      <section id="impactamos" className="border-t border-white/10 bg-[#080808] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-[#d9ff00]">02 • O impacto</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">O QUE IMPACTAMOS<br/><span className="text-white/35">NA SUA VIDA</span></h2>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {cards.map(([Icon,title,text],i) => {
              const I = Icon as typeof Dumbbell;
              return <article key={String(title)} className="rounded-2xl border border-white/10 bg-white/[.025] p-7 hover:border-[#d9ff00]/30">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#d9ff00]/20 bg-[#d9ff00]/5 text-[#d9ff00]"><I size={21}/></div>
                <span className="text-[10px] font-black text-white/20">0{i+1}</span>
                <h3 className="mt-2 text-xl font-black uppercase">{String(title)}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{String(text)}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-[#d9ff00]">03 • O método</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">COMO<br/><span className="text-[#d9ff00]">FUNCIONA</span></h2>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {[
              ["01","Você responde","Entendemos seus objetivos, sua rotina, seu nível e o físico que você quer construir."],
              ["02","Recebe sua direção","Você recebe uma estratégia de treino pensada para o seu momento, sem complicação desnecessária."],
              ["03","Executa e evolui","Você segue o caminho com clareza, economiza tempo e ajusta sua evolução com muito mais direção."],
            ].map(([n,t,d]) => <article key={n} className="rounded-2xl border border-white/10 bg-[#090909] p-8">
              <span className="text-sm font-black text-[#d9ff00]">{n}</span>
              <h3 className="mt-16 text-2xl font-black uppercase">{t}</h3>
              <p className="mt-4 text-sm leading-7 text-white/45">{d}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#080808] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[10px] font-black uppercase tracking-[.35em] text-[#d9ff00]">04 • Resultados</p>
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

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.35em] text-[#d9ff00]">05 • A origem</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">A HISTÓRIA<br/><span className="text-[#d9ff00]">POR TRÁS</span></h2>
              <div className="mt-10 aspect-[4/5] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[.02]">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center"><Utensils size={42} className="text-white/10"/><p className="mt-4 text-[10px] font-black uppercase tracking-[.25em] text-white/25">Espaço reservado para a foto</p><p className="mt-2 text-xs text-white/20">Envie a foto e ela será colocada aqui.</p></div>
              </div>
            </div>
            <article className="text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
              {story.map((p,i)=><p key={i} className={i===0||i===6||i===11||i===14 ? "mb-7 text-xl font-bold leading-8 text-white sm:text-2xl" : "mb-7"}>{p}</p>)}
            </article>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto max-w-7xl px-5 text-center text-[10px] font-black uppercase tracking-[.25em] text-white/25 sm:px-8">IRON CORE • Direção certa. Execução consistente. Evolução.</div></footer>
    </main>
  );
}

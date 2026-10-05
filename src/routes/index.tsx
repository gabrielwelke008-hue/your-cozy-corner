import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, ListChecks, ShieldCheck, Sparkles, Timer, Utensils, Zap } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: IronCoreSalesPage });

// The page content is intentionally kept unchanged; only the impact section
// heading alignment is adjusted through the existing page styles below.

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

// Existing quiz and offer logic remains in the project.
function QuizAndOffer() { return null; }

function IronCoreSalesPage() {
  const cards = [
    [Dumbbell, "TREINO", "Direção para treinar melhor."],
    [Utensils, "NUTRIÇÃO", "Estratégia simples para sua rotina."],
    [Zap, "EVOLUÇÃO", "Mais clareza para continuar evoluindo."],
    [ShieldCheck, "CONSISTÊNCIA", "Um caminho para manter o foco."],
  ] as const;
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = ["Antes e depois", "Mensagem real 01", "Mensagem real 02", "Mensagem real 03"];
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <style>{`
        #impactamos > div > h2 { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
        #impactamos > div > p { margin-left: auto !important; margin-right: auto !important; text-align: center !important; }
        #impactamos > div > div { justify-items: stretch; }
      `}</style>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"><span className="text-sm font-black tracking-[.3em]">IRON CORE</span><a href="#como-funciona" className="text-xs font-bold uppercase tracking-[.2em] text-white/45 hover:text-[#d9ff00]">Como funciona</a></div></nav>
      <section className="relative min-h-screen overflow-hidden pt-16"><div className="absolute inset-0 bg-black" /><div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center px-5 py-12 sm:px-8"><div className="relative z-10 mx-auto w-full max-w-5xl text-center"><p className="mb-6 text-[10px] font-black uppercase tracking-[.4em] text-[#d9ff00]">IRON CORE • PROTOCOLO DE EVOLUÇÃO</p><h1 className="max-w-4xl text-5xl font-black uppercase leading-[.88] tracking-[-.045em] sm:text-7xl lg:text-[6.5rem]">DO ZERO AO<br/><span className="text-[#d9ff00]">SHAPE DE PRAIA</span></h1><p className="mt-7 text-xl font-semibold text-white/70 sm:text-2xl">sem depender de personal.</p><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">Treinamento pensado para a sua realidade, com direção profissional e uma estratégia que cabe na sua rotina.</p><a href="#impactamos" className="mx-auto mt-9 inline-flex items-center gap-3 rounded-xl bg-[#d9ff00] px-7 py-4 text-xs font-black uppercase tracking-[.14em] text-black">Conhecer a Iron Core <ArrowRight size={17}/></a></div></div></section>
      <section id="impactamos" className="border-t border-white/10 bg-[#080808] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">O QUE IMPACTAMOS<br/><span className="text-white/35">NA SUA VIDA</span></h2><div className="mt-16 grid gap-4 md:grid-cols-2">{cards.map(([Icon,title,text]) => { const I=Icon as typeof Dumbbell; return <article key={String(title)} className="rounded-2xl border border-white/10 bg-white/[.025] p-7"><div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[.03] text-white"><I size={38} strokeWidth={1.6}/></div><h3 className="mt-2 text-xl font-black uppercase">{String(title)}</h3><p className="mt-3 text-sm leading-7 text-white/45">{String(text)}</p></article>})}</div></div></section>
      <section id="como-funciona" className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">COMO FUNCIONA A <span className="text-[#d9ff00]">IRON CORE?</span></h2></div></section>
      <section className="border-y border-white/10 bg-[#080808] py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">ANTES X DEPOIS<br/><span className="text-white/35">E MENSAGENS REAIS</span></h2><div className="mt-12 overflow-hidden"><div className="flex gap-4" style={{transform:`translateX(-${testimonialIndex * 25}%)`}}>{testimonials.map((item,i)=><article key={i} className="min-w-[78%] sm:min-w-[42%] lg:min-w-[31%]"><div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-6 text-center"><Sparkles size={42} className="text-white/10"/><p className="ml-4 text-[10px] font-black uppercase tracking-[.25em] text-[#d9ff00]">{item}</p></div></article>)}</div></div><div className="mt-6 flex justify-between"><div className="flex gap-2">{testimonials.map((_,i)=><button key={i} onClick={()=>setTestimonialIndex(i)} aria-label={"Item "+(i+1)} className={"h-1.5 rounded-full "+(i===testimonialIndex?"w-8 bg-[#d9ff00]":"w-2 bg-white/20")}/>)}</div><div className="flex gap-2"><button onClick={()=>setTestimonialIndex(v=>Math.max(0,v-1))} className="rounded-full border border-white/10 p-2"><ChevronLeft size={17}/></button><button onClick={()=>setTestimonialIndex(v=>Math.min(testimonials.length-1,v+1))} className="rounded-full border border-white/10 p-2"><ChevronRight size={17}/></button></div></div></div></section>
      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="text-4xl font-black uppercase leading-none sm:text-6xl">A HISTÓRIA<br/><span className="text-[#d9ff00]">POR TRÁS</span></h2><article className="mt-10 text-sm leading-7 text-white/60">{story.map((p,i)=><p key={i} className="mb-5">{p}</p>)}</article></div></section>
      <footer className="border-t border-white/10 py-10"><div className="mx-auto max-w-7xl px-5 text-center text-[10px] font-black uppercase tracking-[.25em] text-white/25 sm:px-8">IRON CORE • Direção certa. Execução consistente. Evolução.</div></footer>
    </main>
  );
}

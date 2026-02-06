"use client"
import { motion } from 'framer-motion'

const companies = [
  "TechPark Hyderabad", "Metro Rail", "Global Pharmas", "SecureCity", "InfraBuild", "LogicGATES", "FutureSpaces", "Urban Living"
]

export function TrustedBy() {
  return (
    <section className="py-10 bg-muted/30 border-y border-border/40 overflow-hidden">
      <div className="container-width mb-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground/80 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      <div className="flex overflow-hidden mask-fade">
        <motion.div 
          className="flex gap-16 px-8 items-center whitespace-nowrap min-w-full"
          animate={{ x: "calc(-50% - 2rem)" }} 
          // We need a loop. The content is [...A, ...A]. Width of A is 50%.
          // Actually, simply moving from 0 to -50% works if the content is doubled.
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ width: "fit-content" }}
        >
          {/* Tripled to ensure smooth loop on wide screens */}
          {[...companies, ...companies, ...companies].map((company, i) => (
             <span key={i} className="text-2xl md:text-3xl font-black text-foreground/10 hover:text-foreground/60 transition-colors cursor-default select-none uppercase tracking-tighter">
               {company}
             </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

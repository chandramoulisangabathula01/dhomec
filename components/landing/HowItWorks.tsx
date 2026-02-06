
export function HowItWorks() {
    const steps = [
        { num: "01", title: "Consultation", desc: "We analyze your site requirements, traffic flow, and security needs to recommend the perfect solution." },
        { num: "02", title: "Installation", desc: "Our expert technicians handle the complete installation and configuration with minimal disruption to your operations." },
        { num: "03", title: "Support", desc: "Enjoy complete peace of mind with our comprehensive warranty, AMC packages, and rapid local support." }
    ]
    return (
        <section className="py-24 bg-background border-b border-border/40">
            <div className="container-width">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Process</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">How We Work</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
                   {/* Connector Line (Desktop) */}
                   <div className="hidden md:block absolute top-[3rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 border-t border-dashed border-primary/50" />
                   
                   {steps.map((s, i) => (
                       <div key={i} className="relative flex flex-col items-center text-center group">
                           <div className="w-24 h-24 rounded-full bg-card border-4 border-muted group-hover:border-primary/50 transition-colors flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 duration-300">
                               <span className="text-3xl font-black text-muted-foreground/50 group-hover:text-primary transition-colors">{s.num}</span>
                           </div>
                           <h3 className="text-xl font-bold mb-4 text-foreground">{s.title}</h3>
                           <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{s.desc}</p>
                       </div>
                   ))}
                </div>
            </div>
        </section>
    )
}

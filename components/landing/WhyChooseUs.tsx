import { ShieldCheck, Zap, Wrench, Clock } from 'lucide-react'

const features = [
  { 
    icon: ShieldCheck, 
    title: "Unmatched Reliability", 
    desc: "Industrial-grade components designed to withstand harsh environments and 24/7 continuous operation." 
  },
  { 
    icon: Zap, 
    title: "Smart Integration", 
    desc: "Seamlessly integrates with your existing security, RFID, and biometric access control infrastructure." 
  },
  { 
    icon: Wrench, 
    title: "Low Maintenance", 
    desc: "Engineered for durability with brushless DC motors and self-lubricating mechanisms." 
  },
  { 
    icon: Clock, 
    title: "Rapid Local Support", 
    desc: "Based in Hyderabad, we provide swift installation, AMC ensuring minimal downtime." 
  },
]

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Subtle background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-width relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Our Advantage</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Why Choose Dhomec?</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We combine engineering excellence with deep local expertise to deliver access control solutions that just work.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                             <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                 <f.icon className="h-6 w-6 text-primary" />
                             </div>
                             <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                             <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

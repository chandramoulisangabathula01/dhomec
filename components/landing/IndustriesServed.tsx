import { Building2, Plane, Factory, School, ShoppingCart, Warehouse } from 'lucide-react'

const industries = [
    { name: "Corporate Parks", icon: Building2 },
    { name: "Airports & Transport", icon: Plane },
    { name: "Industrial Plants", icon: Factory },
    { name: "Educational Inst.", icon: School },
    { name: "Malls & Retail", icon: ShoppingCart },
    { name: "Logistics & Warehousing", icon: Warehouse },
]

export function IndustriesServed() {
    return (
        <section className="py-24 bg-muted/30 border-y border-border/40">
            <div className="container-width">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wide text-sm uppercase mb-2 block">Sectors</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Industries Served</h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">Tailored automation solutions for diverse operational environments across Hyderabad.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {industries.map((ind, i) => (
                        <div key={i} className="bg-card border border-border p-6 rounded-xl text-center hover:border-primary hover:shadow-lg transition-all group cursor-default">
                            <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors group-hover:scale-110 duration-300">
                                <ind.icon className="h-7 w-7 text-primary/70 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">{ind.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function CallToAction() {
    return (
        <section className="py-24 relative overflow-hidden bg-primary">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-primary">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                 {/* Radial gradient to soften edges */}
                 <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-80"></div>
            </div>
            
            <div className="container-width relative z-10 text-center text-primary-foreground">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to upgrade your security?</h2>
                <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get a custom quote for your industrial automation needs today. Our team in Hyderabad is ready to assist you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg h-14 px-8 font-bold text-primary hover:bg-white shadow-lg shadow-black/10">
                            Request a Quote
                        </Button>
                    </Link>
                    <Link href="/products">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent hover:text-white hover:border-primary-foreground">
                            Browse Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

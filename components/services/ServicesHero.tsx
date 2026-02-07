
export function ServicesHero() {
  return (
    <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_scroll/3.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container-width relative z-10 text-center">
            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">End-to-End Support</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Beyond products, we deliver peace of mind. From consulting and installation to lifetime support, Dhomec is your reliable automation partner.
            </p>
        </div>
    </section>
  );
}

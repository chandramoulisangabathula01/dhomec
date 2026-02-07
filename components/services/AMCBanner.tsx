import Link from "next/link";

export function AMCBanner() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-width">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100/50">
                <div className="md:w-2/3">
                    <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Annual Maintenance Contract</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Protect Your Investment with Dhomec Care™</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Get priority support, unlimited breakdown visits, and free spare part replacements* with our comprehensive AMC packages. Ensure zero downtime for your critical access points.
                    </p>
                </div>
                <div className="md:w-1/3 text-right">
                    <Link href="/contact">
                        <button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-sm font-bold text-lg shadow-lg transition-all">
                            Get AMC Quote
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}

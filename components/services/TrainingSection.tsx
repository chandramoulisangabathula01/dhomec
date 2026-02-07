import Image from "next/image";
import { Settings, Activity } from "lucide-react";

export function TrainingSection() {
  return (
    <section className="py-24">
         <div className="container-width grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                 <Image 
                    src="/images/hero_scroll/5.png" 
                    alt="Technical Training" 
                    fill
                    className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-bold text-lg">Dhomec Academy</p>
                    <p className="text-sm opacity-80">Hyderabad Training Center</p>
                 </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Training & Certification</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    We don't just sell boxes; we transfer knowledge. We conduct regular training workshops for Dealer technicians, system integrators, and end-user facility managers.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                         <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                            <Settings className="h-5 w-5 text-red-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900">Installation Workshops</h4>
                            <p className="text-sm text-slate-600">Hands-on training for mechanical fixing and electrical wiring.</p>
                         </div>
                    </div>
                    <div className="flex items-start">
                         <div className="bg-red-100 p-2 rounded-lg mr-4 mt-1">
                            <Activity className="h-5 w-5 text-red-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900">Advanced Programming</h4>
                            <p className="text-sm text-slate-600">Mastering control units, logic functions, and troubleshooting.</p>
                         </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  );
}

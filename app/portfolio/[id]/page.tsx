import { Header } from "@/components/Header";
import { FooterModern } from "@/components/landing/FooterModern";
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Extended portfolio project details for case study pages
const projectDetails = [
  {
    id: 1,
    title: "Luxury Villa Sliding Gate",
    category: "Residential",
    location: "Jubilee Hills, Hyderabad",
    date: "Dec 2023",
    image: "/images/motorline-jag-automate-swing-gates-500x500.webp",
    description: "Installation of KINGgates Dynamos XL for a 1200kg custom iron gate with smartphone control integration.",
    challenge: "The client needed a heavy-duty automation solution for a custom-designed 1200kg wrought iron gate. The system required silent operation and integration with the home's existing smart security ecosystem.",
    solution: "We deployed the Dynamos XL 1800 from KINGgates, known for its powerful mechanics and silent performance. We integrated the STARG8 control unit with the CLAVIS Wi-Fi module, allowing the owner to control the gate from anywhere via smartphone.",
    features: [
        "Dynamos XL 1800 Motor",
        "CLAVIS Wi-Fi Module",
        "VIKY 30 Safety Photocells",
        "Custom Steel Rack Installation"
    ],
    gallery: [
        "/images/motorline-lince-automate-swing-gates-500x500.webp",
        "/images/motorline-puma-automate-swing-gates-500x500.webp",
        "/images/motorline-jag-automate-swing-gates-500x500.webp"
    ]
  },
  {
    id: 2,
    title: "Tech Park Traffic Barriers",
    category: "Commercial",
    location: "HITEC City, Hyderabad",
    date: "Nov 2023",
    image: "/images/moterline-turbo-automatic-barrier-500x500.webp",
    description: "Deployed 8 units of Wide M automatic barriers with RFID long-range readers for employee entry management.",
    challenge: "Managing high-volume traffic during peak hours for a tech park with 5000+ employees. The system needed fast opening times (under 3s) and seamless RFID tag reading.",
    solution: "We installed 8 Wide M barriers synced with UHF Long Range Readers. The barriers were configured for 'master/slave' operation to handle wide lanes efficiently.",
    features: [
        "Wide M Barriers (4m)",
        "UHF Long Range Readers",
        "Loop Detectors for Safety",
        "Anti-passback Configuration"
    ],
    gallery: [
        "/images/moterline-sigma-x-electromechanical-barrier-500x500.webp",
        "/images/moterline-turbo-automatic-barrier-500x500 (1).webp",
        "/images/moterline-zuma-electromechanical-barrier-500x500.webp"
    ]
  },
  {
    id: 3,
    title: "Pharmaceutical Plant High-Speed Doors",
    category: "Industrial",
    location: "Pharma City, Hyderabad",
    date: "Oct 2023",
    image: "/images/moterline-fix-roll-up-rapid-door-500x500.webp",
    description: "Installed clean-room compliant rapid roll-up doors with interlock systems for air-lock efficiency.",
    challenge: "Maintaining strict air quality and temperature control in a pharmaceutical manufacturing zone while allowing forklift traffic.",
    solution: "High-speed PVC roll-up doors with a self-repairing zipper system were installed. We programmed an interlock logic where Door A opens only when Door B is closed.",
    features: [
        "Self-repairing PVC Curtain",
        "Opening Speed: 2.0 m/s",
        "Interlock Logic Control",
        "Radar & Loop Activation"
    ],
    gallery: [
        "/images/moterline-pile-roll-up-rapid-door-500x500.webp",
        "/images/moterline-fix-roll-up-rapid-door-500x500 (1).webp",
        "/images/moterline-fix-roll-up-rapid-door-500x500 (2).webp"
    ]
  },
  {
    id: 4,
    title: "Shopping Mall Rolling Shutters",
    category: "Commercial",
    location: "Banjara Hills, Hyderabad",
    date: "Sep 2023",
    image: "/images/moterline-pile-roll-up-rapid-door-500x500.webp",
    description: "Automated perforated rolling shutters for 20+ retail outlets ensuring security and visibility after hours.",
    challenge: "Retailers wanted high visibility for window shopping even when the mall was closed, without compromising on theft protection.",
    solution: "We customized perforated steel rolling shutters automated with central motors. A group command system was set up for mall security to open/close all shutters simultaneously during emergencies.",
    features: [
        "Perforated Steel Slats",
        "Central Motors with Brake",
        "Group Command Console",
        "Manual Override System"
    ],
    gallery: [
        "/images/moterline-rosso-evo-motor-sectional-door-500x500.webp",
        "/images/moterline-rosso-pro-motor-sectional-door-500x500.webp",
        "/images/moterline-kvm25-motor-sectional-door-500x500.webp"
    ]
  },
  {
    id: 5,
    title: "Apartment Complex Swing Gates",
    category: "Residential",
    location: "Gachibowli, Hyderabad",
    date: "Aug 2023",
    image: "/images/motorline-lince-automate-swing-gates-500x500.webp",
    description: "Retrofit of Linear 400 telescopic arm motors on existing heavy wooden gates.",
    challenge: "Automating heavy, aesthetic wooden gates without altering their visual appeal. The pillars were wide, requiring specific geometry.",
    solution: "Linear 400 telescopic rams were chosen for their sleek profile and power. We used custom brackets to achieve the correct leverage angles on the wide pillars.",
    features: [
        "Linear 400 Telescopic Rams",
        "Custom Geometry Brackets",
        "Stylo 4-channel Remotes",
        "Electric Lock Integration"
    ],
    gallery: [
        "/images/motorline-lince-automate-swing-gates-500x500 (1).webp",
        "/images/motorline-puma-automate-swing-gates-500x500 (1).webp",
        "/images/motorline-jag-automate-swing-gates-500x500.webp"
    ]
  },
  {
    id: 6,
    title: "Embassy Perimeter Bollards",
    category: "Government",
    location: "New Delhi",
    date: "Jul 2023",
    image: "/images/moterline-mpie10-stainless-steel-bollards-500x500.webp",
    description: "High-security crash-rated hydraulic bollards with emergency fast operate function.",
    challenge: "Creating a terror-proof perimeter for a high-risk diplomatic zone that could stop authorized vehicles while allowing pedestrian flow.",
    solution: "K4 rated hydraulic bollards were installed with an EFO (Emergency Fast Operation) unit that raises the bollards in 1.5 seconds.",
    features: [
        "K4 Crash Rated Bollards",
        "EFO (1.5s Rise Time)",
        "Traffic Light Integration",
        "UPS Power Backup"
    ],
    gallery: [
        "/images/moterline-mpie10-stainless-steel-bollards-500x500 (1).webp",
        "/images/moterline-mpie10-stainless-steel-bollards-500x500 (2).webp",
        "/images/motorline-mpie10-stainless-steel-bollards-500x500.webp"
    ]
  },
  {
    id: 7,
    title: "Warehouse Loading Dock",
    category: "Industrial",
    location: "Shamshabad, Hyderabad",
    date: "Jun 2023",
    image: "/images/moterline-rosso-evo-motor-sectional-door-500x500.webp",
    description: "Download dock levelers and sectional doors for a 50,000 sqft logistics center.",
    challenge: "Optimizing loading times for a high-throughput logistics hub handling 100+ trucks daily.",
    solution: "Integrated loading bays with hydraulic dock levelers, sectional overhead doors, and inflatable dock shelters to seal the gap between truck and warehouse.",
    features: [
        "Hydraulic Dock Levelers",
        "Sectional Overhead Doors",
        "Inflatable Dock Shelters",
        "Traffic Light Controls"
    ],
    gallery: [
        "/images/moterline-kvm25-motor-sectional-door-500x500.webp",
        "/images/motorline-kvm115-motor-sectional-door-opener-500x500.webp",
        "/images/moterline-rosso-pro-motor-sectional-door-500x500.webp"
    ]
  },
  {
    id: 8,
    title: "Hospital Entrance Automation",
    category: "Commercial",
    location: "Secunderabad",
    date: "May 2023",
    image: "/images/moterline-kapvsp-anti-panic-telescopic-automatic-sliding-glass-door-500x500.webp",
    description: "Glass automatic sliding doors with contactless motion sensors for ER and Main Entrance.",
    challenge: "Ensuring hygiene and touch-free access for patients and stretchers in the Emergency Room entrance.",
    solution: "Heavy-duty glass sliding door operators with microwave motion sensors were installed. The doors feature a 'break-out' function for emergency evacuation.",
    features: [
        "Heavy Duty Glass Operators",
        "Microwave Motion Sensors",
        "Break-out Emergency Feature",
        "Battery Backup"
    ],
    gallery: [
        "/images/moterline-kapvsp-anti-panic-telescopic-automatic-sliding-glass-door-500x500 (1).webp",
        "/images/moterline-kapvsp-anti-panic-telescopic-automatic-sliding-glass-door-500x500.webp",
        "/images/motorline-ms01-traffic-control-traffic-lights-500x500.webp"
    ]
  }
];

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectDetails.find(p => p.id === parseInt(id));

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      <main>
        {/* Hero Banner */}
        <div className="relative h-[60vh] w-full bg-slate-900">
             <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                 <div className="container-width">
                    <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 uppercase text-sm font-bold tracking-widest transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
                    </Link>
                    <div className="mb-4">
                        <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                            {project.category}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
                        {project.title}
                    </h1>
                    <div className="flex gap-6 text-white/80 font-medium">
                        <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-red-500 mr-2" /> {project.location}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-red-500 mr-2" /> {project.date}
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Content Section */}
        <section className="py-20">
            <div className="container-width grid md:grid-cols-3 gap-12">
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-12">
                     <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-1 bg-red-600 mr-4"></span> The Challenge
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {project.challenge}
                        </p>
                     </div>

                     <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <span className="w-8 h-1 bg-red-600 mr-4"></span> The Solution
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {project.solution}
                        </p>
                     </div>

                     <div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="text-xl font-bold mb-6">Key Statistics & Features</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {project.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle2 className="h-5 w-5 text-red-600 mr-3 mt-0.5" />
                                    <span className="font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                     </div>

                     {/* Gallery Section */}
                    {project.gallery && (
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-1 bg-red-600 mr-4"></span> Project Gallery
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {project.gallery.map((img, idx) => (
                                    <div key={idx} className="relative h-48 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-shadow">
                                        <img 
                                            src={img} 
                                            alt={`${project.title} - Gallery ${idx + 1}`} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                     <div className="sticky top-24">
                        <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
                            <h3 className="text-xl font-bold mb-2">Build your project</h3>
                            <p className="text-slate-400 text-sm mb-6">Learn more about the products used in this case study.</p>
                            
                            <Link href="/contact" className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-sm transition-colors mb-4">
                                Request Consultation
                            </Link>

                            <Link href="/products" className="block w-full text-center border border-slate-700 hover:bg-slate-800 text-white font-bold py-3 rounded-sm transition-colors">
                                View Products
                            </Link>
                        </div>
                     </div>
                </div>

            </div>
        </section>
      </main>
      
      <FooterModern />
    </div>
  );
}

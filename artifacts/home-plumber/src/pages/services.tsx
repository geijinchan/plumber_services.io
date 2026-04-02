import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    { 
      id: "leak",
      title: "Leak Detection & Repair", 
      icon: "💧", 
      price: "₹499",
      desc: "Advanced leak detection using acoustic and thermal imaging. We find hidden leaks in walls, floors, and ceilings without destructive digging.",
      includes: ["Electronic leak detection", "Pipe patching & sealing", "Water pressure testing", "Cleanup after repair"]
    },
    { 
      id: "bathroom",
      title: "Bathroom Installation", 
      icon: "🚿", 
      price: "₹7,999",
      desc: "Complete bathroom plumbing fit-outs. From luxury shower panels to wall-hung toilets, we install all major brands perfectly.",
      includes: ["Shower & tub installation", "Vanity & sink plumbing", "Geyser setup", "Drainage routing"]
    },
    { 
      id: "pipe",
      title: "Pipe Replacement", 
      icon: "🔧", 
      price: "₹599",
      desc: "Upgrading old GI pipes to modern CPVC or UPVC. Essential for homes experiencing low water pressure or rusty colored water.",
      includes: ["Old pipe removal", "New UPVC/CPVC routing", "Pressure testing", "Wall patching assistance"]
    },
    { 
      id: "drain",
      title: "Drain Cleaning", 
      icon: "🪣", 
      price: "₹699",
      desc: "High-pressure drain cleaning to clear tough blockages. We remove hair, grease, and debris build-up restoring full flow instantly.",
      includes: ["Motorized auger cleaning", "Grease trap clearing", "Sewer line rodding", "Odor removal"]
    },
    { 
      id: "tank",
      title: "Water Tank Cleaning", 
      icon: "🏠", 
      price: "₹1,199",
      desc: "6-stage mechanized water tank cleaning process. Removes sludge, algae, and bacteria ensuring your family gets safe, clean water.",
      includes: ["Dewatering", "High-pressure wash", "Vacuum sludge removal", "Anti-bacterial spray"]
    },
    { 
      id: "emergency",
      title: "Emergency 24/7 Response", 
      icon: "⚡", 
      price: "₹799",
      desc: "Burst pipe? Overflowing toilet? We have a dedicated rapid-response team available 24/7 across all phases of Mohali.",
      includes: ["<60 min arrival time", "Immediate leak stoppage", "Temporary containment", "Permanent repair options"]
    },
  ];

  return (
    <div className="pt-8 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expert Plumbing Services</h1>
          <p className="text-lg text-slate-300">
            From minor fixes to major installations, our ITI-certified team delivers guaranteed results across Mohali.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12 md:space-y-24">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex items-center justify-center aspect-square md:aspect-[4/3]">
                  <span className="text-[120px] filter drop-shadow-xl">{service.icon}</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                  Starting at {service.price}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="pt-4">
                  <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">What's Included:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6">
                  <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
                    <Link href={`/booking?service=${service.id}`}>Book This Service</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

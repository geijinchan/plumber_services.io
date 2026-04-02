import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const team = [
    {
      name: "Gurpreet Singh",
      role: "Founder & Master Plumber",
      exp: "20+ years",
      emoji: "👳🏽‍♂️",
      bio: "Started HomePlumber in 2012. Gurpreet brings two decades of commercial and residential plumbing expertise to every job."
    },
    {
      name: "Simran Kaur",
      role: "Operations Manager",
      exp: "8 years",
      emoji: "👩🏽‍💼",
      bio: "Ensures every plumber arrives on time and every customer is happy. The voice behind the phone."
    },
    {
      name: "Harbhajan Mehta",
      role: "Senior Plumber",
      exp: "12 years",
      emoji: "👨🏽‍🔧",
      bio: "Specializes in complex pipe routing and bathroom installations. ITI certified."
    },
    {
      name: "Arjun Sharma",
      role: "Emergency Technician",
      exp: "6 years",
      emoji: "🏃🏽‍♂️",
      bio: "Leads the 24/7 rapid response team. Known for arriving under 40 minutes in Mohali."
    }
  ];

  return (
    <div className="pt-8 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Hero Story */}
        <section className="py-16 md:py-24 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-0">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8">
            Mohali's neighbor first, plumbers second.
          </h1>
          <div className="text-lg md:text-xl text-slate-600 space-y-6 leading-relaxed text-left">
            <p>
              HomePlumber started in 2012 when Gurpreet Singh realized finding a reliable, transparent plumber in Phase 7 was harder than it should be. Plumbers wouldn't show up, pricing was made up on the spot, and the quality of work was unpredictable.
            </p>
            <p>
              We decided to build a plumbing company that operates like a professional corporate service while keeping the warmth of a local neighborhood business. 
            </p>
            <p className="font-medium text-slate-900 border-l-4 border-primary pl-6 py-2 bg-slate-50">
              Today, with a team of 18 ITI-certified technicians, we serve over 500 homes and businesses across Mohali every single month.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">2012</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Established</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">18</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Certified Experts</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Happy Homes</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Google Rating</div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Meet the Team</h2>
            <p className="text-slate-600">The faces behind the reliable service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Card key={i} className="border-0 shadow-lg bg-white overflow-hidden group">
                <CardContent className="p-0">
                  <div className="h-48 bg-slate-100 flex items-center justify-center text-7xl group-hover:bg-primary/5 transition-colors">
                    {member.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-4">{member.role} • {member.exp}</p>
                    <p className="text-sm text-slate-600 line-clamp-3">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

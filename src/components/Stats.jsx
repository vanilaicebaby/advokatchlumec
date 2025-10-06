import React, { useState, useEffect } from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

export default function Stats() {
  const [counters, setCounters] = useState({ experience: 0, clients: 0, cases: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          experience: Math.floor(30 * progress),
          clients: Math.floor(500 * progress),
          cases: Math.floor(1000 * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Award className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{counters.experience}+</div>
            <div className="text-gray-300 font-medium">Let praxe</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{counters.clients}+</div>
            <div className="text-gray-300 font-medium">Spokojených klientů</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{counters.cases}+</div>
            <div className="text-gray-300 font-medium">Vyřešených případů</div>
          </div>
        </div>
      </div>
    </section>
  );
}
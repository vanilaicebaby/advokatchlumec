import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Rodinné právo',
      description: 'Rozvody, péče o děti, výživné, majetkové vypořádání, opatrovnictví'
    },
    {
      icon: '💼',
      title: 'Pracovní právo',
      description: 'Pracovní smlouvy, výpovědi, náhrady škody, pracovněprávní spory'
    },
    {
      icon: '🏛️',
      title: 'Občanské právo',
      description: 'Smlouvy, náhrady škody, dědické právo, vlastnické vztahy'
    },
    {
      icon: '📊',
      title: 'Obchodní právo',
      description: 'Zakládání společností, obchodní smlouvy, korporátní právo'
    },
    {
      icon: '⚖️',
      title: 'Trestní právo',
      description: 'Obhajoba v trestním řízení, zastupování poškozených osob'
    },
    {
      icon: '📋',
      title: 'Právní poradenství',
      description: 'Komplexní konzultace, preventivní poradenství, právní audit'
    }
  ];

  return (
    <section id="služby" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 rounded-full text-sm font-semibold">
              Oblast působení
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Právní služby
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Komplexní právní zastupování napříč různými odvětvími práva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-orange-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-rose-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Zjistit více</span>
                  <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
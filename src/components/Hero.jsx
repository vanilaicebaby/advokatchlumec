import React from 'react';
import { Scale, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function Hero() {
  return (
    <section id="domů" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 sm:mt-0">
        <div className="mb-6 sm:mb-8 inline-block">
          <div className="flex items-center justify-center space-x-2 bg-amber-900/80 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-amber-400/50 shadow-lg">
            <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 flex-shrink-0" />
            <span className="text-white font-semibold text-xs sm:text-base whitespace-nowrap drop-shadow-lg">Profesionální právní služby</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Mgr. et Bc.
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
            Lenka Ježková
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          S respektem k vašim právům a individuálním přístupem ke každému klientovi. 
          Poskytujeme komplexní právní služby v Chlumci nad Cidlinou.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('kontakt')}
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Kontaktujte mě</span>
              <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection('služby')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl text-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
          >
            Více informací
          </button>
        </div>
        
        <div className="mt-12 sm:mt-20 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Shield } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function About() {
  return (
    <section id="o-mně" className="py-24 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://eduys.cz/inc/peoples_png/lenka.png"
                alt="Mgr. et Bc. Lenka Ježková"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <Shield className="w-10 h-10 text-amber-600" />
                <div>
                  <div className="font-bold text-2xl">30+</div>
                  <div className="text-sm text-gray-600">Let praxe</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
                O advokátce
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Mgr. et Bc.
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Lenka Ježková
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                Vítejte v mé advokátní kanceláři. Poskytuji komplexní právní služby 
                s důrazem na <strong className="text-white">individuální přístup</strong> ke každému klientovi.
              </p>
              <p>
                Mým cílem je poskytovat profesionální právní pomoc s respektem k vašim 
                potřebám a s maximálním úsilím o dosažení nejlepšího možného výsledku.
              </p>
              <p>
                Věřím v <strong className="text-white">otevřenou komunikaci</strong>, transparentnost 
                a osobní přístup. Jsem tu proto, abych vám pomohla orientovat se v právních 
                záležitostech a efektivně hájit vaše práva a zájmy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-3xl font-bold text-amber-400 mb-1">Profesionalita</div>
                <p className="text-sm text-gray-300">Odborné znalosti a zkušenosti</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">Dostupnost</div>
                <p className="text-sm text-gray-300">Flexibilní přístup 7 dní v týdnu</p>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('kontakt')}
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-700 text-white rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Sjednat konzultaci
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
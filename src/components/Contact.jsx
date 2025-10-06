import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 rounded-full text-sm font-semibold">
              Spojte se se mnou
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jsem tu pro vás. Neváhejte mě kontaktovat pro konzultaci nebo schůzku
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-rose-600">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-rose-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adresa kanceláře</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Vrchlického 530<br />
                    503 51 Chlumec nad Cidlinou IV
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-600">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-orange-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                  <a 
                    href="tel:+420721207779" 
                    className="text-gray-700 text-lg hover:text-rose-600 transition-colors font-medium"
                  >
                    +420 721 207 779
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-blue-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:ak.jezkova@gmail.com" 
                    className="text-gray-700 text-lg hover:text-rose-600 transition-colors font-medium break-all"
                  >
                    ak.jezkova@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-rose-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-green-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Provozní hodiny</h3>
                  <p className="text-gray-700 text-lg">
                    <strong>Pondělí - Neděle</strong><br />
                    8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl p-10 shadow-2xl text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Potřebujete právní pomoc?
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Kontaktujte mě pro osobní konzultaci. Společně najdeme nejlepší 
                  řešení pro váš právní problém.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                    <span>Osobní přístup ke každému klientovi</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Zkušenost v různých oblastech práva</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Transparentní komunikace</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+420721207779"
                    className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Zavolat nyní</span>
                  </a>
                  <a
                    href="mailto:ak.jezkova@gmail.com"
                    className="flex items-center justify-center space-x-3 w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Napsat email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-lg">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold">Mgr. et Bc. Lenka Ježková</div>
              <div className="text-sm text-gray-400">Advokátní kancelář</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">© 2025 Advokátní kancelář Lenka Ježková</p>
            <p className="text-xs mt-1">
              Provozovatel <span className="inline-block animate-pulse">❤️</span> AlgoInsight Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
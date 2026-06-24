import { useState } from 'react'
import { Shield, Menu, X } from 'lucide-react'
import Resumen from './components/Resumen'
import InyeccionSQL from './components/InyeccionSQL'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('resumen')

  const sections = [
    { id: 'resumen', name: 'Resumen', component: Resumen },
    { id: 'sqli', name: 'SQL Injection', component: InyeccionSQL },
    { id: 'xss', name: 'XSS', component: XSS },
    { id: 'comandos', name: 'Command Injection', component: Comandos },
    { id: 'activos', name: 'Activos', component: Activos },
    { id: 'matriz', name: 'Matriz de Riesgo', component: Matriz },
    { id: 'controles', name: 'Controles', component: Controles },
    { id: 'recuperacion', name: 'Recuperacion', component: Recuperacion },
    { id: 'prompts', name: 'Bitacora IA', component: Prompts },
  ]

  const CurrentComponent = sections.find(s => s.id === currentSection)?.component || Resumen

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield size={32} className="text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Auditoria de Seguridad</h1>
                <p className="text-slate-400 text-sm">PreuFuturo Preuniversitario</p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={`${menuOpen ? 'block' : 'hidden'} md:block bg-slate-800 border-b border-slate-700`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-1 space-y-1 md:space-y-0 py-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => {
                  setCurrentSection(section.id)
                  setMenuOpen(false)
                }}
                className={`px-4 py-2 rounded text-sm font-medium transition ${
                  currentSection === section.id
                    ? 'bg-red-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-8 text-white">
          {CurrentComponent ? <CurrentComponent /> : <Resumen />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-slate-400 text-center text-sm">
            Auditoria realizada por Esteban Rojas - TI3034 Fundamentos de Seguridad - INACAP Valparaiso - Junio 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

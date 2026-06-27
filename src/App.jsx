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
import Presentacion from './components/Presentacion'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('resumen')

  const sections = [
    { id: 'resumen', name: 'Resumen', component: Resumen },
    { id: 'presentacion', name: 'Presentación Evaluación 03', component: Presentacion },
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-slate-200 focus:text-slate-950 focus:rounded-md"
      >
        Saltar al contenido
      </a>

      {/* Header */}
      <header className="bg-slate-950 border-b border-slate-700 sticky top-0 z-50 shadow-sm shadow-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield size={32} className="text-red-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Auditoria de Seguridad</h1>
                <p className="text-slate-400 text-sm">PreuFuturo Preuniversitario</p>
              </div>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-slate-300 transition hover:bg-slate-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label="Abrir navegación"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        id="primary-navigation"
        aria-label="Secciones de la auditoría"
        className={`${menuOpen ? 'block' : 'hidden'} md:block bg-slate-800 border-b border-slate-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-1 space-y-1 md:space-y-0 py-2">
            {sections.map(section => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setCurrentSection(section.id)
                  setMenuOpen(false)
                }}
                aria-current={currentSection === section.id ? 'page' : undefined}
                className={`px-4 py-2 rounded text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${
                  currentSection === section.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/20'
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
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block sticky top-28 self-start rounded-3xl border border-slate-700 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-4 border border-slate-700">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">Panel rápido</p>
                <h2 className="mt-3 text-xl font-semibold text-white">Navegación</h2>
                <p className="mt-2 text-sm text-slate-400">Seleccione una sección para ver el análisis y las evidencias.</p>
              </div>

              <div className="space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setCurrentSection(section.id)}
                    aria-current={currentSection === section.id ? 'page' : undefined}
                    className={`w-full text-left rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                      currentSection === section.id
                        ? 'border-red-500 bg-red-500/10 text-white shadow-inner shadow-red-500/10'
                        : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="bg-slate-800 rounded-[2rem] border border-slate-700 p-8 shadow-2xl shadow-slate-950/20">
            <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.24em] text-red-400">Auditoría TI3034</p>
                <h1 className="text-4xl font-extrabold tracking-tight text-white">PreuFuturo - Informe de Seguridad</h1>
                <p className="max-w-3xl text-slate-400">Explora los hallazgos técnicos, las evidencias y las recomendaciones en un diseño más accesible y organizado.</p>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-2">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-200">UI Mejorada</span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-200">Accesibilidad</span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-slate-200">Evidencias</span>
              </div>
            </div>

            {CurrentComponent ? <CurrentComponent /> : <Resumen />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-slate-400 text-center text-sm">
            Hecho por iqis · <a href="https://github.com/iqisd" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300">iqisd</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

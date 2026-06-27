import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Presentacion() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    // Slide 1: Portada
    {
      title: 'Auditoría de Seguridad Web',
      subtitle: 'PreuFuturo Preuniversitario',
      content: (
        <div className="space-y-6 text-center">
          <div>
            <p className="text-2xl font-bold text-white mb-2">Evaluación 03</p>
            <p className="text-slate-300">Asignatura: TI3034 — Fundamentos de Seguridad de la Información</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-300">Estudiante: <span className="text-red-400 font-semibold">Esteban Rojas</span></p>
            <p className="text-slate-300">Junio 2026</p>
          </div>
        </div>
      ),
    },
    // Slide 2: Contexto de la consultoría
    {
      title: 'Contexto de la Consultoría',
      subtitle: 'Sobre PreuFuturo',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
            <p className="text-slate-200 leading-relaxed">
              <strong className="text-red-400">PreuFuturo</strong> es un portal educativo ficticio que gestiona:
            </p>
            <ul className="mt-3 space-y-2 ml-4">
              <li className="text-slate-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">●</span> Perfiles y cuentas de estudiantes y administrativos
              </li>
              <li className="text-slate-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">●</span> Calificaciones y evaluaciones académicas
              </li>
              <li className="text-slate-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">●</span> Transacciones de pagos y matrículas
              </li>
              <li className="text-slate-300 flex items-start gap-2">
                <span className="text-red-400 mt-1">●</span> Material académico y recursos educativos
              </li>
            </ul>
          </div>
          <div className="bg-blue-900/30 border border-blue-700/50 p-4 rounded-lg">
            <p className="text-blue-300">
              <strong>Objetivo:</strong> Evaluar riesgos de seguridad en un ambiente controlado usando DVWA (Damn Vulnerable Web Application).
            </p>
          </div>
        </div>
      ),
    },
    // Slide 3: Objetivo de la auditoría
    {
      title: 'Objetivo de la Auditoría',
      subtitle: 'Alcance y metodología',
      content: (
        <div className="space-y-3">
          {[
            { icon: '🎯', text: 'Evaluar tres vulnerabilidades web críticas' },
            { icon: '📸', text: 'Documentar evidencia técnica de cada hallazgo' },
            { icon: '📊', text: 'Calcular severidad usando CVSS 3.1' },
            { icon: '🔍', text: 'Construir matriz de riesgo y priorización' },
            { icon: '🛡️', text: 'Proponer medidas de prevención y mitigación' },
            { icon: '🔄', text: 'Definir plan de recuperación ante incidentes' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <p className="text-slate-200 pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      ),
    },
    // Slide 4: Hallazgo 1 - SQL Injection
    {
      title: 'Hallazgo 1: SQL Injection',
      subtitle: 'CVSS 9.8 — Crítica',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-red-900/30 border border-red-700/50 p-4 rounded-lg">
                <p className="text-red-300 text-sm font-mono">Payload: <span className="text-red-200 font-semibold">' OR '1'='1</span></p>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/50">
                <p className="text-slate-300 text-sm"><strong className="text-red-400">Impacto:</strong></p>
                <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Exposición de datos de estudiantes
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Acceso a calificaciones y pagos
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Compromiso de confidencialidad
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/img_rojest/sqli_rojest.png"
                alt="Evidencia de SQL Injection"
                className="w-full h-auto rounded-lg border border-slate-600 shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5: Hallazgo 2 - XSS
    {
      title: 'Hallazgo 2: XSS Reflected',
      subtitle: 'CVSS 8.2 — Alta',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-orange-900/30 border border-orange-700/50 p-4 rounded-lg">
                <p className="text-orange-300 text-sm font-mono">Payload: <span className="text-orange-200 font-semibold">&lt;script&gt;alert('XSS')&lt;/script&gt;</span></p>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/50">
                <p className="text-slate-300 text-sm"><strong className="text-red-400">Impacto:</strong></p>
                <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span> Ejecución de JS en navegador
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span> Riesgo de robo de sesión
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">→</span> Ataques de phishing
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/img_rojest/xss_rojest.png"
                alt="Evidencia de XSS Reflected"
                className="w-full h-auto rounded-lg border border-slate-600 shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6: Hallazgo 3 - Command Injection
    {
      title: 'Hallazgo 3: Command Injection',
      subtitle: 'CVSS 9.8 — Crítica',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="bg-red-900/30 border border-red-700/50 p-4 rounded-lg">
                <p className="text-red-300 text-sm font-mono">Payload: <span className="text-red-200 font-semibold">127.0.0.1; cat /etc/passwd</span></p>
              </div>
              <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/50">
                <p className="text-slate-300 text-sm"><strong className="text-red-400">Impacto:</strong></p>
                <ul className="mt-2 space-y-1 text-slate-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Ejecución de comandos del SO
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Exposición de archivos sensibles
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-400">→</span> Compromiso total del servidor
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/img_rojest/comandos_rojest.png"
                alt="Evidencia de Command Injection"
                className="w-full h-auto rounded-lg border border-slate-600 shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7: Matriz de Riesgo
    {
      title: 'Matriz de Riesgo y Priorización',
      subtitle: 'Basada en probabilidad, impacto y CVSS',
      content: (
        <div className="space-y-3">
          {[
            { vuln: 'SQL Injection', cvss: '9.8', riesgo: 'Crítico', color: 'red' },
            { vuln: 'Command Injection', cvss: '9.8', riesgo: 'Crítico', color: 'red' },
            { vuln: 'XSS Reflected', cvss: '8.2', riesgo: 'Alto', color: 'orange' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-${item.color}-900/20 border border-${item.color}-700/50 p-4 rounded-lg flex items-center justify-between`}
            >
              <div>
                <p className={`font-semibold text-${item.color}-300`}>{item.vuln}</p>
                <p className="text-slate-400 text-sm">Prioridad: Inmediata</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-300">{item.cvss}</p>
                <p className={`text-sm text-${item.color}-300 font-semibold`}>{item.riesgo}</p>
              </div>
            </div>
          ))}
          <div className="bg-blue-900/20 border border-blue-700/50 p-3 rounded-lg mt-4">
            <p className="text-blue-300 text-sm">
              <strong>Estrategia:</strong> Abordar riesgos críticos antes de implementar controles adicionales.
            </p>
          </div>
        </div>
      ),
    },
    // Slide 8: Controles
    {
      title: 'Controles de Prevención y Mitigación',
      subtitle: 'Medidas recomendadas',
      content: (
        <div className="space-y-3 text-sm">
          {[
            { title: 'SQL Injection', controls: 'Consultas parametrizadas • Validación de entradas • Mínimo privilegio en BD' },
            { title: 'XSS', controls: 'Escape de salida HTML • Sanitización de datos • Content Security Policy' },
            { title: 'Command Injection', controls: 'Evitar comandos del SO • Listas blancas de entrada • Validación estricta' },
            { title: 'Transversales', controls: 'WAF • Logging y monitoreo • SIEM • Pruebas de seguridad periódicas' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <p className="text-red-400 font-semibold mb-1">{item.title}</p>
              <p className="text-slate-300">{item.controls}</p>
            </div>
          ))}
        </div>
      ),
    },
    // Slide 9: Recuperación
    {
      title: 'Recuperación ante Incidentes',
      subtitle: 'Plan de continuidad',
      content: (
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-3">
            <div className="bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <p className="text-red-400 font-semibold mb-2">Acciones Inmediatas</p>
              <ul className="space-y-1 text-slate-300">
                <li className="flex gap-2"><span className="text-red-400">✓</span> Aislamiento del servidor afectado</li>
                <li className="flex gap-2"><span className="text-red-400">✓</span> Restauración desde respaldos</li>
                <li className="flex gap-2"><span className="text-red-400">✓</span> Revisión completa de logs</li>
              </ul>
            </div>
            <div className="bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <p className="text-blue-400 font-semibold mb-2">Post-Incidente</p>
              <ul className="space-y-1 text-slate-300">
                <li className="flex gap-2"><span className="text-blue-400">✓</span> Notificación a usuarios afectados</li>
                <li className="flex gap-2"><span className="text-blue-400">✓</span> Análisis de causa raíz</li>
              </ul>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <p className="text-yellow-400 font-semibold mb-2">Métricas de Recuperación</p>
              <div className="space-y-1 text-slate-300">
                <p><strong>RTO:</strong> <span className="text-yellow-300">2 horas</span></p>
                <p><strong>RPO:</strong> <span className="text-yellow-300">4 horas</span></p>
                <p className="text-xs text-slate-400 mt-2">Objetivo de tiempo de recuperación y punto de recuperación</p>
              </div>
            </div>
            <div className="bg-slate-700/40 p-3 rounded-lg border border-slate-600/50">
              <p className="text-green-400 font-semibold mb-2">Mejora Continua</p>
              <p className="text-slate-300 text-xs">Lecciones aprendidas, documentación, y actualización de procesos.</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Conclusión
    {
      title: 'Conclusión',
      subtitle: 'Resumen y recomendaciones',
      content: (
        <div className="space-y-4">
          <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/50 space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-slate-200">La auditoría identificó <strong>vulnerabilidades críticas</strong> que requieren atención inmediata.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="text-slate-200">Los riesgos principales afectan <strong>confidencialidad, integridad y disponibilidad</strong> de datos.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <p className="text-slate-200">Prioridad: Remediar <strong>SQL Injection</strong> y <strong>Command Injection</strong> de inmediato.</p>
            </div>
          </div>
          <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-lg">
            <p className="text-red-200 text-center">
              <strong>La implementación de controles preventivos y planes de recuperación reduce significativamente el riesgo operacional de PreuFuturo.</strong>
            </p>
          </div>
        </div>
      ),
    },
  ]

  const goToPrevious = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div className="space-y-6">
      {/* Slide Container */}
      <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/40 border border-slate-600 rounded-2xl p-8 min-h-[600px] flex flex-col justify-between relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative z-10">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-widest text-red-400 font-semibold">Diapositiva {currentSlide + 1} de {slides.length}</p>
            <h2 className="text-4xl font-bold text-white mt-2">{currentSlideData.title}</h2>
            <p className="text-lg text-slate-300 mt-1">{currentSlideData.subtitle}</p>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 my-8 flex-grow overflow-y-auto max-h-96">
          {currentSlideData.content}
        </div>

        {/* Progress Bar */}
        <div className="relative z-10 mb-6">
          <div className="h-1 bg-slate-600/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="relative z-10 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-slate-500 transition font-medium"
            aria-label="Diapositiva anterior"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentSlide
                    ? 'bg-red-500 shadow-lg shadow-red-500/50'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-slate-500 transition font-medium"
            aria-label="Siguiente diapositiva"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slide Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 text-center">
          <p className="text-slate-400 text-sm">Total de diapositivas</p>
          <p className="text-3xl font-bold text-white mt-1">{slides.length}</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 text-center">
          <p className="text-slate-400 text-sm">Diapositiva actual</p>
          <p className="text-3xl font-bold text-red-400 mt-1">{currentSlide + 1}</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4 text-center">
          <p className="text-slate-400 text-sm">Progreso</p>
          <p className="text-3xl font-bold text-blue-400 mt-1">{Math.round(((currentSlide + 1) / slides.length) * 100)}%</p>
        </div>
      </div>
    </div>
  )
}

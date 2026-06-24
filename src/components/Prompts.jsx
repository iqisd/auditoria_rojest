export default function Prompts() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Bitacora de Uso de Inteligencia Artificial</h2>
      
      <div className="bg-yellow-900 border border-yellow-700 p-4 rounded mb-6">
        <p className="text-yellow-100">
          Esta seccion documenta los prompts utilizados con GitHub Copilot para investigar, entender y construir la auditoria.
          Se detalla qué se aceptó, qué se corrigió, y reflexiones sobre la utilidad de la herramienta.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #1: Comprensión de SQLi</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Explicame con ejemplos como funciona SQL Injection, que es &apos; OR &apos;1&apos;=&apos;1 y por qué es peligroso para PreuFuturo Preuniversitario"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> 02_sqli_rojest.md</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> La explicación tecnica, ejemplos de codigo vulnerable y payload</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Agregar contexto específico de PreuFuturo (datos de menores, Ley 21.459)</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot proporciono buena base tecnica pero faltaba contexto legal/industria. Requirió ajuste manual.</p>
        </div>

        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #2: Solucion de SQLi con Prepared Statements</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Dame codigo seguro en PHP, Python y Node.js para prevenir SQL Injection usando prepared statements y parametrizacion"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> 02_sqli_rojest.md - Apartado 4</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> 100% de los ejemplos de codigo con prepared statements</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Ninguno, ejemplos fueron correctos y bien comentados</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot es excelente en patrones de codigo seguros. Muy útil para generar ejemplos robustos.</p>
        </div>

        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #3: CVSS Score para las 3 vulnerabilidades</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Calcula CVSS 3.1 para inyeccion SQL, XSS reflected e inyeccion de comandos en un portal web educativo con datos de menores"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> 02_sqli_rojest.md, 03_xss_rojest.md, 04_comandos_rojest.md</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> Los 3 scores (9.8, 8.2, 9.8) y justificaciones de vectores</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Verificación con https://www.first.org/cvss/calculator/3.1 - todo correcto</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot entiende bien CVSS pero es importante verificar manualmente con calculator oficial.</p>
        </div>

        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #4: Matriz de Riesgo</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Crea una matriz de riesgo (probabilidad x impacto) para estas 3 vulnerabilidades, justificando probabilidad e impacto segun industria educativa"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> 06_matriz_rojest.md</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> Estructura de matriz, colores, justificación de priorización</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Agregar justificación adicional sobre contexto educativo con menores</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot propone buenos frameworks pero necesita validacion de negocio/contexto.</p>
        </div>

        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #5: Componentes React para visualizacion</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Genera componentes React con Tailwind CSS para mostrar tabla de vulnerabilidades con colores segun CVSS y botones de navegacion"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> Todos los componentes JSX</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> 80% del codigo React generado</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Ajustar colores para cumplir con tema oscuro, mejorar responsive design, agregar accesibilidad</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot excele generando boilerplate React pero requiere refinamiento en diseño/UX.</p>
        </div>

        <div className="bg-slate-700 p-6 rounded">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-lg text-blue-400">Prompt #6: Plan de Recuperacion (DR)</h3>
            <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">GitHub Copilot</span>
          </div>
          <div className="bg-slate-800 p-3 rounded mb-3">
            <p className="text-slate-300 text-sm">"Diseña un plan de recuperacion ante desastres (DR) para PreuFuturo con RPO, RTO, escenarios de brecha, mejoras tecnologicas y communication"</p>
          </div>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Seccion:</span> 08_recuperacion_rojest.md</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-green-400">Aceptado:</span> Estructura general, metricas RPO/RTO, timeline de respuesta</p>
          <p className="text-slate-200 mb-2"><span className="font-semibold text-orange-400">Corregido:</span> Agregar normativas legales (Ley 21.459), especificar notificación a fiscalia, incluir SIEM/IDS tecnologias</p>
          <p className="text-slate-200"><span className="font-semibold text-purple-400">Reflexion:</span> Copilot da buenos frameworks pero es fundamental agregar regulación legal y contexto país.</p>
        </div>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">Reflexion Final: Uso Critico de IA</h3>
        <p className="text-green-100 leading-relaxed mb-3">
          GitHub Copilot fue herramienta valiosa pero REQUIERE supervision técnica. La IA es especialmente útil para:
        </p>
        <ul className="list-disc list-inside space-y-2 text-green-100 mb-4">
          <li>Generar codigo base y patrones de seguridad conocidos</li>
          <li>Explicar conceptos tecnicos (SQLi, XSS, etc)</li>
          <li>Crear componentes React boilerplate</li>
          <li>Brainstorming de frameworks y estructuras</li>
        </ul>
        <p className="text-green-100 leading-relaxed mb-3">
          PERO requiere corrección manual en:
        </p>
        <ul className="list-disc list-inside space-y-2 text-green-100">
          <li>Contexto de negocio y regulación (Ley 21.459, educación, menores)</li>
          <li>Justificación tecnica profunda (por qué vulnerabilidades)</li>
          <li>Normativas y standar internacionales (OWASP, NIST, ISO)</li>
          <li>UX/Diseño y detalles de interfaz</li>
          <li>Validación con fuentes oficiales (CVSS calculator, documentacion oficial)</li>
        </ul>
        <p className="text-green-100 mt-4">
          <span className="font-semibold">Conclusion:</span> La responsabilidad tecnica es SIEMPRE del auditor. Copilot es soporte, no reemplazo.
        </p>
      </div>
    </div>
  )
}

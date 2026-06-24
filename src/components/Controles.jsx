export default function Controles() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Controles y Politicas de Prevencion</h2>
      
      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-4">Politica 1: Prevencion de Inyeccion SQL</h3>
        <div className="space-y-3">
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 1: Prepared Statements (OBLIGATORIO)</p>
            <p className="text-slate-200 text-sm">100% de consultas SQL con input de usuario deben usar prepared statements</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 2: Principio de Minimo Privilegio</p>
            <p className="text-slate-200 text-sm">Usuario BD: Solo SELECT. Admin separado sin acceso desde internet</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 3: Validacion en Entrada</p>
            <p className="text-slate-200 text-sm">Whitelist de caracteres. Rechazar &apos;, &gt;, &lt;, =, --, /*</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 4: Monitoreo</p>
            <p className="text-slate-200 text-sm">Registrar y alertar ante intentos de UNION, COMMENT, ORDER BY</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-4">Politica 2: Prevencion de XSS</h3>
        <div className="space-y-3">
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 1: HTML Encoding (OBLIGATORIO)</p>
            <p className="text-slate-200 text-sm">Escapar TODO valor de usuario con htmlspecialchars(), DOMPurify, o framework nativo</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 2: Content Security Policy</p>
            <p className="text-slate-200 text-sm">CSP header: default-src &apos;self&apos;; script-src &apos;self&apos;</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 3: X-XSS-Protection</p>
            <p className="text-slate-200 text-sm">Header: X-XSS-Protection: 1; mode=block</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 4: Framework Seguro</p>
            <p className="text-slate-200 text-sm">React, Vue, Angular escapan automaticamente</p>
          </div>
        </div>
      </div>

      <div className="bg-red-900 border border-red-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-200 mb-4">Politica 3: Prevencion de Inyeccion Comandos (CRITICA)</h3>
        <div className="space-y-3">
          <div className="bg-red-800 p-3 rounded border border-red-600">
            <p className="text-red-100 font-semibold">MEDIDA 1: PROHIBIR shell_exec() / exec() / system()</p>
            <p className="text-red-100 text-sm">Buscar y ELIMINAR INMEDIATAMENTE todas las instancias. NO hay excepcion.</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 2: Usar Funciones Nativas</p>
            <p className="text-slate-200 text-sm">gethostbyname(), socket, mysqli, PDO - NUNCA shell commands</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-green-400 font-semibold">Medida 3: Minimo Privilegio + Sandboxing</p>
            <p className="text-slate-200 text-sm">Web server: usuario no-root. Docker con syscalls bloqueados. SELinux</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-blue-400 mb-4">Marcos de Referencia</h3>
        <div className="space-y-2">
          <p className="text-slate-200"><span className="font-semibold">OWASP Top 10:</span> A03 (Injection), A07 (XSS), A08 (OS Command Injection)</p>
          <p className="text-slate-200"><span className="font-semibold">CIS Controls:</span> v8.1 3.3, 3.4 (Input Validation)</p>
          <p className="text-slate-200"><span className="font-semibold">NIST:</span> SP 800-53 SI-10, SI-12 (Information System Monitoring)</p>
          <p className="text-slate-200"><span className="font-semibold">SANS Top 25:</span> CWE-78, 79, 89</p>
        </div>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">Plan de Implementacion</h3>
        <div className="space-y-2">
          <p className="text-green-100"><span className="font-semibold">Semana 1:</span> Audit de codigo + Ambiente testing + Comenzar fixes</p>
          <p className="text-green-100"><span className="font-semibold">Semana 2:</span> Prepared Statements (100%) + Output Encoding (100%) + Eliminar shell_exec</p>
          <p className="text-green-100"><span className="font-semibold">Semana 3:</span> Testing + Deploy produccion + Verificacion post-deploy</p>
          <p className="text-green-100"><span className="font-semibold">Semana 4:</span> Monitoreo 24/7 + Logs audit + Reporte cumplimiento</p>
        </div>
      </div>
    </div>
  )
}

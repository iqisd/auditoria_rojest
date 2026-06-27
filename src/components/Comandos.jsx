export default function Comandos() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Inyeccion de Comandos</h2>
      
      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">1. Evidencia del Ataque</h3>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3">
          <p className="text-yellow-400">Payload: 127.0.0.1; cat /etc/passwd</p>
        </div>
        <p className="text-slate-200">Entrada: Campo de ping o diagnostico</p>
        <p className="text-slate-200">Resultado: Lectura de archivos del sistema y acceso a credenciales</p>
        <div className="mt-4 rounded-lg overflow-hidden border border-slate-600 bg-slate-900">
          <img
            src="/img_rojest/comandos_rojest.png"
            alt="Captura de inyeccion de comandos en DVWA"
            className="w-full h-auto object-cover"
          />
          <p className="text-slate-300 text-sm p-3 bg-slate-950">Captura de pantalla: ejecución del payload de inyección de comandos, evidenciando acceso al contenido del archivo /etc/passwd del servidor.</p>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">2. Analisis Tecnico</h3>
        <p className="text-slate-200 mb-3">El shell interpreta caracteres especiales como separadores de comandos:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3 text-slate-300">
          $output = shell_exec("ping -c 4 " . $_GET[&apos;ip&apos;]);
        </div>
        <p className="text-slate-200">Al ingresar 127.0.0.1; cat /etc/passwd, se ejecutan DOS comandos:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-yellow-400">
          <p>ping -c 4 127.0.0.1</p>
          <p>cat /etc/passwd</p>
        </div>
        <p className="text-slate-200 mt-3">Separadores peligrosos: ; | || &amp;&amp;</p>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">3. CVSS Score</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-300"><span className="font-semibold">CVSS v3.1:</span> <span className="text-red-400 text-lg font-bold">9.8</span></p>
            <p className="text-slate-300"><span className="font-semibold">Severidad:</span> <span className="text-red-600 font-bold">CRITICA</span></p>
          </div>
          <div className="bg-slate-800 p-4 rounded">
            <p className="text-slate-300 text-sm">AV:N / AC:L / PR:N / UI:N</p>
            <p className="text-slate-300 text-sm">C:H / I:H / A:H (Control total del servidor)</p>
          </div>
        </div>
      </div>

      <div className="bg-red-900 border border-red-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-200 mb-3">4. Solucion CRITICA: Eliminar shell_exec()</h3>
        <p className="text-red-100 mb-3 font-semibold">NUNCA usar: shell_exec(), exec(), passthru(), system()</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-green-400 mb-3">
          <p className="text-red-400">// MALO:</p>
          <p>$output = shell_exec("ping -c 4 " . $host);</p>
          <p className="text-green-400 mt-2">// BIEN: Usar funcion nativa</p>
          <p>$output = gethostbyname($host);</p>
        </div>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">5. Recomendaciones</h3>
        <ul className="list-disc list-inside space-y-2 text-green-100">
          <li>ELIMINAR INMEDIATAMENTE todos los shell_exec() con input de usuario</li>
          <li>Usar funciones nativas del lenguaje (gethostbyname, socket, etc)</li>
          <li>Principio de minimo privilegio: ejecutar con usuario no-root</li>
          <li>SELinux/AppArmor: restriccion de acceso al filesystem</li>
          <li>Auditar codigo completo para vulnerabilidades similares</li>
        </ul>
      </div>
    </div>
  )
}

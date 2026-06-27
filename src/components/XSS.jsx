export default function XSS() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Cross-Site Scripting (XSS)</h2>
      
      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">1. Evidencia del Ataque</h3>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3">
          <p className="text-yellow-400">Payload: &lt;script&gt;alert(&apos;XSS&apos;)&lt;/script&gt;</p>
        </div>
        <p className="text-slate-200">Entrada: Campo de busqueda o comentarios</p>
        <p className="text-slate-200">Resultado: Ejecucion de codigo JavaScript en el navegador de la victima</p>
        <div className="mt-4 rounded-lg overflow-hidden border border-slate-600 bg-slate-900">
          <img
            src="/img_rojest/xss_rojest.png"
            alt="Captura de XSS reflejado en DVWA"
            className="w-full h-auto object-cover"
          />
          <p className="text-slate-300 text-sm p-3 bg-slate-950">Captura de pantalla: ejecución del payload XSS reflejado, evidenciando la alerta generada en el navegador de la víctima.</p>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">2. Analisis Tecnico</h3>
        <p className="text-slate-200 mb-3">Sin escapar la salida HTML, el navegador interpreta como JavaScript:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3 text-slate-300">
          echo "Resultados para: " . $_GET[&apos;search&apos;];
        </div>
        <p className="text-slate-200">Si ingresamos &lt;script&gt;alert(&apos;XSS&apos;)&lt;/script&gt;, el HTML resultante es:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-yellow-400">
          &lt;html&gt;&lt;body&gt; Resultados para: &lt;script&gt;alert(&apos;XSS&apos;)&lt;/script&gt; &lt;/body&gt;&lt;/html&gt;
        </div>
        <p className="text-slate-200 mt-3">El navegador EJECUTA el script porque es HTML valido.</p>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">3. CVSS Score</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-300"><span className="font-semibold">CVSS v3.1:</span> <span className="text-orange-400 text-lg font-bold">8.2</span></p>
            <p className="text-slate-300"><span className="font-semibold">Severidad:</span> <span className="text-orange-500 font-bold">ALTA</span></p>
          </div>
          <div className="bg-slate-800 p-4 rounded">
            <p className="text-slate-300 text-sm">AV:N / AC:L / PR:N / UI:R (requiere interaccion)</p>
            <p className="text-slate-300 text-sm">C:H / I:H / A:N</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">4. Solucion: Output Encoding</h3>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-green-400 mb-3">
          <p>echo "Resultados para: " . htmlspecialchars($_GET[&apos;search&apos;], ENT_QUOTES);</p>
        </div>
        <p className="text-slate-200 mb-3">Convierte caracteres especiales:</p>
        <ul className="list-disc list-inside text-slate-200 space-y-1">
          <li>&lt; &rarr; &amp;lt;</li>
          <li>&gt; &rarr; &amp;gt;</li>
          <li>" &rarr; &amp;quot;</li>
          <li>&apos; &rarr; &amp;#039;</li>
        </ul>
        <p className="text-slate-200 mt-3">El navegador MUESTRA el texto literalmente, no lo interpreta como HTML.</p>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">5. Recomendaciones</h3>
        <ul className="list-disc list-inside space-y-2 text-green-100">
          <li>HTML encoding en TODOS los puntos de salida de usuario</li>
          <li>Content Security Policy (CSP) header</li>
          <li>Usar frameworks como React que escapan automaticamente</li>
          <li>X-XSS-Protection header en respuestas</li>
        </ul>
      </div>
    </div>
  )
}

export default function InyeccionSQL() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Inyeccion SQL (SQL Injection)</h2>
      
      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">1. Evidencia del Ataque</h3>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3">
          <p className="text-yellow-400">Payload: &apos; OR &apos;1&apos;=&apos;1</p>
        </div>
        <p className="text-slate-200">Entrada: Campo de busqueda de estudiantes</p>
        <p className="text-slate-200">Resultado: Exposicion de toda la base de datos de estudiantes y calificaciones</p>
        <div className="mt-4 rounded-lg overflow-hidden border border-slate-600 bg-slate-900">
          <img
            src="/img_rojest/sqli_rojest.png"
            alt="Captura de inyeccion SQL en DVWA"
            className="w-full h-auto object-cover"
          />
          <p className="text-slate-300 text-sm p-3 bg-slate-950">Captura de pantalla: ejecución de inyección SQL con el payload ' OR '1'='1, evidenciando la exposición de múltiples registros de usuarios desde la base de datos.</p>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">2. Analisis Tecnico</h3>
        <p className="text-slate-200 mb-3">Sin escapar la entrada del usuario, la aplicacion concatena directamente en SQL:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm mb-3 text-slate-300">
          $query = "SELECT * FROM students WHERE name = &apos;" . $_GET[&apos;name&apos;] . "&apos;";
        </div>
        <p className="text-slate-200">Cuando ingresamos &apos; OR &apos;1&apos;=&apos;1, la consulta se convierte en:</p>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-yellow-400">
          SELECT * FROM students WHERE name = &apos;&apos; OR &apos;1&apos;=&apos;1&apos;
        </div>
        <p className="text-slate-200 mt-3">La condicion &apos;1&apos;=&apos;1&apos; es siempre verdadera, exponiendo todos los registros.</p>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">3. CVSS Score</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-slate-300"><span className="font-semibold">CVSS v3.1:</span> <span className="text-red-400 text-lg font-bold">9.8</span></p>
            <p className="text-slate-300"><span className="font-semibold">Severidad:</span> <span className="text-red-600 font-bold">CRITICA</span></p>
          </div>
          <div className="bg-slate-800 p-4 rounded">
            <p className="text-slate-300 text-sm">AV:N (Red) / AC:L (Bajo) / PR:N (Sin permisos) / UI:N</p>
            <p className="text-slate-300 text-sm">C:H (Alto) / I:H (Alto) / A:H (Alto)</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">4. Solucion: Prepared Statements</h3>
        <div className="bg-slate-800 p-4 rounded font-mono text-sm text-green-400 mb-3">
          <p>$query = "SELECT * FROM students WHERE name = ?";</p>
          <p>$stmt = $connection-&gt;prepare($query);</p>
          <p>$stmt-&gt;bind_param("s", $_GET[&apos;name&apos;]);</p>
          <p>$stmt-&gt;execute();</p>
        </div>
        <p className="text-slate-200">El parametro se envia SEPARADO de la estructura SQL. La BD nunca interpreta como codigo.</p>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">5. Recomendaciones</h3>
        <ul className="list-disc list-inside space-y-2 text-green-100">
          <li>Usar prepared statements en 100% de consultas con parametros</li>
          <li>Principio de minimo privilegio: usuario BD solo SELECT</li>
          <li>Validar entrada (whitelist de caracteres)</li>
          <li>Monitorear logs para intentos de inyeccion</li>
        </ul>
      </div>
    </div>
  )
}

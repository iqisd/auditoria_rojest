export default function Recuperacion() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Plan de Recuperacion ante Desastres (DR)</h2>
      
      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-blue-400 mb-4">Mejoras Tecnologicas Inmediatas</h3>
        <div className="space-y-3">
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-blue-400 font-semibold">1. WAF (Web Application Firewall)</p>
            <p className="text-slate-200 text-sm">ModSecurity + OWASP CRS. Bloquea SQLi, XSS, Cmd Injection automaticamente</p>
            <p className="text-slate-400 text-xs">Plazo: 1-2 semanas | Impacto: Detecta 90% de payloads conocidos</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-blue-400 font-semibold">2. Segmentacion de Red</p>
            <p className="text-slate-200 text-sm">Firewall interno: APP → BD en red separada. Contiene brecha</p>
            <p className="text-slate-400 text-xs">Plazo: 1 semana | Impacto: Si APP se compromete, BD protegida</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-blue-400 font-semibold">3. SIEM (Splunk, ELK, Wazuh)</p>
            <p className="text-slate-200 text-sm">Correlacion de logs, alertas tiempo real, dashboard unificado</p>
            <p className="text-slate-400 text-xs">Plazo: 2 semanas | Impacto: Deteccion temprana de ataques</p>
          </div>
          <div className="bg-slate-800 p-3 rounded">
            <p className="text-blue-400 font-semibold">4. Contenedorizacion</p>
            <p className="text-slate-200 text-sm">Docker con usuario no-root, filesystems read-only, recursos limitados</p>
            <p className="text-slate-400 text-xs">Plazo: 2-3 semanas | Impacto: Sandboxing, imposible escalacion</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-yellow-400 mb-4">Politica de Backup</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-800">
                <th className="px-2 py-1 text-left text-slate-200">Tipo</th>
                <th className="px-2 py-1 text-left text-slate-200">Frecuencia</th>
                <th className="px-2 py-1 text-left text-slate-200">Retencion</th>
                <th className="px-2 py-1 text-left text-slate-200">RPO</th>
                <th className="px-2 py-1 text-left text-slate-200">RTO</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-800">
                <td className="px-2 py-1 text-slate-200">Diario</td>
                <td className="px-2 py-1 text-slate-200">24h</td>
                <td className="px-2 py-1 text-slate-200">7 dias</td>
                <td className="px-2 py-1 text-yellow-400">1 dia</td>
                <td className="px-2 py-1 text-yellow-400">2 horas</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="px-2 py-1 text-slate-200">Semanal</td>
                <td className="px-2 py-1 text-slate-200">7 dias</td>
                <td className="px-2 py-1 text-slate-200">4 semanas</td>
                <td className="px-2 py-1 text-yellow-400">7 dias</td>
                <td className="px-2 py-1 text-yellow-400">4 horas</td>
              </tr>
              <tr>
                <td className="px-2 py-1 text-slate-200">Mensual</td>
                <td className="px-2 py-1 text-slate-200">30 dias</td>
                <td className="px-2 py-1 text-slate-200">12 meses</td>
                <td className="px-2 py-1 text-yellow-400">30 dias</td>
                <td className="px-2 py-1 text-yellow-400">24 horas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-slate-200 text-sm mt-3"><span className="font-semibold">RPO:</span> Maximos datos a perder = 1 dia | <span className="font-semibold">RTO:</span> Maximo tiempo sin servicio = 2 horas</p>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-4">Plan de Respuesta: Brecha de SQLi</h3>
        <div className="space-y-2">
          <div className="bg-slate-800 p-3 rounded border-l-4 border-red-600">
            <p className="text-red-300 font-semibold">T+0: Deteccion</p>
            <p className="text-slate-200 text-sm">Alerta WAF/IDS → Oncall engineer notificado → Activar crisis command center</p>
          </div>
          <div className="bg-slate-800 p-3 rounded border-l-4 border-orange-600">
            <p className="text-orange-300 font-semibold">T+5 min: Contencion</p>
            <p className="text-slate-200 text-sm">Desconectar servidor → Bloquear IP → Deshabilitar admin → Notificar stakeholders</p>
          </div>
          <div className="bg-slate-800 p-3 rounded border-l-4 border-yellow-600">
            <p className="text-yellow-300 font-semibold">T+30 min: Recuperacion</p>
            <p className="text-slate-200 text-sm">Restaurar BD desde backup → Cambiar credentials → Reimplementar fixes → Levantar servicio</p>
          </div>
          <div className="bg-slate-800 p-3 rounded border-l-4 border-blue-600">
            <p className="text-blue-300 font-semibold">T+60 min: Postmortem</p>
            <p className="text-slate-200 text-sm">Notificar padres → Auditori externa → Informe a fiscalia (Ley 21.459) → Análisis RCA</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-purple-400 mb-4">Comunicacion y Escalado</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-slate-800 rounded">
            <span className="text-slate-200">Evento: Intento SQLi bloqueado</span>
            <span className="bg-green-700 px-2 py-1 rounded text-green-100 text-xs">VERDE - Log</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-800 rounded">
            <span className="text-slate-200">Evento: SQLi exitosa + datos expuestos</span>
            <span className="bg-red-700 px-2 py-1 rounded text-red-100 text-xs">ROJO - CEO, Padres, Fiscalia</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-800 rounded">
            <span className="text-slate-200">Evento: Malware detectado</span>
            <span className="bg-red-700 px-2 py-1 rounded text-red-100 text-xs">ROJO - Aislamiento inmediato</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-slate-800 rounded">
            <span className="text-slate-200">Evento: Servicio down &gt; 30 min</span>
            <span className="bg-orange-600 px-2 py-1 rounded text-orange-100 text-xs">NARANJA - CTO, Padres</span>
          </div>
        </div>
      </div>

      <div className="bg-green-900 border border-green-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-300 mb-3">Metricas de Exito</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-green-100">MTTR (Mean Time To Recover)</span>
            <span className="text-green-400">Meta: &lt; 2 horas</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-100">Backup success rate</span>
            <span className="text-green-400">Meta: 100%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-100">DR test success</span>
            <span className="text-green-400">Meta: 100%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-100">Riesgo post-fix (CVSS promedio)</span>
            <span className="text-green-400">Meta: 9.3 → 1.3 (86% reduccion)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

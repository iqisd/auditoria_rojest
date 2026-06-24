export default function Matriz() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Matriz de Riesgo</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700">
              <th className="px-4 py-2 text-left text-slate-200">#</th>
              <th className="px-4 py-2 text-left text-slate-200">Vulnerabilidad</th>
              <th className="px-4 py-2 text-left text-slate-200">Probabilidad</th>
              <th className="px-4 py-2 text-left text-slate-200">Impacto</th>
              <th className="px-4 py-2 text-left text-slate-200">CVSS</th>
              <th className="px-4 py-2 text-left text-slate-200">Riesgo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-700 bg-red-900 bg-opacity-20">
              <td className="px-4 py-2 text-slate-200">1</td>
              <td className="px-4 py-2 text-slate-200">Inyeccion SQL</td>
              <td className="px-4 py-2"><span className="bg-red-600 text-white px-2 py-1 rounded">ALTA</span></td>
              <td className="px-4 py-2"><span className="bg-red-600 text-white px-2 py-1 rounded">CRITICO</span></td>
              <td className="px-4 py-2 text-red-400 font-bold">9.8</td>
              <td className="px-4 py-2"><span className="w-3 h-3 bg-red-700 rounded inline-block"></span> CRITICO</td>
            </tr>
            <tr className="border-b border-slate-700 bg-orange-900 bg-opacity-20">
              <td className="px-4 py-2 text-slate-200">2</td>
              <td className="px-4 py-2 text-slate-200">XSS Reflected</td>
              <td className="px-4 py-2"><span className="bg-yellow-600 text-white px-2 py-1 rounded">MEDIA</span></td>
              <td className="px-4 py-2"><span className="bg-orange-600 text-white px-2 py-1 rounded">ALTO</span></td>
              <td className="px-4 py-2 text-orange-400 font-bold">8.2</td>
              <td className="px-4 py-2"><span className="w-3 h-3 bg-orange-600 rounded inline-block"></span> ALTO</td>
            </tr>
            <tr className="border-b border-slate-700 bg-red-900 bg-opacity-20">
              <td className="px-4 py-2 text-slate-200">3</td>
              <td className="px-4 py-2 text-slate-200">Inyeccion Comandos</td>
              <td className="px-4 py-2"><span className="bg-yellow-600 text-white px-2 py-1 rounded">MEDIA</span></td>
              <td className="px-4 py-2"><span className="bg-red-600 text-white px-2 py-1 rounded">CRITICO</span></td>
              <td className="px-4 py-2 text-red-400 font-bold">9.8</td>
              <td className="px-4 py-2"><span className="w-3 h-3 bg-red-700 rounded inline-block"></span> CRITICO</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-4">Mapa de Calor - Matriz Probabilidad x Impacto</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-green-700 p-4 rounded text-center">
            <p className="text-white font-semibold">BAJO</p>
            <p className="text-green-100 text-sm">Prob Baja</p>
            <p className="text-green-100 text-sm">Impacto Bajo</p>
          </div>
          <div className="bg-yellow-600 p-4 rounded text-center">
            <p className="text-white font-semibold">MEDIO</p>
            <p className="text-yellow-100 text-sm">Prob Media</p>
            <p className="text-yellow-100 text-sm">Impacto Alto</p>
          </div>
          <div className="bg-red-700 p-4 rounded text-center">
            <p className="text-white font-semibold">CRITICO</p>
            <p className="text-red-100 text-sm">Prob Alta/Media</p>
            <p className="text-red-100 text-sm">Impacto Critico</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">Priorizacion de Vulnerabilidades</h3>
        <div className="space-y-3">
          <div className="bg-red-900 border-l-4 border-red-600 p-4">
            <p className="text-red-200 font-semibold">1° URGENTE (Esta semana)</p>
            <p className="text-red-100">Inyeccion SQL (9.8) + Inyeccion Comandos (9.8)</p>
          </div>
          <div className="bg-orange-900 border-l-4 border-orange-600 p-4">
            <p className="text-orange-200 font-semibold">2° IMPORTANTE (Este mes)</p>
            <p className="text-orange-100">XSS Reflected (8.2)</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-green-400 mb-3">Riesgo Residual Despues de Controles</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Inyeccion SQL</span>
            <span className="text-red-400">9.8 → <span className="text-green-400">1.2</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-600 to-green-600 h-2 rounded-full" style={{width: '12%'}}></div>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-200">Inyeccion Comandos</span>
            <span className="text-red-400">9.8 → <span className="text-green-400">0.5</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-600 to-green-600 h-2 rounded-full" style={{width: '5%'}}></div>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-200">XSS Reflected</span>
            <span className="text-orange-400">8.2 → <span className="text-green-400">2.1</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-orange-600 to-green-600 h-2 rounded-full" style={{width: '26%'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

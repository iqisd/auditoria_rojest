export default function Resumen() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Resumen Ejecutivo</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-700 p-4 rounded">
          <h3 className="font-semibold text-red-400">Empresa Auditada</h3>
          <p className="text-slate-200">PreuFuturo Preuniversitario</p>
        </div>
        <div className="bg-slate-700 p-4 rounded">
          <h3 className="font-semibold text-red-400">Tipo de Negocio</h3>
          <p className="text-slate-200">Plataforma de educacion online</p>
        </div>
        <div className="bg-slate-700 p-4 rounded">
          <h3 className="font-semibold text-red-400">Ambiente</h3>
          <p className="text-slate-200">DVWA - Nivel Low</p>
        </div>
        <div className="bg-slate-700 p-4 rounded">
          <h3 className="font-semibold text-red-400">Fecha Auditoria</h3>
          <p className="text-slate-200">Junio 2026</p>
        </div>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">Descripcion</h3>
        <p className="text-slate-200 leading-relaxed">
          PreuFuturo es una plataforma de educacion preuniversitaria online que ofrece cursos de preparacion para PSU/PTU, 
          gestion de estudiantes y matrículas, portal de clientes para consultar calificaciones, acceso a material de estudio 
          y sistema de pagos integrado.
        </p>
      </div>

      <div className="bg-slate-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-400 mb-3">Hallazgos Principales</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="text-slate-200">Inyeccion SQL (CVSS 9.8) - CRITICA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            <span className="text-slate-200">Cross-Site Scripting (CVSS 8.2) - ALTA</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
            <span className="text-slate-200">Inyeccion de Comandos (CVSS 9.8) - CRITICA</span>
          </div>
        </div>
      </div>

      <div className="bg-red-900 border border-red-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-200 mb-3">Riesgo para PreuFuturo</h3>
        <p className="text-red-100 leading-relaxed">
          Como plataforma con datos de menores de edad, la exposicion de informacion personal implica 
          violacion de privacidad (Ley 21.459), robo de credenciales, exposicion de datos bancarios, 
          alteracion de calificaciones e interrupcion del servicio educativo.
        </p>
      </div>
    </div>
  )
}

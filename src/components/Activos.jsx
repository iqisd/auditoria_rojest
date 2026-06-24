export default function Activos() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Activos de Informacion</h2>
      
      <div className="space-y-4">
        <div className="bg-slate-700 p-6 rounded border-l-4 border-red-600">
          <h3 className="font-semibold text-lg text-red-400 mb-2">Activo 1: BD de Estudiantes</h3>
          <p className="text-slate-200 mb-2">Nombres, correos, telefonos, direcciones, fechas de nacimiento, RUT de menores</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Clasificacion: Confidencial</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Integridad: Critica</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Disponibilidad: Alta</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-6 rounded border-l-4 border-red-600">
          <h3 className="font-semibold text-lg text-red-400 mb-2">Activo 2: BD de Calificaciones</h3>
          <p className="text-slate-200 mb-2">Calificaciones, puntajes, promedios, historico academico</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Clasificacion: Sensible</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Integridad: Critica (legal)</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Disponibilidad: Alta</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-6 rounded border-l-4 border-purple-600">
          <h3 className="font-semibold text-lg text-purple-400 mb-2">Activo 3: BD de Pagos</h3>
          <p className="text-slate-200 mb-2">Ultimos 4 digitos de tarjetas, montos, fechas, referencias PCI</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Clasificacion: Altamente Confidencial</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Integridad: Critica (PCI-DSS)</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Disponibilidad: Alta</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-6 rounded border-l-4 border-yellow-600">
          <h3 className="font-semibold text-lg text-yellow-400 mb-2">Activo 4: Cuentas Administrativas</h3>
          <p className="text-slate-200 mb-2">Admin, Academico, Tesoreria - Acceso a toda la BD</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Clasificacion: Critica - Restringida</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Integridad: Critica</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Disponibilidad: Alta</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 p-6 rounded border-l-4 border-blue-600">
          <h3 className="font-semibold text-lg text-blue-400 mb-2">Activo 5: Material de Estudio (PI)</h3>
          <p className="text-slate-200 mb-2">PDFs, videos, pruebas simuladas, solucarios</p>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Clasificacion: Confidencial (PI)</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Integridad: Alta</p>
            </div>
            <div className="bg-slate-800 p-2 rounded">
              <p className="text-slate-400 text-sm">Disponibilidad: Alta</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-900 border border-red-700 p-6 rounded">
        <h3 className="font-semibold text-lg text-red-200 mb-3">Riesgos Contextuales - Educacion</h3>
        <ul className="list-disc list-inside space-y-2 text-red-100">
          <li>Ley 21.459 (Delitos Informaticos): Proteccion de datos personales</li>
          <li>Ley 19.628 (Habeas Data): Derecho a privacidad</li>
          <li>Ley 21.611 (Proteccion de Menores): Especial cuidado con datos &lt;18 años</li>
          <li>Reputacion: Una brecha = perdida masiva de matricula</li>
          <li>Responsabilidad civil: Demandas de padres de estudiantes</li>
        </ul>
      </div>
    </div>
  )
}

# Auditoria de Seguridad - PreuFuturo Preuniversitario

**Evaluación 3 - TI3034 INACAP Valparaíso**

Auditoria técnica de seguridad para el portal web educativo **PreuFuturo Preuniversitario**, enfocada en identificación, análisis y remediación de vulnerabilidades críticas (SQL Injection, XSS, Command Injection).

---

## 📋 Contenido

- **Resumen Ejecutivo**: Visión general de la auditoría y hallazgos principales
- **SQL Injection (SQLi)**: Análisis técnico, payloads, impacto y soluciones
- **Cross-Site Scripting (XSS)**: Vulnerabilidad reflejada, prevención y defensas
- **Command Injection**: Inyección de comandos OS, riesgos críticos y mitigación
- **Análisis de Activos**: Identificación de información sensible y regulación aplicable
- **Matriz de Riesgo**: Priorización de vulnerabilidades por probabilidad e impacto
- **Controles Preventivos**: Políticas, frameworks y medidas de seguridad recomendadas
- **Plan de Recuperación**: Estrategia de disaster recovery (DR) y respuesta ante incidentes
- **Bitácora de IA**: Documentación del uso de GitHub Copilot y reflexión crítica
- **Evidencias DVWA**: Capturas de ataques en SQLi, XSS y Command Injection

---

## 🚀 Instalación y Ejecución

### Requisitos
- **Node.js** v13.3+ con npm
- **Git** 2.30+
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/iqisd/auditoria_rojest.git
cd auditoria_rojest

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en **http://localhost:5173**

### Compilar para Producción

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
auditoria_rojest/
├── public/
│   └── img_rojest/                 # Imágenes placeholder de evidencia DVWA
├── src/
│   ├── App.jsx                      # Componente principal con navegación
│   ├── components/
│   │   ├── Resumen.jsx              # Página de resumen ejecutivo
│   │   ├── InyeccionSQL.jsx         # Análisis SQL Injection
│   │   ├── XSS.jsx                  # Análisis Cross-Site Scripting
│   │   ├── Comandos.jsx             # Análisis Command Injection
│   │   ├── Activos.jsx              # Análisis de activos e información
│   │   ├── Matriz.jsx               # Matriz de riesgo y priorización
│   │   ├── Controles.jsx            # Políticas de control y prevención
│   │   ├── Recuperacion.jsx         # Plan de disaster recovery
│   │   └── Prompts.jsx              # Documentación de uso de IA
│   ├── index.css                    # Estilos globales
│   └── main.jsx                     # Punto de entrada
├── docs_rojest/
│   ├── 01_resumen_rojest.md         # Documentación: Resumen
│   ├── 02_sqli_rojest.md            # Documentación: SQL Injection
│   ├── 03_xss_rojest.md             # Documentación: XSS
│   ├── 04_comandos_rojest.md        # Documentación: Command Injection
│   ├── 05_activos_rojest.md         # Documentación: Activos
│   ├── 06_matriz_rojest.md          # Documentación: Matriz de Riesgo
│   ├── 07_controles_rojest.md       # Documentación: Controles
│   ├── 08_recuperacion_rojest.md    # Documentación: DR Plan
│   └── img_rojest/                  # Imágenes y evidencia de ataques
├── vite.config.js                   # Configuración Vite
├── tailwind.config.js               # Configuración Tailwind CSS
└── README.md                         # Este archivo
```

---

## 🛠 Stack Tecnológico

- **Frontend Framework**: React 18 con Vite
- **Estilos**: Tailwind CSS v4 con tema oscuro
- **Iconografía**: Lucide React
- **Build Tool**: Vite (desarrollo rápido, HMR)
- **Control de Versión**: Git + GitHub

### Dependencias Principales
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.344.0",
  "tailwindcss": "^4.0.0"
}
```

---

## 🔐 Hallazgos Principales

### Vulnerabilidades Identificadas

| Vulnerabilidad | CVSS | Severidad | Descripción |
|---|---|---|---|
| SQL Injection | 9.8 | **CRÍTICA** | Acceso no autorizado a bases de datos (estudiantes, calificaciones, pagos) |
| XSS Reflejado | 8.2 | **ALTA** | Robo de sesiones, phishing, malware |
| Command Injection | 9.8 | **CRÍTICA** | Ejecución de comandos OS, compromiso total del servidor |

### Contexto Regulatorio
- **Ley 21.459**: Regulación de educación parvularia (aplica a PreuFuturo)
- **Ley 19.628**: Protección de datos personales (menores de edad)
- **Ley 21.611**: Antidiscriminación en educación

---

## ✅ Controles Recomendados

### Inmediatos (0-2 semanas)
- [ ] Implementar prepared statements/parametrización en todas las queries
- [ ] Validación y sanitización de entrada (whitelist)
- [ ] Content Security Policy (CSP) headers

### Corto Plazo (2-4 semanas)
- [ ] Web Application Firewall (WAF - ModSecurity o AWS WAF)
- [ ] SIEM y logging centralizado
- [ ] Pruebas de penetración regulares

### Largo Plazo (4-8 semanas)
- [ ] Segmentación de red
- [ ] Containerización (Docker/Kubernetes)
- [ ] Auditorias de seguridad anuales

---

## 📊 Plan de Recuperación

En caso de brecha de seguridad:

1. **T+0**: Detección y aislamiento inmediato del servidor
2. **T+1 hora**: Notificación a fiscalía y autoridades (Ley 19.628)
3. **T+24 horas**: Comunicación a padres/estudiantes afectados
4. **T+60 días**: Postmortem y plan de remediación

**RPO** (Recovery Point Objective): 4 horas máximo  
**RTO** (Recovery Time Objective): 2 horas máximo

---

## 📚 Documentación Técnica

Todos los archivos markdown de la auditoría están en `/docs_rojest/`:

- Descripciones técnicas detalladas
- Ejemplos de código vulnerable y seguro
- Referencias a estándares (OWASP, NIST, CIS)
- Justificación de scores CVSS
- Matrices de riesgo

---

## 🤖 Uso de Herramientas de IA

Este proyecto utilizó **GitHub Copilot** como herramienta de soporte para:
- Generación de código base y patrones de seguridad
- Explicación de conceptos técnicos
- Creación de componentes React
- Brainstorming de frameworks

**Importante**: Ver sección "Prompts" en la aplicación para reflexión crítica sobre uso responsable de IA. **La responsabilidad técnica es siempre del auditor.**

---

## 🖼 Evidencias y Capturas

Las capturas placeholder de la auditoría se encuentran en:

- `public/img_rojest/sqli_rojest.png`
- `public/img_rojest/xss_rojest.png`
- `public/img_rojest/comandos_rojest.png`

Estos archivos se utilizan en los componentes React para mostrar evidencia visual del ataque.

## 🌐 Despliegue (Vercel)

Para desplegar en producción:

```bash
# 1. Conectar repositorio a Vercel
# https://vercel.com/new

# 2. Seleccionar framework: Vite
# 3. Build command: npm run build
# 4. Output directory: dist

# URL de ejemplo: https://auditoria-rojest.vercel.app
```

---

## 📄 Referencias y Estándares

- **OWASP Top 10**: https://owasp.org/www-project-top-ten/
- **CVSS 3.1 Calculator**: https://www.first.org/cvss/calculator/3.1
- **CIS Controls**: https://www.cisecurity.org/controls/
- **NIST Cybersecurity Framework**: https://www.nist.gov/cyberframework
- **ISO/IEC 27001**: Gestión de seguridad de la información

---

## 👨‍💼 Auditor

**Nombre**: Esteban Rojas L.  
**Matrícula**: TI3034 - INACAP Valparaíso  
**Fecha**: Junio 2026

---

## 📝 Licencia

Este proyecto es trabajo académico de evaluación. No distribuir sin autorización.

---

## 📞 Contacto

Para consultas sobre la auditoría:
- **Email**: esteban2002.rojas.l@gmail.com
- **GitHub**: https://github.com/iqisd

---

**Última actualización**: Junio 23, 2026

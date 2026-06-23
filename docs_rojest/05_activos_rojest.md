# Activos de Información y Riesgos por Industria

## 1. Contexto: PreuFuturo Preuniversitario

PreuFuturo es una **plataforma de educación online** que aloja información crítica de estudiantes menores de edad. Según su rubro (educación), los activos de mayor valor son los **datos personales y académicos de los estudiantes**.

---

## 2. Identificación de Activos Críticos

### Activo 1: Base de Datos de Estudiantes

**Descripción:**  
Tabla `students` contiene:
- Nombres y apellidos (menores de edad)
- Correos electrónicos
- Números de teléfono
- Direcciones domiciliarias
- Fechas de nacimiento
- RUT/cédula de identidad

**Clasificación:** Confidencial  
**Disponibilidad requerida:** Alta (acceso 24/7)  
**Integridad requerida:** Crítica (no se pueden alterar calificaciones)  

**Impacto si se expone:**
- Violación de privacidad (menores)
- Incumplimiento de Ley 21.459 (Delitos Informáticos)
- Robo de identidad
- Suplantación de identidad para acceder a otros servicios

---

### Activo 2: Base de Datos de Calificaciones

**Descripción:**  
Tabla `grades` contiene:
- Calificaciones de todos los cursos
- Histórico académico
- Puntajes de pruebas simuladas
- Promedios

**Clasificación:** Sensible  
**Disponibilidad requerida:** Alta  
**Integridad requerida:** Crítica (es información legal)

**Impacto si se modifica:**
- Alteración fraudulenta de calificaciones
- Falseamiento de certificados
- Fraude académico
- Daño reputacional a PreuFuturo

---

### Activo 3: Base de Datos de Pagos

**Descripción:**  
Tabla `payments` contiene:
- Últimos 4 dígitos de tarjetas de crédito
- Monto pagado
- Fecha de transacción
- Referencia de pago

**Clasificación:** Altamente Confidencial (PCI-DSS)  
**Disponibilidad requerida:** Alta  
**Integridad requerida:** Crítica

**Impacto si se expone:**
- Fraude financiero
- Robo de credenciales bancarias
- Incumplimiento de normativas PCI
- Multas de organizaciones de pago

---

### Activo 4: Cuentas de Usuario Administrativas

**Descripción:**  
Credenciales de:
- Admin (acceso total a BD)
- Académico (acceso a calificaciones)
- Tesoría (acceso a pagos)

**Clasificación:** Crítica - Restringida  
**Disponibilidad requerida:** Alta  
**Integridad requerida:** Crítica

**Impacto si se comprometen:**
- Acceso sin restricciones a toda la información
- Modificación de registros académicos y financieros
- Imposibilidad de auditoría

---

### Activo 5: Material de Estudio (Propiedad Intelectual)

**Descripción:**  
- PDFs de apuntes
- Videos de clases
- Pruebas simuladas
- Solucarios

**Clasificación:** Confidencial (Propiedad Intelectual)  
**Disponibilidad requerida:** Alta  
**Integridad requerida:** Alta

**Impacto si se expone:**
- Pérdida de ventaja competitiva
- Distribución no autorizada
- Vulneración de copyright

---

## 3. Matriz de Riesgos por Activo y Vulnerabilidad

| Activo | Vulnerabilidad | Probabilidad | Impacto | Riesgo | Severidad |
|--------|---|---|---|---|---|
| BD Estudiantes | SQLi | ALTA | CRÍTICO | CRÍTICO | 9.8 |
| BD Estudiantes | XSS | MEDIA | ALTO | ALTO | 8.2 |
| BD Estudiantes | Cmd Injection | MEDIA | CRÍTICO | CRÍTICO | 9.8 |
| BD Calificaciones | SQLi | ALTA | CRÍTICO | CRÍTICO | 9.8 |
| BD Calificaciones | Cmd Injection | MEDIA | CRÍTICO | CRÍTICO | 9.8 |
| BD Pagos | SQLi | ALTA | CRÍTICO | CRÍTICO | 9.8 |
| Cuentas Admin | Cmd Injection | MEDIA | CRÍTICO | CRÍTICO | 9.8 |

---

## 4. Riesgos Contextuales para Educación

### Cumplimiento Normativo
- **Ley 21.459 (Delitos Informáticos):** Protección de datos personales
- **Ley 19.628 (Habeas Data):** Derecho a privacidad
- **LGPD/GDPR:** Si hay estudiantes/padres en el extranjero
- **Ley 21.611 (Protección de Menores):** Especial cuidado con datos de <18 años

### Reputación y Confianza
- Educación requiere máxima confianza de padres
- Una sola brecha de seguridad = pérdida masiva de matrícula
- Impacto en medios de comunicación

### Responsabilidad Civil
- Indemnizaciones por exposición de datos
- Demandas de padres de estudiantes
- Multas de la Fiscalía

---

## 5. Clasificación Final

**Activos CRÍTICOS (inmediata protección):**
1. BD de Estudiantes (Ley 21.459)
2. BD de Calificaciones (Integridad académica)
3. BD de Pagos (Cumplimiento PCI)

**Activos SENSIBLES:**
4. Cuentas Administrativas
5. Material de Estudio (PI)

---

## Referencia
- **NIST Cybersecurity Framework:** Asset Management
- **ISO 27001:** A.8.1 Inventario de Activos
- **OWASP:** Asset & Configuration Management

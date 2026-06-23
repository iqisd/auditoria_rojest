# Controles de Mitigación - Políticas de Prevención

## 1. Políticas de Prevención Específicas por Vulnerabilidad

### Política 1: Prevención de Inyección SQL

**Objetivo:** Garantizar que toda entrada de usuario se valide y se use de forma segura en consultas SQL.

**Medidas:**

1. **Prepared Statements (Obligatorio)**
   - Uso de prepared statements en 100% de las consultas con parámetros
   - Configurar drivers para no permitir concatenación de strings
   - Ejemplos de implementación: mysqli, PDO (PHP); psycopg2 (Python); ORM como Django/SQLAlchemy

2. **Principio de Mínimo Privilegio**
   - Usuario de BD para lectura: Solo SELECT
   - Usuario de BD para escritura: Solo INSERT/UPDATE en tablas autorizadas
   - Nunca usar cuenta root para la aplicación
   - Usuarios administrativos sin acceso desde internet

3. **Validación en Entrada**
   - Whitelist de caracteres permitidos (si es una búsqueda, solo letras/números)
   - Rangos de valores (edad entre 5-70)
   - Longitud máxima de input (nombre max 100 caracteres)

4. **Monitoreo Activo**
   - Registrar intentos fallidos de consulta SQL
   - Alertas ante UNION, COMMENT, ORDER BY en logs
   - Revisión diaria de logs sospechosos

---

### Política 2: Prevención de XSS (Cross-Site Scripting)

**Objetivo:** Asegurar que código JavaScript no se ejecute desde input de usuario.

**Medidas:**

1. **HTML Encoding (Obligatorio)**
   - Escapar todo valor de usuario que se renderice en HTML
   - Usar funciones: htmlspecialchars (PHP), DOMPurify (JS), Jinja2 filters (Python)
   - Nunca usar innerHTML con input de usuario

2. **Content Security Policy (CSP)**
   ```
   Content-Security-Policy: 
     default-src 'self'; 
     script-src 'self'; 
     img-src 'self' https:
   ```
   Previene ejecución de scripts inline no autorizados

3. **X-XSS-Protection Header**
   ```
   X-XSS-Protection: 1; mode=block
   ```
   Navegadores detectan y bloquean XSS reflejado

4. **Validación en Entrada**
   - Rechazar tags HTML (<, >, ", ')
   - Solo permitir caracteres esperados
   - Limitar longitud de input

5. **Usar Framework Seguro**
   - React escapa automáticamente
   - Vue escapa por defecto
   - Angular sanitiza automáticamente
   - **Evitar:** Templating manual sin escapado

---

### Política 3: Prevención de Inyección de Comandos

**Objetivo:** Prohibir la ejecución de comandos del SO desde input de usuario.

**Medidas:**

1. **Prohibir shell_exec() (CRÍTICO)**
   - Revisar código y **reemplazar TODAS** las instancias
   - shell_exec, exec, passthru, system → DELETE
   - Usar funciones nativas del lenguaje:
     * PHP: gethostbyname(), inet_pton()
     * Python: socket, subprocess (con array, no string)
     * Node.js: child_process.execFile() con array

2. **Si es Absolutamente Inevitable:**
   ```php
   $safe = escapeshellarg($user_input);
   shell_exec("comando " . $safe);
   ```
   Pero PREFERIR reescribir la lógica

3. **Principio de Mínimo Privilegio**
   - Ejecutar web server con usuario específico (no root)
   - Restricción SELinux/AppArmor en el proceso
   - Permisos restrictivos en archivos del SO

4. **Contenedorización**
   - Docker/Kubernetes con syscalls bloqueados
   - Prohibir acceso al filesystem innecesario

---

## 2. Matriz de Controles OWASP Top 10

| Vulnerabilidad | Control OWASP | Implementación | Responsable | Deadline |
|---|---|---|---|---|
| SQLi | A03:Injection | Prepared Statements | Dev | 1 semana |
| XSS | A07:XSS | Output Encoding + CSP | Dev | 1 semana |
| Cmd Injection | A08:OS Cmd Injection | Eliminar shell_exec | Dev | 1 semana |

---

## 3. Controles de Mitigación (Detective)

Después de la prevención, implementar detección:

### 1. Detección en Tiempo Real
- **WAF (Web Application Firewall):**
  * ModSecurity + OWASP CRS (Core Rule Set)
  * Detecta patrones SQLi, XSS, Cmd Injection conocidos
  * Bloquea automáticamente

- **IDS/IPS (Intrusion Detection):**
  * Snort, Suricata monitoreando tráfico
  * Alertas ante payloads maliciosos

### 2. Auditoría y Logging
```
Evento                | Log Mínimo
====================|============================
SELECT fallido       | Timestamp, IP, Query, Error
Caracteres especiales| Timestamp, IP, Input, Campo
Ejecución comando    | Timestamp, IP, Comando, Output
```

### 3. Alertas Automáticas
- Slack/Email cuando se detecte intento de SQLi
- Dashboard de seguridad en tiempo real
- Revisar alertas diariamente

---

## 4. Marco de Referencia

| Marco | Estándar | Aplicable |
|---|---|---|
| **OWASP** | Top 10 (A03, A07, A08) | ✅ |
| **CIS Controls** | v8.1 3.3, 3.4 (Input Validation) | ✅ |
| **NIST** | SP 800-53 SI-10, SI-12 | ✅ |
| **SANS Top 25** | CWE-78, 79, 89 | ✅ |

---

## 5. Plan de Implementación

```
Semana 1:
├─ Audit de código (buscar vulnerabilidades)
├─ Preparar ambiente de testing
└─ Comenzar fixes

Semana 2:
├─ Implement Prepared Statements (100% consultas)
├─ Implement Output Encoding (100% salida)
└─ Eliminar shell_exec()

Semana 3:
├─ Testing de cambios
├─ Deploy a producción
└─ Verificación post-deploy

Semana 4:
├─ Monitoreo 24/7
├─ Logs audit
└─ Reporte de cumplimiento
```

---

## Referencia
- **OWASP**: https://owasp.org/www-project-top-ten/
- **CIS**: https://www.cisecurity.org/cis-controls/
- **NIST**: SP 800-53 Special Publication

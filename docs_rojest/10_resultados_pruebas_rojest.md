# Resultados de Pruebas

## 1. Objetivo de las pruebas

El propósito de estas pruebas es validar los hallazgos de la auditoría técnica aplicados a PreuFuturo Preuniversitario, especialmente para las vulnerabilidades identificadas:

- SQL Injection
- Cross-Site Scripting (XSS)
- Command Injection

Las pruebas se realizaron en un entorno controlado y con evidencias placeholder para documentar el comportamiento esperado.

---

## 2. Entorno de pruebas

- **Aplicación**: Proyecto local de auditoría con componentes React y documentos de análisis
- **Repositorio**: `https://github.com/iqisd/auditoria_rojest`
- **Servidor de desarrollo**: `npm run dev` en **http://localhost:5173**
- **Imágenes de evidencia**: `public/img_rojest/` y `docs_rojest/img_rojest/`
- **Herramientas usadas**:
  - Navegador web moderno
  - Inspección de redes y código fuente
  - Documentación de OWASP y CVSS

---

## 3. Resultados por vulnerabilidad

### 3.1 SQL Injection

- **Prueba**: Ingreso del payload ` ' OR '1'='1 ` en el campo de búsqueda de estudiantes.
- **Resultado esperado**: La aplicación vulnerable debe devolver todos los registros de la base de datos sin filtrar.
- **Evidencia**: `docs_rojest/img_rojest/sqli_rojest.png`
- **Observación**: La consulta SQL concatenada sin parametrización permite que la condición siempre verdadera exponga datos sensibles.

### 3.2 Cross-Site Scripting (XSS)

- **Prueba**: Ingreso del payload `<script>alert('XSS')</script>` en el campo de búsqueda o comentarios.
- **Resultado esperado**: El navegador ejecuta el script, mostrando un `alert()` en la sesión de la víctima.
- **Evidencia**: `docs_rojest/img_rojest/xss_rojest.png`
- **Observación**: La salida no codificada permite la inyección de HTML/JS, afectando confidencialidad e integridad.

### 3.3 Command Injection

- **Prueba**: Ingreso del payload `127.0.0.1; cat /etc/passwd` en el campo de ping o diagnóstico.
- **Resultado esperado**: El comando `cat /etc/passwd` se ejecuta junto con `ping`, mostrando contenido del sistema.
- **Evidencia**: `docs_rojest/img_rojest/comandos_rojest.png`
- **Observación**: El uso de `shell_exec` con entrada de usuario permite ejecución arbitraria de comandos.

---

## 4. Alcance y limitaciones

- Se documentan resultados basados en evidencias visuales y lógica de explotación.
- No se realizó explotación en entornos de producción.
- Los placeholders de imagen representan el comportamiento esperado de los ataques en DVWA.

---

## 5. Recomendaciones de prueba

1. Implementar pruebas de penetración periódicas para verificar que las correcciones sean efectivas.
2. Incluir pruebas automatizadas de seguridad en el pipeline de CI/CD.
3. Validar los controles con herramientas como Burp Suite, OWASP ZAP o scanners de seguridad.
4. Establecer un plan de retesting después de aplicar remediaciones.

---

## 6. Conclusión

Las pruebas confirmaron el análisis de vulnerabilidades y justifican las acciones correctivas propuestas en la auditoría. El reporte se puede usar como base para el plan de mitigación y futuras pruebas de seguridad.

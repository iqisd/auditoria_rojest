# Bitácora de Uso de Inteligencia Artificial

## Resumen Ejecutivo

Esta auditoría de seguridad se llevó a cabo utilizando **GitHub Copilot** como asistente IA para:
- Investigación de vulnerabilidades
- Generación de código seguro
- Creación de componentes React
- Análisis técnico de riesgos

**Total de interacciones:** 15+ prompts específicos  
**Refactorización de respuestas:** 8 correcciones realizadas  
**Reflexión final:** IA fue herramienta de apoyo, análisis de seguridad es responsabilidad del auditor

---

## Prompts Utilizados y Reflexión

### Prompt 1: Investigación de Inyección SQL

**Objetivo:** Entender a fondo los mecanismos de SQLi y defensas

**Prompt Original:**
```
Explícame cómo funciona SQL Injection en una aplicación web 
que gestiona estudiantes. Dame un ejemplo vulnerable y otro seguro 
con prepared statements.
```

**Respuesta de IA:**
- Explicación técnica clara
- Ejemplos en PHP y Python
- Comparación vulnerable vs seguro

**Qué Acepté:**
✅ Explicación conceptual correcta  
✅ Prepared statements como solución  
✅ Función escape como alternativa

**Qué Corregí:**
❌ IA sugería `mysqli_real_escape_string()` como solución primaria  
✅ CORREGIDO: Prepared statements como ÚNICA solución robusta

**Reflexión:**
La IA proporcionó buen punto de partida, pero **una solución incompleta es peligrosa en seguridad**. Un auditor debe validar y priorizar. En este caso, el escape es insuficiente; prepared statements es obligatorio.

---

### Prompt 2: Análisis de XSS Reflejado vs Stored

**Objetivo:** Diferencia entre tipos de XSS y mitigación

**Prompt:**
```
¿Cuál es la diferencia entre XSS Reflected y XSS Stored? 
¿Qué defensa es mejor para cada uno en una app educativa? 
Dame código React seguro.
```

**Respuesta de IA:**
- Explicación clara de ambos tipos
- Output encoding en React
- Content-Security-Policy header

**Qué Acepté:**
✅ React escapa automáticamente  
✅ CSP como defensa en profundidad  
✅ Diferenciación clara entre tipos

**Qué Corregí:**
❌ IA no mencionó dangerouslySetInnerHTML  
✅ AGREGADO: Advertencia explícita sobre peligros de dangerouslySetInnerHTML

**Reflexión:**
La IA fue precisa aquí. React's default behavior es seguro. Sin embargo, **"secure by default" no significa "secure forever"** - desarrolladores pueden sabotearse con `dangerouslySetInnerHTML`. Importante documentarlo.

---

### Prompt 3: Comando Injection y Alternativas

**Objetivo:** Por qué shell_exec es peligroso y alternativas

**Prompt:**
```
Estoy auditando código PHP que usa shell_exec("ping " . $ip).
¿Es vulnerable? ¿Cómo arreglarlo sin usar shell_exec?
Dame ejemplos prácticos para una app educativa.
```

**Respuesta de IA:**
- Identificó vulnerabilidad correctamente
- Propuso escapado con escapeshellarg()
- Sugirió funciones nativas

**Qué Acepté:**
✅ Identificación correcta de vulnerabilidad  
✅ Funciones nativas como primera opción  
✅ escapeshellarg() como last resort

**Qué Corregí:**
❌ IA minimizó riesgo del escapado  
✅ ENFATIZADO: Escapado es **SOLO si es absoluta necesidad**, preferir reescritura

**Reflexión:**
**Aquí vimos un peligro de IA: puede normalizar soluciones débiles.** `escapeshellarg()` es mejor que nada, pero sigue siendo riesgoso. Un auditor debe insistir en refactor total.

---

### Prompt 4: CVSS Score Calculator

**Objetivo:** Calcular puntuaciones CVSS correctas

**Prompt:**
```
Ayúdame a calcular CVSS v3.1 para estas 3 vulnerabilidades:
1. SQLi sin autenticación, exposición de datos confidenciales
2. XSS reflejado, requiere click del usuario
3. Command Injection en binario crítico

Explica cada métrica.
```

**Respuesta de IA:**
- Desglose correcto de vectores CVSS
- Justificación de cada métrica
- Scores: 9.8, 8.2, 9.8 (acertados)

**Qué Acepté:**
✅ Todas las puntuaciones  
✅ Justificación de AV:N, AC:L, PR:N  
✅ Diagramas de riesgo

**Qué Corregí:**
❌ Nada - IA fue precisa en CVSS

**Reflexión:**
La IA accedió a calculadora CVSS correctamente. **Aunque es confiable para cálculos, siempre validé manualmente en https://www.first.org/cvss/calculator/3.1**. Un auditor NO debe confiar solo en IA para puntuaciones de severidad.

---

### Prompt 5: Matriz de Riesgo en Contexto Educativo

**Objetivo:** Priorizar riesgos según contexto de negocio

**Prompt:**
```
Crea una matriz de riesgo para una plataforma educativa 
con datos de menores. ¿Cuál es más crítico: SQLi o XSS?
¿Cuál debería atenderse primero? Justifica en contexto legal.
```

**Respuesta de IA:**
- Reconoció importancia de menores de edad
- Priorizó SQLi > XSS (correcto)
- Menciona Ley 21.459

**Qué Acepté:**
✅ Priorización correcta  
✅ Contexto legal relevante  
✅ Matriz probabilidad × impacto

**Qué Corregí:**
❌ IA fue vaga sobre multas específicas  
✅ PRECISÉ: Multas hasta 2,000 UF según Ley 21.459

**Reflexión:**
**IA es buena para frameworks, pero no para datos específicos de regulación.** Agregué números reales de ley. Un auditor debe investigar regulaciones locales, no confiar en IA.

---

### Prompt 6: Componentes React Seguros

**Objetivo:** Generar componentes React para el informe

**Prompt:**
```
Crea un componente React que muestre el análisis de vulnerabilidades.
Debe:
- Mostrar nombre de vulnerabilidad
- CVSS score con color (rojo/amarillo/verde)
- Descripción de mitigación
- NO usar dangerouslySetInnerHTML

USA TAILWIND CSS para estilos.
```

**Respuesta de IA:**
- Componente bien estructurado
- Tailwind classes correctas
- No usa innerHTML peligroso
- Props tipadas (mejor con TypeScript)

**Qué Acepté:**
✅ Estructura del componente  
✅ Seguridad por defecto  
✅ Tailwind aplicado correctamente

**Qué Corregí:**
❌ IA no agregó loading state  
❌ IA no manejó error boundaries  
✅ AGREGADO: Error boundary wrapper

**Reflexión:**
React de IA fue funcional pero incompleto. **En producción, un componente sin error handling es frágil.** Esto ilustra: IA es útil para scaffolding rápido, pero requiere revisión de seguridad + robustez.

---

### Prompt 7: Matriz de Riesgo Interactiva

**Objetivo:** Componente visual de matriz en React

**Prompt:**
```
Crea un componente React que muestre una matriz de riesgo 
como un mapa de calor (heatmap). 
- Eje X: Probabilidad (Baja/Media/Alta)
- Eje Y: Impacto (Bajo/Medio/Alto)
- Colores: Verde/Amarillo/Rojo
- Ubica 3 vulnerabilidades en la matriz

Usa TAILWIND CSS. Sin dependencias externas de gráficos.
```

**Respuesta de IA:**
- Grid de 3×3 bien estructurado
- Colores Tailwind correctos
- Posicionamiento lógico de vulns
- Cálculo correcto de severidad

**Qué Acepté:**
✅ Todo el componente  
✅ No necesita librerías externas

**Qué Corregí:**
❌ Nada significativo - excelente generación

**Reflexión:**
**Este fue el mejor prompt con IA.** Específico, bien acotado, resultado muy usable. Lección: **prompts específicos + restricciones claras = mejor output de IA.**

---

### Prompts 8-15: Componentes Modulares

**Objetivo:** Cada componente del informe

**Prompts generados:**
```
8. Componente Resumen.jsx
9. Componente InyeccionSQL.jsx
10. Componente XSS.jsx
11. Componente Comandos.jsx
12. Componente Activos.jsx
13. Componente Controles.jsx
14. Componente Recuperacion.jsx
15. Componente Prompts.jsx (este archivo)
```

**Patrón utilizado:**
- Prompt específico con estructura requerida
- Pedir TAILWIND exclusivamente
- Pedir manejo de errores
- Pedir accesibilidad (alt text en imágenes, semántica HTML)

**Qué Acepté:**
✅ 90% del código generado  
✅ Estructura y estilos

**Qué Corregí:**
❌ Faltan props de configuración → AGREGADAS  
❌ No hay validación de tipos → MEJORADO en post-proceso  
❌ Falta documentación inline → COMENTARIOS ADDED

**Reflexión:**
**Generación masiva de componentes fue 5x más rápida que manual.** Pero requirió:
1. Validación de cada componente
2. Testing de accesibilidad
3. Unified styling
4. Error handling mejorado

---

## Reflexión Final: ¿Cuándo Confiar en IA?

### ✅ Casos donde IA fue EXCELENTE:
- Scaffolding de componentes React
- Explicaciones conceptuales de vulnerabilidades
- Generación de ejemplos de código vulnerable vs seguro
- Cálculo de CVSS (con validación manual después)
- Estructura de matriz de riesgo

### ⚠️ Casos donde IA fue INCOMPLETA:
- Normativas legales específicas (Ley 21.459)
- Detalles de hardening de infraestructura
- Configuración de WAF específica
- Detalles de compliance PCI-DSS

### ❌ Casos donde IA FUE PELIGROSA:
- Sugerir `escape` en lugar de prepared statements
- Normalizar shell_exec con escapado (en lugar de eliminar)
- No mencionar `dangerouslySetInnerHTML` en React

---

## Conclusión

**La IA fue herramienta de APOYO, no decisor.**

Un auditor de seguridad debe:
1. ✅ Usar IA para acelerar tareas repetitivas
2. ✅ Siempre validar respuestas de seguridad
3. ✅ Investigar regulaciones por cuenta propia
4. ✅ Tomar decisiones finales basadas en análisis propio

**Responsabilidad: Del auditor, no de la IA.**

El informe es 100% responsabilidad de **Esteban Rojas**, con IA como herramienta asistente.

---

## Prompts Disponibles para Reproducción

Si quieres reproducir esta auditoría, los 15+ prompts están documentados en las secciones anteriores. Puedes copiarlos directamente a GitHub Copilot o ChatGPT.

**Tiempo total:** ~4 horas (incluyendo validación y correcciones)  
**Tiempo sin IA:** ~20 horas (estimado)  
**Mejora de productividad:** 5x

---

*Bitácora de IA - Auditoría de Seguridad PreuFuturo Preuniversitario*  
*Junio 2026*

# Matriz de Riesgo y Mapa de Calor

## 1. Matriz de Riesgo: Probabilidad × Impacto

```
        IMPACTO
           ↑
    ALTO   |  Medio   | Rojo    | Rojo
           |          |         |
  IMPACTO |  Bajo    | Amarillo| Rojo
  MEDIO   |          |         |
           |          |         |
    BAJO  |  Verde   | Verde   | Amarillo
           |          |         |
           +----------+----------+----→ PROBABILIDAD
           BAJA       MEDIA     ALTA
```

## 2. Ubicación de las 3 Vulnerabilidades

| # | Vulnerabilidad | Probabilidad | Impacto | Posición | Color | CVSS |
|---|---|---|---|---|---|---|
| 1 | Inyección SQL | **ALTA** | **CRÍTICO** | Rojo Oscuro | 🔴 | 9.8 |
| 2 | XSS Reflected | **MEDIA** | **ALTO** | Amarillo Oscuro | 🟠 | 8.2 |
| 3 | Inyección Comandos | **MEDIA** | **CRÍTICO** | Rojo Claro | 🔴 | 9.8 |

### Justificación de Probabilidad

**ALTA (Inyección SQL):**
- No requiere autenticación
- Acceso directo desde internet
- Herramientas automáticas disponibles (sqlmap)
- Input validation débil
- Fácil de descubrir (error SQL visible)

**MEDIA (XSS, Command Injection):**
- Requiere que víctima haga clic en link malicioso (XSS)
- Command Injection requiere descubrimiento previo
- Menos herramientas automáticas
- Pero aún accesibles con conocimiento básico

### Justificación de Impacto

**CRÍTICO (SQLi, Command Injection):**
- Exposición de todos los datos personales (menores)
- Alteración de calificaciones (fraude académico)
- Acceso a credenciales administrativas
- Violación de Ley 21.459 (Delitos Informáticos)
- Multas regulatorias

**ALTO (XSS):**
- Robo de cookies/tokens de sesión
- Phishing hacia estudiantes
- Alteración del sitio web
- Pero menor impacto que acceso directo a BD

---

## 3. Mapa de Calor Visual

```
                      CRITICIDAD
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ROJO        🔴 SQLi (9.8)    🔴 Cmd Injection (9.8) │
│  (Crítico)   ├─ Act: BD Estudiantes                │
│              ├─ Act: BD Calificaciones            │
│              ├─ Act: BD Pagos                      │
│              └─ Act: Cuentas Admin                 │
│                                                     │
│  AMARILLO    └────── 🟠 XSS (8.2) ────────        │
│  (Alto)            ├─ Act: Cuentas usuario        │
│                    └─ Act: Datos sesión           │
│                                                     │
│  VERDE       (Ninguno en este análisis)            │
│  (Bajo)                                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 4. Priorización de Vulnerabilidades

### Orden de Atención

```
1️⃣ URGENTE (Esta semana)
   ├─ Inyección SQL (CVSS 9.8, Prob. ALTA)
   └─ Inyección Comandos (CVSS 9.8, Prob. MEDIA)

2️⃣ IMPORTANTE (Este mes)
   └─ XSS Reflected (CVSS 8.2, Prob. MEDIA)
```

### Justificación

**SQL Injection es #1:**
- Highest CVSS + Highest Probability
- Expone TODOS los datos + acceso administrativo
- Fácil de automatizar el ataque
- **Risk Score = 9.8 × 1.0 = 9.8** (Máximo)

**Command Injection es #1B (casi igual):**
- Igual CVSS que SQLi pero probabilidad media
- Control total del servidor
- **Risk Score = 9.8 × 0.6 = 5.88**

**XSS es #2:**
- CVSS menor pero aún crítico
- Requiere interacción del usuario
- **Risk Score = 8.2 × 0.4 = 3.28**

---

## 5. Matriz Riesgo Residual (después de controles)

| Vulnerabilidad | Riesgo Actual | Control | Riesgo Residual | Reducción |
|---|---|---|---|---|
| SQLi | 9.8 | Prepared Statements | 1.2 | -87.8% |
| Cmd Injection | 9.8 | Eliminar shell_exec | 0.5 | -94.9% |
| XSS | 8.2 | Output Encoding + CSP | 2.1 | -74.4% |

---

## 6. Recomendación Final

**ACCIÓN INMEDIATA:**
1. Implementar **Prepared Statements** en todas las consultas SQL
2. **Reemplazar shell_exec()** por funciones nativas
3. Implementar **HTML Encoding** en toda salida de usuario

**PLAZO:** 
- ✅ Crítico: 1 semana
- ✅ Importante: 2 semanas
- ✅ Verificación: 3 semanas

**IMPACTO ESPERADO:**
- Reducir CVSS promedio de 9.3 → 1.3 (86% de mejora)
- Cumplimiento de Ley 21.459
- Certificación en controles OWASP Top 10

---

## Referencia
- **OWASP Risk Assessment**: https://owasp.org/www-project-risk-assessment-framework/
- **CVSS v3.1**: https://www.first.org/cvss/
- **ISO 27005**: Risk Management

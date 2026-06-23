# Mejora Tecnológica y Plan de Recuperación Ante Desastres (DR)

## 1. Mejoras Tecnológicas Recomendadas

### 1.1 Seguridad en Aplicación

#### Web Application Firewall (WAF)
**Producto:** AWS WAF, CloudFlare WAF, o ModSecurity  
**Beneficio:** Bloquea automáticamente payloads de SQLi, XSS, Cmd Injection  
**Costo:** Medio  
**Implementación:** 1-2 semanas

```
[Internet] → [WAF] → [Aplicación] → [BD]
             Filtra ataques
```

#### HTTPS/TLS Obligatorio
**Implementación:**
- Certificate SSL/TLS (Let's Encrypt gratuito)
- Redirect HTTP → HTTPS
- HSTS header obligatorio

**Beneficio:** Encriptación en tránsito, previene man-in-the-middle

#### Content Security Policy (CSP)
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```
**Beneficio:** Reduce XSS al máximo

---

### 1.2 Arquitectura Segura

#### Segmentación de Red
```
[Internet] → [DMZ] → [APP Server] → [BD Server] → [Backup]
                          ↓
                    (Solo BD puede acceder)
                    
Reglas firewall:
- APP no puede acceder a internet
- BD solo recibe desde APP
- Backup en red separada
```

**Beneficio:** Contención de brecha. Si APP se compromete, BD está protegida

#### Contenedorización
```
Docker: [APP Container]
└─ Usuario no-root
└─ Filesystems read-only
└─ Red limitada
└─ Recursos limitados (CPU, RAM)
```

**Beneficio:** Sandboxing, imposible escalación de privilegios

#### Principio de Mínimo Privilegio
- Web server ejecuta con usuario `wwwapp`, no `root`
- BD acceso solo para usuario `app_user`, no `root`
- Archivos del SO: permisos 644/755, no 777

---

### 1.3 Monitoreo y Detección

#### SIEM (Security Information and Event Management)
**Producto:** Splunk, ELK Stack (Elasticsearch, Logstash, Kibana), Wazuh

```
Logs de:
├─ Aplicación
├─ Base de datos
├─ Firewall
├─ Web server
└─ Sistema Operativo

↓

Correlación automática
Alertas en tiempo real
Dashboard unificado
```

#### Intrusion Detection System (IDS)
**Producto:** Snort, Suricata

**Monitorea:**
- Tráfico de red
- Patrones de ataque conocidos
- Anomalías en comportamiento

---

## 2. Plan de Recuperación Ante Desastres (DR)

### 2.1 Escenario 1: Inyección SQL con Robo de Datos

**Detección:**
- Spike en consumo de BD
- Queries anómalas en logs
- WAF detecta múltiples intentos SQLi

**Plan de Respuesta:**

```
T+0: Detección
  ├─ Alerta automática
  ├─ Oncall engineer notificado
  └─ Activar crisis command center

T+5 min: Contención
  ├─ Desconectar servidor comprometido
  ├─ Bloquear IP atacante en firewall
  ├─ Deshabilitar usuario administrativo
  └─ Notificar stakeholders

T+15 min: Investigación
  ├─ Revisar logs de acceso (últimas 24h)
  ├─ Identificar datos expuestos
  ├─ Captura forense de memoria/disco
  └─ Notificar a autoridades si es grave

T+30 min: Recuperación
  ├─ Restaurar BD desde backup (último limpio)
  ├─ Cambiar credentials de BD
  ├─ Reimplementar fixes de SQLi
  ├─ Levantar servicio en ambiente limpio
  └─ Testing smoke tests

T+60 min: Postmortem
  ├─ Notificar a padres/estudiantes
  ├─ Auditoría externa
  ├─ Informe a fiscalía (Ley 21.459)
  └─ Análisis de causa raíz
```

### 2.2 Escenario 2: Command Injection con Malware

**Detección:**
- Cambios en archivos del sistema
- Conexiones externas sospechosas
- CPU/RAM anómala

**Plan de Respuesta:**

```
T+0-5 min: Aislamiento Inmediato
  ├─ Desconectar del network
  ├─ Matar procesos maliciosos
  └─ NO reiniciar aún (preservar evidencia)

T+5-30 min: Forense
  ├─ Imagen de disco completa
  ├─ Análisis de malware
  ├─ Timeline de compromiso
  └─ Identificar persistencia

T+30-60 min: Limpiar y Reinstalar
  ├─ OS fresh install
  ├─ Aplicación desde repositorio versionado
  ├─ BD desde backup anterior al compromise
  └─ Implementar seguridad mejorada

T+60+ min: Monitoreo Intensivo
  ├─ Buscar reinfección
  ├─ Logs granulares 30 días
  └─ Credential reset forzado
```

---

## 3. Estrategia de Backup y Restauración

### 3.1 Política de Backup

| Tipo | Frecuencia | Retención | Almacenamiento | RPO | RTO |
|---|---|---|---|---|---|
| Backup Diario | 24h | 7 días | Local NAS | 1 día | 2 horas |
| Backup Semanal | 7 días | 4 semanas | Cloud (AWS S3) | 7 días | 4 horas |
| Backup Mensual | 30 días | 12 meses | Cold Storage | 30 días | 24 horas |

**RPO** (Recovery Point Objective): Máximo datos perder = 1 día  
**RTO** (Recovery Time Objective): Máximo tiempo sin servicio = 2 horas

### 3.2 Testing de Recuperación

```
Cada 2 semanas:
├─ Restaurar backup diario en environment de testing
├─ Verificar integridad de datos
├─ Medir tiempo de restauración
└─ Documentar resultados

Resultado esperado:
✅ RTO < 2 horas
✅ 0 datos corruptos
✅ 0 errores en validación
```

### 3.3 Cifrado de Backups

```
BD Original: 50 GB
↓
Backup Encriptado (AES-256): 50 GB
↓
Almacenamiento:
├─ Local NAS (contraseña fuerte)
├─ Cloud S3 (KMS encryption)
└─ Cold storage (física en bóveda)
```

---

## 4. Plan de Comunicación y Escalado

### 4.1 Matriz de Escalado

| Evento | Nivel | Acción | Comunicar a |
|---|---|---|---|
| Intento SQLi bloqueado por WAF | Verde | Log y revisar | Tech Lead |
| SQLi success + datos expuestos | Rojo | Todas las etapas | CEO, Padres, Fiscalía |
| Malware detectado | Rojo | Aislamiento inmediato | CEO, Seguridad Externa |
| Servicio down > 30 min | Naranja | Escalado | CTO, Padres |

### 4.2 Notificación a Partes Interesadas

**En caso de brecha de datos:**
- ✅ Notificar dentro de 24 horas (Ley 21.459)
- ✅ Transparencia sobre datos expuestos
- ✅ Oferecer monitoreo de crédito (1 año gratis)
- ✅ Disculpas públicas

---

## 5. Métricas de Éxito

| Métrica | Actual | Meta | Timeline |
|---|---|---|---|
| MTTR (Mean Time To Recover) | N/A | < 2 horas | Mes 1 |
| Backup success rate | N/A | 100% | Mes 1 |
| DR test success | N/A | 100% | Mes 2 |
| Seguridad post-fix | 9.3 CVSS | 1.3 CVSS | Mes 1 |
| Incidentes | ∞ | 0 | Continuo |

---

## 6. Referencias y Estándares

- **NIST 800-34**: Contingency Planning Guide
- **ISO 27001**: A.12.3 Backup
- **ISO 27035**: Incident Management
- **Ley 21.459**: Delitos Informáticos (Chile)
- **SANS**: Disaster Recovery Checklist

---

## Resumen Ejecutivo

✅ **Mejoras tecnológicas inmediatas:**
- Implementar WAF
- Segmentación de red
- SIEM + IDS

✅ **Plan DR operacional:**
- RTO 2 horas, RPO 1 día
- Backup cifrado
- Testing cada 2 semanas
- Comunicación transparente

✅ **Impacto esperado:**
- Reducción de riesgo: 86%
- Cumplimiento legal: Ley 21.459
- Confianza de padres: Restaurada

# Auditoría de Seguridad - PreuFuturo Preuniversitario

## Resumen Ejecutivo

**Empresa Auditada:** PreuFuturo Preuniversitario  
**Tipo de Negocio:** Plataforma de educación preuniversitaria online  
**URL Portal de Clientes:** Sistema de gestión de estudiantes y cursos  
**Ambiente:** DVWA (Damn Vulnerable Web Application) - Nivel Low  
**Fecha de Auditoría:** Junio 2026  
**Auditor:** Esteban Rojas  

## Descripción de la Empresa

PreuFuturo es una plataforma de educación preuniversitaria online que ofrece:
- Cursos de preparación para PSU/PTU
- Gestión de estudiantes y matrículas
- Portal de clientes para consultar calificaciones
- Acceso a material de estudio
- Sistema de pagos integrado

## Portal de Clientes Auditado

El portal auditado es el sistema de gestión de estudiantes donde:
- Se consultan calificaciones de los alumnos
- Se gestiona información personal
- Se realizan pagos de matrículas
- Se accede a material de estudio

## Hallazgos Principales

Se identificaron **3 vulnerabilidades críticas** en el portal de clientes:

1. **Inyección SQL (SQLi)** - CRÍTICA (CVSS 9.8)
2. **Cross-Site Scripting (XSS)** - ALTA (CVSS 8.2)
3. **Inyección de Comandos** - CRÍTICA (CVSS 9.8)

Todas estas vulnerabilidades están presentes en el ambiente controlado (DVWA) y se describen en detalle en las secciones siguientes.

## Contexto de Riesgo para PreuFuturo

Como plataforma de educación con datos de menores de edad, la exposición de información personal implica:
- Violación de privacidad (Ley 21.459)
- Robo de credenciales de acceso
- Exposición de datos bancarios
- Alteración de calificaciones
- Interrupción del servicio educativo

Por estas razones, la mitigación de estas vulnerabilidades es de **máxima prioridad**.

---

*Continuar a la siguiente sección: Inyección SQL*

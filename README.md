<div align="center">

# ☁️ tech-knowledge-hub

**Curated technical content vault, IaC blueprints, and reproducible labs by Abraham Alonso.**

[![AWS Community Builder](https://img.shields.io/badge/AWS_Community_Builder-Applicant_2026-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://community.aws)
[![Dev.to](https://img.shields.io/badge/dev.to-AbrahamAldev-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/abrahamaldev)
[![AWS SBG ONMEX](https://img.shields.io/badge/Community-AWS_SBG_ONMEX-232F3E?style=for-the-badge&logo=amazon&logoColor=FF9900)](https://github.com/AbrahamAldev/tech-knowledge-hub)
[![Founder Iztack](https://img.shields.io/badge/Founder-Iztack-6366F1?style=for-the-badge)](https://iztack.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

<br/>

*Uniendo la brecha entre la arquitectura teórica de nube y la ejecución de ingeniería en producción.*

</div>

---

## 🏛️ Filosofía Content-as-Code

Este repositorio implementa el patrón **Content-as-Code (Decoupled Headless CMS)** para el ecosistema técnico de **Abraham Alonso (@AbrahamAldev)** y las actividades del **AWS Student Builder Group at ONMEX University**.

Todo el conocimiento técnico fluye bajo un pipeline continuo y verificable:

```text
+-----------------------------------------------------------------------------------+
|                        CONTENT-AS-CODE KNOWLEDGE PIPELINE                         |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                                1. DEEP-DIVE POST                                  |
|   * AWS Builder Center (English Canonical) & Dev.to (Spanish Deep-Dive)           |
|   * Análisis de fallas reales en producción, métricas p99 y trade-offs técnicos   |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                               2. REPRODUCIBLE CODE                                |
|   * Blueprints de Infraestructura como Código (AWS CDK v2 / Terraform)            |
|   * Repositorio GitHub inmutable: tech-knowledge-hub/articles/<slug>/code         |
|   * Políticas de seguridad IAM de mínimo privilegio y guardrails de FinOps        |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                               3. HANDS-ON SESSION                                 |
|   * Talleres prácticos del AWS Student Builder Group at ONMEX University          |
|   * Despliegues reproducibles paso a paso, live debugging y destrucción limpia    |
+-----------------------------------------------------------------------------------+
```

---

## 📚 Índice de Artículos & Blueprints

| # | Artículo / Deep-Dive | Nivel | AWS Builder Center | Dev.to (ES) | Código / IaC | Estado |
| :-: | :--- | :---: | :---: | :---: | :---: | :---: |
| 00 | *Template Oficial Content-as-Code* | All | [Estructura Oficial](./templates/article-template.md) | [Guía](./templates/article-template.md) | [Blueprint](./templates/article-template.md) | 🟢 Base |
| 01 | *Event-Driven Resilient Ingestion with EventBridge & Lambda* | Intermediate | *Próximamente* | *Próximamente* | [Stack CDK](./articles/) | ✍️ En progreso |
| 02 | *DynamoDB Single-Table Design: Zero Throttling at Scale* | Advanced | *Próximamente* | *Próximamente* | [Stack CDK](./articles/) | 💡 Backlog |
| 03 | *Autonomous Multi-Agent Infrastructures on AWS ECS & Bedrock* | Specialist | *Próximamente* | *Próximamente* | [Terraform](./articles/) | 💡 Backlog |

---

## 🚀 Talleres Hands-on: Guía de Clonado y Despliegue

Diseñado para que los estudiantes de **AWS Student Builder Group at ONMEX University** y la comunidad cloud puedan reproducir cada arquitectura en sus propias cuentas de AWS en menos de 5 minutos.

### 1. Prerrequisitos
- [AWS CLI v2](https://aws.amazon.com/cli/) instalado y configurado con tus credenciales (`aws configure`).
- [Node.js v20+ LTS](https://nodejs.org/) y [Python 3.11+](https://www.python.org/).
- [AWS CDK v2](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) instalado globalmente:
  ```bash
  npm install -g aws-cdk
  ```

### 2. Clonado del Repositorio
```bash
git clone https://github.com/AbrahamAldev/tech-knowledge-hub.git
cd tech-knowledge-hub
```

### 3. Ejecución de un Taller (Ejemplo con AWS CDK)
```bash
# 1. Navegar a la carpeta de código del laboratorio específico
cd articles/YYYY-MM-nombre-laboratorio/code/cdk

# 2. Instalar dependencias
npm install

# 3. Bootstrap inicial de CDK (solo la primera vez por cuenta/región)
cdk bootstrap

# 4. Sintetizar la plantilla CloudFormation y verificar recursos
cdk synth

# 5. Desplegar la arquitectura en tu cuenta de AWS
cdk deploy
```

### 4. Teardown FinOps (Limpieza de Recursos)
Para evitar costes no deseados después de finalizar la sesión de taller:
```bash
cdk destroy
```

---

## 🛡️ Estándares de Arquitectura en Producción

Todos los blueprints y artículos en este repositorio cumplen con los siguientes estándares no negociables:

1. **Principio de Mínimo Privilegio (IAM Least Privilege):**
   - Prohibido el uso de comodines `*` en acciones (`Action`) o recursos (`Resource`) en políticas de IAM.
   - Cada microservicio o función Lambda cuenta con un rol de ejecución dedicado acotado exclusivamente a los ARNs específicos de DynamoDB, S3 o SQS que requiere.
2. **FinOps & Cost-Aware Architecture:**
   - Priorización de arquitecturas serverless con costo $0 en reposo (`PAY_PER_REQUEST` en DynamoDB, Lambda on-demand).
   - Inclusión de alarmas de presupuesto en AWS CloudWatch / AWS Budgets y mecanismos de auto-terminación para laboratorios.
3. **Idempotencia y Resiliencia:**
   - Manejo de reintentos seguros con claves de idempotencia (`Idempotency-Key`).
   - Implementación obligatoria de Dead-Letter Queues (DLQ) en colas SQS y buses de eventos EventBridge.

---

## 🤝 Contribución y Comunidad

¿Eres miembro de **AWS Student Builder Group at ONMEX University** o parte de la comunidad de desarrolladores y quieres aportar un artículo o blueprint?

Consulta nuestra [Guía de Contribución](./CONTRIBUTING.md) para conocer las normas de estilo, el modelo de ramas de Git y el checklist de Pull Requests.

---

<div align="center">

Maintained by Abraham Alonso — Cloud & AI Solutions Architect • GenAI • Founder @Iztack • AWS SBG Leader at ONMEX

</div>

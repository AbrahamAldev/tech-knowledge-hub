<div align="center">

# ☁️ tech-knowledge-hub

**Curated technical content vault, IaC blueprints, and reproducible labs by Abraham Alonso.**

<!-- Nivel 1: Credenciales y Liderazgo Oficial en AWS -->
[![AWS SBG Leader](https://img.shields.io/badge/AWS_SBG_Leader-@aldebaram-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://builder.aws.com/community/@aldebaram)
[![AWS SBG ONMEX](https://img.shields.io/badge/Community-AWS_SBG_ONMEX-232F3E?style=for-the-badge&logo=amazon&logoColor=FF9900)](https://beacons.ai/awsonmex)
[![Founder Iztack](https://img.shields.io/badge/Founder-Iztack-6366F1?style=for-the-badge)](https://iztack.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

<br/>

<!-- Nivel 2: Autoría Técnica Directa & Hub Universal -->
[![LinkedIn](https://img.shields.io/badge/LinkedIn-abrahamaldev-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/abrahamaldev)
[![Dev.to](https://img.shields.io/badge/dev.to-AbrahamAldev-0A0A0A?style=flat-square&logo=devdotto&logoColor=white)](https://dev.to/abrahamaldev)
[![X / Twitter](https://img.shields.io/badge/X-@abrahamaldev-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/abrahamaldev)
[![GitHub](https://img.shields.io/badge/GitHub-AbrahamAldev-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/AbrahamAldev)
[![All Links](https://img.shields.io/badge/All_Links-beacons.ai%2Fabrahamaldev-7C3AED?style=flat-square&logo=linktree&logoColor=white)](https://beacons.ai/abrahamaldev)

<br/>

*Uniendo la brecha entre la arquitectura teórica de nube y la ejecución de ingeniería en producción.*

</div>

---

## 🏛️ Filosofía Content-as-Code

Este repositorio implementa el patrón **Content-as-Code (Decoupled Headless CMS)** para el ecosistema técnico de **Abraham Alonso ([@AbrahamAldev](https://beacons.ai/abrahamaldev) / [@aldebaram en AWS](https://builder.aws.com/community/@aldebaram))** y las actividades formativas del **AWS Student Builder Group at ONMEX University ([@awsonmex](https://beacons.ai/awsonmex))**.

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

## 📚 Published Technical Articles

<!-- ARTICLES-START -->
| Date | Title & Architectural Pain Point | Level | Primary Stack | AWS (EN) | Dev.to (ES) | Lab Code |
| :---: | :--- | :---: | :--- | :---: | :---: | :---: |
| `2026-10` | *Upcoming First Article* | `Level 300` | `AWS CDK` `Python` | Coming Soon | Coming Soon | [`/articles`](./articles/) |
<!-- ARTICLES-END -->

---

## 🚀 Talleres Hands-on: Guía de Clonado y Despliegue

Diseñado para que los estudiantes de **AWS Student Builder Group at ONMEX University (@awsonmex)** y la comunidad cloud puedan reproducir cada arquitectura en sus propias cuentas de AWS en menos de 5 minutos.

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

## 🤝 Comunidad y Canales Oficiales

- 🌐 **Perfil Oficial en AWS Builder:** [@aldebaram en AWS Builder Center](https://builder.aws.com/community/@aldebaram)
- 🎓 **Comunidad Estudiantil (AWS SBG at ONMEX):** [@awsonmex](https://beacons.ai/awsonmex)
- 📖 **Guía de Contribución:** Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para conocer el flujo de trabajo de Git y el checklist de Pull Requests.

---

<div align="center">

Maintained by Abraham Alonso — Cloud & AI Solutions Architect • GenAI • Founder @Iztack • AWS SBG Leader at ONMEX  
[![AWS Builder](https://img.shields.io/badge/AWS_Builder-@aldebaram-FF9900?style=flat-square&logo=amazonaws&logoColor=white)](https://builder.aws.com/community/@aldebaram)
[![Beacons](https://img.shields.io/badge/All_Social_Profiles-beacons.ai%2Fabrahamaldev-7C3AED?style=flat-square)](https://beacons.ai/abrahamaldev)

</div>

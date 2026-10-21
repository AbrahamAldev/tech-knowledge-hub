# 🤝 Guía de Contribución — AWS Student Builder Group at ONMEX

¡Bienvenido al repositorio central de **tech-knowledge-hub**! Este proyecto es el núcleo de almacenamiento técnico e inmutable del **AWS Student Builder Group at ONMEX University (AWS SBG ONMEX)** y el respaldo de la postulación a **AWS Community Builder** de **Abraham Alonso (@AbrahamAldev)**.

Operamos bajo el paradigma de **Content-as-Code**: tratamos los artículos de arquitectura, deep-dives técnicos y laboratorios estudiantiles con el mismo rigor de ingeniería que el software de producción.

---

## 🎯 Pilares del Contenido

Todo aporte realizado por miembros de la comunidad o colaboradores externos debe cumplir con tres principios:

1. **Rigor de Arquitectura (Builder-to-Builder):** No publicamos resúmenes genéricos ni definiciones de manual. Cada artículo aborda dolores reales en producción, cuellos de botella de latencia, cuotas de servicio o errores operativos concretos (ej. `HTTP 504`, `ProvisionedThroughputExceededException`, `Lambda Throttles`).
2. **Reproducibilidad Absoluta:** Cualquier lector debe poder clonar el repositorio y desplegar la infraestructura asociada en su cuenta de AWS mediante comandos estándar (`cdk deploy` o `terraform apply`).
3. **Guardrails de Producción:** Todo diseño debe incluir consideraciones explícitas de **FinOps** (optimización de costes y guardrails presupuestarios) y **Seguridad IAM** (principio de mínimo privilegio).

---

## 🏗️ Estructura del Repositorio

```text
tech-knowledge-hub/
├── .github/
│   ├── workflows/
│   │   └── markdown-lint.yml           # CI para validación de Markdown
│   └── pull_request_template.md        # Checklist obligatorio de revisión
├── articles/
│   └── YYYY-MM-slug-del-articulo/
│       ├── README.md                   # Artículo técnico completo
│       ├── code/                       # IaC y microservicios reproducibles
│       │   ├── cdk/                    # Stacks de AWS CDK (TypeScript/Python)
│       │   └── lambda/                 # Lógica de microservicios o handlers
│       └── assets/                     # Diagramas exportados y portadas
├── templates/
│   └── article-template.md             # Plantilla oficial (alineada a @aws-builder-writer)
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE                             # Licencia MIT (Abraham Alonso)
└── README.md                           # Índice general y guía de workshops
```

---

## 📝 Ciclo de Vida de un Artículo (Content-as-Code)

1. **Propuesta e Idea:** Todo artículo inicia en el backlog o tablero Kanban de contenido.
2. **Uso de la Plantilla:** Copia `templates/article-template.md` dentro de `articles/YYYY-MM-tu-tema/README.md`.
3. **Redacción Técnica:** Sigue el orden secuencial de la plantilla:
   - Frontmatter YAML completo (metadatos, tags, autor y URLs canónicas).
   - Banner bilingüe (Español / Inglés).
   - Hook inicial (<512 caracteres).
   - Contexto con códigos de error reales.
   - Bloques de escaneo rápido: `🎯 Dolor técnico a resolver` y `🛠️ Stack a utilizar`.
   - Matriz de Trade-offs y alternativas.
   - Diagrama ASCII de flujo o arquitectura.
   - Implementación en código (`/code`).
   - Guardrails FinOps, IAM e Idempotencia.
   - CTA para debate comunitario.
   - Prompt para portada dark-mode / SaaS con handle `@AbrahamAldev`.
4. **Desarrollo del Código Reproducible:** Añade el código en la subcarpeta `code/` asegurando que compile y sintetice sin errores.

---

## 🔒 Estándares Técnicos Obligatorios

### 1. Seguridad IAM (Least Privilege)
- **Prohibido:** Usar `"Action": "*"` o `"Resource": "*"` en roles de ejecución o políticas administradas.
- **Obligatorio:** Acotar acciones específicas y referenciar ARNs directos de tablas DynamoDB, buckets S3 o topics SNS.
- **Gestión de Secretos:** Nunca incluir credenciales, llaves de API o tokens en código; utilizar AWS Secrets Manager o SSM Parameter Store.

### 2. FinOps & Cost Awareness
- Utilizar servicios serverless con facturación por uso (ej. DynamoDB `PAY_PER_REQUEST`).
- Si se incluyen recursos aprovisionados (ej. NAT Gateways, Aurora clusters, OpenSearch), documentar el coste por hora y el comando para destruirlos al finalizar el taller (`cdk destroy`).

### 3. Diagramas ASCII
- Los diagramas deben ser legibles directamente en terminales o visores Markdown planos sin depender de renderizadores externos privativos.

---

## 🚀 Flujo de Trabajo en Git

1. **Crear una rama de trabajo:**
   ```bash
   git checkout -b feature/YYYY-MM-nombre-articulo
   ```
2. **Convención de Commits:** Utiliza [Conventional Commits](https://www.conventionalcommits.org/):
   - `docs: add deep-dive on dynamodb single-table design`
   - `iac: add cdk stack for eventbridge routing`
   - `fix: resolve iam policy arn scoping in order handler`
3. **Validación Local:**
   Verifica que la sintaxis Markdown sea correcta y que el código IaC sintetice:
   ```bash
   cd articles/YYYY-MM-nombre-articulo/code
   npm run build && cdk synth
   ```
4. **Abrir Pull Request:**
   Envía tu PR hacia la rama `main`. El checklist en `.github/pull_request_template.md` se cargará automáticamente; márcalo en su totalidad antes de solicitar revisión.

---

## 👥 Comunidad y Liderazgo

Este repositorio es coordinado por **Abraham Alonso**, AWS Student Builder Group Leader at ONMEX University y Fundador de Iztack.

- **Dudas o iniciativas:** Abre un [GitHub Issue](https://github.com/AbrahamAldev/tech-knowledge-hub/issues) o contáctanos a través de los canales de la comunidad estudiantil.

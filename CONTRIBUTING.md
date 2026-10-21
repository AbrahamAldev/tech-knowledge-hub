# 🤝 Guía de Contribución — AWS Student Builder Group at ONMEX

¡Bienvenido al repositorio central de **tech-knowledge-hub**! Este proyecto es el núcleo de almacenamiento técnico e inmutable del **AWS Student Builder Group at ONMEX University (AWS SBG ONMEX / @awsonmex)** y el respaldo del contenido arquitectónico de **Abraham Alonso (@AbrahamAldev)**.

Operamos bajo el paradigma de **Content-as-Code**: tratamos los artículos de arquitectura, deep-dives técnicos y laboratorios estudiantiles con el mismo rigor de ingeniería que el software de producción.

---

## 🎯 Pilares del Contenido

Todo aporte realizado por miembros de la comunidad o colaboradores externos debe cumplir con tres principios:

1. **Rigor de Arquitectura (Builder-to-Builder):** No publicamos resúmenes genéricos ni definiciones de manual. Cada artículo aborda dolores reales en producción, cuellos de botella de latencia, cuotas de servicio o errores operativos concretos (ej. `HTTP 504`, `ProvisionedThroughputExceededException`, `Lambda Throttles`).
2. **Reproducibilidad Absoluta:** Cualquier lector debe poder clonar el repositorio y desplegar la infraestructura asociada en su cuenta de AWS mediante comandos estándar (`cdk deploy` o `terraform apply`).
3. **Guardrails de Producción:** Todo diseño debe incluir consideraciones explícitas de **FinOps** (optimización de costes y guardrails presupuestarios) y **Seguridad IAM** (principio de mínimo privilegio).

---

## 🏗️ Estructura del Repositorio (Convención por Capas Funcionales)

Adoptamos formalmente la **Convención A (`infra/` + `app/`)** para soportar cualquier espectro técnico (Cloud, GenAI, Microservicios, DevOps, Contenedores y Datos):

```text
tech-knowledge-hub/
├── .github/
│   ├── workflows/
│   │   ├── markdown-lint.yml           # CI para validación de Markdown
│   │   └── update-readme-index.yml     # Automatización del índice de artículos
│   └── pull_request_template.md        # Checklist obligatorio de revisión
├── articles/
│   └── YYYY-MM-[slug]/
│       ├── README.md                   # Artículo técnico completo (bilingüe / metadatos)
│       ├── assets/                     # Recursos visuales y diagramas
│       │   ├── cover.png               # Portada en alta resolución (16:9 / SaaS dark-mode)
│       │   └── architecture.png        # Diagramas de arquitectura exportados
│       └── code/                       # Código reproducible desacoplado
│           ├── infra/                  # Toda la infraestructura (AWS CDK, Terraform, K8s, Docker)
│           └── app/                    # Toda la lógica de negocio (Python, TypeScript, Agentes GenAI)
├── templates/
│   └── article-template.md             # Plantilla oficial (alineada a @aws-builder-writer)
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE                             # Licencia MIT (Abraham Alonso)
└── README.md                           # Índice general y guía de workshops
```

---

## 📐 Directrices para Miembros de AWS SBG ONMEX

Al preparar una propuesta de artículo o laboratorio para la comunidad, sigue rigurosamente estas reglas de desacoplamiento de capas:

- 🏛️ **Infraestructura (`code/infra/`):** Los archivos de IaC van estrictamente dentro de `code/infra/` (AWS CDK, Terraform, CloudFormation, Kubernetes manifests, Helm charts, Dockerfiles de entorno).
- ⚙️ **Lógica de Aplicación (`code/app/`):** Los scripts, microservicios, lambdas, pipelines de datos o agentes de IA van dentro de `code/app/` (Python, TypeScript, Go, Rust, LangChain, Amazon Bedrock).
- 📦 **Gestores de Dependencias Independientes:** Cada carpeta debe incluir su archivo de dependencias correspondiente (`package.json`, `requirements.txt`, `Cargo.toml` o `go.mod`), asegurando que la infraestructura y la aplicación puedan compilar y versionarse de forma aislada.
- 💡 **Flexibilidad:** Si un artículo es 100% conceptual o puramente de infraestructura (ej. un networking hub con Transit Gateway), la subcarpeta que no aplique (`code/app/`) puede omitirse limpiamente.

---

## 📝 Ciclo de Vida de un Artículo (Content-as-Code)

1. **Propuesta e Idea:** Todo artículo inicia en el backlog o tablero Kanban de contenido en Notion.
2. **Uso de la Plantilla:** Copia `templates/article-template.md` dentro de `articles/YYYY-MM-[slug]/README.md`.
3. **Redacción Técnica:** Sigue el orden secuencial de la plantilla:
   - Frontmatter YAML completo (metadatos, tags, autor, URLs canónicas y `cover_image`).
   - Banner bilingüe (Español / Inglés).
   - Hook inicial (<512 caracteres).
   - Contexto con códigos de error reales.
   - Bloques de escaneo rápido: `🎯 Dolor técnico a resolver` y `🛠️ Stack a utilizar`.
   - Matriz de Trade-offs y alternativas.
   - Diagrama ASCII de flujo o arquitectura.
   - Implementación en código (`/code/infra` y `/code/app`).
   - Guardrails FinOps, IAM e Idempotencia.
   - CTA para debate comunitario.
   - Prompt para portada dark-mode / SaaS con handle `@AbrahamAldev`.
4. **Desarrollo del Código Reproducible:** Añade la infraestructura en `code/infra/` y los microservicios/agentes en `code/app/` asegurando que sintetice y compile sin errores.

---

## 🔒 Estándares Técnicos Obligatorios

### 1. Seguridad IAM (Least Privilege)

- **Prohibido:** Usar `"Action": "*"` o `"Resource": "*"` en roles de ejecución o políticas administradas.
- **Obligatorio:** Acotar acciones específicas y referenciar ARNs directos de tablas DynamoDB, buckets S3 o topics SNS.
- **Gestión de Secretos:** Nunca incluir credenciales, llaves de API o tokens en código; utilizar AWS Secrets Manager o SSM Parameter Store.

---

### 2. FinOps & Cost Awareness

- Utilizar servicios serverless con facturación por uso (ej. DynamoDB `PAY_PER_REQUEST`).
- Si se incluyen recursos aprovisionados (ej. NAT Gateways, Aurora clusters, OpenSearch), documentar el coste por hora y el comando para destruirlos al finalizar el taller (`cdk destroy`).

---

### 3. Diagramas y Recursos Visuales

- Alojar las portadas en `assets/cover.png`.
- Los diagramas de arquitectura pueden incluirse en formato exportado en `assets/architecture.png` y deben acompañarse de su equivalente en diagrama ASCII legible directamente en el Markdown.

---

## 🚀 Flujo de Trabajo en Git

1. **Crear una rama de trabajo:**

   ```bash
   git checkout -b feature/YYYY-MM-nombre-articulo
   ```

2. **Convención de Commits:** Utiliza [Conventional Commits](https://www.conventionalcommits.org/):
   - `docs: add deep-dive on dynamodb single-table design`
   - `iac: add cdk stack for eventbridge routing in code/infra`
   - `feat: implement multi-agent logic in code/app`
   - `fix: resolve iam policy arn scoping in order handler`

3. **Validación Local:**
   Verifica que la sintaxis Markdown sea correcta y que la infraestructura sintetice:

   ```bash
   cd articles/YYYY-MM-nombre-articulo/code/infra
   npm install && cdk synth
   ```

4. **Abrir Pull Request:**
   Envía tu PR hacia la rama `main`. El checklist en `.github/pull_request_template.md` se cargará automáticamente; márcalo en su totalidad antes de solicitar revisión.

---

## 👥 Comunidad y Canales Oficiales

Este repositorio es coordinado por **Abraham Alonso**, AWS Student Builder Group Leader at ONMEX University y Fundador de Iztack.

- 🌐 **Comunidad Estudiantil (AWS SBG at ONMEX):** [@awsonmex](https://beacons.ai/awsonmex)
- 📬 **Dudas o iniciativas:** Abre un [GitHub Issue](https://github.com/AbrahamAldev/tech-knowledge-hub/issues) o contáctanos a través de los canales de la comunidad estudiantil.

## 📋 Resumen del Pull Request

<!-- Describe de forma concisa el objetivo de este PR: nuevo artículo, mejora de blueprint IaC o ajuste de documentación -->

- **Tipo de cambio:**
  - [ ] ✍️ Nuevo artículo técnico / deep-dive
  - [ ] 🛠️ Blueprint IaC reproducible (AWS CDK / Terraform)
  - [ ] 🧪 Laboratorio hands-on para talleres estudiantiles
  - [ ] 📚 Documentación / Mantenimiento de templates

- **Artículo asociado:**
  - Título: 
  - Directorio: `articles/YYYY-MM-slug/`

---

## 🛡️ Checklist de Validación Técnica (Content-as-Code)

### 1. Calidad del Contenido & Estructura
- [ ] El artículo sigue estrictamente la plantilla `templates/article-template.md`.
- [ ] Frontmatter YAML incluye `title`, `slug`, `level`, `tags`, `canonical_aws`, `devto_url`, `author` y `community`.
- [ ] Banners bilingües cruzados (Español / Inglés) presentes al inicio.
- [ ] Título con máximo 1-2 emojis técnicos de alto CTR.
- [ ] Hook inicial de menos de 512 caracteres optimizado para redes.
- [ ] Secciones de escaneo rápido `🎯 Dolor técnico a resolver` y `🛠️ Stack a utilizar` completas.
- [ ] Diagrama de arquitectura en formato ASCII legible y bien alineado.
- [ ] Prompt de portada dark-mode / SaaS con handle `@AbrahamAldev` integrado orgánicamente.

### 2. Estándares de Arquitectura & Código Reproducible
- [ ] El código en `/code` fue probado localmente (`cdk synth` / `terraform validate`).
- [ ] **IAM Least Privilege:** No se utilizan comodines `*` en acciones ni recursos sensibles; todas las políticas acotan ARNs específicos.
- [ ] **FinOps:** Se documenta la calculadora de costes, compatibilidad con AWS Free Tier o guardrails presupuestarios.
- [ ] **Idempotencia:** Las funciones Lambda o pipelines manejan reintentos y duplicados sin efectos secundarios.

### 3. Validación de Formato
- [ ] Formato Markdown limpio y validado.
- [ ] Enlaces relativos a diagramas, código y assets verificados.

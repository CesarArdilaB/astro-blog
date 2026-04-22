---
publishDate: 2026-04-21T00:00:00Z
title: "Menos Pilotos, Mas Producto"
excerpt: "Tu empresa lanzó un piloto de IA. No ha lanzado un producto de IA. Esa brecha no es un problema de herramientas, es un problema de sistemas. Las empresas que están ganando con herramientas de AI coding en 2026 son las que construyen plataformas centralizadas, cultura de code review y métricas honestas que convierten el código generado en producto real."
image: "../../assets/images/blog/shipwrights-playbook-og.png"
ogImage: "/og-shipwrights-playbook.png"
tags:
  - ai
  - engineering-culture
  - product-engineering
author: Cesar Ardila
---

Tu empresa lanzó un piloto de IA. No ha lanzado un producto de IA.

Eso ya lo sabes. Lo que quizás no: la brecha se está *ampliando*, no cerrando, y más herramientas la están empeorando.

## La Brecha que Nadie Quiere Nombrar

<a href="https://www.spglobal.com/marketintelligence/en/mi/research-analysis/ai-experiences-rapid-adoption-but-poc-cancellations-on-the-rise-as-enterprises.html" target="_blank" rel="noopener noreferrer">La encuesta empresarial 2025 de S&P Global</a> encontró que solo el 48% de los proyectos de IA llegan a producción, y la tasa de abandono de pruebas de concepto saltó del 17% en 2024 al 42% en 2025. <a href="https://www.technologyreview.com/2025/08/26/1122915/nearly-all-gen-ai-projects-fail-deliver-roi-mit/" target="_blank" rel="noopener noreferrer">El Proyecto NANDA de MIT</a> reportó que el 95% de las organizaciones que implementaron IA generativa no vieron retorno medible en P&L. Cuando <a href="https://cloud.google.com/blog/products/ai-machine-learning/2024-dora-report" target="_blank" rel="noopener noreferrer">el equipo DORA de Google</a> analizó 39,000 encuestados, encontraron que cada 25% de aumento en adopción de IA se correlacionaba con una caída del 7.2% en estabilidad de entrega.

La historia que cuentan esos números no es que las herramientas de AI coding no funcionan. Sí funcionan. Ingenieros senior reportan ganancias genuinas de productividad, algunos equipos entregan migraciones en días que antes tomaban semanas, y <a href="https://rakuten.today/blog/rakuten-accelerates-development-with-claude-code%EF%BF%BC.html" target="_blank" rel="noopener noreferrer">Rakuten está ejecutando refactors autónomos de varias horas con 99.9% de precisión numérica</a> usando Claude Code.

La historia es que la mayoría de las empresas están atrapadas en una brecha. Construir funciona. Entregar no. Y los líderes de ingeniería responsables lo sienten: la sospecha creciente de que sus equipos están más ocupados que nunca y son menos efectivos que antes. No debería ser así con esta tecnología.

<a href="https://zed.dev/blog/ai-70-problem-addy-osmani" target="_blank" rel="noopener noreferrer">Addy Osmani, líder de Chrome DX en Google, le puso nombre a la brecha</a>: **el problema del 70%**. La IA puede producir el primer 70% de una aplicación en una tarde. El último 30% (autenticación, permisos, manejo de errores, observabilidad, postura de seguridad, cumplimiento, casos borde, escala) es donde la mayoría de los productos construidos con IA van a morir. <a href="https://simonwillison.net/2025/Mar/6/vibe-coding/" target="_blank" rel="noopener noreferrer">Simon Willison lo dijo más directamente</a>: "Hacer vibe coding hasta tener un codebase en producción es claramente una idea terrible."

Entonces, ¿por qué tantas empresas siguen intentándolo?

## Por Qué los Pilotos Aislados Fracasan

Entra hoy a la mayoría de iniciativas empresariales de IA y verás el mismo patrón. Cada equipo tiene su propio experimento. Un squad está evaluando Cursor. Otro está en Claude Code. Un tercero tiene una prueba de concepto en Lovable que lleva cuatro meses "casi lista para lanzar". Seguridad está construyendo un flujo de revisión separado. Compliance está redactando una política que nadie ha leído. Todos están ocupados. Nada sale a producción.

Así se ve la fragmentación. Es la estrategia de IA por defecto en la mayoría de las empresas, y es la más costosa que pueden ejecutar. Cada equipo reinventa las mismas protecciones desde cero. Cada piloto genera su propia deuda técnica. Cada revisión de seguridad arranca de cero. Las ganancias de productividad del AI-assisted coding son reales, pero se evaporan contra el costo de cuarenta esfuerzos aislados tirando en cuarenta direcciones diferentes.

Las empresas que realmente están lanzando productos de IA están haciendo algo diferente. Están construyendo sistemas.

## Pilar Uno: Plataformas Centralizadas Sobre Esfuerzos Aislados

<a href="https://www.bvp.com/atlas/inside-shopifys-ai-first-engineering-playbook" target="_blank" rel="noopener noreferrer">Shopify ejecuta Copilot, Cursor y Claude Code a través de un proxy LLM interno</a> y un sistema de revisión personalizado llamado Roast. El VP de Engineering Farhan Thawar es explícito sobre el por qué: "Shopify aún no está en el punto donde permitimos que la IA haga check in de código automáticamente en los repos."

<a href="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents" target="_blank" rel="noopener noreferrer">Stripe construyó Minions</a>, su propia capa de generación estructurada, y desplegó Claude Code para 1,370 ingenieros detrás de ella. Rakuten tiene un sistema llamado Managed Agents sobre Claude Code que redujo errores críticos en un 97% en ciclos de release bisemanales. Cada caso de éxito comparte la misma arquitectura. Una capa de generación arriba (las herramientas de IA que todos tienen). Una capa puente debajo (lo que la mayoría de las empresas no tienen).

La capa puente es donde el código de IA se convierte en producto lanzable. Incluye cuatro cosas:

1. **Un gateway centralizado de herramientas.** Un proxy. Una relación de facturación. Un canal de observabilidad. Un conjunto de credenciales. Esta es la diferencia entre *"nuestra organización de ingeniería usa IA"* y *"cada equipo tiene un vendor diferente, una política diferente y una superficie de exposición diferente."*

2. **Guardrails compartidos.** Archivos de skills internos, configuraciones de AGENTS.md, librerías de prompts y patrones de contexto aprobados. No hagas que cada equipo redescubra cómo se ve lo bueno.

3. **Infraestructura de revisión y testing.** Herramientas de AI code review (CodeRabbit, Greptile), generación de tests con IA (QA Wolf, Meticulous), observabilidad con IA (Resolve AI). Esto ya no es opcional. <a href="https://www.faros.ai/blog/key-takeaways-from-the-dora-report-2025" target="_blank" rel="noopener noreferrer">La telemetría 2026 de Faros AI sobre 22,000 developers</a> encontró que los incidentes por pull request aumentaron un 242.7% y el 31% de los PRs ahora se mergean sin ninguna revisión humana. La capa puente es lo que atrapa eso.

4. **Un camino de sandbox a producción.** Un pipeline documentado y repetible desde prototipo hasta producción que incluya revisión de seguridad, pruebas de carga y procedimientos de rollback. <a href="https://awesomeagents.ai/news/amazon-kiro-ai-aws-outages/" target="_blank" rel="noopener noreferrer">La caída de Amazon Kiro en diciembre de 2025</a>, una falla de 13 horas en AWS causada por un agente de IA que eliminó y recreó un ambiente de producción, sucedió porque ese camino no existía.

## Pilar Dos: Revisión, Observabilidad y Ownership

Cada historia de falla con IA tiene la misma forma. Un equipo generó código. Nadie senior lo revisó. Llegó a producción. Se rompió.

<a href="https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/" target="_blank" rel="noopener noreferrer">El incidente de Replit en julio de 2025</a>, donde un agente de IA borró la base de datos de producción de SaaStr durante un code freeze declarado y luego fabricó 4,000 usuarios ficticios para encubrirlo, es el ejemplo canónico. Jason Lemkin, fundador de SaaStr, dijo que le había dicho al agente "11 veces en MAYÚSCULAS QUE NO LO HICIERA." El agente lo hizo de todos modos, y después mintió al respecto. El propio CEO de Replit lo calificó como "inaceptable y no debería ser posible."

La lección no es que la IA no sea confiable. La lección es que la confianza sin verificación es una estrategia para generar reportes de incidentes.

Cada empresa que lanza software construido con IA exitosamente tiene el mismo no negociable: **ningún código de IA se mergea a producción sin un ingeniero senior en el loop.** Shopify lo tiene. Stripe lo tiene. <a href="https://newsletter.pragmaticengineer.com/p/are-ai-agents-actually-slowing-us" target="_blank" rel="noopener noreferrer">Amazon, después de Kiro, ahora lo exige</a>. En la organización de retail de Amazon, cualquier cambio asistido por IA de un ingeniero junior ahora requiere aprobación senior. Eso no es escepticismo hacia la IA. Así es como opera cada deploy exitoso de IA que he visto.

Tres cambios culturales hacen que esto funcione a escala.

**La observabilidad se mueve hacia arriba.** Charity Majors de Honeycomb lleva años haciendo este argumento: los equipos sienten que no necesitan observabilidad hasta que producción se cae, y para entonces ya es demasiado tarde. La IA acelera la producción de código sin acelerar ese instinto. Si tu equipo está lanzando código generado por IA a sistemas sin logs estructurados, trazas y métricas en su lugar *antes* del primer deploy, no estás lanzando un producto. Estás preparando una futura caída.

**El ownership no se transfiere a la IA.** Un agente de IA no lleva un pager. No lo despiertan a las 3 AM. No escribe post-mortems. El ingeniero que hizo commit del código es dueño del código, sin importar quién o qué escribió el primer borrador. Si esa responsabilidad recae en la IA, nadie es dueño de nada. Que nadie sea dueño de nada es cómo los productos mueren lentamente.

**Los estándares de revisión deben igualar la velocidad de producción.** Si la IA permite que tu equipo genere cuatro veces más código, tu capacidad de revisión tiene que escalar con ello o la calidad se desploma. Aquí es donde la plataforma centralizada se paga sola. AI-assisted review, escaneo automatizado de seguridad y generación de tests son lo que permite que los revisores humanos se enfoquen en las decisiones de juicio que realmente importan.

Revisión, observabilidad y ownership no son restricciones a la adopción de IA. Son lo que hace que la adopción de IA sea suficientemente segura para que se acumule.

## Pilar Tres: Mide lo que Realmente Sale a Producción

*"Nuestros developers son 40% más rápidos con IA."*

Ya escuchaste ese número. Casi siempre está mal.

<a href="https://devclass.com/2025/04/09/encourage-the-ai-coding-skeptics-curb-the-enthusiasts-says-software-exec-at-dev-talk/" target="_blank" rel="noopener noreferrer">Thoughtworks midió la mejora real en cycle-time en proyectos reales de clientes en aproximadamente 8%</a>, porque menos del 30% de las horas de un developer se gastan escribiendo código, y la IA solo ayuda en parte de eso. <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">El ensayo controlado aleatorizado de METR</a> mostró que los developers experimentados eran 19% *más lentos* con herramientas de IA mientras se percibían a sí mismos como 20% más rápidos. La brecha entre productividad percibida y real es la métrica más peligrosa de la industria en este momento, porque está impulsando decisiones de inversión que no se sostienen.

La solución es medir lo que sale a producción, no lo que se genera.

Deja de rastrear líneas de código generadas, volumen de prompts, tokens consumidos y tasas de adopción interna. Nada de eso te dice si un producto llegó a un usuario que paga.

Empieza a rastrear features en producción, tiempo desde prototipo hasta el primer usuario real, tasa de incidentes por release, frecuencia de rollback, tasa de code churn (líneas escritas que se reescriben en menos de dos semanas), hallazgos de seguridad por merge y throughput de revisión. Estas son las métricas que te dicen si tu inversión en IA se está acumulando o se está filtrando.

<a href="https://www.gitclear.com/ai_assistant_code_quality_2025_research" target="_blank" rel="noopener noreferrer">El análisis de GitClear sobre 211 millones de líneas</a> mostró que el código copiado y pegado subió del 8.3% al 12.3% entre 2021 y 2024, y la actividad de refactoring cayó por debajo del 10% de los cambios. Esa es la firma de la velocidad de código superando a la calidad del código. No puedes verlo en métricas de vanidad. Lo ves en el costo de mantenimiento seis meses después.

Mide el viaje desde la idea hasta el producto lanzado, no desde el prompt hasta el primer borrador. Confundir esos dos viajes es como terminas con cuarenta prototipos y cero productos.

## El Marco del Constructor de Barcos

Hay una razón por la que sigo volviendo a la metáfora del constructor de barcos.

Un constructor de barcos no construye un bote escribiendo una lista de partes. Construye entendiendo cómo cada pieza tiene que funcionar con todas las demás en cada condición que el bote enfrentará. El casco, la vela, el aparejo, el lastre. Cada uno es un prototipo en tierra y un riesgo en el mar hasta que se integran en un sistema que realmente se sostiene.

Las herramientas de AI coding son la madera. Son hermosas, son baratas, cortan rápido. Pero la madera no es un barco. Un sistema es lo que convierte la producción bruta en algo que sale a producción.

Para las empresas que construyen productos con IA en 2026, el trabajo no es elegir entre Cursor o Claude Code. Esa es la parte fácil. El trabajo es construir el sistema alrededor de las herramientas. La plataforma centralizada que le da a todos el mismo piso de calidad. La cultura de revisión que mantiene honesto el output de la IA. Las métricas que miden lo que realmente llega a producción.

Las empresas que construyen ese sistema están lanzando productos. Las que siguen corriendo cuarenta pilotos desconectados están ocupadas, gastan mucho y están estancadas.

Elige un pilar. Asignale recursos este trimestre. Midelo el siguiente. Ese es el movimiento.

---

## Fuentes

<a href="https://zed.dev/blog/ai-70-problem-addy-osmani" target="_blank" rel="noopener noreferrer">Osmani, Addy. "AI's 70% Problem." Zed Blog.</a>

<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">METR. "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." July 2025.</a>

<a href="https://cloud.google.com/blog/products/ai-machine-learning/2024-dora-report" target="_blank" rel="noopener noreferrer">Google DORA. "2024 Accelerate State of DevOps Report."</a>

<a href="https://www.gitclear.com/ai_assistant_code_quality_2025_research" target="_blank" rel="noopener noreferrer">GitClear. "AI Copilot Code Quality: 2025 Research." 2025.</a>

<a href="https://www.bvp.com/atlas/inside-shopifys-ai-first-engineering-playbook" target="_blank" rel="noopener noreferrer">Bessemer Venture Partners. "Inside Shopify's AI-First Engineering Playbook." 2025.</a>

<a href="https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents" target="_blank" rel="noopener noreferrer">Stripe. "Minions: Stripe's One-Shot, End-to-End Coding Agents."</a>

<a href="https://rakuten.today/blog/rakuten-accelerates-development-with-claude-code%EF%BF%BC.html" target="_blank" rel="noopener noreferrer">Rakuten. "Rakuten Accelerates Development with Claude Code." 2025.</a>

<a href="https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/" target="_blank" rel="noopener noreferrer">Fortune. "AI-powered coding tool wiped out a software company's database in 'catastrophic failure.'" July 2025.</a>

<a href="https://www.faros.ai/blog/key-takeaways-from-the-dora-report-2025" target="_blank" rel="noopener noreferrer">Faros AI. "DORA Report 2025 Key Takeaways: AI Impact on Dev Metrics." 2026.</a>

<a href="https://www.spglobal.com/marketintelligence/en/mi/research-analysis/ai-experiences-rapid-adoption-but-poc-cancellations-on-the-rise-as-enterprises.html" target="_blank" rel="noopener noreferrer">S&P Global. "AI Experiences Rapid Adoption But PoC Cancellations on the Rise." 2025.</a>

<a href="https://www.technologyreview.com/2025/08/26/1122915/nearly-all-gen-ai-projects-fail-deliver-roi-mit/" target="_blank" rel="noopener noreferrer">MIT Technology Review. "Nearly All Gen AI Projects Fail to Deliver ROI." 2025.</a>

<a href="https://simonwillison.net/2025/Mar/6/vibe-coding/" target="_blank" rel="noopener noreferrer">Willison, Simon. "Vibe Coding." March 2025.</a>

<a href="https://awesomeagents.ai/news/amazon-kiro-ai-aws-outages/" target="_blank" rel="noopener noreferrer">Awesome Agents. "Amazon Kiro AI and AWS Outages." 2025.</a>

<a href="https://newsletter.pragmaticengineer.com/p/are-ai-agents-actually-slowing-us" target="_blank" rel="noopener noreferrer">The Pragmatic Engineer. "Are AI Agents Actually Slowing Us Down?" 2025.</a>

<a href="https://devclass.com/2025/04/09/encourage-the-ai-coding-skeptics-curb-the-enthusiasts-says-software-exec-at-dev-talk/" target="_blank" rel="noopener noreferrer">DevClass. "Encourage the AI Coding Skeptics, Curb the Enthusiasts." April 2025.</a>

---

With love, Cesar Ardila 🎵

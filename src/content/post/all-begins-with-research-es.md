---
publishDate: 2026-05-05T00:00:00Z
title: "Todo Empieza con Investigación: El Paso que la IA No Puede Saltarse por Ti"
excerpt: "La IA generó el 41% de los commits de Gumroad el año pasado. Pendo dice que el 80% de las features en producción casi no se usan. Construir nunca fue tan barato, lo que significa que saber qué construir nunca fue tan valioso. La investigación es el activo que la IA no puede reemplazar, y el que los equipos de élite están escalando más rápido."
image: "../../assets/images/blog/all-begins-with-research.svg"
tags:
  - ingeniería-de-producto
  - ia
  - product-discovery
author: Cesar Ardila
---

**El ochenta por ciento de las features que hay en tu producto ahora mismo casi no se usan. O no se usan nunca.**

Ese número viene del <a href="https://www.pendo.io/resources/the-2019-feature-adoption-report/" target="_blank" rel="noopener noreferrer">análisis de Pendo</a> sobre 615 suscripciones de software empresarial. El doce por ciento de las features genera el ochenta por ciento del uso diario. El otro ochenta y ocho por ciento es error de redondeo. Pendo calculó el desperdicio en veintinueve mil millones de dólares en I+D de nube pública quemados cada año en cosas que casi nadie toca.

Ahora ponle encima la era de la IA.

Sahil Lavingia opera Gumroad con aproximadamente diez millones de dólares en ARR y un solo empleado de tiempo completo. El cuarenta y uno por ciento de sus commits los escriben agentes de IA, y su meta es llegar al ochenta. Marty Cagan escribe ahora que *"para un producto comercial, especialmente en la era de la IA, el product discovery suele ser la diferencia entre el éxito y el fracaso."* El costo de construir se desplomó. El costo de construir *lo incorrecto* se desplomó con él.

Por eso la investigación dejó de ser un nice-to-have. Ahora es el activo.

## El Problema con Nombre: Código Barato, Confusión Cara

CB Insights lleva más de una década rastreando por qué mueren las startups. Su análisis original de 110 post-mortems encontró que <a href="https://www.cbinsights.com/research/report/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer">el cuarenta y dos por ciento fracasó por "no market need"</a>. Su actualización de 2024, sobre 431 cierres con respaldo de venture capital, reformuló el mismo hallazgo: cuarenta y tres por ciento señaló "poor product-market fit" como causa principal.

La etiqueta evoluciona. El diagnóstico no.

La mayoría de las empresas que fracasaron eran buenas construyendo algo. Solo estaban construyendo lo incorrecto.

Un fundador citado en el dataset, de una startup llamada eCrowds, lo dijo mejor que cualquier framework: *"Pasamos demasiado tiempo construyendo para nosotros mismos sin obtener feedback de prospectos. Es fácil caer en visión de túnel. Recomendaría no pasar más de dos o tres meses desde el inicio hasta ponerlo en manos de prospectos verdaderamente objetivos."*

Ese es el modo de falla. Las herramientas de IA no lo arreglan. Lo aceleran.

En febrero de 2025, Andrej Karpathy acuñó el término *vibe coding*: "entregarse completamente a las vibes, abrazar las exponenciales, y olvidarse de que el código siquiera existe." Collins English Dictionary lo nombró Palabra del Año. La vibe es real. El riesgo que viene con ella también. Un <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer">análisis de CodeRabbit en diciembre de 2025</a> sobre 470 pull requests de GitHub encontró que el código co-escrito con IA tenía 1.7 veces más problemas graves, setenta y cinco por ciento más errores de configuración, y 2.74 veces más vulnerabilidades de seguridad que el código escrito por humanos. Un <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">estudio de METR en julio de 2025</a> encontró que desarrolladores experimentados de open source eran diecinueve por ciento más lentos con herramientas de IA, mientras creían ser veinticuatro por ciento más rápidos.

Construir rápido en la dirección incorrecta no es una ganancia de productividad. Es un problema de apalancamiento.

Mientras más rápido construyes sin investigación, más rápido llegas a un producto que nadie quiere.

Esta es la inversión que todo equipo necesita internalizar. En 2017 tu ventaja competitiva era poder entregar. Hoy todos pueden construir. La ventaja se movió río arriba, hacia el trabajo de descifrar qué construir.

## Tres Cosas que Hacen Diferente los Equipos Orientados a Investigación

### 1. Hacen el Trabajo que No Escala, Personalmente

Las historias de éxito más citadas no son golpes de suerte. Son ejemplos documentados de fundadores que se negaron a tercerizar la conversación con el cliente.

A principios de 2009, Airbnb tenía cincuenta visitas diarias, veinte reservas por día, y doscientos dólares semanales de ingreso. Paul Graham le dijo a Brian Chesky y Joe Gebbia: *"¿Dónde están tus usuarios? Nueva York. ¿Por qué estás aquí en Mountain View? Ve con tus usuarios."* Volaron a Nueva York, alquilaron una cámara de cinco mil dólares, y fotografiaron personalmente cada listado de la ciudad. Las reservas se multiplicaron por dos o tres en semanas. Los ingresos se duplicaron para fin de mes.

La lección de Chesky, contada a Reid Hoffman: *"Es muy difícil lograr que incluso diez personas amen algo, pero no es difícil si pasas un montón de tiempo con ellos. Literalmente tocábamos la puerta de todos nuestros hosts."*

Patrick y John Collison hicieron lo mismo con Stripe. <a href="https://paulgraham.com/ds.html" target="_blank" rel="noopener noreferrer">Paul Graham lo llamó</a> *Collison installation*: "Cuando alguien aceptaba probar Stripe, decían 'Listo, dame tu laptop' y los configuraban en el acto." Drew Houston publicó un video demo de tres minutos de Dropbox antes de que el producto existiera. La lista de espera pasó de cinco mil a setenta y cinco mil de la noche a la mañana. La frase de Houston, citada frecuentemente: *"No lanzar puede ser doloroso, pero no aprender puede ser fatal."*

Estos fundadores no estaban haciendo investigación de clientes como una fase. Lo hacían como un hábito, con sus propias manos, antes de dejar que alguien más tocara el trabajo.

Ese es el activo.

### 2. Miden el Product-Market Fit como una Métrica Financiera

Rahul Vohra ejecutó una versión limpia de este experimento en Superhuman. Empezando en 2017, aplicó el framework de Sean Ellis: *¿Cómo te sentirías si ya no pudieras usar este producto?* El umbral de product-market fit es que el cuarenta por ciento de los usuarios responda *"muy decepcionado."*

Superhuman estaba en veintidós por ciento en Q1 2017. Por debajo de la línea.

El <a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" target="_blank" rel="noopener noreferrer">artículo de Vohra en First Round</a> describe el motor de cuatro pasos: encuestar usuarios, segmentar para encontrar al cliente de alta expectativa, analizar por qué los super-fans te aman, y luego dividir el roadmap fifty-fifty entre duplicar lo que los super-fans aman y resolver lo que frena a los usuarios indecisos.

Q2 2017: treinta y tres por ciento. Q3: cuarenta y siete. Eventualmente cincuenta y ocho. Grammarly adquirió Superhuman en 2025.

El framing de Vohra importa: *"¿Y si pudieras medir el product-market fit? Porque si pudieras medirlo, tal vez podrías optimizarlo. Y entonces tal vez podrías aumentar sistemáticamente el product-market fit hasta lograrlo."*

La investigación deja de ser una fase de la que sales. Se convierte en un instrumento que lees cada trimestre, como un equipo de finanzas lee el cash burn.

### 3. Tratan las Conversaciones con Clientes como la Decisión de Ingeniería de Mayor Apalancamiento

Dylan Field pasó cuatro años investigando los flujos de trabajo de diseñadores antes del lanzamiento público de Figma en 2016. Su ritual durante la pandemia, perfilado en Forbes, era leer tickets de soporte, responder usuarios en Twitter, y visitar clientes en persona en Ucrania y Nigeria.

Su cita: *"No todos están contentos, porque hay algo que quieren que se arregle, y eso me da el pulso de lo que está pasando. Y la gente que sí está contenta, ahí es cuando me emociono de verdad."*

El equipo de Stewart Butterfield construyó la herramienta que se convirtió en Slack como una capa de coordinación interna para su MMO fallido, Glitch. Tuvieron tres años y medio de práctica usando su propio producto antes de comercializarlo externamente. Los precios con los que lanzaron, dice Butterfield, son los que escribieron el día uno del pivot.

Patrick Collison, <a href="https://stripe.com/sessions/2025/ama-with-patrick-and-john-collison" target="_blank" rel="noopener noreferrer">hablando en Stripe Sessions 2025</a>, lo dijo directamente: *"Todos en Stripe que trabajan en desarrollo de producto, la forma en que lo hacemos en la práctica es que empezamos con las solicitudes de los clientes, el feedback de los clientes, las deficiencias percibidas por los clientes en nuestros productos."*

Nada de esto es glamoroso. Es leer tickets a medianoche, estar en llamadas incómodas con usuarios que todavía no conoces, y editar tus propias suposiciones fuera del roadmap.

El trabajo es lo suficientemente poco atractivo como para que la mayoría de los equipos se lo salte. Por eso exactamente los equipos que no se lo saltan tienen una ventaja asimétrica.

## Dónde Pertenece la IA en Tu Loop de Investigación

Los equipos que están ganando ahora no están reemplazando investigación con IA. Están usando IA para hacer más, más rápido, y para hacerla accesible a personas que antes estaban bloqueadas por el costo de las herramientas.

Tres categorías que vale la pena conocer.

**Primero, análisis asistido por IA.** Herramientas como Dovetail, Looppanel y Marvin etiquetan transcripciones automáticamente, agrupan temas a través de cientos de entrevistas, y corren búsqueda semántica sobre años de feedback. El Nielsen Norman Group ha señalado por mucho tiempo que la síntesis es la fase más costosa de la investigación cualitativa. La IA la comprime de días a horas. El factor limitante para hacer más entrevistas ya no es el cuello de botella del análisis.

**Segundo, IA como partner de investigación.** Tal Raviv, citado en el <a href="https://www.lennysnewsletter.com/" target="_blank" rel="noopener noreferrer">newsletter de Lenny Rachitsky</a>, trata a la IA como un compañero de pensamiento que desafía suposiciones de producto antes de que se endurezcan en items del roadmap. Marily Nika, AI Product Lead en Google, mina Reddit a través del filtro de discusiones de Perplexity para surfacear lenguaje crudo de usuarios, y luego usa debates entre agentes para stress-testear requisitos de PMF. El agente interno de Notion, *Messaging BS Radar* (descrito públicamente por Ivan Zhao), ingiere reportes de user research, contenido de sitios de reviews, cada llamada de clientes en Gong, e inteligencia competitiva, y luego critica el copy de marketing desde el punto de vista de un cliente escéptico antes de que salga.

**Tercero, IA en el loop de ingeniería.** <a href="https://www.lennysnewsletter.com/p/gumroad-ceos-playbook-to-40x-his" target="_blank" rel="noopener noreferrer">El workflow de tres niveles de Sahil Lavingia en Gumroad</a> es instructivo. Fixes pequeños van de Slack a Devin en diez minutos. Cambios medianos fluyen a través de un PRD, luego un prototipo en v0, luego Devin a producción, en dos horas en vez de dos semanas. Builds grandes de cero-a-producto se comprimen de trimestres a días.

La compresión es real. Pero solo rinde cuando el input del pipeline es un problema validado del cliente. No una vibe.

Ese es el verdadero cambio de workflow. La investigación solía ser lenta porque la síntesis era lenta. La IA elimina el impuesto de síntesis. La investigación solía ser cara porque cada ciclo de contacto con clientes requería la agenda de un researcher. La IA permite que un solo product engineer corra entrevistas, las sintetice, redacte un PRD, y prototipe la hipótesis resultante en el tiempo que antes tomaba agendar el kickoff.

**La IA acelera el trabajo de construcción. La IA acelera el trabajo de síntesis. El humano se queda en el centro de la conversación con el cliente.** La conversación es la parte que no se comprime, porque es la parte que produce el activo.

## Señales de que Te Estás Saltando el Trabajo

Algunos patrones a los que prestar atención, en tu equipo o en tu propio escritorio.

El roadmap está dominado por features que pidieron ejecutivos o inversionistas, no por problemas que los usuarios nombraron con sus propias palabras. El PM, el diseñador y el ingeniero no pueden citar a un usuario reciente textualmente. La estrategia se construye sobre auditorías de features de competidores en vez de auditorías de dolor del cliente.

Nadie mide PMF como un número. *"Ya veremos qué pasa después del lanzamiento"* es el plan real.

Discovery se trata como una fase que termina cuando empieza delivery. Los ingenieros nunca participan en llamadas con clientes. Se celebran los lanzamientos de features, pero eliminar features es tabú. Las herramientas de IA se usan para escribir más código, nunca para digerir más datos de clientes.

Cualquiera de estas es una señal. Tres o más es una feature factory disfrazada.

## Un Hábito de Una Semana para Empezar

Si estás liderando un equipo de producto o ingeniería, el movimiento no es contratar un programa de investigación de seis meses. Es instalar un hábito que tu equipo pueda ejecutar la próxima semana.

**Cinco conversaciones con clientes.** Solo preguntas sobre comportamiento pasado, en el espíritu de *The Mom Test* de Rob Fitzpatrick: pregúntale a la gente sobre lo que hizo, no sobre lo que haría.

**Corre la encuesta PMF de Vohra** sobre tu base de usuarios existente, luego segmenta el grupo de "muy decepcionado" y lee cada respuesta abierta.

**Dibuja un Opportunity Solution Tree** según el framework de Teresa Torres, mapeando resultados a oportunidades a soluciones candidatas a tests de suposiciones.

**Usa IA para sintetizar las transcripciones.** Usa IA para redactar el PRD que sale de la síntesis. Usa IA para prototipar la solución candidata.

Luego vuelve con los mismos clientes y muéstrales el prototipo.

Eso es una semana. No es exótico. Es el mismo loop que Airbnb, Stripe, Superhuman, Figma y Notion han corrido, excepto que los pasos de síntesis y prototipado que antes requerían un equipo ahora toman una sola tarde.

## La Primera Herramienta del Carpintero de Barcos No Es la Sierra

La primera herramienta de un carpintero de barcos nunca fue la sierra. Era la conversación con el capitán sobre lo que el barco tenía que sobrevivir. Ruta comercial, peso de carga, patrón climático, tamaño de tripulación.

La madera venía después. La sierra venía después de eso.

La IA le da a cada equipo de producto una sierra más afilada que cualquiera que hayan tenido. No les da un capitán. Al capitán todavía hay que encontrarlo, escucharlo y entenderlo. Un humano, en persona o en una videollamada, en el lenguaje que el cliente realmente usa sobre el problema que realmente tiene.

Construir es barato. El insight es el activo. La investigación es cómo conservas uno sin sacrificar el otro.

Tu turno.

---

## Fuentes

<a href="https://www.pendo.io/resources/the-2019-feature-adoption-report/" target="_blank" rel="noopener noreferrer">Pendo. "The 2019 Feature Adoption Report."</a>

<a href="https://www.cbinsights.com/research/report/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer">CB Insights. "Why Startups Fail: Top 9 Reasons." 2024.</a>

<a href="https://www.svpg.com/" target="_blank" rel="noopener noreferrer">Cagan, Marty. Ensayos de Silicon Valley Product Group sobre product discovery en la era de la IA.</a>

<a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer">Wikipedia. "Vibe coding." Origen de Karpathy y análisis de CodeRabbit, diciembre 2025.</a>

<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">METR. "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." Julio 2025.</a>

<a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" target="_blank" rel="noopener noreferrer">Vohra, Rahul. "How Superhuman Built an Engine to Find Product/Market Fit." First Round Review.</a>

<a href="https://stripe.com/sessions/2025/ama-with-patrick-and-john-collison" target="_blank" rel="noopener noreferrer">Stripe. "AMA with Patrick and John Collison." Stripe Sessions 2025.</a>

<a href="https://paulgraham.com/ds.html" target="_blank" rel="noopener noreferrer">Graham, Paul. "Do Things That Don't Scale." 2013.</a>

<a href="https://www.lennysnewsletter.com/p/gumroad-ceos-playbook-to-40x-his" target="_blank" rel="noopener noreferrer">Rachitsky, Lenny. "Gumroad CEO's playbook to 40x his team's productivity with v0, Cursor, and Devin | Sahil Lavingia." Lenny's Newsletter.</a>

<a href="https://www.momtestbook.com" target="_blank" rel="noopener noreferrer">Fitzpatrick, Rob. *The Mom Test*. 2013.</a>

<a href="https://www.producttalk.org/" target="_blank" rel="noopener noreferrer">Torres, Teresa. *Continuous Discovery Habits*. Product Talk LLC, 2021.</a>

---

Con amor, Cesar Ardila 🎵

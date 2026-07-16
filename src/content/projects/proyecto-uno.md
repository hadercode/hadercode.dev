---
title: "Aether Dashboard"
description: "Plataforma interactiva de analítica y monitoreo en tiempo real diseñada para infraestructuras en la nube de alta disponibilidad, con interfaces dinámicas de renderizado ultra-rápido."
pubDate: 2026-06-10
tags: ["Astro", "TypeScript", "D3.js", "WebSockets"]
image: "/images/project-one.png"
link: "/projects/aether-dashboard"
featured: true
order: 1
---

## El Desafío

El cliente necesitaba visualizar millones de métricas por segundo provenientes de múltiples regiones de AWS y GCP en una sola interfaz consolidada, sin retrasos visuales (lag) ni degradación de rendimiento en el navegador.

## La Solución

Construimos **Aether**, un dashboard hiper-personalizado que optimiza el ciclo de renderizado en el cliente utilizando:
- **Web Workers**: Para procesar el flujo crudo de datos en segundo plano sin bloquear el hilo principal.
- **Canvas de Alto Rendimiento**: Usando D3 y Canvas API en lugar de SVG cuando el número de nodos en pantalla supera los 5,000 elementos.
- **Astro Static Generation**: Para toda la shell del sitio web, sirviendo las partes dinámicas como islas hidratadas bajo demanda.

## Resultados

Reducción del **40% en el consumo de memoria** en el cliente en comparación con la versión anterior construida en React tradicional, y una velocidad de carga inicial (First Contentful Paint) de tan solo **0.4 segundos**.

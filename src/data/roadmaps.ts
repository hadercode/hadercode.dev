import type { Roadmap } from "../types/tools";

export const roadmaps: Roadmap[] = [
  {
    id: "frontend",
    name: "frontend.md",
    description:
      "Dominio completo de la capa de presentación: HTML semántico, CSS responsivo avanzado, optimización de velocidad de carga y Web Vitals.",
    steps: [
      {
        step: "STEP 01",
        title: "Estructura Semántica & Accesibilidad",
        desc: "Construir maquetación web sólida, semántica y legible por motores de búsqueda, garantizando la accesibilidad para tecnologías de asistencia.",
        concepts: [
          "HTML5 Semantics",
          "Accesibilidad (WCAG)",
          "Roles ARIA",
          "SEO Básico",
        ],
        resources: ["MDN Web Docs", "web.dev accessibility", "a11y Project"],
      },
      {
        step: "STEP 02",
        title: "Layouts & CSS Moderno",
        desc: "Diseños flexibles y dinámicos usando cuadrículas avanzadas, variables CSS nativas, metodologías escalables y frameworks utilitarios.",
        concepts: [
          "CSS Grid & Flexbox",
          "Custom Properties",
          "CSS Modules",
          "Tailwind CSS",
        ],
        resources: [
          "CSS Tricks Grid Guide",
          "Tailwind Documentation",
          "BEM Methodology",
        ],
      },
      {
        step: "STEP 03",
        title: "Client-Side JS & Bundlers",
        desc: "Configuración y optimización de flujos de desarrollo modernos con compiladores tipados, linters y empaquetadores de alto rendimiento.",
        concepts: [
          "ES6+ Syntax",
          "TypeScript Foundations",
          "Vite",
          "ESLint & Prettier",
        ],
        resources: ["TypeScript Handbook", "Vite.dev", "You Don't Know JS"],
      },
      {
        step: "STEP 04",
        title: "Core Web Vitals & Rendimiento",
        desc: "Optimización rigurosa de tiempos de renderizado, carga diferida (lazy loading), compresión de recursos y arquitecturas modernas de islas estáticas.",
        concepts: [
          "LCP, FID, CLS Metrics",
          "Lazy Loading",
          "Asset Compression",
          "Astro Islands (SSR)",
        ],
        resources: [
          "Lighthouse Audits",
          "web.dev/vitals",
          "Astro Docs (Performance)",
        ],
      },
    ],
  },
  {
    id: "backend",
    name: "backend.sh",
    description:
      "Arquitectura de servidores escalables, bases de datos complejas, seguridad de endpoints y diseño de APIs robustas.",
    steps: [
      {
        step: "STEP 01",
        title: "Entornos de Ejecución & Servidores",
        desc: "Comprensión del funcionamiento interno de Node.js, flujos I/O asíncronos y creación de endpoints HTTP tradicionales.",
        concepts: [
          "Node.js Runtime",
          "Non-blocking I/O",
          "Express.js / Fastify",
          "REST API Design",
        ],
        resources: ["Node.js Docs", "Express Guide", "HTTP Spec (MDN)"],
      },
      {
        step: "STEP 02",
        title: "Bases de Datos (SQL & NoSQL)",
        desc: "Modelado de esquemas relacionales y de documentos, optimización de consultas mediante indexación, y uso de ORMs modernos.",
        concepts: [
          "PostgreSQL / MySQL",
          "MongoDB",
          "Prisma ORM",
          "Database Indexing",
        ],
        resources: ["Prisma Docs", "SQL Bolt", "Mongo University"],
      },
      {
        step: "STEP 03",
        title: "Seguridad & Autenticación",
        desc: "Protección de rutas del servidor, control de acceso basado en tokens y mitigación de vulnerabilidades comunes de OWASP.",
        concepts: [
          "JWT Auth",
          "CORS & Helmet",
          "OAuth2.0 / OpenID",
          "Bcrypt Hashing",
        ],
        resources: ["OWASP Top 10", "JWT.io", "Auth0 Blog"],
      },
      {
        step: "STEP 04",
        title: "Caching & Colas de Procesamiento",
        desc: "Implementación de caché en memoria de alta velocidad y delegación de tareas pesadas fuera del ciclo de petición-respuesta.",
        concepts: [
          "Redis Caching",
          "BullMQ / RabbitMQ",
          "Background Workers",
          "Rate Limiting",
        ],
        resources: [
          "Redis University",
          "BullMQ Docs",
          "Message Queue Architectures",
        ],
      },
    ],
  },
  {
    id: "fullstack",
    name: "fullstack.json",
    description:
      "Integración de la experiencia frontend y la robustez backend en soluciones completas, monorepositorios y despliegues serverless.",
    steps: [
      {
        step: "STEP 01",
        title: "Arquitecturas de Monorepositorios",
        desc: "Gestión eficiente de múltiples aplicaciones y paquetes de dependencias compartidas en una única base de código.",
        concepts: [
          "Turborepo",
          "pnpm / npm Workspaces",
          "Shared Design Systems",
          "Shared Configs",
        ],
        resources: ["Turborepo Docs", "pnpm Workspaces Guide"],
      },
      {
        step: "STEP 02",
        title: "Integración Segura (Typesafe)",
        desc: "Conexión fuertemente tipada de punta a punta entre el backend y el cliente para evitar discrepancias de API.",
        concepts: ["tRPC", "GraphQL & Codegen", "OpenAPI / Swagger Specs"],
        resources: ["tRPC Docs", "GraphQL Docs", "Swagger.io"],
      },
      {
        step: "STEP 03",
        title: "Estrategias Híbridas de Renderizado",
        desc: "Balance óptimo entre renderizado del lado del servidor, generación estática y regeneración en segundo plano.",
        concepts: [
          "Server-Side Rendering (SSR)",
          "Incremental Static Regeneration (ISR)",
          "Edge Cache CDNs",
        ],
        resources: ["Next.js Routing", "Vercel Cache Optimization"],
      },
      {
        step: "STEP 04",
        title: "Fórmulas Serverless & Edge",
        desc: "Construcción de funciones en la nube autoejecutables y bases de datos serverless de mínima latencia.",
        concepts: [
          "Cloud Functions",
          "Vercel / Netlify Edge Runtime",
          "Supabase / Firebase Integration",
        ],
        resources: [
          "Cloudflare Workers",
          "Supabase Docs",
          "Edge Middleware Guides",
        ],
      },
    ],
  },
  {
    id: "devops",
    name: "devops.yml",
    description:
      "Automatización de infraestructura, contenedores, integración y despliegue continuo (CI/CD) en la nube.",
    steps: [
      {
        step: "STEP 01",
        title: "Contenedores con Docker",
        desc: "Diseño de contenedores portables y eficientes usando compilaciones multi-etapa y orquestación local.",
        concepts: [
          "Dockerfile Design",
          "Docker Compose",
          "Multi-stage Builds",
          "Volume Bindings",
        ],
        resources: ["Docker Reference", "Docker Compose Docs"],
      },
      {
        step: "STEP 02",
        title: "Integración & Entrega Continua",
        desc: "Automatización completa de flujos de testing, análisis estático de código y despliegues directos a producción.",
        concepts: [
          "GitHub Actions Pipelines",
          "GitLab CI",
          "Automated Testing Suites",
          "Docker Registries",
        ],
        resources: ["GitHub Actions Lab", "CI/CD Best Practices"],
      },
      {
        step: "STEP 03",
        title: "Servicios Cloud & Redes",
        desc: "Aprovisionamiento de servidores, almacenamiento en la nube, y políticas de seguridad/red.",
        concepts: [
          "AWS EC2 Instances",
          "AWS S3 Storage",
          "IAM Policies",
          "SSL/TLS (Let's Encrypt)",
        ],
        resources: ["AWS Documentation", "Cloudflare Learning Center"],
      },
      {
        step: "STEP 04",
        title: "Monitoreo & Orquestación",
        desc: "Configuración de paneles para recolectar métricas de servidores y balanceadores de carga en tiempo real.",
        concepts: [
          "Nginx Reverse Proxy",
          "Prometheus & Grafana",
          "pm2 Service Management",
          "Log Aggregation",
        ],
        resources: [
          "Nginx Config Guide",
          "Grafana Dashboards",
          "Prometheus Setup",
        ],
      },
    ],
  },
  {
    id: "javascript",
    name: "javascript.sh",
    description:
      "De los fundamentos de sintaxis moderna al control del motor V8, asincronía y administración avanzada de memoria.",
    steps: [
      {
        step: "STEP 01",
        title: "Fundamentos Avanzados & ES6+",
        desc: "Dominio de estructuras sintácticas avanzadas, contextos léxicos, closures y la API de manipulación de arrays.",
        concepts: [
          "Lexical Scope & Closures",
          "Array Methods (map, reduce, filter)",
          "Destructuring & Spreads",
          "Prototypal Inheritance",
        ],
        resources: ["MDN JavaScript Guide", "JavaScript.info"],
      },
      {
        step: "STEP 02",
        title: "JavaScript Asíncrono",
        desc: "Comprensión rigurosa de la ejecución no bloqueante de JavaScript mediante promesas, el ciclo de eventos y tareas.",
        concepts: [
          "Event Loop Mechanics",
          "Microtasks & Macrotasks",
          "Async / Await Pattern",
          "Promise Concurrency APIs",
        ],
        resources: ["JS Event Loop Explained", "Jake Archibald: Tasks"],
      },
      {
        step: "STEP 03",
        title: "Internas del Motor JS & Optimización",
        desc: "Cómo el motor V8 compila el código y gestiona el uso del Garbage Collector para evitar fugas de memoria.",
        concepts: [
          "V8 JIT Compiler",
          "Garbage Collection (GC)",
          "Memory Leaks Detection",
          "Call Stack & Heap",
        ],
        resources: ["V8 Dev Blog", "Chrome DevTools Memory Audits"],
      },
    ],
  },
  {
    id: "react",
    name: "react.md",
    description:
      "Dominio del ecosistema de React. Desde el árbol de componentes virtuales hasta Server Components y Next.js.",
    steps: [
      {
        step: "STEP 01",
        title: "JSX, Props & Ciclo de Vida",
        desc: "Creación de interfaces declarativas reutilizables y comprensión del algoritmo de reconciliación de React (Fiber).",
        concepts: [
          "Virtual DOM & Reconciliation",
          "Component State (useState)",
          "Side Effects (useEffect)",
          "Key prop optimization",
        ],
        resources: ["React Official Documentation", "React Beta Docs"],
      },
      {
        step: "STEP 02",
        title: "Hooks Avanzados & Estado Global",
        desc: "Abstracción de lógica de estado con hooks personalizados y estructuración de almacenes de estado global óptimos.",
        concepts: [
          "useRef & useMemo / useCallback",
          "Zustand / Redux Toolkit",
          "Context API & Optimization",
          "Custom Hooks Architecture",
        ],
        resources: ["Zustand Guide", "Kent C. Dodds: React Hooks"],
      },
      {
        step: "STEP 03",
        title: "React Server Components",
        desc: "Transición hacia el desarrollo Fullstack de React, dividiendo componentes cliente de componentes de servidor.",
        concepts: [
          "React Server Components (RSC)",
          "Server Actions",
          "Streaming & Suspense",
          "Next.js App Router",
        ],
        resources: ["Next.js Docs", "React RSC Specs"],
      },
    ],
  },
  {
    id: "nest",
    name: "nestjs.config",
    description:
      "Arquitectura empresarial modular fuertemente tipada en TypeScript para la construcción de backend altamente desacoplados.",
    steps: [
      {
        step: "STEP 01",
        title: "Arquitectura Modular & DI",
        desc: "Estructuración de módulos, controladores y servicios utilizando los principios de inyección de dependencias de NestJS.",
        concepts: [
          "Modules & Controllers",
          "Providers & Services",
          "Dependency Injection",
          "NestJS CLI",
        ],
        resources: ["NestJS Documentation (Overview)"],
      },
      {
        step: "STEP 02",
        title: "Pipelines, Guards & Interceptors",
        desc: "Manejo seguro de solicitudes web. Validación, autenticación robusta y formateo estructurado de respuestas.",
        concepts: [
          "ValidationPipe (class-validator)",
          "AuthGuards (Passport)",
          "Logging / Transform Interceptors",
          "Exception Filters",
        ],
        resources: ["NestJS Techniques", "NestJS Security Guide"],
      },
      {
        step: "STEP 03",
        title: "Arquitectura de Microservicios",
        desc: "Desarrollo de sistemas distribuidos y comunicación basada en eventos mediante colas o transporte binario.",
        concepts: [
          "gRPC Transport",
          "Redis Pub/Sub",
          "RabbitMQ Integration",
          "Hybrid Applications",
        ],
        resources: ["NestJS Microservices", "Microservice Patterns"],
      },
    ],
  },
];

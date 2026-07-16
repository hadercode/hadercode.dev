import type { Tool } from "../types/tools";

export const tools: Tool[] = [
  {
    name: "Astro Framework",
    category: "frameworks",
    description:
      "El framework para la web moderna orientada a contenido. Arquitectura de islas, HTML estático por defecto y rendimiento de carga óptimo.",
    link: "https://astro.build",
    tags: ["SSG", "Performance", "React/Vue/Svelte"],
    highlight: true,
  },
  {
    name: "Framer Motion",
    category: "componentes",
    description:
      "Biblioteca de animaciones premium para React. Facilita la creación de transiciones complejas y micro-interacciones de alta fidelidad.",
    link: "https://framer.com/motion",
    tags: ["React", "Animations", "UI/UX"],
    highlight: true,
  },
  {
    name: "Tailwind CSS IntelliSense",
    category: "extensiones",
    description:
      "Extensión oficial para VS Code que provee autocompletado avanzado, resaltado de clases y linting interactivo para Tailwind.",
    link: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    tags: ["VS Code", "Tailwind", "Productividad"],
    highlight: false,
  },
  {
    name: "Docker Desktop",
    category: "plugins",
    description:
      "Entorno local completo para crear, desplegar e interactuar con contenedores de forma aislada, consistente y reproducible.",
    link: "https://www.docker.com",
    tags: ["Containers", "DevOps", "Virt"],
    highlight: false,
  },
  {
    name: "GitLens",
    category: "extensiones",
    description:
      "Extensión para VS Code que amplía las capacidades de Git. Visualiza autoría por línea de código, historiales y ramificaciones.",
    link: "https://gitlens.amadeus.dev",
    tags: ["VS Code", "Git", "DX"],
    highlight: false,
  },
  {
    name: "Prettier",
    category: "plugins",
    description:
      "Formateador de código multiplataforma para forzar de manera automatizada una consistencia visual limpia en todo tu código.",
    link: "https://prettier.io",
    tags: ["Formatters", "DX", "Standard"],
    highlight: false,
  },
];

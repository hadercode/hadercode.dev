# hadercode.dev — Portafolio Personal & Bitácora de Ingeniería

Este repositorio contiene el código fuente de **hadercode.dev**, mi sitio web personal, currículum interactivo, portafolio de proyectos y bitácora técnica de ingeniería. Está diseñado bajo una filosofía de alto rendimiento, SEO estructurado y una estética técnica premium (Obsidian Theme con acentos Wasabi Green).

---

## 🚀 Tecnologías Core

* **Framework**: [Astro](https://astro.build) (Generación de sitios estáticos orientados a contenido y arquitectura de islas).
* **Tipado**: [TypeScript](https://www.typescript.org) (Para robustez de tipos en layouts, props y colecciones).
* **Estilos**: Vanilla CSS (Estructurado con variables CSS nativas, sin dependencias pesadas de frameworks).
* **Servidor de Producción**: [Nginx](https://www.nginx.com) (Configurado para servir activos estáticos optimizados y soportar URLs limpias).
* **Contenerización**: [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose/) (Para empaquetado y despliegue rápido e idéntico en servidores).

---

## 🛠️ Características Destacadas del Sitio

1. **Terminal Hero Interactiva (`/`)**:
   - Una simulación de consola de comandos en la página de inicio que permite a los usuarios alternar pestañas (`about.json`, `stack.config`, `connect.sh`) y ejecutar scripts interactivos de redirección.

2. **Bitácora de Ingeniería (`/blog`)**:
   - **Categorización Dinámica**: Filtrado inmediato de artículos basado en un árbol de directorios estilo terminal (`$ ls -F content/blog/`).
   - **Buscador Grep Interno**: Un buscador de texto en tiempo real dentro de los artículos que resalta coincidencias omitiendo de forma segura los bloques de código fuente para no corromper la sintaxis.
   - **SEO Avanzado**: Metaetiquetas de Open Graph estructuradas para redes sociales, etiquetas canónicas e inyección de datos estructurados **JSON-LD (`BlogPosting`)** de Schema.org para indexación premium en buscadores.

3. **Showcase de Proyectos (`/projects`)**:
   - Galería interactiva con scroll horizontal convertido a partir del scroll de rueda vertical nativo de forma fluida.

4. **Herramientas & Hojas de Ruta (`/tools`)**:
   - **Pestaña `toolkit.env`**: Base de datos interactiva filtrable con plugins, componentes, extensiones y frameworks de desarrollo.
   - **Pestaña `roadmaps.sh`**: Líneas de tiempo verticales dinámicas y detalladas que trazan planes de estudio paso a paso para perfiles *Frontend*, *Backend*, *Fullstack*, *DevOps*, *JavaScript*, *React* y *NestJS*.

5. **Formulario de Contacto Inteligente (`/contact`)**:
   - Implementa componentes reutilizables encapsulados (`Input.astro`) y simula un flujo de peticiones TCP/HTTP por consola tras enviar el payload del mensaje.

---

## 📂 Estructura del Proyecto

```text
/
├── public/                     # Archivos públicos estáticos (Favicon, imágenes de posts)
├── src/
│   ├── components/             # Componentes UI reutilizables (Terminal, Nav, Inputs, etc.)
│   ├── content/                # Colecciones de contenido Markdown (blog, proyectos)
│   │   ├── config.ts           # Definición de esquemas de colecciones
│   │   └── blog/               # Entradas de la bitácora técnica
│   ├── layouts/
│   │   └── Layout.astro        # Layout común con inyección de SEO y metadatos estructurados
│   └── pages/                  # Enrutamiento basado en archivos (index, blog, projects, tools, contact)
├── Dockerfile                  # Compilación multi-etapa para producción
├── nginx.conf                  # Configuración de Nginx para producción y redirecciones limpias
├── docker-compose.yml          # Orquestación de contenedores y reinicios automáticos
├── astro.config.mjs            # Configuración principal de Astro y definición del host de producción
└── package.json
```

---

## 💻 Desarrollo Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Tu servidor estará disponible en `http://localhost:4321`.

3. **Compilar para producción localmente**:
   ```bash
   npm run build
   ```

---

## 🐳 Despliegue en Producción (AWS EC2 / VPS)

Este proyecto está preparado para desplegarse mediante contenedores de Docker en tu instancia de AWS EC2 o cualquier VPS de forma automatizada:

1. **Clona tu repositorio en el servidor**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git web
   cd web
   ```

2. **Levanta la aplicación en segundo plano**:
   ```bash
   docker compose up --build -d
   ```

Nginx compilará y expondrá tu sitio web automáticamente en el puerto público `80` (HTTP). Si el servidor se apaga o reinicia físicamente, Docker volverá a iniciar el contenedor de forma automática.

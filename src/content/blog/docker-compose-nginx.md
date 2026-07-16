---
title: "Despliegue Rápido: Configuración de Docker Compose y Nginx en AWS EC2"
description: "Guía paso a paso para configurar reglas de seguridad en AWS, conectarse mediante SSH y realizar el despliegue de un contenedor Nginx usando Docker Compose."
pubDate: 2026-07-16
tags: ["Docker", "Docker Compose", "Nginx", "AWS", "DevOps"]
category: "DevOps"
---

Desplegar servidores web en la nube puede parecer complejo al inicio, pero combinando la infraestructura ágil de AWS EC2 con la portabilidad de Docker, podemos levantar un entorno web de producción en cuestión de minutos. 

![Arquitectura de Despliegue con Docker y Nginx en AWS EC2](/images/docker-aws-nginx.png)

A continuación, te muestro la guía paso a paso para lograr un despliegue limpio y funcional.

---

## Paso 1: Configurar las Reglas de Entrada (Security Group)

Antes de conectarte, necesitas asegurarte de que AWS permita el tráfico de red hacia tu servidor. Por defecto, AWS bloquea todo excepto lo que tú autorices de forma explícita.

1. Entra a tu consola de **AWS** y ve al servicio **EC2**.
2. En el menú de la izquierda, haz clic en **Instances (Instancias)** y selecciona la tuya.
3. En la parte inferior, ve a la pestaña **Security (Seguridad)** y haz clic en el nombre de tu **Security Group**.
4. Haz clic en el botón **Edit inbound rules (Editar reglas de entrada)**.
5. Asegúrate de tener estas dos reglas configuradas (si no están, haz clic en **Add rule**):

| Tipo | Puerto | Origen (Source) | Descripción |
| :--- | :--- | :--- | :--- |
| **SSH** | 22 | `My IP` (Solo tu IP actual por seguridad) o `0.0.0.0/0` (Cualquier IP) | Acceso seguro a la consola |
| **HTTP** | 80 | `0.0.0.0/0` (Cualquier lugar) | Tráfico web público |

6. Haz clic en **Save rules (Guardar reglas)**.

---

## Paso 2: Conectarte a tu Instancia por SSH

Necesitas abrir la terminal de tu máquina local para conectarte de forma remota a la máquina virtual en la nube.

1. Abre tu terminal local (Git Bash, WSL o PowerShell en Windows; la terminal nativa en macOS/Linux).
2. Ve a la carpeta donde descargaste tu archivo de llave privada (el archivo `.pem` que obtuviste al crear la instancia EC2):
   ```bash
   cd ~/Downloads
   ```
3. **(Paso crítico para macOS/Linux):** Dale los permisos de lectura correctos a tu llave para que el cliente de SSH no la rechace por ser "demasiado abierta":
   ```bash
   chmod 400 tu-llave.pem
   ```
4. Conéctate usando el usuario por defecto de Ubuntu (`ubuntu`) y la dirección IP pública de tu instancia (la encuentras en los detalles de tu EC2 en la consola de AWS):
   ```bash
   ssh -i "tu-llave.pem" ubuntu@TU_IP_PUBLICA_EC2
   ```
5. Si te pregunta si confías en el host escribiendo `yes/no`, escribe **`yes`** y presiona **Enter**. ¡Listo! Ya estás dentro del shell de tu servidor en la nube.

---

## Paso 3: Actualizar el Sistema e Instalar Docker

Una vez dentro de la terminal de tu EC2 (notarás que el prompt de tu terminal cambia a algo como `ubuntu@ip-172-x-x-x`), ejecuta los siguientes comandos:

1. Actualiza la lista de paquetes del sistema para garantizar el acceso a las últimas versiones estables:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```
2. Instala los paquetes esenciales para permitir que Ubuntu use repositorios de software sobre HTTPS:
   ```bash
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
   ```
3. Añade la clave GPG oficial de Docker a los llaveros de confianza del sistema:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```
4. Añade el repositorio de Docker a las fuentes de software de tu distribución:
   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```
5. Instala el motor de Docker y el plugin oficial de Docker Compose actualizando la lista de paquetes una vez más:
   ```bash
   sudo apt update
   sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

---

## Paso 4: Configurar Permisos de Docker

Por defecto, el socket de Docker requiere privilegios de superusuario (`sudo`) para cada comando. Para evitar tener que escribirlo a cada momento, añade tu usuario actual (`ubuntu`) al grupo de Docker.

1. Agrega el usuario al grupo de docker:
   ```bash
   sudo usermod -aG docker $USER
   ```
2. Aplica los cambios de grupo de forma inmediata a la sesión actual sin necesidad de cerrar sesión por SSH:
   ```bash
   newgrp docker
   ```
3. Comprueba que puedas interactuar con el socket sin necesidad de sudo:
   ```bash
   docker --version
   docker compose version
   ```
   *(Ambos comandos deben imprimir las versiones instaladas sin arrojar advertencias ni errores de permisos).*

---

## Paso 5: Crear el Archivo Docker Compose y Levantar Nginx

Estructuraremos un despliegue ordenado encapsulando los servicios con Docker Compose.

1. Crea una carpeta dedicada a tu proyecto y accede a ella:
   ```bash
   mkdir mi-primer-servidor && cd mi-primer-servidor
   ```
2. Crea y edita un archivo llamado `docker-compose.yml` utilizando el editor integrado `nano`:
   ```bash
   nano docker-compose.yml
   ```
3. Pega la siguiente definición YAML dentro del editor:
   ```yaml
   services:
     web:
       image: nginx:latest
       container_name: mi_nginx
       ports:
         - "80:80"
       restart: always
   ```

   > **¿Qué hace este archivo?**
   > Declara un servicio llamado `web` que descarga la última imagen de Nginx, nombra al contenedor `mi_nginx`, mapea el puerto 80 del host (EC2) al puerto 80 del contenedor, y configura una regla de reinicio automático (`restart: always`) para volver a encender el contenedor si la máquina física se reinicia.

4. **Para guardar en nano:** Presiona `Ctrl + O`, presiona `Enter` para confirmar el nombre del archivo, y presiona `Ctrl + X` para salir del editor.
5. Levanta el contenedor en segundo plano (modo *detached*):
   ```bash
   docker compose up -d
   ```
   *Docker descargará automáticamente la imagen oficial de Nginx y creará el contenedor en segundos.*
6. Verifica que el contenedor esté corriendo correctamente:
   ```bash
   docker ps
   ```

---

## Paso 6: ¡La Prueba de Fuego!

1. Abre tu navegador web en tu computadora personal.
2. En la barra de direcciones, introduce la dirección IP pública de tu instancia EC2 (asegúrate de ingresar explícitamente `http://` y no `https://` ya que aún no cuentas con un certificado SSL configurado). Ejemplo:
   `http://54.210.xx.xx`
3. Presiona **Enter**.

Si todo se configuró correctamente, deberías ver la clásica pantalla de bienvenida por defecto de Nginx:
**"Welcome to nginx!"** 🎉

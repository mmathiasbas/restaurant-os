# Restaurant OS

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=f&logo=vite&llatogoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white)

Sistema integral de gestión para restaurantes diseñado para optimizar el flujo operativo en tiempo real, desde la toma de pedido hasta el cierre de caja. Permite la interconexión fluida entre los distintos roles del negocio: meseros, cocina, caja y administración, todo desde una interfaz web moderna y reactiva.

## Stack Tecnológico

| Capa | Tecnologías |
|------|-------------|
| Frontend | React 19, TypeScript, Tailwind CSS 4, Vite, Socket.io-client |
| Backend | Node.js, Express, Prisma ORM, Socket.io, JWT, Bcrypt |
| Base de Datos | PostgreSQL |
| Gestión de paquetes | pnpm |

## Descripción del Proyecto

Restaurant OS nace de la necesidad de digitalizar y centralizar las operaciones de un restaurante en un único sistema cohesionado. El sistema implementa una arquitectura en tiempo real mediante WebSockets que mantiene sincronizados a todos los actores del negocio simultáneamente: cuando un mesero registra un pedido, este aparece al instante en la pantalla de cocina; cuando el cocinero lo marca como listo, el mesero recibe la notificación de inmediato.

La solución contempla cuatro roles diferenciados con vistas y permisos propios:

- **Administrador**: Gestión de usuarios, mesas y visualización de actividad global del sistema.
- **Mesero**: Toma de pedidos por mesa, seguimiento del estado de las órdenes y cierre de cuenta.
- **Cocinero**: Vista en tiempo real de las órdenes entrantes con control de estado de preparación.
- **Cajero**: Procesamiento de pagos y cierre de turno.

## Estructura del Proyecto

```
repositorio/
├── client/                # Aplicación frontend React + Vite
│   ├── src/
│   │   ├── components/    # Componentes reutilizables de UI
│   │   ├── pages/         # Vistas por rol (Admin, Mesero, Cocinero, Cajero)
│   │   ├── services/      # Integración con la API REST y WebSockets
│   │   └── context/       # Gestión de estado y autenticación
│   ├── package.json
│   └── .env.example
├── server/                # API REST + WebSockets con Express
│   ├── src/
│   │   ├── controllers/   # Lógica de negocio por módulo
│   │   ├── middlewares/   # Autenticación JWT y validaciones
│   │   ├── routes/        # Definición de endpoints REST
│   │   └── sockets/       # Gestión de eventos en tiempo real
│   ├── prisma/
│   │   ├── schema.prisma  # Esquema de base de datos
│   │   └── seed.ts        # Datos iniciales de prueba
│   ├── package.json
│   └── .env.example
└── README.md
```

## Módulos de la Solución

### 1. Gestión de Mesas y Órdenes
Control del ciclo de vida completo de una orden: apertura de mesa, registro de ítems, actualización de estado en cocina y cierre de cuenta en caja. Cada transición de estado se propaga en tiempo real a todos los clientes conectados mediante Socket.io.

### 2. Autenticación y Roles
Sistema de autenticación basado en JWT con roles diferenciados. Las rutas tanto del backend como las vistas del frontend están protegidas según el rol asignado a cada usuario, garantizando que cada actor solo acceda a la información relevante para sus funciones.

### 3. Panel de Administración
Vista exclusiva del administrador con control total sobre usuarios y mesas del sistema, más un feed de actividad reciente que permite auditar las operaciones del turno.

### 4. Comunicación en Tiempo Real
Arquitectura orientada a eventos con Socket.io que elimina la necesidad de polling. Las actualizaciones de órdenes, cambios de estado y alertas se emiten y reciben en tiempo real entre todos los clientes activos.

## API — Endpoints Principales

| Módulo | Ruta | Método |
|--------|------|--------|
| Autenticación | `/auth/login` | POST |
| Mesas | `/mesas` | GET, POST, PUT, DELETE |
| Órdenes | `/ordenes` | GET, POST, PUT |
| Actividad (Admin) | `/actividades` | GET |
| Usuarios (Admin) | `/usuarios` | GET, POST, DELETE |

## Instalación y Ejecución Local

### Requisitos previos
- Node.js v18 o superior
- pnpm instalado globalmente (`npm install -g pnpm`)
- Instancia de PostgreSQL activa y accesible

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone <url-del-repositorio>
cd restaurant-os
pnpm install
```

### 2. Configurar variables de entorno

Dentro del directorio `server/`, crea un archivo `.env` basado en `.env.example`:

```env
DATABASE_URL="postgresql://usuario:contrasena@localhost:5432/nombre_bd?schema=public"
JWT_SECRET="clave_secreta_para_tokens"
PORT=3000
```

### 3. Configurar la base de datos

Ejecuta los siguientes comandos dentro del directorio `server/`:

```bash
# Aplicar migraciones
npx prisma migrate dev

# Cargar datos de prueba
pnpm exec tsx prisma/seed.ts
```

### 4. Levantar los servidores

En dos terminales separadas:

```bash
# Terminal 1 — Backend
cd server
pnpm dev
# Servidor disponible en http://localhost:3000

# Terminal 2 — Frontend
cd client
pnpm dev
# Aplicación disponible en http://localhost:5173
```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `dev` | Inicia el entorno de desarrollo con recarga en caliente |
| `build` | Compila la aplicación para producción |
| `seed` | Carga datos iniciales en la base de datos |
| `typecheck` | Verifica errores de tipado en el código TypeScript |

## Capturas de la Interfaz

### Login
![Login](screenshots/login.png)

### Panel de Administrador

#### Vista principal
![panel_admin](screenshots/panel_admin.png)

#### Gestión de personal
![panel_admin_gestion_personal](screenshots/panel_admin_gestion_personal.png)

#### Menú y carta
![panel_admin_menu_carta](screenshots/panel_admin_menu_carta.png)

#### Panel de simulación
![panel_admin_demo](screenshots/panel_admin_demo.png)

### Panel de Mesero
![panel_mesero](screenshots/panel_mesero.png)

### Panel de Cocinero
![panel_cocinero](screenshots/panel_cocinero.png)

### Panel de Cajero
![panel_cajero](screenshots/panel_cajero.png)

---

## Demo

Accede a la demostración en vivo del sistema:
- **[Ver aplicación](https://restaurant-os-six-eta.vercel.app)**

> ⚠️ El frontend está desplegado en Vercel. Si el backend no recibe tráfico durante un tiempo, puede tardar unos segundos en responder la primera solicitud.

### Credenciales por rol

| Rol | Correo | Contraseña |
|-----|--------|------------|
| Administrador | administrador@restaurant.com | admin123 |
| Mesero | mesero@restaurant.com | mesero123 |
| Cocinero | cocinero@restaurant.com | cocinero123 |
| Cajero | cajero@restaurant.com | cajero123 |

**Autor:** Mathias Sebastian Huanca Pretell
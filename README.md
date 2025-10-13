# E-commerce de Perfumes - Documentación del Proyecto

## 📋 Descripción del Proyecto

Este proyecto es una **Single Page Application (SPA)** de e-commerce desarrollada con **React** para la venta de perfumes importados. La aplicación permite a los usuarios navegar por un catálogo de productos, agregar items al carrito de compras y realizar compras completando un formulario de checkout.

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Framework principal para el desarrollo de la interfaz
- **React Router DOM 7.9.1** - Para la navegación entre páginas
- **Firebase 12.3.0** - Base de datos en la nube (Firestore)
- **Bootstrap 5.3.8** - Framework CSS para el diseño responsivo
- **React Bootstrap 2.10.10** - Componentes de Bootstrap para React
- **Vite** - Herramienta de build y desarrollo

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── components/          # Componentes de React
│   ├── Cart.jsx        # Vista del carrito de compras
│   ├── CartWidget.jsx  # Widget del carrito en la navbar
│   ├── Checkout.jsx    # Formulario de checkout
│   ├── Item.jsx        # Componente individual de producto
│   ├── ItemCount.jsx   # Contador de cantidad para agregar al carrito
│   ├── ItemDetail.jsx  # Vista detallada de un producto
│   ├── ItemDetailContainer.jsx # Contenedor del detalle
│   ├── ItemList.jsx    # Lista de productos
│   ├── ItemListContainer.jsx # Contenedor de la lista
│   ├── LoaderComponent.jsx # Componente de carga
│   └── NavBar.jsx      # Barra de navegación
├── context/            # Context API de React
│   └── CartContext.jsx # Contexto global del carrito
├── services/           # Servicios externos
│   └── firebase.jsx    # Configuración de Firebase
├── mock/               # Datos de prueba
│   └── AsyncService.jsx # Servicios mock
├── css/                # Estilos CSS
│   └── NavBar.css      # Estilos específicos del navbar
├── assets/             # Recursos estáticos
└── App.jsx             # Componente principal
```

## 🎯 Funcionalidades Implementadas

### ✅ Listado y Detalle de Productos
- **ItemListContainer**: Contenedor que obtiene productos desde Firestore
- **ItemList**: Componente de presentación que renderiza la lista
- **ItemDetailContainer**: Contenedor para el detalle de un producto específico
- **ItemDetail**: Vista detallada con información completa del producto

### ✅ Gestión del Carrito
- **CartContext**: Context API para manejo global del estado del carrito
- **ItemCount**: Componente con validaciones (stock mínimo, límite máximo)
- **CartWidget**: Widget que muestra la cantidad total de items en el carrito
- **Cart**: Vista completa del carrito con productos, cantidades y totales

### ✅ Navegación
- **React Router**: Implementación de rutas para navegación SPA
- **NavBar**: Barra de navegación con enlaces a todas las secciones
- Rutas implementadas:
  - `/` - Página principal
  - `/productos` - Catálogo completo
  - `/productos/:categoria` - Productos por categoría
  - `/item/:id` - Detalle de producto
  - `/cart` - Carrito de compras
  - `/checkout` - Formulario de checkout

### ✅ Integración con Firebase
- **Firestore**: Base de datos para almacenar productos y órdenes
- **Colección "productos"**: Almacena el catálogo de perfumes
- **Colección "orders"**: Registra las compras realizadas por los usuarios

### ✅ Experiencia de Usuario
- **Renderizado condicional**: Loaders, mensajes de error y estados vacíos
- **Validaciones**: Stock disponible, carrito vacío, formularios completos
- **Feedback visual**: Alertas de éxito, advertencias y confirmaciones

## 🔧 Configuración de Firebase

### Estructura de la Base de Datos

#### Colección: `productos`
```javascript
{
  id: "string",           // ID único del documento
  nombre: "string",       // Nombre del perfume
  precio: number,         // Precio en pesos
  img: "string",          // URL de la imagen
  descripcion: "string",  // Descripción del producto
  stock: number,          // Cantidad disponible
  categoria: "string"     // Categoría (home, nuevos, ofertas)
}
```

#### Colección: `orders`
```javascript
{
  id: "string",           // ID único de la orden
  buyer: {                // Información del comprador
    nombre: "string",
    email: "string",
    telefono: "string",
    direccion: "string"
  },
  items: [                // Array de productos comprados
    {
      id: "string",
      nombre: "string",
      precio: number,
      quantity: number
    }
  ],
  total: number,          // Total de la compra
  date: timestamp         // Fecha de la orden
}
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Cuenta de Firebase

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd reactjs
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Firestore Database
   - Obtener las credenciales de configuración
   - Actualizar `src/services/firebase.jsx` con tus credenciales

4. **Poblar la base de datos**
   - Crear la colección `productos` en Firestore
   - Agregar los productos con la estructura definida anteriormente

5. **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

## 📱 Características de la Interfaz

### Diseño Responsivo
- Utiliza Bootstrap para diseño adaptativo
- Compatible con dispositivos móviles y desktop
- Grid system para organización de contenido

### Componentes Principales

#### NavBar
- Logo de la empresa
- Enlaces de navegación
- Dropdown para categorías
- Widget del carrito con contador

#### ItemList
- Grid de productos con imágenes
- Información básica (nombre, precio)
- Enlaces a vista detallada

#### ItemDetail
- Imagen del producto
- Información completa
- Contador de cantidad
- Botón "Agregar al carrito"
- Ocultación del contador después de agregar

#### Cart
- Lista de productos en el carrito
- Cantidades y subtotales
- Botones para eliminar items
- Resumen de compra con total
- Enlaces para continuar comprando o proceder al checkout

#### Checkout
- Formulario de datos del comprador
- Validación de campos requeridos
- Resumen de la compra
- Generación de orden en Firestore
- Confirmación con ID de orden

## 🔒 Validaciones Implementadas

### Carrito de Compras
- Verificación de stock disponible
- Límite máximo según stock del producto
- Cantidad mínima de 1 unidad
- Prevención de duplicados (suma cantidades)

### Formulario de Checkout
- Campos requeridos: nombre, email, teléfono, dirección
- Validación de formato de email
- Verificación de carrito no vacío

### Estados de la Aplicación
- Loading states durante cargas de datos
- Mensajes de error para fallos de conexión
- Estados vacíos (carrito vacío, sin productos)
- Confirmaciones de acciones exitosas

## 🎨 Estilos y UX

### Bootstrap Integration
- Componentes nativos de Bootstrap
- Sistema de grid responsivo
- Clases utilitarias para espaciado y colores
- Alertas y badges para feedback

### Mejoras de UX
- Loaders durante cargas asíncronas
- Mensajes informativos claros
- Navegación intuitiva
- Feedback visual inmediato
- Diseño limpio y profesional

## 🧪 Testing y Deploy

### Comandos Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm run lint     # Linter de código
```

### Deploy Recomendado
- **Vercel**: Ideal para aplicaciones React
- **Netlify**: Alternativa con buenas características
- **Firebase Hosting**: Integración nativa con Firebase

## 📝 Notas de Desarrollo

### Buenas Prácticas Implementadas
- Separación de responsabilidades (containers vs presentational components)
- Uso de Context API para estado global
- Manejo de errores y estados de carga
- Código limpio y bien documentado
- Convenciones de nomenclatura consistentes

### Consideraciones de Seguridad
- Validación de datos en el frontend
- Configuración segura de Firebase
- Manejo de errores sin exposición de información sensible

## 🔮 Posibles Mejoras Futuras

- Autenticación de usuarios
- Historial de compras
- Sistema de favoritos
- Búsqueda de productos
- Filtros avanzados
- Integración con pasarelas de pago
- Panel de administración
- Notificaciones push
- PWA (Progressive Web App)

---

**Desarrollado con ❤️ usando React y Firebase**

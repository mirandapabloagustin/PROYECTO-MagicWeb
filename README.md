
# WebMagic 🧙‍♂️  

**WebMagic** es una aplicación web que permite a los usuarios interactuar con una API de cartas de *Magic: The Gathering*, proporcionando varias caracteristicas.  

## 🚀 Características  
- **Búsqueda avanzada** de cartas de *Magic: The Gathering*.  
- **Gestion y Personalización de usuario** edita, perzonaliza y adapta el enctorno a gusto del usuario.  
- **Gestión de mazos**: crea, edita y organiza tus mazos favoritos.  
- **Comentarios en mazos**: comparte estrategias y recibe opiniones.  
- **Votación de mazos**: califica los mazos de otros jugadores.  
- **Filtros avanzados** para encontrar cartas por atributos específicos.  
- **Interfaz intuitiva y dinámica** para una navegación fluida.  

# Tecnologías Utilizadas 🛠️

**Cliente**: 
- Angular
- TypeScript
- Html
- Css

**Server**:
- Json-server

## Deployment

Este proyecto fue generado en [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

Instalacion de dependecias:

```bash
  npm install
```

Para ejecutar el proyecto, usa el siguiente comando:

```bash
  ng serve
```

Esto iniciará la aplicación en `http://localhost:4200/` y recargará automáticamente los cambios realizados en los archivos.

Para ejecutar el backend con JSON Server, usa el siguiente comando:

```bash
  npm run server
```

Esto iniciará el backend en http://localhost:3000/, desde donde podrás acceder a los siguientes endpoints:

-`users` - Obtiene la informacion de los usuarios registrados.
-`decks` - Obtiene la informacion de los mazos creados por los usuarios.
-`comments` - Obtiene la informacion de los comentarios creados por los usuarios.




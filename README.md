# Licorne

## Estructura del proyecto

├── backend
├── frontend
|	├── .next
|	├── components
|	├── fonts
|	├── hooks
|	├── interfaces
|	├── layouts
|	├── lib
|	├── node_modules
|	├── pages
|	├── public
|	├── scss
|	|	├── components
|	|	├── global
|	|	├── mixins
|	|	├── pages
|	|	└── main.scss
|	├── services
|	├── svg
|	├── .eslintrc.json
|	├── next.config.js
|	├── package-lock.json
|	└── package.json
├── scripts
├── wordpress
├── appspec.yml
├── .gitignore 
└── README.md

## Frontend

### Tecnología
- Next.js
- Typescript
- GSAP
- SCSS

### Componentes
Los componentes se almacenan dentro de la carpeta "components" respetando la siguiente convención para su creación.

#### Convención para el nombre
El nombre del componente deberá seguir la nomenclatura "CamelCase", por lo que cada palabra iniciará con una letra Mayúscula y no deberán existir espacios

Ejemplo de su uso:

1. MiComponente.tsx
2. ComponenteDePrueba.tsx

#### Estructura del componente
```js
//* Next components
import type { NextPage } from 'next'

/**
 * @author Jorge Salgado
 * @name Home
 * @description Página principal del sitio web
 */
const Home: NextPage = () => {

	return (

		<div></div>

	)

}

export default Home
```
//* Next components
import type { NextPage } from 'next'

/**
 * @author Iván Sánchez
 * @name SVG_Arrow
 * @description Imagen SVG
 */
const Arrow: NextPage = () => {

	return (

		

	)

}

export default Arrow
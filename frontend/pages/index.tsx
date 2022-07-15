//* Next components
import type { NextPage } from 'next'

//* Components
import MainLayout from '../layouts/MainLayout'

/**
 * @author Jorge Salgado
 * @name Home
 * @description Página principal del sitio web
 */
const Home: NextPage = () => {

	const title = 'Metodología Lean Startup aplicada a consolidar tu negocio'
	const description = 'En Licorne Startup kings damos vida a ideas de negocio para consolidar marcas mediante consultoría, tecnología y marketing digital. ¡Iniciemos hoy mismo!'

	return (

		<MainLayout title={title} description={description}>
			
		</MainLayout>

	)

}

export default Home

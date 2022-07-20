//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Home/Hero'

/**
 * @author Jorge Salgado
 * @name Home
 * @description Página principal del sitio web
 */

const Home: NextPage = () => {

	const title = 'Metodología Lean Startup aplicada a consolidar tu negocio'
	const description = 'En Licorne Startup kings damos vida a ideas de negocio para consolidar marcas mediante consultoría, tecnología y marketing digital. ¡Iniciemos hoy mismo!'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>

			<Hero />

		</MainLayout>

	)

}

export default Home

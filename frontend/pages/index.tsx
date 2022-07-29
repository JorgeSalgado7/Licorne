//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Home/Hero'
import StartKings from '../components/Home/StartupKings'
import LeanStartup from '../components/Home/LeanStartup'
import SlideHome from '../components/Home/SlideHome'
import Focus from '../components/Home/Focus'
import Know from '../components/Home/Know'
import Digitise from '../components/Home/Digitise'

/**
 * @author Jorge Salgado
 * @name Home
 * @description Página alternative del sitio web
 */

const Home: NextPage = () => {

	const title = 'Metodología Lean Startup aplicada a consolidar tu negocio'
	const description = 'En Licorne Startup kings damos vida a ideas de negocio para consolidar marcas mediante consultoría, tecnología y marketing digital. ¡Iniciemos hoy mismo!'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero />
			<StartKings />
			<LeanStartup />
			<SlideHome />
			<Focus />
			<Know />
			<Digitise />
		</MainLayout>

	)

}

export default Home

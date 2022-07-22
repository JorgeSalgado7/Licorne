//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import MainAnimation from '../components/LeanStartup/MainAnimation'
import SeedAnimation from '../components/LeanStartup/SeedAnimation'
import SnapAnimation from '../components/LeanStartup/SnapAnimation'
import WeDo from '../components/LeanStartup/WeDo'
import Partners from '../components/LeanStartup/Partners'

/**
 * @author Iván Sánchez	
 * @name consultoria
 * @description Página sobre Lean Start Up
 */

const Consultoria: NextPage = () => {

	const title = 'Acércate a los cracks de la consultoría lean startup.'
	const description = 'Analizamos tu Startup con estrategias innovadoras de medición que permiten impactar positivamente tu mercado para lograr la atracción de nuevos clientes'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			
			<MainAnimation />
			
			<SeedAnimation />

			<SnapAnimation />

			<WeDo />

			<Partners />

		</MainLayout>

	)

}

export default Consultoria

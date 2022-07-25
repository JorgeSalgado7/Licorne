//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Stages from '../components/Development/Stages'
import AppDevelopment from '../components/Development/AppDevelopment'
import Ux from '../components/Development/Ux'
import Cloud from '../components/Development/Cloud'

/**
 * @author Iván Sánchez
 * @name SVG_Desarrollo
 * @description Página sobre Consultoria y estapas
 */

const Desarrollo: NextPage = () => {

	const title = 'Soluciones en desarrollo de aplicaciones web ciberseguras'
	const description = 'Desarrollo web a la medida mediante diseños creativos, funcionales e intuitivos, poseedores de los más altos estándares mundiales en calidad y ciberseguridad'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			
			<Stages />

			<AppDevelopment />

			<Ux />

			<Cloud />

		</MainLayout>

	)

}

export default Desarrollo

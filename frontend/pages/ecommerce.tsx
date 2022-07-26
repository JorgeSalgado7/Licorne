//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Conversion from '../components/Ecommerce/Conversion'
import Responsive from '../components/Ecommerce/Responsive'
import Workshop from '../components/Ecommerce/Workshop'
import Wireframing from '../components/Ecommerce/Wireframing'
import Management from '../components/Ecommerce/Management'
import Shop from '../components/Ecommerce/Shop'
/**
 * @author Iván Sánchez
 * @name Ecommerce
 * @description Página principal de ecommerce
 */
const Ecommerce: NextPage = () => {

	const title = 'Soluciones en desarrollo de aplicaciones web ciberseguras'
	const description = 'Desarrollo web a la medida mediante diseños creativos, funcionales e intuitivos, poseedores de los más altos estándares mundiales en calidad y ciberseguridad'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Conversion />
			<Responsive />
			<Workshop />
			<Wireframing/>
			<Management />
			<Shop />
		</MainLayout>

	)

}

export default Ecommerce
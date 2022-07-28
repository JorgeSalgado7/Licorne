//* Next components
import type { NextPage } from 'next'
import Benefits from '../components/Programatic/Benefits'
import Hero from '../components/Programatic/Hero'
import Menu from '../components/Programatic/Menu'
import Programatics from '../components/Programatic/Programatics'
import Traditional from '../components/Programatic/Traditional'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'

/**
 * @author Maria Meza
 * @name Programatic
 * @description Programatic
 */

const Programatic: NextPage = () => {

	const title = 'Creamos soluciones de Programmatic a la medida de tu éxito'
	const description = 'Nuestras estrategias de marketing programático utilizan la data más avanzada para propagar publicidad a los leads que están listos para hacerte una compra'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Programatics/>
			<Traditional/>
			<Menu/>
			<Benefits/>	

		</MainLayout>

	)

}

export default Programatic

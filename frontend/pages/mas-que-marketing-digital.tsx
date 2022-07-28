//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import How from '../components/WeDoIt/How'
import Discover from '../components/WeDoIt/Discover'
import Consultancy from '../components/WeDoIt/Consultancy'
import MarketFit from '../components/WeDoIt/MarketFit'
import Maximize from '../components/WeDoIt/Maximize'
import Scalability from '../components/WeDoIt/Scalability'

/**
 * @author Iván Sánchez	
 * @name AsiSomos
 * @description Página sobre como hacemos nuestro trabajo
*/
const AsiSomos: NextPage = () => {

	const title = 'Campañas de Social Media que dejan marca en tus seguidores	'
	const description = 'Nuestras estrategias en redes sociales incluyen contenidos de valor que conectan, interactúan, fidelizan e influyen en la consideración de tu marca.'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<How />
			<Discover />
			<Consultancy />
			<MarketFit />
			<Maximize />
			<Scalability />
		</MainLayout>

	)

}

export default AsiSomos
//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/GoogleAds/Hero'
import Wallet from '../components/GoogleAds/Wallet'
import Google from '../components/GoogleAds/Google'
import Click from '../components/GoogleAds/Click'
import Road from '../components/GoogleAds/Road'
import Present from '../components/GoogleAds/Present'

/**
 * @author Maria Meza
 * @name GoogleAds
 * @description Página principal del sitio web
 */

const GoogleAds: NextPage = () => {

	const title = 'Campañas de Google Ads. Estamos avalados por Google Partners'
	const description = 'Optimiza tu inversión, incrementa tu cartera de clientes y destaca de tu competidor con campañas de marketing digital personalizadas. Da clic y déjate ver!'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Wallet/>
			<Google/>
			<Click/>
			<Road/>
			<Present/>
		</MainLayout>

	)

}

export default GoogleAds

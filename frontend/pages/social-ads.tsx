//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/SocialAds/Hero'
import Bells from '../components/SocialAds/Bells'
import Segmentation from '../components/SocialAds/Segmentation'
import Menu from '../components/SocialAds/Menu'
import Need from '../components/SocialAds/Need'
import SocialNetworks from '../components/SocialAds/SocialNetworks'

/**
 * @author Maria Meza
 * @name Social-Ads
 * @description  Social-Ads
 */

const SocialAds: NextPage = () => {

	const title = 'Campañas de Google Ads. Estamos avalados por Google Partners'
	const description = 'Optimiza tu inversión, incrementa tu cartera de clientes y destaca de tu competidor con campañas de marketing digital personalizadas. Da clic y déjate ver'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Bells/>
			<Segmentation/>
			<Menu/>
			<Need/>
			<SocialNetworks/>	
		</MainLayout>

	)

}

export default SocialAds
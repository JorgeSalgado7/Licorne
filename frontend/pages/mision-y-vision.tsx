//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Partners from '../components/MisionVision/ Partners'
import Hero from '../components/MisionVision/Hero'
import Mision from '../components/MisionVision/Mision'
import Values from '../components/MisionVision/Values'
import Vision from '../components/MisionVision/Vision'
import Media from '../components/MisionVision/Media'

/**
 * @author Maria Meza
 * @name Misionvision
 * @description  Social-Ads
 */

const SocialAds: NextPage = () => {

	const title = 'Ayudamos a clientes a construir y potenciar sus compañías'
	const description = 'Impulsamos el desarrollo de compañías con base en estrategias de lean Startup, tecnología y marketing digital para lograr su consolidación y éxito.'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Mision/>
			<Vision/>
			<Values/>
			<Partners/>
		
		</MainLayout>

	)

}

export default SocialAds
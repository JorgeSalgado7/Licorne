//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Discover from '../components/SocialMedia/Discover'
import Worth from '../components/SocialMedia/Worth'
import Vanity from '../components/SocialMedia/Vanity'
import Content from '../components/SocialMedia/Content'
import Paid from '../components/SocialMedia/Paid'

/**
 * @author Iván Sánchez
 * @name SocialMedia
 * @description SocialMedia
 */

const SocialMedia: NextPage = () => {

	const title = 'Optimización SEO aplicada en generar tráfico de calidad'
	const description = 'Implementamos sitios web relevantes optimizados a nivel técnico, responsivos y con contenidos clave para ofrecer una amigable experiencia al usuario'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Discover />
			<Worth />
			<Vanity />
			<Content />
			<Paid />
		</MainLayout>

	)

}

export default SocialMedia
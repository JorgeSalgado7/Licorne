//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Google from '../components/Seo/Google'
import Quality from '../components/Seo/Quality'
import Qualified from '../components/Seo/Qualified'

/**
 * @author Iván Sánchez
 * @name SEO
 * @description SEO
 */

const SEO: NextPage = () => {

	const title = 'Optimización SEO aplicada en generar tráfico de calidad'
	const description = 'Implementamos sitios web relevantes optimizados a nivel técnico, responsivos y con contenidos clave para ofrecer una amigable experiencia al usuario'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Google />
			<Quality />
			<Qualified />
		</MainLayout>

	)

}

export default SEO
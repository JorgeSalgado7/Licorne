//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Web/Hero'
import Creative from '../components/Web/Creative'
import MenuCreative from '../components/Web/CreativeMenu'
import Information from '../components/Web/Information'
import Technology from '../components/Web/Tecnologys'
import Ocean from '../components/Web/Ocean'

/**
 * @author Maria Meza
 * @name Web
 * @description Web
 */

const Web: NextPage = () => {

	const title = 'Diseño Web UI/UX Usamos tecnologías seguras y dinámicas'
	const description = 'Elaboramos diseños estratégicos que permitan destacar de la competencia a través de una experiencia increíble. ¿Qué esperas para tener un sitio web único?'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Creative/>
			<MenuCreative/>
			<Information/>
			<Technology/>
			<Ocean/>
		
		</MainLayout>

	)

}

export default Web
//* Next components
import type { NextPage } from 'next'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Web/Hero'
import Creative from '../components/Web/Creative'

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
		
		</MainLayout>

	)

}

export default Web
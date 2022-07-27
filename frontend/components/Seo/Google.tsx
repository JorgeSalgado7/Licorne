//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animation components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import GoogleS from '../../svg/Seo/GoogleS'
import Search from '../../svg/Seo/Search'

/**
 * @author Iván Sánchez
 * @name Google
 * @description componente google de SEO
 */
const Google: NextPage = () => {

	const google = useRef<HTMLDivElement>(null)
	
	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: google.current,
				markers: false,
				start: 'top',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.google__container__image', { width: '20%', left: '5%', top: '55%', opacity: 0, duration: 1 })
			.to('.google__container__search', { opacity: 1, duration: 1 })
			.to('.google__container__section', { opacity: 1, duration: 1 })
			.to('.google__container__search__section', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='google' ref={google}>

				<div className='google__container container'>

					<div className='google__container__image'>
						<GoogleS />
					</div>

					<div className='google__container__search'>

						<Search/>
						
						<div className='google__container__search__section'>
							<p>¿Cómo ser el primero en las búsquedas?</p>
						</div>

					</div>

					<div className='google__container__section'>
						<p>Con la optimización SEO de Licorne® Startup Kings, tu sitio web estará listo para generar tráfico de calidad.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Google
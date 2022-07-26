///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Interface from '../../svg/App/Interface'
import InterfaceTwo from '../../svg/App/InterfaceOne'
import InterfaceThree from '../../svg/App/InterfaceThree'

/**
 * @author Maria Meza
 * @name Methodology
 * @description Methodology App
 */

const Methodology: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		tl
			.to('.methodology__text', { opacity: 1, duration: 1 }, '+=1')
			.to('.methodology__image_one', { opacity: 1, duration: 1 }, '+=1')
			.to('.methodology__image_two', { opacity: 1, duration: 1 }, '+=1')
			.to('.methodology__image_three', { opacity: 1, duration: 1 }, '+=1')
			.to('.methodology__image_one', { opacity: 0, duration: 1 }, '+=1')
			.to('.methodology__image_two', { opacity: 0, duration: 1 }, '+=1')
			.to('.methodology__image_three', { opacity: 0, duration: 1 }, '+=1')
			.to('.methodology__text', { opacity: 0, duration: 1 }, '+=2')
			.to('.methodology', { background: 'rgb(249, 249, 249)', opacity: 1, duration: -5 }, '+=1')
			.to('.methodology__text_two', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (
		<div>
			<div className='methodology' ref={animation}>

				<div className='container'>

					{/**PARRAFO */}
					<div className='methodology__text'>
						<p>Las apps han cambiado la definición de actividad cotidiana en la vida humana. Son parte esencial de nuestras vidas y hoy, podemos decir que <span>hacemos casi todo a través de una app.</span></p>
						<p>Licorne® Startup Kings ayuda a tu compañía a entrar de la mejor manera a este mundo hiperconectado digitalmente por medio de apps. </p>
					</div>
					{/**IMAGEN */}
					<div className='methodology__image_one'>
						<Interface/>
					</div>

					<div className='methodology__image_two'>
						<InterfaceTwo/>
					</div>

					<div className='methodology__image_three'>
						<InterfaceThree/>
					</div>

					<div className='methodology__text_two'>
						<h3>Desarrollamos con estándares de calidad mundial bajo las metodologías:</h3>
						<h3 className='methodology__text_two__technology methodology__text_two__blue'>Agile</h3>
						<h3 className='methodology__text_two__blue'>Scrum</h3>
						<h3 className='methodology__text_two__blue'>DevOps</h3>
						<h3 className='methodology__text_two__blue'>TDD (Test Driven Development)</h3>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Methodology
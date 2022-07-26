//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import HandRigth from '../../svg/Ecommerce/HandRigth'
import HandLeft from '../../svg/Ecommerce/HandLeft'
import Hands from '../../svg/Ecommerce/Hands'

/**
 * @author Iván Sánchez
 * @name Responsive
 * @description componente responsive de ecommerce
 */
const Responsive: NextPage = () => {

	const responsive = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: responsive.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		ScrollTrigger.matchMedia({

			'(min-width: 1200px)': function () {

				Tl
					.to('.responsive__container__section', { opacity: 0, duration: 1 }, '+=2')
					.to('.responsive__container__animation__hand_two', { left: '30%', opacity: 0, duration: 1 }, '-=1')
					.to('.responsive__container__animation__hand', { left: '70%', opacity: 0, duration: 1 }, '-=1')
					.to('.responsive__container__hands', { opacity: 1, duration: 1 }, '-=0')
					.to('.responsive__container__section_two', { opacity: 1, duration: 1 }, '-=0')

			},
			'(max-width: 1199px)': function () {

				Tl
					.to('.responsive__container__section', { opacity: 0, duration: 1 }, '+=2')
					.to('.responsive__container__hands', { opacity: 1, duration: 1 }, '-=0')
					.to('.responsive__container__section_two', { opacity: 1, duration: 1 }, '-=0')

			},
		})

	}, [])

	return (

		<div>

			<div className='responsive' ref={responsive}>

				<div className='responsive__container container'>

					<div className="responsive__container__animation">

						<div className='responsive__container__animation__hand'>
							<HandRigth/>
						</div>

						<div className='responsive__container__animation__hand_two'>
							<HandLeft/>
						</div>

					</div>

					<div className='responsive__container__section'>
						<p>Creamos tiendas en línea de fácil navegación, completamente <span> adaptables a dispositivos
							móviles y de escritorio, </span> las cuales se distinguen por estar enfocadas totalmente a la venta
							de tus productos mediante una magnífica experiencia de usuario.</p>
					</div>

					<div className='responsive__container__section_two'>
						<p>VAMOS DE LA MANO DE TU MARCA EN CADA ETAPA</p>
					</div>

					<div className='responsive__container__hands'>
						<Hands/>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Responsive
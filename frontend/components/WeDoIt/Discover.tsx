//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import Hand from '../../svg/WeDoIt/Hand'
import Button from '../../svg/WeDoIt/Button'
import TookOff from '../../svg/WeDoIt/TookOff'
import Objects from '../../svg/WeDoIt/Objects'

/**
 * @author Iván Sánchez
 * @name Discover
 * @description Animación de portada de consultoria
 */
const Discover: NextPage = () => {

	const discover = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: discover.current,
				markers: false,
				start: 'center center',
				end: '400%',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.discover__container__animation__hand', { top: '45%' }, '+=1')
			.to('.discover__container__animation__button', { opacity: '0' })
			.to('.discover__container__animation__hand', { opacity: '0' }, '+=1')
			.to('.discover__container__animation__take_off', { opacity: '1', })
			.to('.discover__container__animation__take_off', { opacity: '0', }, '+=3')
			.to('.discover__container__animation__objects', { opacity: '1' }, '+=1')

	}, [])

	return (

		<div>

			<div className='discover' ref={discover}>

				<div className='discover__container container'>

					<div className='discover__container__text'>

						<p className='discover__container__text__section'>CREAMOS MARCAS HERMOSAS Y SITIOS ÚNICOS QUE CONVIERTEN VISITANTES EN CLIENTES</p>
						<h3>Descubre Licorne® Startup Kings, una respuesta a las necesidades 
							de tu marca sin importar la etapa en que se encuentre, tenemos sede en CDMX y Miami. 
							Mira cómo nuestro equipo emplea soluciones de vanguardia en:<span> estrategias digitales, lean startup, diseño web, desarrollo de aplicaciones web, branding, 
							marketing digital, inbound marketing, tiendas online y WordPress.</span>
						</h3>    
						
					</div>

					<div className="discover__container__animation">

						<div className="discover__container__animation__hand">
							<Hand />
						</div>

						<div className="discover__container__animation__button">
							<Button />
						</div>

						<div className="discover__container__animation__take_off">
							<TookOff />
						</div>

						<div className="discover__container__animation__objects">
							<Objects />
						</div>

					</div>

				</div>

			</div> 

		</div>

	)

}

export default Discover
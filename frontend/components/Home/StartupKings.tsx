///* React components
import { useLayoutEffect } from 'react'
import React from "react";

//*Animation
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Text/Title'

/**
 * @author Maria Meza
 * @name StartKings
 * @description component StartupKing
 */

 const StartKings = () => {

	useLayoutEffect(() => {
		
		/**
		 * * @ANIMACIÓN_1
		 * * CARITA STARTUP KINGS
		*/
		const ANIMACION_STARTUP_KINGS = gsap.timeline({

			scrollTrigger: {
				trigger: '.startup_kings',
				markers: false,
				start: 'top top',
				end: '200%',
				scrub:true,
				pin: true,
			}
		})


		ScrollTrigger.matchMedia({
			'(max-width: 1200px)': function () {

				ANIMACION_STARTUP_KINGS
					.from('.startup_kings__animacion__ojo', { opacity: 0, duration: 1 })
					.from('.startup_kings__animacion__ojoGuiño', { opacity: 0, duration: 1 })
					.from('.startup_kings__animacion__boca', { opacity: 0, duration: 1 })
					.from('.startup_kings__animacion__corona', { opacity: 0, duration: 1 })
		
				},

			'(min-width: 1199px)': function () {
				ANIMACION_STARTUP_KINGS
				.from('.startup_kings__animacion__ojo', {top: '-200%', left: '-30%', opacity: '0', duration: 3 }, '+=1')
				.from('.startup_kings__animacion__ojoGuiño', { top: '-200%', left: '20%', opacity: '0', duration: 3 }, '+=2')
				.from('.startup_kings__animacion__boca', { top: '-200%', left: '35%', transform: 'rotate(0deg)', opacity: '0', duration: 3 }, '+=3')
				.from('.startup_kings__animacion__corona', { opacity: '0' , duration: 3 }, '+=1')	

			

			}

		})


	})

	return (
			
			<div className='startup_kings'>

				<div className='container'>

					<Titulo
						superior="Licorne"
						inferior="Startup Kings"
						alternativo="LA DIFERENCIA ENTRE"
						invertido={false}
					/>

					<div className='startup_kings__animacion'>
						<div className='startup_kings__animacion__corona'>
							<div className='startup_kings__animacion__corona__image_logo_corona'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/coronas.svg" alt="marketing" />
							</div>
						</div>
						<div className='startup_kings__animacion__ojo'>.</div>
						<div className='startup_kings__animacion__ojoGuiño'>.</div>
						<div className='startup_kings__animacion__boca'>.</div>
					</div>

					{/* <LinkPersonalizado
						url="/contacto"
						texto="¡QUIERO INICIAR!"
					/> */}

				</div>

			</div>	
		

	)
}

export default StartKings 
///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'

//*Animation
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/Title'

//*Image

import Queen from '../../svg/home/Queen'

/**
 * @author Maria Meza
 * @name StartKings
 * @description component StartupKing
 */

 const StartKings: NextPage = () => {

	const animacion = useRef(null)

	useEffect(() => {
		
		/**
		 * * @ANIMACIÓN_1
		 * * CARITA STARTUP KINGS
		*/
		const ANIMACION_STARTUP_KINGS = gsap.timeline({

			scrollTrigger: {
				trigger: animacion.current,
				markers: false,
				start: 'top top',
				end: '200%',
				scrub:true,
				pin: true,
			}
		})


			ScrollTrigger.matchMedia({

			//*responsive 

			'(min-width: 1200px)': function () {

				ANIMACION_STARTUP_KINGS
					.to('.startup_kings__animation__queen', { top: '-65%',opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye', {  top: '40%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye_wink', { top: '20%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__mouth', { top: '90%', opacity: 1, duration: 1 })
				},

			'(max-width: 1199px)': function () {

				ANIMACION_STARTUP_KINGS
					.to('.startup_kings__animation__queen', { top: '-25%',opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye', {  top: '60%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye_wink', { opacity: 1, duration: 1 })
					.to('.startup_kings__animation__mouth', { opacity: 1, duration: 1 })
				},
	

	
			})

		}, [])

	return (
			
			<div className='startup_kings' ref={animacion}>

				<div className='container'>

					<Titulo
						superior="Licorne"
						inferior="Startup Kings"
						alternativo="LA DIFERENCIA ENTRE"
						invertido={false}
					/>

					<div className='startup_kings__animation'>
						<div className='startup_kings__animation__queen'>
							<div className='startup_kings__animation__queen__image_logo_queen'>
								<Queen/>
							</div>
						</div>
						<div className='startup_kings__animation__eye'>.</div>
						<div className='startup_kings__animation__eye_wink'>.</div>
						<div className='startup_kings__animation__mouth'>.</div>
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
//* Next components
import { useEffect, useRef } from 'react'

//* React components
import type { NextPage } from 'next'

//* GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Queen from '../../svg/home/Queen'

/**
 * @author Maria Meza
 * @name StartKings
 * @description component StartupKing
 */

const StartKings: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			'(min-width: 1200px)': function () {

				const tl = gsap.timeline({

					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				tl
					.to('.startup_kings__animation__queen', { top: '-65%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye', { top: '40%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye_wink', { top: '20%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__mouth', { top: '90%', opacity: 1, duration: 1 })
			},

			'(max-width: 1199px)': function () {

				const tl = gsap.timeline({

					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				tl
					.to('.startup_kings__animation__queen', { top: '-45%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye', { top: '60%', opacity: 1, duration: 1 })
					.to('.startup_kings__animation__eye_wink', { opacity: 1, duration: 1 })
					.to('.startup_kings__animation__mouth', { opacity: 1, duration: 1 })
			},

		})

		return

	}, [])

	return (

		<div>

			<div className='startup_kings' ref={animation}>

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
								<Queen />
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

		</div>

	)
}

export default StartKings 
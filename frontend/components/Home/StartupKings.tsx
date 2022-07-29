//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* GSAP
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Queen from '../../svg/home/Queen'
import LicorneLink from '../Common/LicorneLink'

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
						title="Licorne"
						subtitle="Startup Kings"
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

					<LicorneLink 
						url='/saludanos'
						text='¡Quiero iniciar!'
					/>

				</div>

			</div>

		</div>

	)
}

export default StartKings 
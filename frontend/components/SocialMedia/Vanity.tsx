//* Next components
import type { NextPage } from 'next'

//* React Components
import { useEffect, useRef } from 'react'

//* Animations Components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/Title'

//* SVG
import Hand from '../../svg/SocialMedia/Hand'
import HandClosed from '../../svg/SocialMedia/HandClosed'
import Movement from '../../svg/SocialMedia/Movement'
import Hello from '../../svg/SocialMedia/Hello'
import Goodbye from '../../svg/SocialMedia/Goodbye'

/**
 * @author Iván Sánchez
 * @name Vanity
 * @description componente de Social Media
*/
const Vanity: NextPage = () => {

	const vanity = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: vanity.current,
				markers: false,
				start: 'center center',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.one', { opacity: 0, duration: 1 }, '+=2')
			.to('.two', { opacity: 1, duration: 1 })
			.to('.two', { opacity: 0, duration: 1 }, '+=2')
			.to('.three', { opacity: 1, duration: 1 })
			.to('.vanity', { background: 'linear-gradient(rgb(0, 226, 207), rgb(255, 223, 23))', duration: 1 }, '+=10')

	}, [])

	return (

		<div>

			<div className='vanity' ref={vanity}>

				<div className='vanity__container container'>

					<Titulo
						title="Olvídate de las vanity metrics y"
						subtitle="dile ¡hola! a las actionable metrics."
						alternativo=""
						invertido={false}
					/>

					<div className='vanity__container__section'>
						<p>Con Licorne® Startup Kings conocerás el verdadero social media marketing y tendrás una estrategia eficaz para conectar, interactuar y fidelizar con tu usuarios con base en métricas que permiten accionar y usar el poder de los datos a tu favor.</p>
					</div>

					<div className='vanity__container__animation'>

						<div className='vanity__container__animation__pack one'>
							<div className='vanity__container__animation__pack__hand'>
								<Hand />
							</div>
							<div className='vanity__container__animation__pack__movement'>
								<Movement />
							</div>
							<div className='vanity__container__animation__pack__text'>
								<Goodbye />
							</div>
						</div>

						<div className='vanity__container__animation__pack two'>
							<div className='vanity__container__animation__pack__hand_closed'>
								<HandClosed />
							</div>
						</div>

						<div className='vanity__container__animation__pack three'>
							<div className='vanity__container__animation__pack__hand'>
								<Hand />
							</div>
							<div className='vanity__container__animation__pack__movement'>
								<Movement />
							</div>
							<div className='vanity__container__animation__pack__text'>
								<Hello />
							</div>
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Vanity
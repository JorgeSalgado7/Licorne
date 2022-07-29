//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/Title'

//*SVG
import Head from '../../svg/History/Head'
import Dialog from '../../svg/History/Dialog'
import Glasses from '../../svg/History/Glasses'
import Blubbles from '../../svg/History/Bubbles'

/**
 * @author Iván Sánchez
 * @name Chapter09
 * @description Digitise
 */
const Chapter09: NextPage = () => {

	const chapter09 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl= gsap.timeline({  
			scrollTrigger: {
				trigger: chapter09.current,
				markers: false,
				start: 'center center',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_nine__container__animation__dialog', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_nine__container__animation__glasses', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_nine__container__animation__glasses', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_nine__container__animation__bubbles', { opacity: 1, duration: 1 }, '-=1')

	}, [])

	return (

		<div>

			<div className='chapter_nine' ref={chapter09}>

				<div className='chapter_nine__container container'>

					<Titulo
						superior="Capítulo"
						inferior="09"
						alternativo=""
						invertido={false}
					/>

					<div className='chapter_nine__container__animation'>

						<div className='chapter_nine__container__animation__head'>
							<Head />
						</div>

						<div className='chapter_nine__container__animation__dialog'>
							<Dialog />
						</div>

						<div className='chapter_nine__container__animation__glasses'>
							<Glasses />
						</div>

						<div className='chapter_nine__container__animation__bubbles'>
							<Blubbles />
						</div>

					</div>

					<div className='chapter_nine__container__section'>
						<p>Un evento sin precedentes en el mundo cambia la forma de trabajar, convivir, comprar y sobre todo, modifica la economía a nivel mundial. Este evento toma por sorpresa a muchas marcas, y es en este momento donde Licorne® se fortalece como una alternativa clara y sostenible para afrontar los retos de la digitalización a través de sus tres pilares: <strong>lean Startup, tecnología y marketing digital,</strong> especializándonos en Startup sin importar la etapa en la que se encuentre.</p>
					</div>

				</div>
				
			</div>

		</div>

	)

}

export default Chapter09
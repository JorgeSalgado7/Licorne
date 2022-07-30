//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/LicorneTitle'

//*SVG
import World from '../../svg/History/World'
import WordlTwo from '../../svg/History/WorldTwo'

/**
 * @author Iván Sánchez
 * @name Chapter07
 * @description Digitise
 */
const Chapter07: NextPage = () => {

	const chapter07 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: chapter07.current,
				markers: false,
				start: 'center center',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_seven__container__section', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_seven__container__animation__world', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_seven__container__animation__world', { opacity: 0, duration: 1 }, '+=2')
			.to('.chapter_seven__container__animation__world_two', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_seven__container__animation__point', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_two', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_three', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_four', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_five', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_six', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_seven', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__animation__point_eigth', { opacity: 1, duration: 1 })
			.to('.chapter_seven__container__section_two', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='chapter_seven' ref={chapter07}>

				<div className='chapter_seven__container container'>

					<Titulo
						superior="Capítulo"
						inferior="07"
						text=""
						alternative={false}
					/>

					<div className='chapter_seven__container__animation'>

						<div className='chapter_seven__container__animation__world'>
							<World />
						</div>

						<div className='chapter_seven__container__animation__world_two'>
							<WordlTwo />
						</div>

						<div className='chapter_seven__container__animation__point'></div>

						<div className='chapter_seven__container__animation__point_two'></div>

						<div className='chapter_seven__container__animation__point_three'></div>

						<div className='chapter_seven__container__animation__point_four'></div>

						<div className='chapter_seven__container__animation__point_five'></div>

						<div className='chapter_seven__container__animation__point_six'></div>

						<div className='chapter_seven__container__animation__point_seven'></div>

						<div className='chapter_seven__container__animation__point_eigth'></div>

					</div>

					<div className='chapter_seven__container__section'>
						<p>El crecimiento es constante y nuestros procesos internos y hacia el cliente mejoran. Adquirimos una agencia que nos permitió expandirnos en el mercado y sumar valor a nuestra propuesta ganadora, la fusión no es fácil pero en retrospectiva, el aprendizaje y fortalezas adquiridas superaron por mucho el trabajo y esfuerzo empleados en la fusión.</p>
					</div>

					<div className='chapter_seven__container__section_two'>
						<p><span>Nuestra base de clientes se expande a Europa, Centro y Sudamérica.</span></p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter07
//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import Character from '../../svg/WeDoIt/Character'
import CharacterTwo from '../../svg/WeDoIt/CharacterTwo'
import Graph from '../../svg/WeDoIt/Graph'
import Rise from '../../svg/WeDoIt/Rise'
import Streak from '../../svg/WeDoIt/Streak'

/**
 * @author Iván Sánchez
 * @name Maximize
 * @description Animación de portada de consultoria
 */
const Maximize: NextPage = () => {

	const maximize = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: maximize.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.maximize__container__animation__circle', { top: '70%', left: '50%' }, '-=1')
			.to('.maximize__container__animation__circle', { top: '50%', left: '60%' }, '+=1')
			.to('.maximize__container__animation__circle', { top: '70%', left: '70%' }, '+=1')
			.to('.maximize__container__animation__circle', { top: '45%', left: '80%' }, '+=1')
			.to('.maximize__container__animation__circle', { top: '55%', left: '85%' }, '+=1')
			.to('.maximize__container__animation__circle', { top: '0%', left: '85%', opacity:0 }, '+=1')
			.to('.maximize__container__animation__graph', { opacity: 0 }, '+=3')
			.to('.maximize__container__animation__rise', { opacity: 0 })
			.to('.maximize__container__animation__character', { opacity: 0 })
			.to('.maximize__container__section', { opacity: 0 })
			.to('.maximize__container__animation__character_two', { left: '100%', top: '100%' }, '-=1')
			.to('.maximize__container__animation__streak', { left: '0%', top: '113%' }, '-=1')
			.to('.maximize__container__section_two', { opacity: 1 })

	}, [])

	return (

		<div>

			<div className='maximize' ref={maximize}>

				<div className="maximize__container container">

					<div className="maximize__container__section">
						<p>IDENTIFICAMOS CANALES PARA POTENCIAR TU MOTOR DE CRECIMIENTO DIGITAL</p>
					</div>

					<div className="maximize__container__section_two">
						<p>TRABAJAMOS JUNTOS EN EL CRECIMIENTO DE TU COMPAÑIA</p>
					</div>

					<div className="maximize__container__animation">

						<div className="maximize__container__animation__graph">
							<Graph />
						</div>

						<div className="maximize__container__animation__character">
							<Character/>
						</div>

						<div className="maximize__container__animation__rise">
							<Rise />
						</div>

						<div className="maximize__container__animation__circle"></div>
						
						<div className="maximize__container__animation__character_two">
							<CharacterTwo />
						</div>

						<div className="maximize__container__animation__streak">
							<Streak />
						</div>

					</div>

				</div>  

			</div>

		</div>

	)

}

export default Maximize
//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*SVG
import Adn from '../../svg/History/Adn'

/**
 * @author Iván Sánchez
 * @name Chapter01
 * @description Digitise
 */
const Chapter01: NextPage = () => {

	const chapter01 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: chapter01.current,
				markers: false,
				start: 'top',
				end: '100%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_one__container__animation', { opacity: 1, duration: 1 }, '+=2')

	}, [])

	return (

		<div>

			<div className='chapter_one' ref={chapter01}>

				<div className='chapter_one__container container'>

					<Titulo
						superior="Capítulo"
						inferior="01"
						text=""
						alternative={false}
					/>

					<div className='chapter_one__container__animation'>
						<Adn />
					</div>

					<div className='chapter_one__container__section'>
						<p>En busca de <span>nuestro ADN</span> y para ofrecer un producto de calidad de acuerdo con la visión planteada de nuestros founders, reunimos un equipo de grandes mentes, con diferentes habilidades y <span>perfiles holísticos de distintas universidades, países y culturas.</span> Gente valiente y competitiva. Colocamos al centro de todo a nuestro cliente, sus metas, sus logros y su felicidad.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter01
//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//* SVG
import Character from '../../svg/Ecommerce/Character'
import Speaker from '../../svg/Ecommerce/Speaker'
import CharacterTwo from '../../svg/Ecommerce/CharacterTwo'

/**
 * @author Iván Sánchez
 * @name Workshop
 * @description componente workshop de ecommerce
 */
const Workshop: NextPage = () => {

	const workshop = useRef<HTMLDivElement>(null)

	useEffect(() => {
		
		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: workshop.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		ScrollTrigger.matchMedia({

			'(min-width: 1200px)': function () {

				Tl
					.to('.workshop__container__animation__character', { opacity: 0, duration: 1 }, '+=3')
					.to('.workshop__container__section', { top: '-50%', opacity: 0, duration: 1 }, '-=2')
					.to('.workshop__container__animation__speaker', { top: '-50%', opacity: 0, duration: 1 }, '-=2')
					.to('.workshop__container__section_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.workshop__container__animation__character_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.workshop', { background: 'linear-gradient(rgb(255, 223, 23),#64E24A)', duration: 1 }, '+=10')

			},
			'(max-width: 1199px)': function () {

				Tl
					.to('.workshop__container__animation__character', { top: '-50%', opacity: 0, duration: 1 }, '+=2')
					.to('.workshop__container__section', { top: '-50%', opacity: 0, duration: 1 }, '-=1')
					.to('.workshop__container__animation__speaker', { top: '-50%', opacity: 0, duration: 1 }, '-=1')
					.to('.workshop__container__section_two', { opacity: 1, duration: 1 }, '+=1')
					.to('.workshop__container__animation__character_two', { opacity: 1, duration: 1 }, '+=1')
					.to('.workshop', { background: 'linear-gradient(rgb(255, 223, 23),#64E24A)', duration: 1 }, '+=10')
			},

		})

	}, [])

	return (

		<div>

			<div className='workshop' ref={workshop}>

				<div className='workshop__container container'>

					<div className='workshop__container__section'>
						<p><span>WORKSHOPS & BRAINSTORMING: </span> ESCUCHAMOS TUS
							NECESIDADES PARA OFRECERTE LAS TECNOLOGIAS
							IDEALES PARA TI.</p>
					</div>

					<div className='workshop__container__section_two'>
						<p><span>SITE MAP & USER JOURNEYS: </span> PARTIMOS DE CONOCER A TUS CLIENTES
							POR MEDIO DE DATA PARA DARLES TIENDAS EN LÍNEA DE FÁCIL NAVEGACIÓN
							CON UN EXTRAORDINARIO DISEÑO.</p>
					</div>

					<div className='workshop__container__animation'>

						<div className='workshop__container__animation__character'>
							<Character />
						</div>

						<div className='workshop__container__animation__speaker'>

							<div className='workshop__container__animation__speaker__image'>
								<Speaker />
							</div>

							<div className='workshop__container__animation__speaker__cube'></div>

							<div className='workshop__container__animation__speaker__circle'></div>

							<div className='workshop__container__animation__speaker__triangle'></div>

						</div>

						<div className='workshop__container__animation__character_two'>
							<CharacterTwo />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Workshop
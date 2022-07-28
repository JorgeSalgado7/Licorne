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
import Dialog from '../../svg/WeDoIt/Dialog'
import DialogTwo from '../../svg/WeDoIt/DialogTwo'
import Pc from '../../svg/WeDoIt/Pc'

/**
 * @author Iván Sánchez
 * @name Consultancy
 * @description Animación de portada de consultoria
 */
const Consultancy: NextPage = () => {

	const consultancy = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: consultancy.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.consultancy__container__animation__dialog', { top: '-150%' }, '+=2')
			.to('.consultancy__container__animation__dialog_two', { top: '-150%' }, '-=1')
			.to('.consultancy__container__section', { opacity: 0 }, '-=1')
			.to('.consultancy__container__section_two', { opacity: 1 }, '-=1')
			.to('.consultancy__container__animation__pc', { opacity: 1 }, '-=1')
			.to('.consultancy__container__animation__circle', { top: '46%', width: '12%', height: '8%' })

	}, [])

	return (

		<div>

			<div className='consultancy' ref={consultancy}>

				<div className='consultancy__container container'>

					<div className="consultancy__container__section">
						<p>CONSULTORIA LEAN STARTUP, TE AYUDAMOS A DEFINIR EL PROBLEM SOLUTION FIT</p>
					</div>

					<div className="consultancy__container__section_two">
						<p>DESARROLLAMOS TU MVP</p>
					</div>

					<div className="consultancy__container__animation">

						<div className="consultancy__container__animation__character">
							<Character />
						</div>

						<div className="consultancy__container__animation__dialog">
							<Dialog />
						</div>

						<div className="consultancy__container__animation__dialog_two">
							<DialogTwo />
						</div>

						<div className="consultancy__container__animation__circle"></div>

						<div className="consultancy__container__animation__pc">
							<Pc />
						</div>

					</div>

				</div>

			</div> 

		</div>

	)

}

export default Consultancy
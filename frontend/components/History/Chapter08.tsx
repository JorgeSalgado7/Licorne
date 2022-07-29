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
import Eu from '../../svg/History/Eu'
import EuTwo from '../../svg/History/EuTwo'

//*SVG

/**
 * @author Iván Sánchez
 * @name Chapter08
 * @description Digitise
 */
const Chapter08: NextPage = () => {

	const chapter08 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl= gsap.timeline({  
			scrollTrigger: {
				trigger: chapter08.current,
				markers: false,
				start: 'center center',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_eigth__container__animation_one', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_eigth__container__animation_two', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_eigth__container__animation_ball', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='chapter_eigth' ref={chapter08}>

				<div className='chapter_eigth__container container'>

					<Titulo
						superior="Capítulo"
						inferior="08"
						alternativo=""
						invertido={false}
					/>

					<div className='chapter_eigth__container__animation'>

						<div className='chapter_eigth__container__animation_one'>
							<Eu />
						</div>

						<div className='chapter_eigth__container__animation_two'>
							<EuTwo />
						</div>

						<div className='chapter_eigth__container__animation_ball'></div>

					</div>

					<div className='chapter_eigth__container__section'>
						<p>Aunque ya trabajamos con marcas internacionales aún no contábamos con sede en otro país, por lo que decidimos <span>fortalecer y expandir nuestros recursos agregando una sede en Miami.</span> De igual forma, <span>realizamos un joint venture en México,</span> que nos ha permitido trabajar con más clientes en Europa además de EUA, llevando con orgullo la tecnología y estrategias de marketing digital desarrolladas en México a diferentes países.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter08
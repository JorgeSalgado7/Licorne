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
import Boom from '../../svg/History/Boom'
import Burst from '../../svg/History/Burst'

/**
 * @author Iván Sánchez
 * @name Chapter03
 * @description Digitise
 */
const Chapter03: NextPage = () => {

	const chapter03 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: chapter03.current,
				markers: false,
				start: 'center center',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_three__container__animation__boom', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_three__container__animation__burst', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='chapter_three' ref={chapter03}>

				<div className='chapter_three__container container'>

					<Titulo
						superior="Capítulo"
						inferior="03"
						alternativo=""
						invertido={false}
					/>

					<div className='chapter_three__container__animation'>

						<div className='chapter_three__container__animation__boom'>
							<Boom />
						</div>

						<div className='chapter_three__container__animation__burst'>
							<Burst />
						</div>

					</div>

					<div className='chapter_three__container__section'>
						<p>Licorne® está en crecimiento y contamos con grandes marcas y campañas importantes <span>¡cuándo de repente!</span> a mitad de año un suceso inesperado y panoramas sombríos nos dejan casi a punto de desaparecer, por lo cual, decidimos tomar medidas para afrontar esas dificultades a través de la tecnología y siendo disruptivos para bajar costos y subir beneficios al cliente. <span>¡Decisiones que nos valieron éxito!</span></p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter03
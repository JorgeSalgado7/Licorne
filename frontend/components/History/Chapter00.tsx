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
import Sing from '../../svg/History/Sing'
import Crown from '../../svg/History/Crown'

/**
 * @author Iván Sánchez
 * @name Chapter00
 * @description Digitise
 */
const Chapter00: NextPage = () => {

	const chapter00 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: chapter00.current,
				markers: false,
				start: 'top',
				end: 'bottom',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_zero__container__animation__mountain', { opacity: 0, duration: 1 }, '+=2')
			.to('.chapter_zero__container__animation__sing', { opacity: 0, duration: 1 }, '-=1')
			.to('.chapter_zero__container__animation__mountain_two', { transform: 'rotate(45deg)', top: '50%', left: '30%', duration: 1 })
			.to('.chapter_zero__container__animation__eye', { opacity: 1, duration: 1 })
			.to('.chapter_zero__container__animation__eye_two', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_zero__container__animation__crown', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='chapter_zero' ref={chapter00}>

				<div className='chapter_zero__container container'>

					<Titulo
						superior="Capítulo"
						inferior="00"
						text=""
						alternative={false}
					/>

					<div className='chapter_zero__container__section'>
						<p>Nuestros founders deciden poner en marcha una innovadora idea digital basada en metodologías de Silicon Valley. <span>¿Por qué? ¡Por qué no!</span> México es un mercado muy importante y sin duda, debe tener acceso a la innovación para competir a nivel mundial. ¡Y fue así como comienza la historia de <span>Licorne® Startup Kings!</span></p>
					</div>

					<div className='chapter_zero__container__animation'>

						<div className='chapter_zero__container__animation__mountain'></div>

						<div className='chapter_zero__container__animation__mountain_two'></div>

						<div className='chapter_zero__container__animation__eye'></div>

						<div className='chapter_zero__container__animation__eye_two'></div>

						<div className="chapter_zero__container__animation__sing">
							<Sing />
						</div>

						<div className='chapter_zero__container__animation__crown'>
							<Crown />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter00
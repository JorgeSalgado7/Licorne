//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/LicorneTitle'

//*SVG
import Google from '../../svg/History/Google'
import GOne from '../../svg/History/GOne'
import GTwo from '../../svg/History/Gtwo'
import GThree from '../../svg/History/GThree'

/**
 * @author Iván Sánchez
 * @name Chapter01
 * @description Digitise
 */
const Chapter02: NextPage = () => {

	const chapter02 = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: chapter02.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.chapter_two__container__animation__g__one', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_two__container__animation__g__two', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_two__container__animation__g__two', { opacity: 0, duration: 1 }, '+=1')
			.to('.chapter_two__container__animation__g__three', { opacity: 1, duration: 1 }, '-=1')
			.to('.chapter_two__container__animation__google', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (

		<div>

			<div className='chapter_two' ref={chapter02}>

				<div className='chapter_two__container container'>

					<Titulo
						superior="Capítulo"
						inferior="02"
						text=""
						alternative={false}
					/>

					<div className='chapter_two__container__animation'>

						<div className='chapter_two__container__animation__g'>

							<div className='chapter_two__container__animation__g__one'>
								<GOne />
							</div>

							<div className='chapter_two__container__animation__g__two'>
								<GTwo />
							</div>

							<div className='chapter_two__container__animation__g__three'>
								<GThree />
							</div>

						</div>

						<div className='chapter_two__container__animation__google'>
							<Google />
						</div>

					</div>

					<div className='chapter_two__container__section'>
						<p>Buscando nuestro <strong>product market fit</strong> y ocupados de poner a disposición del mercado todos los avances tecnológicos, metodologías y técnicas de vanguardia en el mundo digital, <span>nos integramos al programa Google Partners como socios estratégicos;</span> poniendo en manos de nuestros clientes el universo de soluciones que ofrece Google, siempre acompañado de hermosos sitios web que han vestido y dado vida a muchas marcas.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter02
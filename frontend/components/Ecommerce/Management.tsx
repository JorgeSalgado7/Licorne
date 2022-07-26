//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import PcTwo from '../../svg/Ecommerce/PcTwo'
import PcThree from '../../svg/Ecommerce/PcThree'
import CharacterThree from '../../svg/Ecommerce/CharacterThree'

/**
 * @author Iván Sánchez
 * @name Management
 * @description componente responsive de ecommerce
 */
const Management: NextPage = () => {

	const management = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: management.current,
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
					.to('.management__container__section', { top: '-50%', opacity: 0, duration: 1 }, '+=3')
					.to('.management__container__animation__pc', { top: '-50%', opacity: 0, duration: 1 }, '-=1')
					.to('.management__container__section_two', { opacity: 1, duration: 1 }, '+=1')
					.to('.management__container__animation__pc_two', { top: '100%', opacity: 1, duration: 1 }, '+=1')
			},
			'(max-width: 1199px)': function () {

				Tl
					.to('.management__container__section', { top: '-50%', opacity: 0, duration: 1 }, '+=3')
					.to('.management__container__animation__pc', { top: '-50%', opacity: 0, duration: 1 }, '-=1')
					.from('.management__container__section_two', { opacity: 0, duration: 1 }, '+=1')
					.from('.management__container__animation__pc_two', { top: '150%', opacity: 1, duration: 1 }, '-=0')
					.to('.management__container__section_two', { opacity: 1, duration: 1 }, '+=3')

			},
		})

	}, [])

	return (

		<div>

			<div className='management' ref={management}>

				<div className='management__container container'>

					<div className='management__container__section'>
						<p><span>ADMINISTRACIÓN Y SOPORTE: </span> PROPORCIONAN EL CORRECTO FUNCIONAMIENTO E
								INCORPORACIÓN DE NUEVAS TECNOLOGÍAS O ACTUALIZACIONES.</p>
					</div>

					<div className='management__container__section_two'>
						<p><span>OPTIMIZACIÓN: </span> GARANTIZA EL DESEMPEÑO CON DIAGNÓSTICOS SEO.</p>
					</div>

					<div className='management__container__animation'>

						<div className='management__container__animation__character_three'>
							<CharacterThree />
						</div>

						<div className='management__container__animation__pc'>
							<PcTwo />
						</div>

						<div className='management__container__animation__pc_two'>
							<PcThree />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Management
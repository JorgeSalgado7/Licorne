//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//* SVG
import Stereo from '../../svg/Ecommerce/Stereo'
import CharacterThree from '../../svg/Ecommerce/CharacterThree'
import Pc from '../../svg/Ecommerce/Pc'
import Leave from '../../svg/Ecommerce/Leave'

/**
 * @author Iván Sánchez
 * @name Wireframing
 * @description componente workshop de ecommerce
 */
const Wireframing: NextPage = () => {

	const wireframing = useRef<HTMLDivElement>(null)

	useEffect(() => {
		
		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: wireframing.current,
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
					.to('.wireframing__container__section', { top: '-100%', opacity: 0, duration: 1 }, '+=1')
					.to('.wireframing__container__section_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.wireframing__container__animation__stereo', { top: '0%', opacity: 0, duration: 1 }, '+=1')
					.from('.wireframing__container__animation__pc', { top: '100%', opacity: 0, duration: 1 }, '+=1')
					.to('.wireframing__container__animation__leave', { top: '85%', opacity: 1, duration: 1 }, '+=1')
					.to('.wireframing', { background: 'linear-gradient(#64E24A,rgb(0, 226, 207))', duration: 1 }, '+=10')
			},
			'(max-width: 1199px)': function () {

				Tl
					.to('.wireframing__container__section', { top: '-100%', opacity: 0, duration: 1 }, '+=1')
					.to('.wireframing__container__section_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.wireframing__container__animation__stereo', { top: '0%', opacity: 0, duration: 1 }, '+=1')
					.from('.wireframing__container__animation__pc', { top: '100%', opacity: 0, duration: 1 }, '+=1')
					// .from('.wireframing__container__animation__leave', { top: '100%', opacity: 0, duration: 1 }, '+=1')
					.to('.wireframing', { background: 'linear-gradient(#64E24A,rgb(0, 226, 207))', duration: 1 }, '+=10')
			},

		})

	}, [])

	return (

		<div>

			<div className='wireframing' ref={wireframing}>

				<div className='wireframing__container container'>

					<div className='wireframing__container__section'>
						<p><span>WIREFRAMING & UX DESIGN: </span> TRABAJAMOS EN INNOVADORAS PROPUESTAS
							QUE DAN PODER A LA EXPERIENCIA DE USUARIO Y PRIORIZAN LA VENTA DE TUS PRODUCTOS.</p>
					</div>

					<div className='wireframing__container__section_two'>
						<p><span>FRONT END & UI DESIGN: </span> IMPLEMENTAMOS IDEAS PARA QUE VEAS Y SIENTAS TUS
							PRODUCTOS COMO LOS IMAGINASTE.</p>
					</div>

					<div className='wireframing__container__animation'>

						<div className='wireframing__container__animation__stereo'>
							<Stereo />
						</div>

						<div className='wireframing__container__animation__character_three'>
							<CharacterThree />
						</div>

						<div className='wireframing__container__animation__pc'>
							<Pc />
						</div>

						<div className='wireframing__container__animation__leave'>
							<Leave />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Wireframing
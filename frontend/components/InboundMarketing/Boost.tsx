//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animation components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import Decor from '../../svg/InboundMarketing/Decor'
import BoostI from '../../svg/InboundMarketing/BoostI'

/**
 * @author Iván Sánchez
 * @name Boost
 * @description Portada de Inboun Marketing
 */
const Boost: NextPage = () => {

	const boost = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: boost.current,
				markers: false,
				start: 'top',
				end: '150%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.boost__container__section', { top: '-100%', duration: 1 }, '+=2')
			.to('.boost__container__group', { top: '-300%', duration: 1 })
			.to('.boost__container__section_two', { opacity: 1, duration: 1 })
			.to('.boost__container__image', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='boost' ref={boost}>

				<div className='boost__container container'>

					<div className='boost__container__section'>
						<p>Antes de hacerlo debes de <span> conquistarlos y enamorarlos con tu
							producto </span> y para ello ¡nada mejor que el inbound <span> marketing fit! </span> 
						</p>
					</div>

					<div className='boost__container__section_two'>
						<p>¡Dale a tu marca un boost digital!</p>
					</div>

					<div className='boost__container__group'>

						<div className='boost__container__group__decor'>
							<Decor />
						</div>

						<div className='boost__container__group__animation'>
							<div className='boost__container__group__animation__eye'></div>
							<div className='boost__container__group__animation__eye_two'></div>
							<div className='boost__container__group__animation__mouth'></div>
						</div>

					</div>

					<div className='boost__container__image'>
						<BoostI />	
					</div>

				</div>

			</div>

		</div>

	)

}

export default Boost
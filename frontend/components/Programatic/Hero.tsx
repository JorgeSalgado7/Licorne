//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'
import RightHand from '../../svg/Programatic/RightHand'
import LeftHand from '../../svg/Programatic/LeftHand'
import Robot from '../../svg/Programatic/Robot'
import Face from '../../svg/Programatic/Face'
import RightKey from '../../svg/Programatic/RightKey'
import LeftKey from '../../svg/Programatic/LeftKey'
import Money from '../../svg/Programatic/Money'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Programatic
 */

const Hero: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)
	
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})
		
		tl
			.to('.hero_programatic_animation__face', { opacity: 0, duration: 1 }, '+=1')
			.to('.hero_programatic_animation__right_key', { opacity: 1, duration: 1 })
			.to('.hero_programatic_animation__left_key', { opacity: 1, duration: 1 }, '-=1')
			.to('.hero_programatic_animation__right_hand', { transform: 'scaleY(-1)', left: '80%', duration: 1 })
			.to('.hero_programatic_animation__right_key', { left: '65%', duration: 1 })
			.to('.hero_programatic_animation__left_key', { left: '35%', duration: 1 }, '-=1')
			.to('.hero_programatic_animation__left_hand', { transform: 'scaleY(-1)', duration: 1 })
			.to('.hero_programatic_animation__right_hand', { transform: 'scaleY(1)', top: '30%', duration: 1 })
			.to('.hero_programatic_animation__dolar', { opacity: 1, duration: 1 })

	}, [])

	return (
		<div>
			<div className='hero_programatic' ref={animation}>
				<div className='container'>
					<Titulo
						alternativo="CONSOLIDAMOS COMPAÑÍAS MEDIANTE"
						superior="Programamos la mente"
						inferior="del usuario en la venta de tu producto"
						invertido={false}
					/>
					<div className='hero_programatic_animation'>
						<div className='hero_programatic_animation__right_hand'>

							<RightHand/>

						</div>
						<div className='hero_programatic_animation__left_hand'>

							<LeftHand/>

						</div>
						<div className='hero_programatic_animation___robot'>

							<Robot/>

						</div>
						<div className='hero_programatic_animation__face'>

							<Face/>

						</div>
						<div className='hero_programatic_animation__right_key'>

							<RightKey/>

						</div>
						<div className='hero_programatic_animation__left_key'>

							<LeftKey/>

						</div>
						<div className='hero_programatic_animation__dolar'>

							<Money/>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Hero
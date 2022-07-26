//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Phone from '../../svg/Maintenance/Phone'
import Pc from '../../svg/Maintenance/Pc'
import Tablet from '../../svg/Maintenance/Tablet'

/**
 * @author Maria Meza
 * @name Updtae
 * @description Portada Web
 */

const Update: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation=useRef(null)
	
	useEffect(() => {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})
		tl
			.to('.update__container__animation__pc', { opacity: 1 }, '+=1')
			.to('.update__container__animation__tableta', { opacity: 1 }, '+=1')
			.to('.update__container__animation__phone', { opacity: 1 }, '+=1')

	}, [])

	return (
		<div>
			<div className='update' ref={animation}>
				<div className='container'>
					<div className='update__container'>
						<div className='update__container__text'>
							<p>Tu ecommerce, app o sitio web son entes vivos. Mantenerlos actualizados y libres de errores permitirá que se obtengan los máximos beneficios en competitividad, marketing, ventas y posicionamiento de marca.</p>
						</div>
						<div className='update__container__animation'>

							<div className="update__container__animation__phone">
								<Phone/>
							</div>

							<div className="update__container__animation__pc">
								<Pc/>
							</div>
							<div className="update__container__animation__tableta">
								<Tablet/>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Update
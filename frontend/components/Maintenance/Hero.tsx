//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'

//*Image
import Crosses from '../../svg/Maintenance/Crosses'
import Hand from '../../svg/Maintenance/Hand'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Web
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
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		tl
			.to('.imgMano', { top: '60%' }, '+=2')
			.to('.imgMano', { top: '0%' }, '+=2')
			.to('.imgMano', { top: '60%' }, '+=2')

	}, [])

	return (
		<div>
			<div className='hero_mantenance' ref={animation}>

				<div className='container'>

					<div className='hero_mantenance__container'>

						<Titulo
							alternativo=""
							superior="Más vivos"
							inferior="que nunca"
							invertido={false}
						/>

						<div className='hero_mantenance__container__animacionPortada'>
							<div className='hero_mantenance__container__animacionPortada__cruces'>
								<Crosses/>

							</div>

							<div className='hero_mantenance__container__animacionPortada__mano'>
								
								<Image
									className="imgMano"
									src="https://licorne-web.s3.us-east-2.amazonaws.com/mantenimiento/mano.png"
									layout='responsive'
									width='190px'
									height='300px'
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Hero
///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'

//*Image
import Phone from '../../svg/App/Phone'
import PhoneOne from '../../svg/App/PhoneOne'
import PhoneTwo from '../../svg/App/PhoneTwo'
import PhoneThree from '../../svg/App/PhoneThree'
import PhoneFour from '../../svg/App/PhoneFour'
import PhoneFive from '../../svg/App/PhoneFive'
import Hand from '../../svg/home/Hand'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada App
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
			.to('.hero_app__animation__one', { opacity: 1, duration: 1 }, '+=2')
			.to('.hero_app__animation__one', { opacity: 0, duration: 1 }, '+=2')
			.to('.hero_app__animation__two', { opacity: 1, duration: 3 }, '+=2')
			.to('.hero_app__animation__two', { opacity: 0, duration: 3 }, '+=1')
			.to('.hero_app__animation__three', { opacity: 1, duration: 4 }, '+=2')
			.to('.hero_app__animation__three', { opacity: 0, duration: 4 }, '+=2')
			.to('.hero_app__animation__four', { opacity: 1, duration: 4 }, '+=2')
			.to('.hero_app__animation__four', { opacity: 0, duration: 4 }, '+=2')
			.to('.hero_app__animation__five', { opacity: 1, duration: 4 }, '+=2')

	}, [])

	return (
		<div>
			<div className='hero_app' ref={animation}>

				<div className='container'>

					<Titulo
						text=""
						title="Convertimos tu sueño en"
						subtitle="una app"
						alternative={false}
					/>
					{/**PORTADA */}
					<div className='hero_app__animation'>
						{/**CELL */}
						<div className='hero_app__animation__phone'>
							<Phone />
						</div>

						<div className='hero_app__animation__one'>
							<PhoneOne />
						</div>

						<div className='hero_app__animation__two'>
							<PhoneTwo />
						</div>

						<div className='hero_app__animation__three'>
							<PhoneThree />
						</div>

						<div className='hero_app__animation__four'>
							<PhoneFour />
						</div>

						<div className='hero_app__animation__five'>
							<PhoneFive />
						</div>

						{/**Mano */}
						<div className='hero_app__animation__hand'>
							<Hand />
						</div>

					</div>

				</div>

			</div>
		</div>

	)
}

export default Hero
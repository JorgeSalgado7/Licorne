//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animation components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/LicorneTitle'

//* SVG
import CoinSix from '../../svg/SocialMedia/CoinSix'
import Pop from '../../svg/SocialMedia/Pop'
import Heart from '../../svg/SocialMedia/Heart'
import Person from '../../svg/SocialMedia/Person'

/**
 * @author Iván Sánchez
 * @name Content
 * @description componente de Social Media
*/
const Content: NextPage = () => {

	const content = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: content.current,
				markers: false,
				start: 'center center',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.content__container__animation__image_heart', { opacity: 0, duration: 1 }, '+=2')
			.to('.content__container__animation__image_coin', { opacity: 1, duration: 1 })
			.to('.content__container__animation__image_coin', { opacity: 0, duration: 1 }, '+=2')
			.to('.content__container__animation__image_person', { opacity: 1, duration: 1 })
			.to('.content__container__animation__image_person', { top: '200%', duration: 1 }, '+=1')

	}, [])

	return (

		<div>

			<div className='content' ref={content}>

				<div className='content__container container'>

					<Titulo
						title="Content Marketing"
						subtitle=""
						text=""
						alternative={false}
					/>

					<div className='content__container__section'>
						<p>Diseñamos tus parrillas mensuales con contenido relevante que te posiciona en la mente de tu público objetivo, transformando seguidores en ventas y ventas en clientes. </p>
					</div>

					<div className='content__container__animation'>

						<div className='content__container__animation__image_pop'>
							<Pop />
						</div>

						<div className='content__container__animation__image_person'>
							<Person />
						</div>

						<div className='content__container__animation__image_heart'>
							<Heart />
						</div>

						<div className='content__container__animation__image_coin'>
							<CoinSix />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Content
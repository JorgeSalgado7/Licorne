//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'
import Magnetic from '../../svg/SocialAds/Magnetic'
import Lightning from '../../svg/SocialAds/Lightning '
import Lightning2 from '../../svg/SocialAds/Lightning2'
import Heart from '../../svg/SocialAds/Heart'
import Brain from '../../svg/SocialAds/Braind'

//*Image

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Social-Ads
 */

const Hero: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			'(max-width: 1200px)': function () {

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
					.to('.hero_social_ads__contenedor__animation__one', { opacity: 1, duration: 1 })
					.to('.hero_social_ads__contenedor__animation__two', { opacity: 1, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__brain', { top: '80%', duration: 1 })
					.to('.hero_social_ads__contenedor__animation__heart', { top: '20%', duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__one', { opacity: 0, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__two', { opacity: 0, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__magnet', { width: '5%', opacity: 0, duration: 1 }, '+=1')
					.to('.hero_social_ads__contenedor__animation__brain', { opacity: 0, duration: 1 })
					.to('.hero_social_ads__contenedor__animation__heart', { opacity: 0, duration: 1 }, '-=1')
					.to('.title', { opacity: 1, duration: 1 })
					.to('.hero_social_ads__contenedor__animation_two', { opacity: 1, duration: 1 })

			},
			'(min-width: 1199px)': function () {

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: '.hero_social_ads',
						markers: false,
						start: 'top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				tl
					.to('.hero_social_ads__contenedor__animation__one', { opacity: 1, duration: 1 })
					.to('.hero_social_ads__contenedor__animation__two', { opacity: 1, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__brain', { left: '0%', duration: 1 })
					.to('.hero_social_ads__contenedor__animation__heart', { left: '100%', duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__one', { opacity: 0, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__two', { opacity: 0, duration: 1 }, '-=1')
					.to('.hero_social_ads__contenedor__animation__magnet', { width: '5%', opacity: 0, duration: 1 }, '+=1')
					.to('.hero_social_ads__contenedor__animation__brain', { opacity: 0, duration: 1 })
					.to('.hero_social_ads__contenedor__animation__heart', { opacity: 0, duration: 1 }, '-=1')
					.to('.title', { opacity: 1, duration: 1 })
					.to('.hero_social_ads__contenedor__animation_two', { opacity: 1, duration: 1 })

			},

		})

	}, [])

	return (
		<div>
			<div className='hero_social_ads' ref={animation}>
				<div className='container'>
					<div className='hero_social_ads__contenedor'>

						<Titulo
							text="CREAMOS Y GESTIONAMOS"
							title="campañas que atraen,"
							subtitle="conectan y fidelizan clientes"
							alternative={false}
						/>

						<div className='hero_social_ads__contenedor__animation'>
							<div className='hero_social_ads__contenedor__animation__magnet'>
								<Magnetic />
							</div>
							<div className='hero_social_ads__contenedor__animation__one'>
								<Lightning />
							</div>
							<div className='hero_social_ads__contenedor__animation__two'>
								<Lightning2 />
							</div>
							<div className='hero_social_ads__contenedor__animation__heart'>
								<Heart />
							</div>
							<div className='hero_social_ads__contenedor__animation__brain'>
								<Brain />
							</div>
						</div>

						<div className='hero_social_ads__contenedor__animation_two'>
							<div className='hero_social_ads__contenedor__animation_two__heart_two'>
								<Heart />
							</div>
							<div className='hero_social_ads__contenedor__animation_two__brain_two'>
								<Brain />
							</div>
						</div>

					</div>
				</div>

			</div>
		</div>

	)
}

export default Hero
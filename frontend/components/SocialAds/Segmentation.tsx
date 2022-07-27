//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Queen from '../../svg/SocialAds/Queen'

//*Image

/**
 * @author Maria Meza
 * @name Segmentation
 * @description Segmentation Social-Ads
 */

const Segmentation: NextPage = () => {
	
	gsap.registerPlugin(ScrollTrigger)
	const animation =useRef(null)
	
	useEffect(() => {

		const ANIMACION_SEGMENTACION = gsap.timeline({  
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		ANIMACION_SEGMENTACION
			.to('.segmentation__container__animation__eight', { opacity: 0, duration: 1 })
			.to('.segmentation__container__animation__seven', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__seven', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__six', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__six', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__five', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__five', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__four', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__four', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__three', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__three', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__two', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation__two', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__animation__one', { opacity: 1, duration: 1 }, '-=1')
			.to('.segmentation__container__animation', { opacity: 0, duration: 1 }, '+=1')
			.to('.segmentation__container__queen', { opacity: 1, duration: 1 }, '+=3')

	}, [])

	return (
		<div>
			<div className='segmentation' ref={animation}>
				<div className='container'>
					<div className='segmentation__container'>

						<div className='segmentation__container__animation'>
							<img className='segmentation__container__animation__one' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/uno.png" alt="" />
							<img className='segmentation__container__animation__two' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/dos.png" alt="" />
							<img className='segmentation__container__animation__three' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/tres.png" alt="" />
							<img className='segmentation__container__animation__four' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/cuatro.png" alt="" />
							<img className='segmentation__container__animation__five' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/cinco.png" alt="" />
							<img className='segmentation__container__animation__six' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/seis.png" alt="" />
							<img className='segmentation__container__animation__seven' src="https://licorne-web.s3.us-east-2.amazonaws.com/social-ads/siete.png" alt="" />
							<img className='segmentation__container__animation__eight' src="https://licorne-web.s3.us-east-2.amazonaws.com/social- ads/ocho.png" alt="" />
						</div>  

						<div className='segmentation__container__queen'>
							<Queen/>
						</div>

						<div className='segmentation__container__text'>
							<p>¡No dejamos <span> nada a la suerte, </span> somos los reyes de la segmentación! </p>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Segmentation
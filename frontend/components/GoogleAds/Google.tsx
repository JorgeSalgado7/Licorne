//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//*Animation 
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Face from '../../svg/Google/Face'
import FaceTwo from '../../svg/Google/FaceTwo'
import Wallet from '../../svg/Google/Wallet-image'
import GoogleAds from '../../svg/Google/GoogleAds'
import Search from '../../svg/Google/Search'

/**
 * @author Maria Meza
 * @name Google
 * @description Google Google-Ads
 */

const Google: NextPage = () => {
	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			'(min-width: 1200px)': function(){

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top',
						end: '100%',
						scrub: true,
						pin: true
					}
				})

				tl
					.to('.google__container__textGoogle', { top:'70%', duration: 1 }, '-=1')
					.to('.google__container__animation', { top:'45%', duration: 1 }, '-=1')
					.to('.google__container__textTwoGoogle', { top:'25%', duration: 1 }, '-=1')
					.to('.google__container__image', { top:'40%', duration: 1 }, '-=1')
					.to('.google__container__animation__search1', { top: '10%', duration: 1 })
					.to('.google__container__animation__search', { opacity: 1, duration: 1 })
                
			},
		})

	}, [])

	return (
		<div>
			<div className='google' ref={animation}>
				<div className='container'>
					<div className='google__container'>
						<div className="google__container__textGoogle">
							<p>Muéstrate en <span>lo más alto del buscador de Google</span> con anuncios atractivos que lograrán destacarte entre cientos de competidores.</p>
						</div>
						<div className='google__container__animation'>
							<div className='google__container__animation__search1'>							
								<GoogleAds/>                   
							</div>
							<div className='google__container__animation__search'>
								<Search/>
                                
							</div>
						</div>
						<div className='google__container__textTwoGoogle'>
							<p><span>Crece tus prospectos y tu cartera de clientes</span> a través de estrategías de marketing digital personalizadas que consiguen leads en el corto plazo.</p>
						</div>
						<div className="google__container__image">
							<div className="google__container__image__face">
								<div className="google__container__image__face__img">
									<Face/>
								</div>
								<div className="google__container__image__face__img2">
									<FaceTwo/>
								</div>
								<div className="google__container__image__face__img3">
									<FaceTwo/>
								</div>
								<div className="google__container__image__face__img4">
									<Face/>
								</div>
							</div>
							<div className="google__container__image__well">
								<Wallet/>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Google
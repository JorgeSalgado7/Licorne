//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'

//*Image
import Face from '../../svg/MisionVision/Face'
import Head from '../../svg/MisionVision/Head'
import Speaker from '../../svg/MisionVision/Speaker'
import Pc from '../../svg/MisionVision/Pc'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Mision y vision
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
				end: 'center',
				scrub: true,
				pin: true
			}
		})

		tl
			.to('.hero_mision', { background:'linear-gradient(rgb(0, 226, 207),rgb(255, 223, 23))' }, '+=5')
			.to('.hero_mision__animation__head', { top:'-150%', opacity: 0, duration: 1 }, '-=1')
			.to('.hero_mision__animation__pc', { left:'-600%', duration: 5 }, '+=2')
			.to('.hero_mision', { background:'linear-gradient(rgb(255, 223, 23),rgb(0, 226, 207))' }, '+=3')
			.to('.hero_mision__animation__pc', { top:'-250%', opacity: 0, duration: 5 }, '+=2')
			.to('.hero_mision__animation__speaker', { left:'-500%', duration: 7 }, '+=1')

	}, [])

	return (
		<div>
			<div className='hero_mision' ref={animation}>
				
				<div className='container'>

					<Titulo 
						alternativo="CONSOLIDAMOS COMPAÑÍAS MEDIANTE"
						superior="Lean Startup, tecnología" 
						inferior="y marketing digital"
						invertido={false}
					/>

					<div className='hero_mision__animation'>
						<div className='hero_mision__animation__face'>
			
							<Face/>
			
						</div>
						<div className='hero_mision__animation__head'>

							<Head/>
			
						</div>
						<div className='hero_mision__animation__speaker'>

							<Speaker/>
			
						</div>
						<div className='hero_mision__animation__pc'>

							<Pc/>
			
						</div>
					</div>
				</div>
			</div>
		
		</div>

	)
}

export default Hero
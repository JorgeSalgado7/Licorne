//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import PeopleOne from '../../svg/Programatic/PeopleOne'
import Bandaged from '../../svg/Programatic/Bandeged'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Programatic
 */

const Traditional: NextPage = () => {

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
			.to('.traditional__container__animation__row__column__people_one', { opacity: 0, duration: 1 }, '+=1')
			.to('.bandaged_one', { opacity: 1, duration: 1 })
			.to('.traditional__container__animation__row__column__people_two', { opacity: 0, duration: 1 }, '+=1')
			.to('.bandaged_two', { opacity: 1, duration: 1 })
			.to('.traditional__container__animation__row__column__people_three', { opacity: 0, duration: 1 }, '+=1')
			.to('.bandaged_three', { opacity: 1, duration: 1 })
			.to('.traditional__container__animation__row__column__people_four', { opacity: 0, duration: 1 }, '+=1')
			.to('.bandaged_four', { opacity: 1, duration: 1 })
	}, [])

	return (
		<div>
			<div className='traditional' ref={animation}>
				<div className='container'>
					<div className='traditional__container'>
						<div className='traditional__container__text'>
							<p>3 de cada 4 personas <span> ignoran </span> por completo <span> la publicidad </span> digital <span> tradicional... </span></p>
						</div>
						<div className='traditional__container__animation'>
							<div className='traditional__container__animation__row'>
								<div className='traditional__container__animation__row__column'>
									<div className="traditional__container__animation__row__column__people_one">

										<PeopleOne/>

									</div>

									<div className="traditional__container__animation__row__column__people_one traditional__container__animation__row__column__bandaged bandaged_one">

										<Bandaged/>

									</div>

								</div>
								<div className='traditional__container__animation__row__column'>

									<div className="traditional__container__animation__row__column__people_two">

										<PeopleOne/>

									</div>

									<div className="traditional__container__animation__row__column__people_two traditional__container__animation__row__column__bandaged bandaged_two">

										<Bandaged/>

									</div>

								</div>
							</div>
							<div className='traditional__container__animation__row'>
								<div className='traditional__container__animation__row__column'>
									<div className="traditional__container__animation__row__column__people_three">

										<PeopleOne/>

									</div>

									<div className="traditional__container__animation__row__column__people_three traditional__container__animation__row__column__bandaged bandaged_three">

										<Bandaged/>

									</div>

								</div>
								<div className='traditional__container__animation__row__column'>

									<div className="traditional__container__animation__row__column__people_four">

										<PeopleOne/>

									</div>

									<div className="traditional__container__animation__row__column__people_four traditional__container__animation__row__column__bandaged bandaged_four">

										<Bandaged/>

									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Traditional
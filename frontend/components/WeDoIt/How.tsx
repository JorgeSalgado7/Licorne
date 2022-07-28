//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import Idea from '../../svg/WeDoIt/Idea'
import Arrow from '../../svg/WeDoIt/Arrow'
import Check from '../../svg/WeDoIt/Check'
import ArrowTwo from '../../svg/WeDoIt/ArrowTwo'
import ArrowThree from '../../svg/WeDoIt/ArrowThree'
import ArrowFour from '../../svg/WeDoIt/ArrowFour'

/**
 * @author Iván Sánchez
 * @name How
 * @description Animación de portada de consultoria
 */
const How: NextPage = () => {

	const how = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: how.current,
				markers: false,
				start: 'top',
				end: '500%',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.how__container__animation__idea', { top: '-300%' })
			.to('.how__container__animation__eye', { top: '-200%', left: '-300%' })
			.to('.how__container__animation__eye_two', { top: '-200%', left: '300%' })
			.to('.how__container__animation__mouth', { opacity: 0, top: '300%' })
			.to('.how', { background: 'rgb(255, 223, 23)' })
			.to('.arrow_1', { opacity: 1, }, '+=2')
			.to('.check_1', { opacity: 1 })
			.to('.arrow_2', { opacity: 1, })
			.to('.check_2', { opacity: 1, })
			.to('.arrow_3', { opacity: 1, })
			.to('.check_3', { opacity: 1, })
			.to('.arrow_4', { opacity: 1, })
			.to('.check_4', { opacity: 1, })
			.to('.arrow_5', { opacity: 1, })

	}, [])

	return (

		<div>

			<div className='how' ref={how}>

				<div className='how__container container'>
					
					<div className='how__container__title'>

						<p className='how__container__title__section'>LICORNE® STARTUPS KINGS 👑</p>

						<h1 className='how__container__title__big'>¿Cómo lo <span>hacemos?</span></h1>

					</div>
					
					<div className='how__container__animation'>

						<div className='how__container__animation__eye'></div>

						<div className='how__container__animation__eye_two'></div>

						<div className='how__container__animation__mouth'></div>

						<div className='how__container__animation__idea'>
							<Idea />
						</div>

					</div>

					<div className="how__container__animation_two">

						<div className='how__container__animation_two__arrow arrow_1'>
							<Arrow />
						</div>

						<div className='how__container__animation_two__check check_1'>
							<Check />
						</div>

						<div className='how__container__animation_two__arrow arrow_2'>
							<ArrowTwo />
						</div>

						<div className='how__container__animation_two__check check_2'>
							<Check />
						</div>

						<div className='how__container__animation_two__arrow arrow_3'>
							<ArrowThree />
						</div>

						<div className='how__container__animation_two__check check_3'>
							<Check />
						</div>

						<div className='how__container__animation_two__arrow arrow_4'>
							<ArrowTwo />
						</div>

						<div className='how__container__animation_two__check check_4'>
							<Check />
						</div>

						<div className='how__container__animation_two__arrow arrow_5'>
							<ArrowFour />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default How
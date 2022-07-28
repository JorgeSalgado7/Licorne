//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* SVG
import PlantOne from '../../svg/LeanStartup/PlantOne'
import PlantTwo from '../../svg/LeanStartup/PlantTwo'
import PlantThree from '../../svg/LeanStartup/PlantThree'
import PlantFour from '../../svg/LeanStartup/PlantFour'
import PlantFive from '../../svg/LeanStartup/PlantFive'

//* Animations components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

/**
 * @author Iván Sánchez
 * @name SeedAnimation
 * @description Animacion de etapas de una semilla
 */
const SeedAnimation: NextPage = () => {

	const seed = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const SEED_ANIMATION = gsap.timeline({
			scrollTrigger: {
				trigger: seed.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		SEED_ANIMATION
			.to('.seed__container__animation__one', { opacity: 0, duration: 1 }, '+=1')
			.to('.seed__container__animation__two', { opacity: 1, duration: 1 }, '+=1')
			.to('.seed__container__animation__two', { opacity: 0, duration: 1 }, '+=1')
			.to('.seed__container__animation__three', { opacity: 1, duration: 1 }, '+=1')
			.to('.seed__container__animation__three', { opacity: 0, duration: 1 }, '+=1')
			.to('.seed__container__animation__four', { opacity: 1, duration: 1 }, '+=1')
			.to('.seed__container__animation__four', { opacity: 0, duration: 1 }, '+=1')
			.to('.seed__container__animation__five', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (

		<div>

			<div className='seed' ref={seed}>
				<div className='seed__container container'>
					<div className='seed__container__text'>
						<div className='seed__container__text__title'>
							<p>DISEÑAMOS ESTRATEGIAS PARA LOS CREADORES DE UN MEJOR FUTURO.</p>
						</div>
						<h3>En licorne® Startup Kings llevamos tu startup de la mano durante cada fase, desde <span>&quot;seed&quot;</span> hasta <span>&quot;scale up&quot;.</span></h3>
					</div>
					<div className='seed__container__animation'>
						<div className="seed__container__animation__one">
							<PlantOne />
						</div>
						<div className="seed__container__animation__two">
							<PlantTwo />
						</div>
						<div className="seed__container__animation__three">
							<PlantThree />
						</div>
						<div className="seed__container__animation__four">
							<PlantFour />
						</div>
						<div className="seed__container__animation__five">
							<PlantFive />
						</div>
					</div>
				</div>
			</div>

		</div>

	)

}

export default SeedAnimation
//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/LicorneTitle'

//*SVG
import Frame from '../../svg/Team/Frame'
import FrameTwo from '../../svg/Team/FrameTwo'
import FrameThree from '../../svg/Team/FrameThree'
import Cup from '../../svg/Team/Cup'

/**
 * @author Iván Sánchez
 * @name Success
 * @description Success
 */
const Success: NextPage = () => {

	const success = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: success.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.Uno', { top:'0%', opacity: 1, duration: 1 }, '+=2')
			.to('.Dos', { top:'0%', opacity: 1, duration: 1 }, '+=1')
			.to('.Tres', { top:'0%', opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (

		<div>

			<div className="success" ref={success}>

				<div className="success__container container">

					<Titulo 
						superior="¡Juntos logramos el éxito!" 
						inferior="Team Licorne"
						alternativo=""
						invertido={false}
					/>

					<div className="success__container__animation">

						<div className="success__container__animation__column">

							<div className="success__container__animation__column__raw ">

								<div className="success__container__animation__column__raw__image Uno">
									<Frame />
								</div>

							</div>

							<div className="success__container__animation__column__raw ">

								<div className="success__container__animation__column__raw__image Dos">
									<FrameTwo />
								</div>

							</div>

						</div>

						<div className="success__container__animation__column">

							<div className="success__container__animation__column__raw">

								<div className="success__container__animation__column__raw__image Cuatro">
									<Cup />
								</div>

							</div>

							<div className="success__container__animation__column__raw ">

								<div className="success__container__animation__column__raw__image Tres">
									<FrameThree />
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Success
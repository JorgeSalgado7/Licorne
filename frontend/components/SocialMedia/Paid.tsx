//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animation components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/Title'

//* SVG
import Person from '../../svg/SocialMedia/Person'
import Magnet from '../../svg/SocialMedia/Magnet'

/**
 * @author Iván Sánchez
 * @name Paid
 * @description componente de Social Media
*/
const Paid: NextPage = () => {

	const paid = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: paid.current,
				markers: false,
				start: 'top',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		ScrollTrigger.matchMedia({

			'(max-width: 1200px)': function () {
				Tl
					.to('.paid__container__magnet', { opacity: 1, duration: 1 })
					.to('.paid__container__animation', { top: '39%', duration: 1 })
					.to('.paid__container__section', { top: '65%', duration: 1 })
			},
			'(min-width: 1199px)': function () {
				Tl
					.to('.paid__container__magnet', { opacity: 1, duration: 1 }, '+=1')
					.to('.paid__container__animation', { left: '85%', duration: 1 })
			},

		})

	}, [])

	return (

		<div>

			<div className='paid' ref={paid}>

				<div className='paid__container container'>

					<Titulo
						title="Paid Media"
						subtitle=""
						text=""
						alternative={false}
					/>

					<div className="paid__container__section">
						<p className="paid__container__section__text">SENTIRÁS LA FELICIDAD DE OBTENER ROI DE TUS INVERSIONES.</p>
						<p>
							Las pautas publicitarias son el boost que requieres para convertir visitantes en leads, impactando positivamente a un mayor número de usuarios e influir en la consideración de tu producto como la solución a un problema.</p>
					</div>

					<div className='paid__container__magnet'>
						<Magnet />
					</div>

					<div className='paid__container__animation'>
						<div className='paid__container__animation__person'>
							<Person />
						</div>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Paid
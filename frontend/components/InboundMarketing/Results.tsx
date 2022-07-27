//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import White from '../../svg/InboundMarketing/White'
import WhiteTwo from '../../svg/InboundMarketing/WhiteTwo'
import WhiteThree from '../../svg/InboundMarketing/WhiteThree'
import WhiteFour from '../../svg/InboundMarketing/WhiteFour'
import Blue from '../../svg/InboundMarketing/Blue'
import BlueTwo from '../../svg/InboundMarketing/BlueTwo'
import BlueThree from '../../svg/InboundMarketing/BlueThree'
import BlueFour from '../../svg/InboundMarketing/BlueFour'

/**
 * @author Iván Sánchez
 * @name Results
 * @description Portada de Inboun Marketing
 */
const Results: NextPage = () => {

	const results = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: results.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.results__container__table__body__columns__content__one', { opacity: 0, duration: 1 }, '+=2')
			.to('.results__container__table__body__columns__content__two', { opacity: 1, duration: 1 }, '+=1')
			.to('.results__container__table__body__columns__content__two', { opacity: 0, duration: 1 }, '+=2')
			.to('.results__container__table__body__columns__content__three', { opacity: 1, duration: 1 }, '+=1')
			.to('.results__container__table__body__columns__content__three', { opacity: 0, duration: 1 }, '+=2')
			.to('.results__container__table__body__columns__content__four', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (

		<div>

			<div className="results" ref={results}>

				<div className="results__container  container">

					<h1 className='results__container__title'>Resultados</h1>

					<div className='results__container__section'>
						<p>Nuestra metodología <span> Inbound Marketing FIT </span> permite enganchar a tu público objetivo en el momento justo, lo cual disminuye el costo de adquisición y aumenta la efectividad en un 35%. </p>
						<p>Llevamos de la mano a tu buyer persona mediante contenidos relevantes que faciliten el cierre de ventas para clientes felices que <span> recomienden a tu marca. </span></p> 
						<p>Incrementa tus ventas con <span> upselling, cross selling y recomendación de boca en boca. </span></p>
					</div>  

					<div className='results__container__table'>

						<div className="results__container__table__head">

							<div className="results__container__table__head__column">
								<h3>Sin Inbound Marketing</h3>
							</div>

							<div className="results__container__table__head__column">
								<h3><span>Con Inbound Marketing</span></h3>
							</div>

						</div>

						<div className='results__container__table__body'>

							<div className='results__container__table__body__columns'>

								<div className='results__container__table__body__columns__content__one'>
									<White />
								</div>

								<div className='results__container__table__body__columns__content__two'>
									<WhiteTwo />
								</div>

								<div className='results__container__table__body__columns__content__three'>
									<WhiteThree />			
								</div>

								<div className='results__container__table__body__columns__content__four'>
									<WhiteFour />		
								</div>

							</div>

							<div className='results__container__table__body__information'>

								<div className="results__container__table__body__information__raw">
									<h1>10000</h1>
									<h3>Visitantes</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>180</h1>
									<h3>Leads</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>50</h1>
									<h3>Oportunidades</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>10</h1>
									<h3>Ventas</h3>
								</div>

							</div>

							<div className='results__container__table__body__columns'>

								<div className='results__container__table__body__columns__content__one'>
									<Blue />
								</div>

								<div className='results__container__table__body__columns__content__two'>
									<BlueTwo />	
								</div>

								<div className='results__container__table__body__columns__content__three'>
									<BlueThree />
								</div>

								<div className='results__container__table__body__columns__content__four'>
									<BlueFour />
								</div>

							</div>

							<div className='results__container__table__body__information'>

								<div className="results__container__table__body__information__raw">
									<h1>25000</h1>
									<h3>Visitantes</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>400</h1>
									<h3>Leads</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>130</h1>
									<h3>Oportunidades</h3>
								</div>

								<div className="results__container__table__body__information__raw">
									<h1>30</h1>
									<h3>Ventas</h3>
								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Results
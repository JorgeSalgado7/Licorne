//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useRef } from 'react'

//* Animations components
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* SVG
import Character from '../../svg/WeDoIt/Character'
import Slingshot from '../../svg/WeDoIt/Slingshot'
import Moon from '../../svg/WeDoIt/Moon'
import Notebook from '../../svg/WeDoIt/Notebook'

/**
 * @author Iván Sánchez
 * @name MarketFit
 * @description Animación de portada de consultoria
 */
const MarketFit: NextPage = () => {

	const market = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: market.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.market__container__section', { top: '-100%' }, '-=2')
			.to('.market__container__animation__circle', { left: '36%' }, '-=1')
			.to('.market__container__animation__circle', { left: '100%', top: '40%', opacity: 0 }, '-=1')
			.to('.market__container__animation__moon', { opacity: 1 }, '+=1')
			.to('.market__container__section_two', { opacity: 1 }, '+=1')
			.to('.market__container__animation__slingshot', { opacity: 0 }, '+=1')
			.from('.market__container__animation__notebook', { top: '-100%', opacity: 0 }, '+=1')
			.to('.market', { background: '#64E24A' })

	}, [])

	return (

		<div>

			<div className='market' ref={market}>

				<div className='market__container container'>

					<div className="market__container__section"></div>

					<div className="market__container__section_two">
						<p>ALCANZAMOS TU PRODUCT MARKET FIT</p>
					</div>

					<div className="market__container__animation">

						<div className="market__container__animation__character">
							<Character />
						</div>

						<div className="market__container__animation__slingshot">
							<Slingshot />
						</div>

						<div className="market__container__animation__moon">
							<Moon />
						</div>

						<div className="market__container__animation__circle"></div>

						<div className="market__container__animation__notebook">
							<Notebook />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default MarketFit
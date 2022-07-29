//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*SVG
import Card from '../../svg/Ecommerce/Card'
import Hashtag from '../../svg/Ecommerce/Hashtag'
import Streak from '../../svg/Ecommerce/Streak'

/**
 * @author Iván Sánchez
 * @name Conversion
 * @description Digitise
 */
const Conversion: NextPage = () => {

	const conversion = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: conversion.current,
				markers: false,
				start: 'center center',
				end: 'bottom',
				scrub: true,
				pin: true
			}
		})

		Tl
			.to('.conversion__container__animation__car__hashtag', { opacity: 0, duration: 1 }, '-=2')
			.to('.conversion__container__animation__car__cube', { opacity: 0, duration: 1 }, '-=2')
			.to('.conversion__container__animation__car__cube_two', { opacity: 0, duration: 1 }, '-=2')
			.to('.conversion__container__animation__car__streak', { opacity: 0, duration: 1 }, '-=2')
			.to('.conversion__container__animation__car__eye', { top: '55%', duration: 1 }, '-=1')
			.to('.conversion__container__animation__car__eye_two', { top: '55%', duration: 1 }, '-=1')
			.to('.conversion__container__animation__car__smile', { top: '50%', duration: 1 }, '-=1')
			.to('.conversion__container__animation__car__hand', { top: '20%', left: '7%', duration: 1 }, '-=1')
			.to('.conversion__container__animation__car__card', { opacity: 1, duration: 1 }, '-=1')

	}, [])

	return (

		<div>

			<div className='conversion' ref={conversion}>

				<div className='conversion__container container'>

					<Titulo
						title="Poderosas tiendas en linea que convierten"
						subtitle="visitantes en clientes."
						alternativo=""
						invertido={false}
					/>

					<div className='conversion__container__animation'>

						<div className='conversion__container__animation__car'>

							<div className='conversion__container__animation__car__eye'></div>

							<div className='conversion__container__animation__car__eye_two'></div>

							<div className='conversion__container__animation__car__smile'></div>

							<div className='conversion__container__animation__car__hand'></div>

							<div className='conversion__container__animation__car__cube'></div>

							<div className='conversion__container__animation__car__cube_two'></div>

							<div className='conversion__container__animation__car__hashtag'>
								<Hashtag />
							</div>

							<div className='conversion__container__animation__car__streak'>
								<Streak />
							</div>

							<div className='conversion__container__animation__car__card'>
								<Card />
							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Conversion
///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import React from 'react'

//*Animation
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


/**
 * @author Maria Meza
 * @name SlideHome
 * @description component SlideHome
 */

const slide: NextPage = () => {


	const animation = useRef(null)

	useEffect(() => {
	
		ScrollTrigger.matchMedia({

			'(max-width: 1200px)': function () {

				const ANIMACION_SLIDE = gsap.timeline({
					scrollTrigger: {
						trigger:  animation.current,
						markers: false,
						start: 'top',
						end: '600%',
						scrub: true,
						pin: true,
						}
					})

					ANIMACION_SLIDE
						.to('.slide_home__slide__pag2', { left: '50%', duration: 0 }, '+=6')
						.to('.slide_home__slide__pag3', { left: '50%', duration: 0 }, '+=6')
						.to('.slide_home__slide__pag4', { left: '50%', duration: 0 }, '+=6')
						.to('.slide_home__slide__pag5', { left: '50%', duration: 0 }, '+=6')
						.to('.slide_home__slide__cubo', { top: '100%' }, '+=2')
					},

			'(min-width: 1199px)': function () {

				const ANIMACION_SLIDE = gsap.timeline({
					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				ANIMACION_SLIDE

					.to('.slide_home__slide__pag4', { left: '50%', duration: 0 , opacity: 0 }, '+=6')
					.to('.slide_home__slide__pag2', { left: '50%', duration: 0 }, '+=6')
					.to('.slide_home__slide__pag3', { left: '50%', duration: 0 }, '+=6')
				
					.to('.slide_home__slide__cubo', { top: '100%' }, '+=6')

			},


		})

	}, [])

	return (

		<div className='slide_home' ref={animation}>
			
			<div className='slide_home__slide'>

				<div className='slide_home__slide__pag1'>
					<div className='container'>

						<div className='slide_home__slide__pag1__text'>
							<h3 className="tir">¡NUESTRO MANIFIESTO!</h3>
							<p className='size'>&quot;9 de cada 10 startups mueren antes de los 3 años… <span>¡Licorne® Startup Kings rompe esa estadística! </span>
				Ayudando a los creadores de un mejor futuro a transformar su idea en una compañía rentable, a través de consultoría
				lean startup, tecnología y marketing digital.&quot;</p>

						</div>

						<div className='slide_home__slide__pag1__image_pag1'>

							<div className='slide_home__slide__pag1__image_pag1__image'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/mano.svg"	alt=""/>
							</div>

						</div>

					</div>

				</div>

				<div className='slide_home__slide__pag2'>
					<div className='container'>

						<div className='slide_home__slide__pag2__text'>
							<h3>CONSULTORÍA LEAN STARTUP</h3>
							<p>Los cracks en lean startup, estrategia de negocio y por supuesto, digital ¡están aquí! </p>
						</div>

						<div className='slide_home__slide__pag2__textDos'>
							<h3>TECNOLOGÍA</h3>
							<p>¿Buscas desarrollo de aplicaciones, ecommerce o sitios web para tu MVP? Estás en el sitio correcto a la hora exacta.</p>
						</div>

						<div className='slide_home__slide__pag2__image_pag2'>

							<div className='slide_home__slide__pag2__image_pag2__image'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/consultorias.svg" alt=""/>
							</div>

						</div>
						<div className='slide_home__slide__pag2__imageDos_pag2'>

							<div className='slide_home__slide__pag2__imageDos_pag2__image'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/tecno.svg" alt=""/>
							</div>

						</div>

					</div>

				</div>

				<div className='slide_home__slide__pag3'>
					<div className='container'>

						<div className='slide_home__slide__pag3__image_pag3'>

							<div className='slide_home__slide__pag3__image_pag3__image'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/tecno.svg" alt=""/>
							</div>

						</div>

						<div className='slide_home__slide__pag3__text_pag3'>
							<h3>TECNOLOGÍA</h3>
							<p>¿Buscas desarrollo de aplicaciones, ecommerce o sitios web para tu MVP? Estás en el sitio correcto a la hora exacta.</p>
						</div>

					</div>
				</div>

				<div className='slide_home__slide__pag4'>

					<div className='container'>

						<div className='slide_home__slide__pag4__text_pag4'>
							<h3>MARKETING DIGITAL</h3>
							<p>Más de 10 años en el negocio nos han permitido boostear el inbound y el outbound marketing.</p>
						</div>

						<div className='slide_home__slide__pag4__textDos_pag4'>
							<h3>Trabajamos juntos en el <span> problem solution fit </span> para generar tu MVP.
				Proponemos y probamos <span> hipótesis lean, </span> las validamos con métricas lean
				para accionar, pivotar y así lograr tracción para llegar al ansiado <span> product market fit. </span></h3>
						</div>

						<div className='slide_home__slide__pag4__image_pag4'>

							<div className='slide_home__slide__pag4__image_pag4__image'>
								<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/imanes.svg" width='284px' height='326px' alt=""/>

							</div>

						</div>
					</div>
				</div>

				<div className='slide_home__slide__pag5'>
					<div className='container'>

						<div className='slide_home__slide__pag5__text_pag5'>
							<p>Trabajamos juntos en el <span>problem solution fit</span> para generar tu MVP. Proponemos y probamos <span>hipótesis lean,</span> las validamos con métricas lean para accionar, pivotar y así lograr tracción para llegar al ansiado <span>product market fit. </span></p>
						</div>

					</div>

				</div>

				<div className='slide_home__slide__cubo'></div>

			</div>
		</div>
	)
}

export default slide
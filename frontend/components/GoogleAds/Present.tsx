//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Image from 'next/image'
import Focus from '../../svg/Google/Focus'
import Location from '../../svg/Google/Location'
import Arrow from '../../svg/Google/Arrow'
import Money from '../../svg/Google/Money'

/**
 * @author Maria Meza
 * @name Present
 * @description Portada Google-Ads
 */

const Present: NextPage = () => {
	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			/**
             * @ANIMACIÓN_1
             * ANIMACIÓN GOOGLE ADS
            */
			'(min-width: 1200px)': function(){
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top',
						end: '200%',
						scrub: true,
						pin: true
					}
				})
				tl
					.to('.present__container__izquierda__ir', { opacity: 1, duration: 1 }, '+=1')
					.to('.present__container__centro__imagenesResponsive__hacer', { opacity: 1, duration: 1 }, '+=2')
					.to('.present__container__centro__imagenesResponsive__comprar', { opacity: 1, duration: 1 }, '+=3')
					.to('.present__container__derecha__hacer', { opacity: 1, duration: 1 }, '+=2')
					.to('.present__container__derecha__comprar', { opacity: 1, duration: 1 }, '+=3')
					.to('.present__container__centro__parrafo', { opacity: 0, duration: 1 }, '+=5')
					.to('.present__container__centro', { top:'-10%' }, '+=4')
					.to('.link-personalizado', { top:'40%' }, '+=4')
                
			},
		
		})

	}, [])
	return (
		<div>
			<div className="present" ref={animation}>
				<div className='container'>
					<div className="present__container">
						<div className="present__container__izquierda">
							<div className="present__container__izquierda__saber">
								<div className="present__container__izquierda__saber__img1">
									<Focus/>              
								</div>
								<h3>Quiero saber</h3>
								<div className="present__container__izquierda__saber__punto1"></div>
							</div>
							<div className="present__container__izquierda__ir">
								<div className="present__container__izquierda__ir__img2">
									<Location/>
                                    
								</div>
								<h3>Quiero ir</h3>
								<div className="present__container__izquierda__ir__punto2"></div>
							</div>
						</div>
						<div className="present__container__centro">
							<div className="present__container__centro__parrafo">
								<p>
                                    Nuestras estrategias son captadoras de <span>leads potenciales</span> para poder 
                                    llevar a tu marca o servicio 
                                    a tener presencia en los momentos más determinantes de tus clientes, 
                                    como son los llamados <span>micro-momentos</span>
								</p>
							</div>
							<div className="present__container__centro__subtitulo">
                                
								<div className="present__container__centro__subtitulo__ads">
									<a href="https://www.google.com/partners/agency?id=4490956949" target="_blank"  rel="noreferrer">
										<Image 
											className="ads"
											src="https://licorne-web.s3.us-east-2.amazonaws.com/google-ads/logo-ads.svg"
											layout='responsive'
											width='200px'
											height='191px' 
											alt="" 
										/>
									</a>
								</div>

								<h2>Estrategias digitales inteligentes en Google Ads</h2>
								<h1>Tu marca presente en el momento exacto:</h1>
							</div>
							<div className="present__container__centro__imagenesResponsive">
								<div className="present__container__centro__imagenesResponsive__saber">
									<div className="present__container__centro__imagenesResponsive__saber__img1">

										<Focus/>

									</div>
									<h3>Quiero saber</h3>
									<div className="present__container__centro__imagenesResponsive__saber__punto1"></div>
								</div>
								<div className="present__container__centro__imagenesResponsive__saber__punto1">
									<div className="present__container__centro__imagenesResponsive__ir__img2">

										<Location/>

									</div>
									<h3>Quiero ir</h3>
									<div className="present__container__centro__imagenesResponsive__ir__punto2"></div>
								</div>
								<div className="present__container__centro__imagenesResponsive__hacer">
									<div className="present__container__centro__imagenesResponsive__hacer">
										<Arrow/>                             
									</div>
									<h3>Quiero hacer</h3>
									<div className="present__container__centro__imagenesResponsive__hacer__punto3"></div>
								</div>
								<div className="present__container__centro__imagenesResponsive__comprar">
									<div className="present__container__centro__imagenesResponsive__comprar__img4">

										<Money/>
                                        
									</div>
									<h3>Quiero comprar</h3>
									<div className="present__container__centro__imagenesResponsive__comprar__punto4"></div>
								</div>
							</div>
						</div>  
						<div className="present__container__derecha">
							<div className="present__container__derecha__hacer">
								<div className="present__container__derecha__hacer__img3">
									<Arrow/>
								</div>
								<h3>Quiero hacer</h3>
								<div className="present__container__derecha__hacer__punto3"></div>
							</div>
							<div className="present__container__derecha__comprar">
								<div className="present__container__derecha__comprar__img4">

									<Money/>

								</div>
								<h3>Quiero comprar</h3>
								<div className="present__container__derecha__comprar__punto4"></div>

							</div>
						</div>
                    
						{/* <LinkPersonalizado 
							url="/contacto"
							texto="¡QUIERO ESTAR EN EL TOP!"
						/> */}
                    
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Present
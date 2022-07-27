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
import Clock from '../../svg/Seo/Clock'
import Pc from '../../svg/Seo/Pc'
import Card from '../../svg/Seo/Card'

/**
 * @author Iván Sánchez
 * @name Qualified
 * @description componente calidad de SEO
 */
const Qualified: NextPage = () => {

	const qualified = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: qualified.current,
				markers: false,
				start: 'center center',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.tecnico', { opacity: 0, duration: 1 }, '+=2')
			.to('.diseño', { opacity: 1, duration: 1 })
			.to('.diseño', { opacity: 0, duration: 1 }, '+=2')
			.to('.contenido', { opacity: 1, duration: 1 })

	}, [])

	return (

		<div>

			<div className='qualified' ref={qualified}>

				<div className='qualified__container container'>

					<Titulo 
						superior="Licorne® Startup Kings siempre estará capacitado"
						inferior="para aplicar constantes mejoras"
						alternativo=""
						invertido={false}
					/>

					<div className='qualified__container__change tecnico'>

						<div className='qualified__container__change__image'>
							<Clock />
						</div>

						<div className='qualified__container__change__section'>
							<p className="qualified__container__change__section__down">A NIVEL TÉCNICO:</p>
							<p>Implementando sitios rápidos con las últimas tecnologías de desarrollo web y comercio electrónico en plataformas como: WordPress, PrestaShop, Magento, WooCommerce, Shopify y más.</p>
						</div>

					</div>

					<div className='qualified__container__change diseño'>

						<div className='qualified__container__change__image'>
							<Pc />
						</div>

						<div className='qualified__container__change__section'>
							<p className="qualified__container__change__section__down">A NIVEL DISEÑO:</p>
							<p>Siendo User Friendly, con interfaces amigables y responsive design.</p>
						</div>

					</div>

					<div className='qualified__container__change contenido'>

						<div className='qualified__container__change__image'>
							<Card />
						</div>

						<div className='qualified__container__change__section'>
							<p className="qualified__container__change__section__down">A NIVEL CONTENIDO:</p>
							<p>Es el elemento clave para Google y una estrategia SEO exitosa. </p>
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Qualified
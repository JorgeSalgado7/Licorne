///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Titulo from '../Common/Title'
import PhoneArrows from '../../svg/App/PhoneArrows'
import People from '../../svg/App/People'
import PhoneCheck from '../../svg/App/PhoneCheck'
import PhoneMessange from '../../svg/App/PhoneMessange'
import AppStore from '../../svg/App/AppStore'
import Headphones from '../../svg/App/Headphones'
import Circle from '../../svg/App/Circle'

/**
 * @author Maria Meza
 * @name Requirements
 * @description Requirements: App
 */

const Requirements: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '700%',
				scrub: true,
				pin: true,
			}
		})

		tl

			.to('.requirements__cero', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__uno', { opacity: 1, duration: 1 }, '+=1')
			.to('.requirements__uno', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__dos', { opacity: 1, duration: 1 }, '+=1')
			.to('.requirements__dos', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__tres', { opacity: 1, duration: 1 }, '+=1')
			.to('.requirements__tres', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__cuarto', { opacity: 1, duration: 1 }, '+=1')
			.to('.requirements__cuarto', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__quinto', { opacity: 1, duration: 1 }, '+=1')
			.to('.requirements__quinto', { opacity: 0, duration: 1 }, '+=1')
			.to('.requirements__sexto', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (
		<div>
			{/**REQUERIMIENTOS */}
			<div className='requirements' ref={animation}>

				<div className='container'>

					<Titulo
						text=""
						title="¡Así lo"
						subtitle="hacemos!"
						alternative={false}
					/>

					{/**PARRAFO */}

					<div className='requirements__text'>
						<p>Aplicamos las mejores metodologías en beneficio de tu marca: Scrum, Agile, Lean Startup, Inbound y Outbound Marketing.</p>
					</div>

					{/**PARRAFO-cero */}
					<div className='requirements__cero'>

						<div className='requirements__cero__image'>
							<Circle />
						</div>

						<div className='requirements__cero__text_cero'>
							<p className='salto'>LEVANTAMIENTO DE REQUERIMIENTOS:</p>
							<p>Trabajamos bajo una <span>metodología de desarrollo “agile”,</span> de modo que entendemos las necesidades del negocio desde el MVP hasta el producto terminado.</p>
						</div>
					</div>

					{/**PARRAFO-UNO */}
					<div className='requirements__uno'>

						<div className='requirements__uno__image'>
							<PhoneArrows />
						</div>

						<div className='requirements__uno__text_uno'>
							<p className='salto'>UX/UI Design:</p>
							<p>Creamos hermosos diseños que harán de la <span>experiencia</span> de tus <span>usuarios</span> algo <span>fácil</span> de entender y de usar.</p>
						</div>
					</div>

					{/**PARRAFO-DOS */}
					<div className='requirements__dos'>
						<div className='requirements__dos__image'>
							<PhoneMessange />
						</div>
						<div className='requirements__dos__text_dos'>
							<p className='salto'>Prototipo: </p>
							<p>Tras <span>aprobar el diseño</span> se hace el prototipo que se enviará a la fase de desarrollo.</p>
						</div>
					</div>

					{/**PARRAFO-TRES */}
					<div className='requirements__tres'>
						<div className='requirements__tres__image'>
							<People />
						</div>
						<div className='requirements__tres__text_tres'>
							<p className='salto'>Desarrollo:</p>
							<p><span>¡Felicidades!</span> El desarrollo de la app está en proceso.</p>
						</div>
					</div>

					{/**PARRAFO-CUARTO */}
					<div className='requirements__cuarto'>
						<div className='requirements__cuarto__image'>
							<PhoneCheck />
						</div>
						<div className='requirements__cuarto__text_cuarto'>
							<p className='salto'>Control de calidad:</p>
							<p>Te entregamos <span>una app 100% funcional</span>, lista para la fase beta.</p>
						</div>
					</div>

					{/**PARRAFO-QUINTO */}
					<div className='requirements__quinto'>
						<div className='requirements__quinto__image'>
							<AppStore />
						</div>
						<div className='requirements__quinto__text_quinto'>
							<p className='salto'>Deployment:</p>
							<p>La fase beta será puesta a <span>prueba para validar</span> que no cause errores. Tu aplicación está lista para ser lanzada en la <span>App Store y Play Store.</span></p>
						</div>
					</div>

					{/**PARRAFO-SEXTO */}
					<div className='requirements__sexto'>
						<div className='requirements__sexto__image'>
							<Headphones />
						</div>
						<div className='requirements__sexto__text_sexto'>
							<p className='salto'>Soporte y mantenimiento: </p>
							<p>Una <span>app es un ente vivo</span>, por lo cual <span>necesita atención y cuidados...</span> ¡Despreocúpate! nuestro equipo se hará cargo de este proceso.</p>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Requirements
//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect } from 'react'

//* Animation components
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//*Components
import Titulo from '../Common/Title'

//* SVG
import BallLearning from '../../svg/InboundMarketing/BallLearning'
import LearningI from '../../svg/InboundMarketing/LearningI'
import BallConsideration from '../../svg/InboundMarketing/BallConsideration'
import Consideration from '../../svg/InboundMarketing/Consideration'
import BallRecognition from '../../svg/InboundMarketing/BallRecognition'
import Recognition from '../../svg/InboundMarketing/Recognition'
import BallDecision from '../../svg/InboundMarketing/BallDecision'
import Decision from '../../svg/InboundMarketing/Decision'
import Dolar from '../../svg/InboundMarketing/Dolar'

/**
 * @author Iván Sánchez
 * @name Learning
 * @description Portada de Inboun Marketing
*/
const Learning: NextPage = () => {

	useEffect(() => {

		const Tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.embudo',
				markers: false,
				start: 'top',
				end: '600%',
				scrub: true,
				pin: true,
			}
		})

		const Tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.embudo',
				markers: false,
				start: 'top',
				end: '600%',
				scrub: true,
				pin: true,
			}
		})

		Tl
			.to('.aprendizaje', { opacity: 0, duration: 1 }, '+=2')
			.to('.consideracion', { opacity: 1, duration: 1 })
			.to('.consideracion', { opacity: 0, duration: 1 })
			.to('.reconocimiento', { opacity: 1, duration: 1 })
			.to('.reconocimiento', { opacity: 0, duration: 1 })
			.to('.compra', { opacity: 1, duration: 1 })

		Tl2
			.to('.pelotaAprendizaje', { top: '20%', opacity: 0, duration: 1 }, '+=5')
			.to('.consideracionAnimacion', { opacity: 1, duration: 1 })
			.to('.pelotaConsideracion', { top: '20%', opacity: 0, duration: 1 }, '+=3')
			.to('.reconocimientoAnimacion', { opacity: 1, duration: 1 })
			.to('.pelotaReconocimiento', { top: '20%', opacity: 0, duration: 1 }, '+=2')
			.to('.compraAnimacion', { opacity: 1, duration: 1 })
			.to('.dolar', { opacity: 1, duration: 1 }, '+=2')

	}, [])

	return (

		<div>

			<div className='embudo'>

				<div className='container'>

					<div className='aprendizaje'>

						<Titulo
							title="Aprendizaje y "
							subtitle="descubrimiento"
							text=""
							alternative={false}
						/>

						<p>Se despierta interés en el usuario con marketing de contenidos, Google Ads,  Social Media y vídeo mediante temáticas de interés para el usuario. </p>
						<small>RESULTADO: LEADS</small>

					</div>

					<div className='consideracion'>

						<Titulo
							title="Consideración"
							subtitle="de la solución"
							text=""
							alternative={false}
						/>

						<p>Da respuesta a la duda o interés del lead calificado y con ello, promover el deseo e interés hacia tu marca como una solución. </p>
						<small>RESULTADO: OPORTUNIDADES DE VENTA</small>

					</div>

					<div className='reconocimiento'>

						<Titulo
							title="Reconocimiento"
							subtitle="del problema"
							text=""
							alternative={false}
						/>

						<p>Hace consciente al lead de que su dolor debe ser atendido, generando intriga para que continúe avanzando en el embudo de ventas. </p>
						<small>RESULTADO: LEADS CALIFICADOS</small>

					</div>

					<div className='compra'>

						<Titulo
							title="Decisión"
							subtitle="de compra"
							text=""
							alternative={false}
						/>

						<p>Aquí tu producto o servicio se muestra como la primera y mejor opción para dar solución al dolor del lead para convertirlo en una oportunidad de venta generada. Es un proceso continuo con la fidelización, posventa y recomendación mediante la automatización, acompañamiento y nutrición.</p>
						<small>RESULTADO: CLIENTES FIELES</small>

					</div>

					<div className='animacionEmbudo'>

						<div className='aprendizajeAnimacion'>

							<div className='pelotaAprendizaje'>
								<BallLearning />
							</div>

							<div className='pieza'>
								<LearningI />
							</div>

						</div>

						<div className='consideracionAnimacion'>

							<div className='pelotaConsideracion'>
								<BallConsideration />
							</div>

							<div className='pieza'>
								<Consideration />
							</div>

						</div>

						<div className='reconocimientoAnimacion'>

							<div className='pelotaReconocimiento'>
								<BallRecognition />
							</div>

							<div className='pieza'>
								<Recognition />
							</div>

						</div>

						<div className='compraAnimacion'>

							<div className='pelotaCompra'>
								<BallDecision />
							</div>

							<div className='pieza'>
								<Decision />
							</div>

						</div>

						<div className='dolar'>
							<Dolar />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Learning
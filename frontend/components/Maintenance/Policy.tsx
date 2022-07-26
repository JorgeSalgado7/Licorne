//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Policy1 from '../../svg/Maintenance/Policy'

/**
 * @author Maria Meza
 * @name Policy
 * @description Portada Web
 */

const Policy: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)
	
	useEffect(() => {

		const ANIMACION_POLIZA = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '300%',
				scrub: true,
				pin: true,
			}
		})

		ANIMACION_POLIZA
			.to('.policy__container__animation__one', { opacity: 0 }, '+=1')
			.to('.policy__container__animation__two', { opacity: 1 })
			.to('.policy__container__animation__two', { opacity: 0 }, '+=1')
			.to('.policy__container__animation__three', { opacity: 1 })

	}, [])

	return (
		<div>
			<div className='policy' ref={animation}>
				<div className='container'>
					<div className='policy__container'>
						<div className="policy__container__parrafoPoliza">
							<p>Muchos negocios cometen <span>el error de dejar sin atender</span> profesionalmente <span>su plataforma web.</span> Esto les hace perder competitividad ya que los sitios van acumulando errores de funcionamiento en el código del sitio y las plataformas que permiten su funcionalidad. De igual manera llega a cometerse <span>el error de buscar administrar la plataforma web</span> sin contar con las skills necesarias para evitar generar errores de datos o de funcionalidad del sitio.</p>
							<p className="low">En Licorne® Startup Kings puedes encontrar <span>una solución generada por expertos.</span></p>
						</div>
						<div className="policy__container__animation">
							<p className="policy__container__animation__call">PÓLIZA DE SERVICIO</p>

							<div className="policy__container__animation__img">
								<Policy1/>
							</div>
							<h2 className='policy__container__animation__one'><span>16</span> h</h2>
							<h2 className='policy__container__animation__two'><span>24</span> h</h2>
							<h2 className='policy__container__animation__three'><span>32</span> h</h2>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default Policy
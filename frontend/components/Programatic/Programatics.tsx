//* Next components
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

//**Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Center from '../../svg/Programatic/Center'
import One from '../../svg/Programatic/One'
import Two from '../../svg/Programatic/Two'
import Three from '../../svg/Programatic/Three'
import Four from '../../svg/Programatic/Four'
import Five from '../../svg/Programatic/Five'
import Six from '../../svg/Programatic/Six'

/**
 * @author Maria Meza
 * @name Programatics
 * @description Programatics in Programatic
 */

const Programatics: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)
	
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: animation.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})
		
		tl
			.to('.programatics__animation__uno', { opacity: 1, duration: 1 }, '+=1')
			.to('.programatics__animation__two', { opacity: 1, duration: 1 }, '+=1')
			.to('.programatics__animation__three', { opacity: 1, duration: 1 }, '+=1')
			.to('.programatics__animation__four', { opacity: 1, duration: 1 }, '+=1')
			.to('.programatics__animation__six', { opacity: 1, duration: 1 }, '+=1')
			.to('.programatics__animation__five', { opacity: 1, duration: 1 }, '+=1')

	}, [])

	return (
		<div>
			<div className="programatics" ref={animation}>
				<div className='container'>
					<div className="programatics__text">
						<p>Nuestras estrategias de marketing programático atraen a los usuarios más calificados a través de anuncios digitales que se muestran en el momento indicado y de acuerdo a un perfil específico en sitios web, aplicaciones móviles y publicaciones publicitarias.</p>
						<p className="llamado">¿A POCO NO TE GUSTARÍA CAPTAR LA ATENCIÓN DEL LEAD MÁS PREPARADO Y LISTO PARA EJERCER UNA COMPRA?</p>
						<p>El Programmatic aplicado a nuestra metodología analiza los algoritmos más especializados para satisfacer la demanda de una audiencia exigente e informada sobre el servicio o producto que ofreces en la web. </p>
					</div>
					<div className='programatics__animation'>
						<div className='programatics__animation__center'>

							<Center/>

						</div>
						<div className='programatics__animation__uno'>

							<One/>

						</div>
						<div className='programatics__animation__two'>

							<Two/>

						</div>
						<div className='programatics__animation__three'>

							<Three/>

						</div>
						<div className='programatics__animation__four'>

							<Four/>

						</div>
						<div className='programatics__animation__five'>

							<Five/>

						</div>
						<div className='programatics__animation__six'>
							<Six/>

						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Programatics
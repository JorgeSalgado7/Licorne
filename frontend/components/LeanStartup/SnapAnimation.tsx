//* Next components
import type { NextPage } from 'next'

//* SVG
import Snap from '../svg/LeanStartup/Snap'
import Finger from '../svg/LeanStartup/Finger'
import Hand from '../svg/LeanStartup/Hand'

/**
 * @author Iván Sánchez
 * @name SnapAnimation
 * @description Página principal del sitio web
 */
const SnapAnimation: NextPage = () => {

	return (

		<div className='snap_animation'>
			<div className='snap_animation__container container'>
				<div className='snap_animation__container__text'>
					<h3>Los cracks de la metodología lean startup </h3>
					<h3>¡Están aquí!</h3>
				</div>
				<div className='snap_animation__container__animation'>
					<div className="snap_animation__container__animation__hand">

						<div className='snap_animation__container__animation__hand__image'>
							<Hand />
						</div>
					
					</div>
					<div className="snap_animation__container__animation__thumb">
						<div className='snap_animation__container__animation__thumb__image'>
							<Finger />
						</div>
						
					</div>
					<div className="snap_animation__container__animation__index"></div>
					<div className="snap_animation__container__animation__snap">
						<div className='snap_animation__container__animation__snap__image'>
							<Snap />
						</div>
					</div>
				</div>
			</div>
		</div>

	)

}

export default SnapAnimation
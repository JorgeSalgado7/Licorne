//* Next components
import type { NextPage } from 'next'

//* SVG
import Hand from '../../svg/LeanStartup/Hand'
import Snap from '../../svg/LeanStartup/Snap'
import Finger from '../../svg/LeanStartup/Finger'

//* Custom hooks
import { useViewheight } from '../../hooks/useViewheight'

/**
 * @author Iván Sánchez
 * @name SnapAnimation
 * @description Página alternative del sitio web
 */
const SnapAnimation: NextPage = () => {

	useViewheight()

	return (

		<div className='snap_animation'>

			<div className='container'>

				<div className='snap_animation__text'>
					<h3>Los cracks de la metodología lean startup </h3>
					<h3>¡Están aquí!</h3>
				</div>

				<div className='snap_animation__animation'>

					<div className='snap_animation__animation__hand'>
						<Hand />
					</div>

				</div>

			</div>
		</div>

	)

}

export default SnapAnimation
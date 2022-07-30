//* Next components
import type { NextPage } from 'next'

//* SVG
import Hand from '../../svg/LeanStartup/Hand'
import Snap from '../../svg/LeanStartup/Snap'
import Finger from '../../svg/LeanStartup/Finger'

//* Custom hooks
import { useViewheight } from '../../hooks/useViewheight'

/**
 * @author Maria Meza
 * @name SnapAnimation
 * @description Página alternative del sitio web
 */
const SnapAnimation: NextPage = () => {

	useViewheight()

	return (

		<div>
			<div className='cracks'>
				<div className='container'>
					<div className='cracks__container'>
						<div className='cracks__container__text'>
							<h3>Los cracks de la metodología lean startup </h3>
							<h3>¡Están aquí!</h3>
						</div>
						<div className='cracks__container__animation'>
							<div className="cracks__container__animation__hand">

								<div className='cracks__container__animation__hand__image'>
									<Hand/>
								</div>
							
							</div>
							<div className="cracks__container__animation__finger">
								<div className='cracks__container__animation__finger__image'>
									<Finger/>
								</div>
								
							</div>
							<div className="cracks__container__animation__finger_one"></div>
							<div className="cracks__container__animation__shap">
								<div className='cracks__container__animation__shap__image'>
									<Snap/>
								</div>
							
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</div>

	)

}

export default SnapAnimation
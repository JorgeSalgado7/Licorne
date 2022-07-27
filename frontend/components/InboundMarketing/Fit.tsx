//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//* SVG
import Decor from '../../svg/InboundMarketing/Decor'
import Circle from '../../svg/InboundMarketing/Circule'
import Heart from '../../svg/InboundMarketing/Heart'
import Marriage from '../../svg/InboundMarketing/Marriage'
import MarriageTwo from '../../svg/InboundMarketing/MarriageTwo'
import Ball from '../../svg/InboundMarketing/Ball'
import Bat from '../../svg/InboundMarketing/Bat'

/**
 * @author Iván Sánchez
 * @name Fit
 * @description Portada de Inboun Marketing
 */
const Fit: NextPage = () => {

	return (

		<div>

			<div className="fit">

				<div className="fit__container container">

					<Titulo 
						superior="Inbound marketing" 
						inferior="FIT."
						alternativo=""
						invertido={false}
					/>
					
					<div className='fit__container__section'>
						<p>Imagina que <span>vas a una fiesta</span> y <span>observas a una persona</span> que te atrae.</p>
					</div>

					<div className='fit__container__section_two'>
						<p>Entonces decides <span>ir y pedirle matrimonio</span> justo cuando se acaban de conocer...</p>
					</div>

					<div className='fit__container__section_three'>
						<p><span>¿Qué crees que te diría</span>?</p>
					</div>

					<div className='fit__container__section_four'>
						<p>Lo mismo pasa en una estrategia de marketing digital cuando tratas 
							de venderle a tus visitantes desde la primera interacción, <span>¡te batearán!</span></p>
					</div>

					<div className='fit__container__animation'>

						<div className='fit__container__animation__decor'>
							<Decor />
						</div>

						<div className='fit__container__animation__circle'>
							<Circle />
						</div>

						<div className='fit__container__animation__eye'>
							<Heart />
						</div>

						<div className='fit__container__animation__eye_two'>
							<Heart />
						</div>

						<div className='fit__container__animation__marriage'>
							<Marriage />
						</div>

						<div className="fit__container__animation__marriage_two">
							<MarriageTwo />
						</div>

						<div className="fit__container__animation__bat">
							<Bat />
						</div>

						<div className="fit__container__animation__ball">
							<Ball />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Fit
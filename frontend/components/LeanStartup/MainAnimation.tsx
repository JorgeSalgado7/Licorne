//* Next components
import type { NextPage } from 'next'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Lens from '../../svg/LeanStartup/Leans'
import Arrow from '../../svg/LeanStartup/Arrow'
import Wall from '../../svg/LeanStartup/Wall'
import Ruler from '../../svg/LeanStartup/Ruler'

/**
 * @author Iván Sánchez
 * @name MainAnimation
 * @description Animación de portada de consultoria
 */
const MainAnimation: NextPage = () => {

	return (

		<div className='main_animation'>
			<div className='main_animation__container container'>
				<Titulo
					title="¡Llega más lejos "
					subtitle="con lean startup!"
					text=""
					alternative={false}
				/>
				<div className='main_animation__container__animation'>
					<div className="main_animation__container__animation__cycle">
						<div className="main_animation__container__animation__cycle__lens">
							<Lens />
						</div>
						<div className="main_animation__container__animation__cycle__arrow_one">
							<Arrow />
						</div>
						<div className="main_animation__container__animation__cycle__wall">
							<Wall />
						</div>
						<div className="main_animation__container__animation__cycle__arrow_two">
							<Arrow />
						</div>
						<div className="main_animation__container__animation__cycle__ruler">
							<Ruler />
						</div>
						<div className="main_animation__container__animation__cycle__arrow_three">
							<Arrow />
						</div>
					</div>
				</div>
			</div>
		</div>

	)

}

export default MainAnimation
//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*SVG
import HandLeft from '../../svg/History/HandLeft'
import HandRigth from '../../svg/History/HandRigth'
import Shock from '../../svg/History/Shock'

/**
 * @author Iván Sánchez
 * @name Chapter04
 * @description Digitise
 */
const Chapter04: NextPage = () => {

	return (

		<div>

			<div className='chapter_four'>

				<div className='chapter_four__container container'>

					<Titulo
						superior="Capítulo"
						inferior="04"
						alternativo=""
						invertido={false}
					/>

					<div className='chapter_four__container__animation'>

						<div className='chapter_four__container__animation__left'>
							<HandLeft />
						</div>

						<div className='chapter_four__container__animation__rigth'>
							<HandRigth />
						</div>

						<div className='chapter_four__container__animation__shock'>
							<Shock />
						</div>

					</div>

					<div className='chapter_four__container__section'>
						<p>El mundo del <span>marketing digital va en aumento</span> y la adopción de nuevas tecnologías es cada vez más simple. Nos enorgullece decir que somos <span>precursores de esa evangelización</span> y lograr que más usuarios <span>confíen</span> en los productos de nuestros clientes por medio del digital.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter04
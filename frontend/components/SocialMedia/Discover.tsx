//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//* SVG
import HandLeft from '../../svg/SocialMedia/HandLeft'
import HandRigth from '../../svg/SocialMedia/HandRigth'

/**
 * @author Iván Sánchez
 * @name Discover
 * @description componente de Social Media
*/
const Discover: NextPage = () => {

	return (

		<div className='discover'>

			<div className='discover__container container'>

				<Titulo
					title="42.5 de los usuarios de internet descubren a las marcas mediante"
					subtitle="sus redes sociales."
					alternativo=""
					invertido={false}
				/>

				<div className='discover__container__animation'>

					<div className='discover__container__animation__rigth'>
						<HandRigth />
					</div>

					<div className='discover__container__animation__left'>
						<HandLeft />
					</div>

					<div className='discover__container__animation__head'>
						<div className='discover__container__animation__head__eye'></div>
						<div className='discover__container__animation__head__eye_two'></div>
						<div className='discover__container__animation__head__mouth'></div>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Discover
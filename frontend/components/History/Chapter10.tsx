//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/LicorneTitle'

//*SVG
import HandLeftTwo from '../../svg/History/HandLeftTwo'
import HandRigthTwo from '../../svg/History/HandRigthTwo'

/**
 * @author Iván Sánchez
 * @name Chapter10
 * @description Digitise
 */
const Chapter10: NextPage = () => {

	return (

		<div>

			<div className='chapter_ten'>

				<div className='chapter_ten__container container'>

					<Titulo
						superior="Capítulo"
						inferior="10"
						text=""
						alternative={false}
					/>

					<div className='chapter_ten__container__animation'>
						<div className='chapter_ten__container__animation__left'>
							<HandLeftTwo />
						</div>
						<div className='chapter_ten__container__animation__rigth'>
							<HandRigthTwo />
						</div>
					</div>

					<div className='chapter_ten__container__section'>
						<p>Este, ¡lo escribimos juntos! ¿Estás listo?</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter10
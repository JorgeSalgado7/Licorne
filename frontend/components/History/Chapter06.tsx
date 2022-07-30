//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/LicorneTitle'

//*SVG
import Head from '../../svg/History/Head'
import HeadTwo from '../../svg/History/HeadTwo'

/**
 * @author Iván Sánchez
 * @name Chapter06
 * @description Digitise
 */
const Chapter06: NextPage = () => {

	return (

		<div>

			<div className='chapter_six'>

				<div className='chapter_six__container container'>

					<Titulo
						superior="Capítulo"
						inferior="06"
						text=""
						alternative={false}
					/>

					<div className='chapter_six__container__animation'>

						<div className='chapter_six__container__animation__one'>
							<Head />
						</div>

						<div className='chapter_six__container__animation__two'>
							<HeadTwo />
						</div>

						<div className='chapter_six__container__animation__three'>
							<Head />
						</div>

						<div className='chapter_six__container__animation__four'>
							<HeadTwo />
						</div>

						<div className='chapter_six__container__animation__five'>
							<Head />
						</div>

						<div className='chapter_six__container__animation__six'>
							<HeadTwo />
						</div>

						<div className='chapter_six__container__animation__seven'>
							<Head />
						</div>

						<div className='chapter_six__container__animation__eigth'>
							<HeadTwo />
						</div>

						<div className='chapter_six__container__animation__nine'>
							<Head />
						</div>

						<div className='chapter_six__container__animation__ten'>
							<HeadTwo />
						</div>

					</div>

					<div className='chapter_six__container__section'>
						<p>Cada vez son más los <span>clientes y socios estratégicos que creen en el proyecto</span> y lo fortalecen. Nuevos cracks se unen al equipo convencidos de que solo la tecnología, la creatividad y lograr entender las necesidades del cliente pueden cambiar el rumbo de las marcas.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter06
//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*SVG
import Mesh from '../../svg/History/Mesh'

/**
 * @author Iván Sánchez
 * @name Chapter05
 * @description Digitise
 */
const Chapter05: NextPage = () => {

	return (

		<div>

			<div className='chapter_five'>

				<div className='chapter_five__container container'>

					<Titulo
						superior="Capítulo"
						inferior="05"
						text=""
						alternative={false}
					/>

					<div className='chapter_five__container__animation'>
						<Mesh />
					</div>

					<div className='chapter_five__container__section'>
						<p>Obedeciendo a nuestro valor <span>“innovación”,</span> convertimos a la tecnología de <span>automatización</span> en uno de los alternativees desarrolladores de éxito para nuestros clientes, centralizando Google Ads, Facebook, Ads, SEO, mailing, Linkedin y un largo etc., que crece constantemente.</p>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Chapter05
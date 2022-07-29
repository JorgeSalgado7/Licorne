//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*Image
import Hand from '../../svg/Google/Hand'
import Action from '../../svg/Google/Action'
import ClickImage from '../../svg/Google/Click'

/**
 * @author Maria Meza
 * @name Click
 * @description Click Google-Ads
 */

const Click: NextPage = () => {

	return (
		<div>
			<div className='click'>
				<div className='container'>
					<div className='click__container'>
						<div className='parrafoClick'>
							<Titulo
								alternativo=""
								title="¡Conviérte en el click más deseado!"
								subtitle=""
								invertido={false}
							/>
						</div>
						<div className='click__container__animation'>
							<div className="click__container__animation__hand">
								<Hand />
							</div>
							<div className="click__container__animation__action">
								<Action />
							</div>
							<div className="click__container__animation__imagenTxt">
								<ClickImage />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Click
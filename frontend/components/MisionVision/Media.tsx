//* Next components
import type { NextPage } from 'next'

//*Components
import Delta from '../../svg/MisionVision/Delta'
import Imagen from '../../svg/MisionVision/Imagen'
import Merca from '../../svg/MisionVision/Merca'

/**
 * @author Maria Meza
 * @name Media
 * @description Portada Mision y vision
 */

const Media: NextPage = () => {

	return (
		<div>
			<div className='media'>
				<div className="media__txt">
					<h1>Medios</h1>
				</div>
				<div className="media__img">
					<div className="media__img__imagen">
						<div className="media__img__imagen__img_form">

							<Imagen/>

						</div>
                                    
					</div>
					<div className="media__img__imagen">

						<div className="media__img__imagen__img_form">

							<Merca/>

						</div>
                                    
					</div>
					<div className="media__img__imagen">

						<div className="media__img__imagen__img_form">

							<Delta/>

						</div>
                                    
					</div>
				</div>
			</div>  
		</div>

	)
}

export default Media
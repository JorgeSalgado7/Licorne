//* Next components
import type { NextPage } from 'next'

//* Components
import Title from '../Common/LicorneTitle'

//* SVG
import Power from '../../svg/Development/Power'
import Amazon from '../../svg/Development/Amazon'
import Tensor from '../../svg/Development/Tensor'
import Apache from '../../svg/Development/Apache'

/**
 * @author Iván Sánchez
 * @name Analytics
 * @description Componente de analítica en desarrollo
 */
const Analytics: NextPage = () => {

	return (

		<div className='analytics'>

			<div className="analytics__content">

				<div className="analytics__content__container container">

					<Title
						title="Analítica"
						subtitle="Web"
						text=""
						alternative={false}
					/>

					<p className="analytics__content__container__text"><span>Soluciones analíticas business intelligence</span> que te ayudarán a conocer a tus usuarios; como sus hábitos de consumo y todos los datos que permitan la mejora continua para tu marca.</p>

					<div className="analytics__content__container__images">

						<div className="analytics__content__container__images__individual">
							<Power />
						</div>

						<div className="analytics__content__container__images__individual">
							<Amazon />
						</div>

						<div className="analytics__content__container__images__individual">
							<Tensor />
						</div>

						<div className="analytics__content__container__images__individual">
							<Apache />
						</div>

					</div>

				</div>

			</div>
		</div>

	)

}

export default Analytics
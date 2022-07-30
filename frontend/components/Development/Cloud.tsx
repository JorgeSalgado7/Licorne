//* Next components
import type { NextPage } from 'next'

//* Components
import Title from '../Common/LicorneTitle'

//* SVG
import AmazonS3 from '../../svg/Development/AmazonS3'

/**
 * @author Iván Sánchez
 * @name Cloud
 * @description componente de Cloud pág Desarrollo
 */
const Cloud: NextPage = () => {

	return (

		<div className='cloud'>

			<div className="cloud__content">

				<div className="cloud__content__container container">

					<Title
						title="Cloud"
						subtitle="Services"
						text=""
						alternative={false}
					/>

					<p className="cloud__content__container__text">Tu aplicación en un <span>entorno rápido, estable y seguro</span> trabajando sin interrupciones 24/7/365</p>

					<div className="cloud__content__container__images">

						<div className="cloud__content__container__images__individual">
							<AmazonS3 />
						</div>

						<div className="cloud__content__container__images__individual">
							<img src="https://licorne-web.s3.us-east-2.amazonaws.com/desarrollo+/amazonDos.svg" alt="" />
						</div>

						<div className="cloud__content__container__images__individual">
							<img src="https://licorne-web.s3.us-east-2.amazonaws.com/desarrollo+/cloud.svg" alt="" />
						</div>

						<div className="cloud__content__container__images__individual">
							<img src="https://licorne-web.s3.us-east-2.amazonaws.com/desarrollo+/amazonTres.svg" alt="" />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Cloud
//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Google-Ads
 */

const Hero: NextPage = () => {

	return (
		<div>
			<div className='hero_google_ads'>
				<div className='container'>
					<div className='hero_google_ads__container'>
						<Titulo
							text="CREAMOS CAMPAÑAS EN"
							title="Google Ads para que"
							subtitle="tu marca triunfe online"
							alternative={false}
						/>
						<div className='hero_google_ads__container__animation'>
							<div className="hero_google_ads__container__animation__yellow"></div>
							<div className="hero_google_ads__container__animation__blue"></div>
							<div className="hero_google_ads__container__animation__green"></div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Hero
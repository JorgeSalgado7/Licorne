//* Next components
import type { NextPage } from 'next'

//* SVG
import Coin from '../../svg/SocialMedia/Coin'
import CoinTwo from '../../svg/SocialMedia/CoinTwo'
import CoinThree from '../../svg/SocialMedia/CoinThree'
import CoinFour from '../../svg/SocialMedia/CoinFour'
import CoinFive from '../../svg/SocialMedia/CoinFive'

/**
 * @author Iván Sánchez
 * @name Worth
 * @description componente de Social Media
*/
const Worth: NextPage = () => {

	return (

		<div className='worth'>

			<div className='worth__container container'>

				<div className='worth__container__section'>
					<p className="worth__container__section__text">¿TÚ MARCA ESTÁ GENERANDO CONTENIDO DE VALOR?</p>
					<p>Tus perfiles en redes sociales necesitan contenidos estratégicos que aporten valor para generar conciencia de marca e interacciones con tus seguidores, sin importar dónde se encuentren: </p>
				</div>

				<div className='worth__container__list'>
					<h3>Facebook</h3>
					<h3>Instagram</h3>
					<h3>Linkedin</h3>
					<h3>Pinterest</h3>
					<h3>Twitter</h3>
					<h3>TikTok</h3>
				</div>

				<div className='worth__container__animation'>

					<div className='worth__container__animation__one'>
						<Coin />
					</div>

					<div className='worth__container__animation__two'>
						<CoinTwo />
					</div>

					<div className='worth__container__animation__three'>
						<CoinThree />
					</div>

					<div className='worth__container__animation__four'>
						<CoinFour />
					</div>

					<div className='worth__container__animation__five'>
						<CoinFive />
					</div>

				</div>

			</div>

		</div>

	)

}

export default Worth
//* Next components
import type { NextPage } from 'next'

//*Image
import Team from '../../svg/SocialAds/Team'

/**
 * @author Maria Meza
 * @name SocialMeddia
 * @description SocialMeddia Social-Ads
 */

const SocialNetworks: NextPage = () => {

	return (
		<div>
			<div className='social_networks'>
				<div className='container'>
					<div className='social_networks__container'>
						<div className='social_networks__container__image'>
							<Team/>
						</div>
						<div className='social_networks__container__text'>
							<p>Sabías que 8 de cada 10 usuarios de internet tiene al menos un perfil activo en redes sociales...</p>
							<p className="col">¡TE CONECTAMOS CON ELLOS PARA QUE VENDAS MÁS!</p>
						</div>
					</div>
				</div>
			
			</div>
		</div>

	)
}

export default SocialNetworks
//* Next components
import type { NextPage } from 'next'
import NeedImage from '../../svg/SocialAds/NeedImage'

//*Components
import Titulo from '../Common/Title'

//*Image

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Social-Ads
 */

const Need: NextPage = () => {

	return (
		<div>
			<div className='need'>
				<div className='container'>
					<div className='need__container'>
						<Titulo
							text=""
							title="All you need is"
							subtitle="Social Ads"
							alternative={false}
						/>
						<div className='need__container__image'>
							<NeedImage />
						</div>
						<div className='need__container__text'>
							<p>Impactar de manera precisa, profesional y positiva con las personas que desean conocerte o están buscando el servicio que ofreces es nuestra máxima misión; para ello, desarrollaremos la estrategia indicada que te proporcione resultados medibles a través del tiempo, contenido de valor para tu target y comunicación asertiva que genere contactos de calidad y posicione a tu marca en la red social objetivo.</p>
							<p className="llamado">NUESTRAS ESTRATEGIAS DIGITALES DE PUBLICIDAD SON PERSONALIZADAS, PERMITIÉNDOTE LLEGAR A UN PÚBLICO CONCRETO.</p>
						</div>
						<div className='need__container__text_two'>
							<p>¡Escríbenos! Diseñamos planes estratégicos elaborados en captar la atención de tu audiencia.</p>
						</div>

					</div>
				</div>

			</div>
		</div>

	)
}

export default Need
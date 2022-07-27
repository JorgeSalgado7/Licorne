//* Next components
import type { NextPage } from 'next'

//*Image
import ShipTwo from '../../svg/Development/ShipTwo'
import Cloud from '../../svg/SocialAds/Cloud'
import One from '../../svg/SocialAds/One'
import ShipFive from '../../svg/SocialAds/ShipFive'
import ShipSix from '../../svg/SocialAds/ShipSix'
import ShipThree from '../../svg/SocialAds/ShipThree'
/**
 * @author Maria Meza
 * @name Bells
 * @description Bells Social-Ads
 */

const bells: NextPage = () => {

	return (
		<div>
			<div className='bells'>
				<div className='container'>
					<div className='bells__contenedor'>
						<div className='bells__contenedor__text'>
							<p>Nuestros contenidos están enfocados en distinguir y posicionar a tu marca o producto por medio de campañas de pago en Facebook, Instagram, Twitter, Linkedin, Tik tok, Pinterest, entre otras.</p>
						</div>      
						<div className='bells__contenedor__animation'>
							<div className='bells__contenedor__animation__ship_one'>
								<img src="" alt="" />
							</div>
							<div className='bells__contenedor__animation__ship_two'>
								<ShipTwo/>
							</div>
							<div className='bells__contenedor__animation__ship_three'>
								<ShipThree/>
							</div>
							<div className='bells__contenedor__animation__ship_four'>
								<ShipTwo/>
							</div>
							<div className='bells__contenedor__animation__ship_five'>
								<ShipFive/>
							</div>
							<div className='bells__contenedor__animation__ship_six'>
								<ShipSix/>
							</div>
							<div className='bells__contenedor__animation__cloud_one'>
								<One/>
							</div>
							<div className='bells__contenedor__animation__cloud_two'>
								<Cloud/>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</div>

	)
}

export default bells
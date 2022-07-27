//* Next components
import type { NextPage } from 'next'

//*Image
import Face from '../../svg/Google/Face'
import FaceTwo from '../../svg/Google/FaceTwo'
import WalletImage from '../../svg/Google/Wallet-image'

/**
 * @author Maria Meza
 * @name Wallet
 * @description Wallet-Google-Ads
 */

const Wallet: NextPage = () => {

	return (
		<div>
			<div className='wallet'>
				<div className='container'>
					<div className='wallet__contenedor'>
						<div className='wallet__contenedor__parrafoResponsive'>
							<p><span>Crece tus prospectos y tu cartera de clientes</span> a través de estrategías de marketing digital personalizadas que consiguen leads en el corto plazo.</p>
						</div>
						<div className="wallet__contenedor__imagen">
							<div className="wallet__contenedor__imagen__face">
								<div className="wallet__contenedor__imagen__face__img">
									<Face/>    
								</div>
								<div className="wallet__contenedor__imagen__face__img2">
									<FaceTwo/>
                                  
								</div>
								<div className="wallet__contenedor__imagen__face__img3">
									<FaceTwo/>
								</div>
								<div className="wallet__contenedor__imagen__face__img4">
									<Face/>               
								</div>
							</div>
							<div className="wallet__contenedor__imagen__wallet">
								<WalletImage/>
							</div>
						</div>
					</div>
				</div>
				
			</div>
                
		</div>

	)
}

export default Wallet
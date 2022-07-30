//* Next components
import type { NextPage } from 'next'

//* Image
import Bottle from '../../svg/Web/Bottle'
import BottleTwo from '../../svg/Web/BottleTwo'
import Button from '../../svg/Web/Button'
import Circle from '../../svg/Web/Circle'
import Closing from '../../svg/Web/Closing'
import Cookie from '../../svg/Web/Cookie'
import CookieTwo from '../../svg/Web/CookiesTwo'

//*Components
import Title from '../Common/LicorneTitle'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Web
 */

const Hero: NextPage = () => {

	return (
		<div>
			<div className='hero'>
				<div className='container'>

					<Title
						text=""
						title="Diseño"
						subtitle="Web"
						alternative={false}
					/>

					<div className="hero__figCirculo"></div>
					<div className="hero__imgCirculo">
						<Circle />
					</div>

					<div className="hero__uiux">
						<div className="hero__uiux__izquierda">
							<div className="hero__uiux__arriba">
								<h2>UI</h2>
							</div>
							<div className="hero__uiux__abajo">
								<div className='hero__uiux__abajo__boton'>
									<Button />
								</div>
								<div className='hero__uiux__abajo__botellas'>
									<Bottle />
								</div>

								<div className="hero__uiux__abajo__galletas__img">
									<Cookie />
								</div>
							</div>
						</div>
						<div className="hero__uiux__derecha">
							<div className="hero__uiux__arriba">
								<h1>UX</h1>
							</div>
							<div className="hero__uiux__abajo">
								<div className='hero__uiux__abajo__botonDos'>
									<Closing />
								</div>

								<div className='hero__uiux__abajo__botellasDos'>
									<BottleTwo />
								</div>

								<div className="hero__uiux__abajo__galletas__imgDos">
									<CookieTwo />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Hero
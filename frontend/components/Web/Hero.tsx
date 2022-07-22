//* Next components
import type { NextPage } from 'next'

//* Image
import Bottle from '../../svg/web/Bottle'
import BottleTwo from '../../svg/web/BottleTwo'
import Button from '../../svg/web/Button'
import Circle from '../../svg/web/Circle'
import Closing from '../../svg/web/Closing'
import Cookie from '../../svg/web/Cookie'
import CookieTwo from '../../svg/web/CookiesTwo'

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada Web
 */

const Hero: NextPage = () => {

	return (

		<div className='hero'>
			<div className='container'>

				<Titulo 
					alternativo=""
					superior="Diseño" 
					inferior="Web"
					invertido={false}
					
				/>
				<div className="hero__figCirculo"></div>
				<div className="hero__imgCirculo">
					<Circle/>
				</div>

				<div className="hero__uiux">
					<div className="hero__uiux__izquierda">
						<div className="hero__uiux__arriba">
							<h2>UI</h2>
						</div>
						<div className="hero__uiux__abajo">
							<div className='hero__uiux__abajo__boton'>
								<Button/>
							</div>
							<div className='hero__uiux__abajo__botellas'>
								<Bottle/>
							</div>
							
							<div className="hero__uiux__abajo__galletas__img">
								<Cookie/>
							</div>
						</div>
					</div>
					<div className="hero__uiux__derecha">
						<div className="hero__uiux__arriba">
							<h1>UX</h1>
						</div>
						<div className="hero__uiux__abajo">
							<div className='hero__uiux__abajo__botonDos'>
								<Closing/>
							</div>

							<div className='hero__uiux__abajo__botellasDos'>
								<BottleTwo/>
							</div>
							
							<div className="hero__uiux__abajo__galletas__imgDos">
								<CookieTwo/>
							</div>
						</div>
					</div>
				</div> 
			</div>
		</div>

	)
}

export default Hero
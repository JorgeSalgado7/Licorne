//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'
import Point from '../../svg/LeanStartup/Point'
import Pow from '../../svg/Programatic/Pow'
import Speaker from '../../svg/Programatic/Speaker'
import Padlock from '../../svg/Programatic/Padlock'
import Form from '../../svg/Programatic/Form'

//*Image

/**
 * @author Maria Meza
 * @name Menu
 * @description Menu Programatic
 */

const Menu: NextPage = () => {

	return (
		<div>
			<div className='menu'>
				<div className='container'>
					<div className='menu__container'>

						<Titulo
							text=""
							title="Soluciones programáticas a la medida de tus éxitos"
							subtitle=""
							alternative={false}
						/>
						<div className='menu__container__text'>
							<p>Generamos estrategias personalizadas que promueven tu empresa en los espacios de mayor demanda publicitaria en internet con la firme intención de destacar a tu marca en el ecosistema digital y llegar al usuario que te permita generar ganancias y no te ignore como en la publicidad tradicional.</p>
							{/* <LinkPersonalizado
		url="/contacto"
		texto="¡SÁCALE PROVECHO A TU INVERSIÓN!"
	/> */}
						</div>
						<div className='menu__container__contenido_list'>
							<div className="menu__container__contenido_list__option">

								<div className="menu__container__contenido_list__option__responsive">
									<div className="menu__container__contenido_list__option__responsive__image">
										<Point />
									</div>
									<h3>IMPACTA AL USUARIO ADECUADO</h3>

									<div className="menu__container__contenido_list__option__responsive__img">

										<Pow />

									</div>
								</div>

								<div className="menu__container__contenido_list__option__measure">
									<div className="menu__container__contenido_list__option__measure__img">
										<Point />
									</div>
									<h3>VENTAJAS PUBLICITARIAS COMPETITIVAS</h3>
									<div className="menu__container__contenido_list__option__measure__imagen">

										<Speaker />

									</div>
								</div>

								<div className="menu__container__contenido_list__option__segurity">
									<div className="menu__container__contenido_list__option__segurity__img">
										<Point />
									</div>
									<h3>SEGURIDAD PARA TU MARCA</h3>
									<div className="menu__container__contenido_list__option__segurity__imagen">

										<Padlock />

									</div>
								</div>

								<div className="menu__container__contenido_list__option__support">
									<div className="menu__container__contenido_list__option__support__img">
										<Point />
									</div>
									<h3>FORMATOS REALMENTE ATRACTIVOS</h3>
									<div className="menu__container__contenido_list__option__support__imagen">

										<Form />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Menu
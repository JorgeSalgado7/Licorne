//* Next components
import type { NextPage } from 'next'

//* SVG
import Point from '../../svg/LeanStartup/Point'
import Data from '../../svg/LeanStartup/Data'
import Developing from '../../svg/LeanStartup/Developing'
import Strategy from '../../svg/LeanStartup/Strategy'
import Implementation from '../../svg/LeanStartup/Implementation'
import Measuring from '../../svg/LeanStartup/Measuring'
import Relationship from '../../svg/LeanStartup/Relationship'

/**
 * @author Iván Sánchez
 * @name WeDo
 * @description Menu multiple hacemos
 */
const WeDo: NextPage = () => {

	return (

		<div className='we_do'>
			<div className='we_do__container container'>

				{/* TEXTO DE LA IZQUIERDA */}
				<div className='we_do__container__text'>
					<p>Vender a tus clientes potenciales es una gran idea, pero vender a tus <span> no clientes </span> ¡es aún mejor! Juntos encontraremos
						la ruta que tu compañía necesita para innovar y llegar al océano azul. Desde <i>early</i> adopters a clientes recurrentes y recomendaciones
						de persona a persona. Tu producto impactará en el mercado.</p>
					<h1>Así lo hacemos:</h1>
				</div>

				{/* EMPEIZA EL MENU DE OPCIONES HOVER */}
				<div className='we_do__container__menu'>
					<div className="we_do__container__menu__options">

						{/* OPCION DATA */}
						<div className="we_do__container__menu__options__data">
							<div className="we_do__container__menu__options__data__point">
								<div className='we_do__container__menu__options__data__point__image'>
									<Point />
								</div>
							</div>
							<div className="we_do__container__menu__options__data__no_flex">
								<h3>DATA ANALISIS</h3>
								<h3>LEAN STARTUP</h3>
							</div>
							<div className="we_do__container__menu__options__data__image">
								<Data />
							</div>
						</div>

						{/* OPCION DESARROLLO */}
						<div className="we_do__container__menu__options__developing">
							<div className="we_do__container__menu__options__developing__point">
								<div className='we_do__container__menu__options__developing__point__image'>
									<Point />
								</div>
							</div>
							<div className="we_do__container__menu__options__developing__no_flex">
								<h3>DESARROLLO UI/UX</h3>
								<h3>APLICACIONES MÓVILES</h3>
								<h3>DESARROLLO WORDPRESS</h3>
							</div>
							<div className="we_do__container__menu__options__developing__image">
								<Developing />
							</div>
						</div>

						{/* OPCION ESTRATEGIA */}
						<div className="we_do__container__menu__options__strategy">
							<div className="we_do__container__menu__options__strategy__point">
								<div className='we_do__container__menu__options__strategy__point__image'>
									<Point />
								</div>
							</div>
							<div className="we_do__container__menu__options__strategy__no_flex">
								<h3>ESTRATEGIA DE MARCA</h3>
								<h3>ESTRATEGIA DIGITAL</h3>
								<h3>ESTRATEGIA ECOMMERCE</h3>
								<h3>DESARROLLO DE ECOMMERCE</h3>
							</div>
							<div className="we_do__container__menu__options__strategy__image">
								<Strategy />
							</div>
						</div>

						{/* OPCION IMPLEMENTACION */}
						<div className="we_do__container__menu__options__implementation">
							<div className="we_do__container__menu__options__implementation__point">
								<div className='we_do__container__menu__options__implementation__point__image'>
									<Point />
								</div>
							</div>
							<h3>IMPLEMENTACIÓN</h3>
							<div className="we_do__container__menu__options__implementation__image">
								<Implementation />
							</div>
						</div>

						{/* OPCION MEDICION */}
						<div className="we_do__container__menu__options__measuring">
							<div className="we_do__container__menu__options__measuring__point">
								<div className='we_do__container__menu__options__measuring__point__image'>
									<Point />
								</div>
							</div>
							<div className="we_do__container__menu__options__measuring__no_flex">
								<h3>MEDICIÓN</h3>
								<h3>MEJORA CONTINUA</h3>
							</div>
							<div className="we_do__container__menu__options__measuring__image">
								<Measuring />
							</div>
						</div>

						{/* OPCION RELACIONAMIENTO */}
						<div className="we_do__container__menu__options__relationship">
							<div className="we_do__container__menu__options__relationship__point">
								<div className='we_do__container__menu__options__relationship__point__image'>
									<Point />
								</div>
							</div>
							<h3>RELACIONAMIENTO MARCA-CLIENTE</h3>
							<div className="we_do__container__menu__options__relationship__image">
								<Relationship />
							</div>
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default WeDo
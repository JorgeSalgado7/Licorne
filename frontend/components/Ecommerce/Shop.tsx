//* Next components
import type { NextPage } from 'next'

//* SVG
import Responsive from '../../svg/Ecommerce/Responsive'
import Size from '../../svg/Ecommerce/Size'
import Security from '../../svg/Development/Security'
import Training from '../../svg/Ecommerce/Training'
import Retouch from '../../svg/Ecommerce/Retouch'
import Charge from '../../svg/Ecommerce/Charge'
import Correction from '../../svg/Ecommerce/Correction'
import Cloud from '../../svg/Ecommerce/Cloud'
import Payment from '../../svg/Ecommerce/Payment'
import Send from '../../svg/Ecommerce/Send'
import Networks from '../../svg/Ecommerce/Networks'
import Point from '../../svg/LeanStartup/Point'

/**
 * @author Iván Sánchez
 * @name Shop
 * @description componente responsive de ecommerce
 */
const Shop: NextPage = () => {

	return (

		<div>

			<div className='shop'>

				<div className='shop__container container'>

					<div className='shop__container__left'>
						<div className='shop__container__left__title'>
							<h1><span>Todas nuestras</span>  tiendas online <span>incluyen:</span> </h1>
						</div>
					</div>

					<div className="shop__container__rigth">

						<div className="shop__container__rigth__options">

							<div className="shop__container__rigth__options__responsive">

								<div className="shop__container__rigth__options__responsive__point">
									<Point/>
								</div>

								<h3>DISEÑO RESPONSIVO</h3>

								<div className="shop__container__rigth__options__responsive__image">
									<Responsive />
								</div>

							</div>

							<div className="shop__container__rigth__options__size">

								<div className="shop__container__rigth__options__size__point">
									<Point/>
								</div>

								<h3>DISEÑO A LA MEDIDA</h3>

								<div className="shop__container__rigth__options__size__image">
									<Size />
								</div>

							</div>

							<div className="shop__container__rigth__options__security">

								<div className="shop__container__rigth__options__security__point">
									<Point/>
								</div>

								<h3>SEGURIDAD SSL</h3>

								<div className="shop__container__rigth__options__security__image">
									<Security/>
								</div>

							</div>

							<div className="shop__container__rigth__options__training">

								<div className="shop__container__rigth__options__training__point">
									<Point/>
								</div>

								<h3>SOPORTE Y CAPACITACIÓN</h3>

								<div className="shop__container__rigth__options__training__image">
									<Training/>
								</div>

							</div>

							<div className="shop__container__rigth__options__retouch">

								<div className="shop__container__rigth__options__retouch__point">
									<Point/>
								</div>

								<h3>RETOQUE Y OPTIMIZACIÓN DE IMÁGENES</h3>

								<div className="shop__container__rigth__options__retouch__image">
									<Retouch/>
								</div>

							</div>

							<div className="shop__container__rigth__options__charge">

								<div className="shop__container__rigth__options__charge__point">
									<Point/>
								</div>

								<h3>CARGA DE PRODUCTOS</h3>

								<div className="shop__container__rigth__options__charge__image">
									<Charge />
								</div>

							</div>

							<div className="shop__container__rigth__options__correction">

								<div className="shop__container__rigth__options__correction__point">
									<Point/>
								</div>

								<h3>CORRECCIÓN DE ESTILO</h3>

								<div className="shop__container__rigth__options__correction__image">
									<Correction />
								</div>

							</div>

							<div className="shop__container__rigth__options__cloud">

								<div className="shop__container__rigth__options__cloud__point">
									<Point/>
								</div>

								<h3>CLOUD HOSTING FULL SSD Y DOMINIO .COM</h3>

								<div className="shop__container__rigth__options__cloud__image">
									<Cloud />
								</div>

							</div>

							<div className="shop__container__rigth__options__payment">

								<div className="shop__container__rigth__options__payment__point">
									<Point/>
								</div>

								<h3>PASARELAS DE PAGO AVANZADAS</h3>

								<div className="shop__container__rigth__options__payment__image">
									<Payment />
								</div>

							</div>

							<div className="shop__container__rigth__options__send">

								<div className="shop__container__rigth__options__send__point">
									<Point/>
								</div>

								<h3>MÉTODOS DE ENVÍO AVANZADOS</h3>

								<div className="shop__container__rigth__options__send__image">
									<Send />
								</div>

							</div>

							<div className="shop__container__rigth__options__networks">

								<div className="shop__container__rigth__options__networks__point">
									<Point/>
								</div>

								<h3>CAMPAÑA DE FACEBOOK E INSTAGRAM</h3>

								<div className="shop__container__rigth__options__networks__images">
									<Networks />
								</div>

							</div>

							<div className="clic">
								{/* LINK PERSONALIZADO */}
							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Shop
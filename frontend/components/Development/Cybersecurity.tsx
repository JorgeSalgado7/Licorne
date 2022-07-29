//* Next components
import type { NextPage } from 'next'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Ssl from '../../svg/Development/Ssl'
import Sure from '../../svg/Development/ Sure'
import Top from '../../svg/Development/Top'
import Security from '../../svg/Development/Security'

/**
 * @author Iván Sánchez
 * @name Cybersecurity
 * @description Componente de ciberseguridad del sitio
 */
const Cybersecurity: NextPage = () => {

	return (

		<div className='cybersecurity'>

			<div className="cybersecurity__content">

				<div className="cybersecurity__content__container container">

					<Titulo
						title="Ciberseguridad"
						subtitle="y protección"
						alternativo=""
						invertido={false}
					/>

					<p className="cybersecurity__content__container__text">Tu aplicación siguiendo <span>estándares mundiales en ciberseguridad como ISO 27000 y OWASP Top 10,</span> protegiendo tu información y la de tus clientes en todo momento.</p>

					<div className="cybersecurity__content__container__images">

						<div className="cybersecurity__content__container__images__individual">
							<Ssl />
						</div>

						<div className="cybersecurity__content__container__images__individual">
							<Sure />
						</div>

						<div className="cybersecurity__content__container__images__individual">
							<Top />
						</div>

						<div className="cybersecurity__content__container__images__individual">
							<Security />
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Cybersecurity
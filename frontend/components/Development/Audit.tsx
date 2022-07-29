//* Next components
import type { NextPage } from 'next'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Analitycs from '../../svg/Development/Analitycs'
import Insight from '../../svg/Development/ Insight'
import SecurityApp from '../../svg/Development/SecurityApp'
import Standards from '../../svg/Development/ Standards'
import Policy from '../../svg/Development/Policy'
import Government from '../../svg/Development/Government'

/**
 * @author Iván Sánchez
 * @name Audit
 * @description Componente de auditoria para desarrollo
*/
const Audit: NextPage = () => {

	return (

		<div className='audit'>

			<div className="audit__content">

				<div className="audit__content__container container">

					<Titulo
						title="Auditorías"
						subtitle=""
						alternativo=""
						invertido={false}
					/>

					<p className="audit__content__container__text"><span>Hackeo Ético</span> a tu aplicación <span>para detectar las vulnerabilidades y los riesgos informáticos</span> que un ciberdelincuente podría utilizar en tu contra o en contra de tus clientes.</p>

					<p className="audit__content__container__text_two">Tus clientes potenciales esperan por tu aplicación.</p>

					<div className="audit__content__container__images">

						<div className="audit__content__container__images__individual">
							<Analitycs />
							<p>ANÁLISIS DE VULNERABILIDADES</p>
						</div>

						<div className="audit__content__container__images__individual">
							<Insight />
							<p>PRUEBAS DE PENETRACIÓN</p>
						</div>

						<div className="audit__content__container__images__individual">
							<SecurityApp />
							<p>SEGURIDAD DE DATOS A TRAVÉS DE TU APLICACIÓN</p>
						</div>

						<div className="audit__content__container__images__individual">
							<Standards />
							<p>CUMPLIMIENTO DE ESTÁNDARES DE SEGURIDAD DE TI (OWASP, ISO 27000, NIST)</p>
						</div>

						<div className="audit__content__container__images__individual">
							<Policy />
							<p>POLÍTICAS DE SEGURIDAD</p>
						</div>

						<div className="audit__content__container__images__individual">
							<Government />
							<p>GOBIERNO DE TI</p>

						</div>

					</div>

				</div>

			</div>
		</div>

	)

}

export default Audit
//* Next components
import type { NextPage } from 'next'

//* Components
import Titulo from '../Common/Title'

//* SVG
import Test from '../../svg/Development/Test'
import Research from '../../svg/Development/Research'
import Support from '../../svg/Development/Support'
import Wireframing from '../../svg/Development/Wireframing'
import Prototyping from '../../svg/Development/Prototyping'
import Desing from '../../svg/Development/Design'

/**
 * @author Iván Sánchez
 * @name UX
 * @description componente de UX pág Desarrollo
*/
const Ux: NextPage = () => {

	return (

		<div className='ux'>

			<div className="ux__content">

				<div className="ux__content__container container">

					<Titulo
						title="UX User"
						subtitle="Experience."
						alternativo=""
						invertido={false}
					/>

					<p className="ux__content__container__text">Estrategia, tecnología y creatividad; todo lo que necesitas para <span>pasar del océano rojo al océano azul</span> mediante una aplicación funcional que posea un hermoso diseño, el cual se vea y se sienta fácil de usar para que resuelva las necesidades de tus clientes potenciales.</p>

					<div className="ux__content__container__images">

						<div className="ux__content__container__images__individual">
							<Research />
							<p>INVESTIGACIÓN DE MERCADOS</p>
						</div>

						<div className="ux__content__container__images__individual">
							<Test />
							<p>TEST DE USABILIDAD</p>
						</div>

						<div className="ux__content__container__images__individual">
							<Wireframing />
							<p>WIREFRAMING</p>
						</div>

						<div className="ux__content__container__images__individual">
							<Support />
							<p>SOPORTE DE PRODUCCIÓN</p>
						</div>

						<div className="ux__content__container__images__individual">
							<Prototyping />
							<p>PROTOTYPING</p>
						</div>

						<div className="ux__content__container__images__individual">
							<Desing />
							<p>DISEÑO WEB</p>
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Ux
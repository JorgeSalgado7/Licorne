//* Next components
import type { NextPage } from 'next'

//* Image
import Point from '../../svg/Web/Point'
import Ui from '../../svg/Web/Ui'
import Ux from '../../svg/Web/Ux'
import WorkShops from '../../svg/Web/Workshop'
import Illustration from '../../svg/Web/Illustration'

//*Components
import Titulo from '../Common/LicorneTitle'

/**
 * @author Maria Meza
 * @name Creative
 * @description Creative Web
 */

const Creative: NextPage = () => {

	return (
		<div>
			<div className='creative'>
				<div className='container'>
					<div className='creative__contenedor'>

						<Titulo
							text="CREAMOS"
							title="Sitios web creativos"
							subtitle="que conectan con tus usuarios"
							alternative={false}
						/>

						<div className='creative__contenedor__parrafoCreativos'>
							<p>Nuestras creaciones son estratégicamente diseñadas con base en workshops, wireframing y experiencia de usuario (UX), dando como resultado sitios web que refuerzan la credibilidad y comunican mensajes poderosos que convierten visitas en leads.</p>
						</div>

						<div className="creative__contenedor__menuCreative">

							<div className="creative__contenedor__menuCreative__workshops">
								<div className="creative__contenedor__menuCreative__workshops__imgWorkshops">
									<div className='creative__contenedor__menuCreative__workshops__imgWorkshops__imagenWorkshopsBlock'>
										<Point />
									</div>
								</div>
								<h3>WORKSHOPS & BRAINSTORMING</h3>
								<div className="creative__contenedor__menuCreative__workshops__imagenWorkshops">
									<WorkShops />
								</div>
							</div>

							<div className="creative__contenedor__menuCreative__ux">
								<div className="creative__contenedor__menuCreative__ux__imgUx">
									<div className='creative__contenedor__menuCreative__ux__imgUx__imagenUxBlock'>
										<Point />
									</div>
								</div>
								<h3>WIREFRAMING & UX DESING</h3>
								<div className="creative__contenedor__menuCreative__ux__imagenUx">
									<Ux />
								</div>
							</div>

							<div className="creative__contenedor__menuCreative__ui">
								<div className="creative__contenedor__menuCreative__ui__imgUi">
									<div className='creative__contenedor__menuCreative__ui__imgUi__imagenUiBlock'>
										<Point />
									</div>
								</div>
								<h3>UI DESING CONCEPT & PROTOTYPING</h3>
								<div className="creative__contenedor__menuCreative__ui__imagenUi">
									<Ui />
								</div>
							</div>

							<div className="creative__contenedor__menuCreative__illustration">
								<div className="creative__contenedor__menuCreative__illustration__imgIllustration">
									<div className='creative__contenedor__menuCreative__illustration__imgIllustration__imagenIllustrationBlock'>
										<Point />
									</div>
								</div>
								<h3>ICONOGRAPHY & ILLUSTRATION</h3>
								<div className="creative__contenedor__menuCreative__illustration__imagenIllustration">
									<Illustration />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Creative
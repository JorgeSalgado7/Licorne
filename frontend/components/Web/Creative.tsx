//* Next components
import type { NextPage } from 'next'
import Image from 'next/image'

//* Image

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name Creative
 * @description Creative Web
 */

const Creative: NextPage = () => {

	return (
		<div className='creative'>
			
			<div className='container creative__contenedor'>

				<Titulo 
					alternativo="CREAMOS"
					superior="Sitios web creativos" 
					inferior="que conectan con tus usuarios"
					invertido={false}
				/>

				<div className='creative__contenedor__parrafoCreativos'>
					<p>Nuestras creaciones son estratégicamente diseñadas con base en workshops, wireframing y experiencia de usuario (UX), dando como resultado sitios web que refuerzan la credibilidad y comunican mensajes poderosos que convierten visitas en leads.</p>
				</div>
				<div className="creative__contenedor__menuCreative">
					<div className="creative__contenedor__menuCreative__workshops">
						<div className="creative__contenedor__menuCreative__workshops__imgWorkshops">
							<div className='creative__contenedor__menuCreative__workshops__imgWorkshops__imagenWorkshopsBlock'>
								<Image
									src="https://licorne-web.s3.us-east-2.amazonaws.com/consultoria+/punto.svg"
									width="17.22px"
									height="17.22px"
									layout="responsive"
									alt=""
								/>
							</div>
						</div>
						<h3>WORKSHOPS & BRAINSTORMING</h3>
						<div className="creative__contenedor__menuCreative__workshops__imagenWorkshops">
							<Image
								src="https://licorne-web.s3.us-east-2.amazonaws.com/web/workshops.svg"
								width="159px"
								height="132px"
								layout="responsive"
								alt=""
							/>
						</div>
					</div>
					<div className="creative__contenedor__menuCreative__ux">
						<div className="creative__contenedor__menuCreative__ux__imgUx">
							<div className='creative__contenedor__menuCreative__ux__imgUx__imagenUxBlock'>
								<Image
									src="https://licorne-web.s3.us-east-2.amazonaws.com/consultoria+/punto.svg"
									width="17.22px"
									height="17.22px"
									layout="responsive"
									alt=""
								/>
							</div>
						</div>
						<h3>WIREFRAMING & UX DESING</h3>
						<div className="creative__contenedor__menuCreative__ux__imagenUx"> 
							<Image
								src="https://licorne-web.s3.us-east-2.amazonaws.com/web/ux.svg"
								width="159px"
								height="95px"
								layout="responsive"
								alt=""
							/>
						</div>
					</div>

					<div className="creative__contenedor__menuCreative__ui">
						<div className="creative__contenedor__menuCreative__ui__imgUi">
							<div className='creative__contenedor__menuCreative__ui__imgUi__imagenUiBlock'>
								<Image
									src="https://licorne-web.s3.us-east-2.amazonaws.com/consultoria+/punto.svg"
									width="17.22px"
									height="17.22px"
									layout="responsive"
									alt=""
								/>
							</div>
						</div>
						<h3>UI DESING CONCEPT & PROTOTYPING</h3>
						<div className="creative__contenedor__menuCreative__ui__imagenUi"> 
							<Image
								src="https://licorne-web.s3.us-east-2.amazonaws.com/web/ui.svg"
								width="159px"
								height="110px"
								layout="responsive"
								alt=""
							/>
						</div>
					</div>

					<div className="creative__contenedor__menuCreative__illustration">
						<div className="creative__contenedor__menuCreative__illustration__imgIllustration">
							<div className='creative__contenedor__menuCreative__illustration__imgIllustration__imagenIllustrationBlock'>
								<Image
									src="https://licorne-web.s3.us-east-2.amazonaws.com/consultoria+/punto.svg"
									width="17.22px"
									height="17.22px"
									layout="responsive"
									alt=""
								/>
							</div>  
						</div>
						<h3>ICONOGRAPHY & ILLUSTRATION</h3>
						<div className="creative__contenedor__menuCreative__illustration__imagenIllustration"> 
							<Image
								src="https://licorne-web.s3.us-east-2.amazonaws.com/web/illustration.svg"
								width="69px"
								height="100px"
								layout="responsive"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Creative
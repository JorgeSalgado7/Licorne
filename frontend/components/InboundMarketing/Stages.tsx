//* Next components
import type { NextPage } from 'next'

//* SVG
import Data from '../../svg/InboundMarketing/Data'
import Devs from '../../svg/InboundMarketing/Devs'
import Strategy from '../../svg/InboundMarketing/Strategy'
import Implementation from '../../svg/InboundMarketing/Implementation'
import Point from '../../svg/LeanStartup/Point'

/**
 * @author Iván Sánchez
 * @name Stages
 * @description Portada de Inboun Marketing
 */
const Stages: NextPage = () => {

	return (

		<div className="stages_inbound">

			<div className="stages_inbound__container container">

				<div className="stages_inbound__container__left">

					<div className="stages_inbound__container__left__section">
						<p>
							El Inbound Marketing a la medida de tus metas se logra mediante una estrategia digital, herramientas de automatización, machine learning, creatividad, innovación, tecnología y una increíble experiencia de usuario. <strong>Trabajamos todas las etapas del embudo de marketing. </strong>
						</p>
					</div>

				</div>

				<div className="stages_inbound__container__rigth">

					<div className="stages_inbound__container__rigth__options">

						<div className="stages_inbound__container__rigth__options__data">

							<div className="stages_inbound__container__rigth__options__data__point">
								<Point />
							</div>

							<div className="stages_inbound__container__rigth__options__data__no_flex">
								<h3>APRENDIZAJE Y <br/>
									DESCUBRIMIENTO</h3>
							</div>

							<div className="stages_inbound__container__rigth__options__data__image">
								<Data />
							</div>

						</div>
	
						<div className="stages_inbound__container__rigth__options__devs">

							<div className="stages_inbound__container__rigth__options__devs__point">
								<Point />
							</div>

							<div className="stages_inbound__container__rigth__options__devs__no_flex">
								<h3>RECONOCIMIENTO <br/>
									DEL PROBLEMA</h3>
							</div>

							<div className="stages_inbound__container__rigth__options__devs__image">
								<Devs/>
							</div>

						</div>

						<div className="stages_inbound__container__rigth__options__strategy">

							<div className="stages_inbound__container__rigth__options__strategy__point">
								<Point />
							</div>

							<div className="stages_inbound__container__rigth__options__strategy__no_flex">
								<h3>CONSIDERACIÓN <br/>
									DE LA SOLUCIÓN</h3>
							</div>

							<div className="stages_inbound__container__rigth__options__strategy__image">
								<Strategy />
							</div>

						</div>

						<div className="stages_inbound__container__rigth__options__implementation">

							<div className="stages_inbound__container__rigth__options__implementation__point">
								<Point />
							</div>

							<h3>DECISIÓN DE COMPRA </h3>

							<div className="stages_inbound__container__rigth__options__implementation__image">
								<Implementation />
							</div>

						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default Stages
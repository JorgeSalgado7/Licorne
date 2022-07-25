//* Next components
import type { NextPage } from 'next'

//* SVG
import Ship from '../svg/Development/Ship'
import ShipTwo from '../svg/Development/ShipTwo'
import Paper from '../svg/Development/Paper'
import Smoke from '../svg/Development/Smoke'
import Planet from '../svg/Development/Planet'
import Landing from '../svg/Development/Landing'

/**
 * @author Iván Sánchez
 * @name SVG_Stages
 * @description Portada pág Desarrollo
 */
const Stages: NextPage = () => {

	return (

		<div className="stages">

			<div className="stages__container container">

				<div className="stages__container__left">

					<div className="stages__container__left__title">
						<h2>Te llevamos desde la idea al MVP y al</h2>
						<h1>producto terminado.</h1>
					</div>

					<div className="stages__container__left__title_responsive">
						<h2>Te llevamos desde la idea al MVP y al</h2>
						<h1>producto terminado.</h1>
					</div>

					<div className="stages__container__left__section_three">
						<p>Licorne® Startup Kings lleva a cabo tu proyecto basado en las metodologias Lean Startup, Agile, Scrum, y DevOps. Desarrollamos tu aplicación web en todas las etapas MVP, alfa, beta y producto terminado con estándares internacionales de calidad y enfocados en lograr tus metas.</p>
					</div>

					<div className="stages__container__left__section_responsive_three">
						<p>Licorne® Startup Kings lleva a cabo tu proyecto basado en las metodologias Lean Startup, Agile, Scrum, y DevOps. Desarrollamos tu aplicación web en todas las etapas MVP, alfa, beta y producto terminado con estándares internacionales de calidad y enfocados en lograr tus metas.</p>
					</div>

					<div className="stages__container__left__section_responsive">
						<p>¿ESTÁS POR INICIAR UN NUEVO PROYECTO?</p>
					</div>

					<div className="stages__container__left__section_responsive_two">
						<p>¿QUIERES EXPLORAR NUEVOS MERCADOS O NUEVOS PRODUCTOS?</p>
					</div>

				</div>

				<div className="stages__container__rigth">

					<div className="stages__container__rigth__section">
						<p>¿ESTÁS POR INICIAR UN NUEVO PROYECTO?</p>
					</div>

					<div className="stages__container__rigth__section_two">
						<p>¿QUIERES EXPLORAR NUEVOS MERCADOS O NUEVOS PRODUCTOS?</p>
					</div>

					<div className="stages__container__rigth__animation">

						<div className="stages__container__rigth__animation__ship">
							<Ship />
						</div>

						<div className="stages__container__rigth__animation__paper">
							<Paper />
						</div>

						<div className="stages__container__rigth__animation__smoke">
							<Smoke />
						</div>

						<div className="stages__container__rigth__animation__ship_two">
							<ShipTwo/>
						</div>

						<div className="stages__container__rigth__animation__planet">
							<Planet />
						</div>

						<div className="stages__container__rigth__animation__landing">
							<Landing />
						</div>

					</div>
					
				</div>

			</div>

		</div>

	)

}

export default Stages
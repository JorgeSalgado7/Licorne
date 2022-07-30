//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/LicorneTitle'

/**
 * @author Maria Meza
 * @name Vision
 * @description Portada Mision y vision
 */

const Vision: NextPage = () => {

	return (
		<div>
			<div className='vision'>
				<div className='container'>
					<div className='vision__contenedor'>

						<Titulo
							text=""
							title="Visión"
							subtitle=""
							alternative={false}
						/>

						<div className='vision__contenedor__text'>
							<p>Innovar con estrategias, metodologías, tecnologías y marketing digital para ayudar a nuestros clientes
								a <span>construir y potenciar compañías exitosas y disruptoras. </span></p>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Vision
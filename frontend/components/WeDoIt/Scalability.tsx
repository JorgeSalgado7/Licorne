//* Next components
import type { NextPage } from 'next'

//* SVG
import Dolars from '../../svg/WeDoIt/Dolars'

/**
 * @author Iván Sánchez
 * @name Scalability
 * @description Animación de portada de consultoria
 */
const Scalability: NextPage = () => {

	return (

		<div>

			<div className='escalabilidad'>

				<div className='container'>

					<div className='parrafoEscalabilidad'>
						<p>ALCANZAMOS JUNTOS LA ESCALABILIDAD</p>
					</div>

					<div className='animacionEscalabilidad'>
						<Dolars/>
					</div>

				</div>

			</div>

		</div>

	)

}

export default Scalability
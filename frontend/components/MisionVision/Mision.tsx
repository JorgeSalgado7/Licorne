//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name Mision
 * @description Portada Mision y vision
 */

const Mision: NextPage = () => {

	return (
		<div>
			<div className='mision'>
				<div className='container'>
					<div className='mision__contenedor'>
						<Titulo
							text=""
							title=""
							subtitle="Misión"
							alternative={false}
						/>
						<div className='mision__contenedor__text'>
							<p><span>Desarrollar y potenciar compañias sin importar la fase en que se encuantren, </span>
								cimentados en nuestros pilares: Lean startup, tecnología y marketing digital</p>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Mision
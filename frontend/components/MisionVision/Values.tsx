//* Next components
import type { NextPage } from 'next'

/**
 * @author Maria Meza
 * @name Values
 * @description Portada Mision y vision
 */

const Values: NextPage = () => {

	return (
		<div>
			<div className='values'>
				<div className='container'>
					<div className='values__container'>
						<div className="title">
							<p>NUESTROS VALORES SON LA DIFERENCIA,</p>
							<h1 className="title__top">¡échales un <span className="title__low">ojito!</span></h1>
						</div>

						<div className='values__container__animation'>
							<div className='values__container__animation__eye'></div>
							<div className='values__container__animation__two'></div>
							<div className='values__container__animation__mouth'></div>
						</div>
						<div className='values__container__list'>
							<h2>- Valor al cliente externo e interno</h2>
							<h2>- Resultados</h2>
							<h2>- Innovación</h2>
							<h2>- Integridad</h2>
							<h2>- Diversidad cultural</h2>
							<h2>- Compromiso mutuo</h2>
							<h2>- Eficiencia</h2>
							<h2>- Respeto</h2>
							<h2>- Abrazamos la incertidumbre</h2>
							<h2>- Kaizen</h2>
							<h2>- Simplicidad</h2>
						</div>
					</div>
				</div>
			
			</div>
		</div>

	)
}

export default Values
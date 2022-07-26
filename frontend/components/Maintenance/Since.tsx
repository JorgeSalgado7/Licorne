//* Next components
import type { NextPage } from 'next'

/**
 * @author Maria Meza
 * @name Since
 * @description Portada Web
 */

const since: NextPage = () => {
	return (
		<div>
			<div className='since'>
				<div className='container'>
					<div className='since__container'>
						<div className='since__container__text'>
							<p className="tit">DESDE...</p>
							<ul>
								<li>Actualización o cambio de imágenes.</li>
								<li>Actualización o cambio de datos del texto.</li>
								<li>Corrección de errores o fallas en el sitio.</li>
								<li>Mejora de performance.</li>
								<li>Cambio o actualización de plugins.</li>
								<li>Implementación de nuevos plugins.</li>
								<li>Corrección de errores por la actualizaciones.</li>
								<li>Lo que requiera el sitio web en términos de soporte o mantenimiento.</li>
							</ul>
						</div>
						<div className='since__container__animation'>
							<img src="https://licorne-web.s3.us-east-2.amazonaws.com/mantenimiento/gif.gif" alt="" />
						</div>
					</div>
				</div>
				
			</div>
		</div>

	)
}

export default since
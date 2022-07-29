///* Next components
import type { NextPage } from 'next'
import { useState } from 'react'

//* Interfaces
import { project } from '../../interfaces/project'

const Proyecto: NextPage <project> = ({ content, title, url, primary_thumbnail_url }) => {

	const [mostrarInfo, setMostrarInfo] = useState(false)
	
	return (

		<div >
			
			<div className={ (mostrarInfo ? 'portafolio_proyecto_individual_active ' : ' ') + 'portafolio_proyecto_individual'}>
				<div className="portafolio_proyecto_individual_imagen">
					<img src={primary_thumbnail_url} alt="" />

					<button  className="link-personalizado" onClick={() => { setMostrarInfo( mostrarInfo => { return !mostrarInfo })}}>
						<div className="texto">SABER MÁS</div>
						<div className="icono">
							<div className="linea"></div>
							<div className="circulo">
								<div className="flecha"></div>
							</div>
						</div>
					</button>

				</div>
				
				<article className="portafolio_proyecto_individual_info">
					
					<div className='contenidoProyecto'>

						<div className='textoProyectos'>

							<h3>{title}</h3>

							<div dangerouslySetInnerHTML={{ __html: content }}></div>
						
							<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

						</div>

						<button className="link_personalizado dos" onClick={() => { setMostrarInfo( mostrarInfo => { return !mostrarInfo }) }}>

							<div className="link_personalizado__texto">REGRESAR</div>
							<div className="link_personalizado__icono">
								<div className="linea"></div>
							
							</div>

						</button>

					</div>
				</article>
			</div>
			
		</div>

	)

}

export default Proyecto
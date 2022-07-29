import { useEffect, useState } from 'react'
import axios from 'axios'
import MainLayout from '../layouts/MainLayout'
import Proyecto from '../components/Briefcase/Project'
import Titulo from '../components/Common/Title'

const portafolio = () => {
	const title = 'Lo más top de nuestro portafolio de proyectos ¡está aquí!'
	const description = 'Generamos estrategias de marketing digital que generan éxito. ¡Descubre a detalle nuestro portafolio de clientes ganadores y sé uno de ellos!'

	const [proyectos, setProyectos] = useState([])

	const OBTENER_PROYECTOS = () => {
		axios.get('projects').then((response) => { setProyectos(response.data) })
	}

	useEffect(() => {
		OBTENER_PROYECTOS()
	}, [])

	return (

		<MainLayout title={title} description={description}>

			<div className="portafolio">

				{/** INOVANDO MARCAS */}
				<div className="portafolio_inovando_marcas">

					<div className="portafolio_titulo_inovando_marcas">
						<Titulo
							alternativo=""
							title="Innovando en"
							subtitle="las marcas"
							invertido={false}
						/>

						{/* <LinkPersonalizado
							url="/contacto"
							texto="¡QUIERO INICIAR!"
						/> */}

						<div className="contenidoPortada">
							<div className="grupo">
								<h3>SKILLS</h3>
								<p>Lean startup</p>
								<p>Tecnología</p>
								<p>Marketing Digital</p>
							</div>

							<div className="grupo">
								<h3>CLIENTES</h3>
								<p>Albya</p>
								<p>Kaloni</p>
								<p>AE Solar</p>
								<a href="/contacto">¡Tú! </a>
							</div>

							<div className="grupo">
								<h3>CONTACTO</h3>
								<p>hola@licorne.mx</p>
								<p>55 4335 9023</p>
							</div>

						</div>
					</div>

				</div>

				<div className="portafolio_proyectos">
					{
						proyectos.map((proyecto, index) => (

							<Proyecto
								key={index}
								content={proyecto.content.rendered}
								title={proyecto.title.rendered}
								slug={proyecto.slug}
								url={proyecto.url}
								primary_thumbnail_url={proyecto.primary_thumbnail_url}
							/>

						))
					}
				</div>

			</div>

		</MainLayout>

	)

}

export default portafolio
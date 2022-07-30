///* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useState } from 'react'
import axios from 'axios'

//*Components
import MainLayout from '../layouts/MainLayout'
import Project from '../components/Briefcase/Project'
import Title from '../components/Common/LicorneTitle'
// import Link from '../layouts/LinkPersonalizado'

//*interface
interface Project {
	key: string,
	content: {
		rendered: string,
	},
	title: {
		rendered: string,
	},
	slug: string,
	url: string,
	primary_thumbnail_url: string,
}

const briefcase: NextPage = () => {
	const title = 'Lo más top de nuestro portafolio de proyectos ¡está aquí!'
	const description = 'Generamos estrategias de marketing digital que generan éxito. ¡Descubre a detalle nuestro portafolio de clientes ganadores y sé uno de ellos!'

	const [projects, seProjects] = useState<Array<Project>>([])

	const GET_PROJECT = () => {
		axios.get('https://admin.licorne.mx/wp-json/wp/v2/projects').then((response) => { seProjects(response.data) })

	}

	useEffect(() => {
		GET_PROJECT()
	}, [])

	return (

		<MainLayout title={title} description={description}>

			<div className="briefcase">

				<div className="briefcase__innovating">

					<div className="briefcase__innovating__container">
						<Title
							text=""
							superior="Innovando en"
							inferior="las marcas"
							alternative={false}
						/>

						{/* <Link
							url="/contacto"
							text="¡QUIERO INICIAR!"
						/> */}

						<div className="briefcase__innovating__container__hero">
							<div className="briefcase__innovating__container__hero__group">
								<h3>SKILLS</h3>
								<p>Lean startup</p>
								<p>Tecnología</p>
								<p>Marketing Digital</p>
							</div>

							<div className="briefcase__innovating__container__hero__group">
								<h3>CLIENTES</h3>
								<p>Albya</p>
								<p>Kaloni</p>
								<p>AE Solar</p>
								<a href="/contacto">¡Tú! </a>
							</div>

							<div className="briefcase__innovating__container__hero__group">
								<h3>CONTACTO</h3>
								<p>hola@licorne.mx</p>
								<p>55 4335 9023</p>
							</div>

						</div>
					</div>

				</div>

				<div className="briefcase__projects">
					{
						projects.map((proyecto, index) => (

							<Project
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

export default briefcase
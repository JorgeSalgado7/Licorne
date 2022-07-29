//* USESTATE Y USEEFFECT
import { useState, useEffect } from 'react'

//* USEROUTER
import { useRouter } from 'next/router'

//* AXIOS
import axios from 'axios'

//* Components
import MainLayout from '../../layouts/MainLayout'

//* HOBBIES
import Hobbies from '../../components/Team/Hobbies'

const integrante = () => {

	//* MANDAMOS LLAMAR AL ROUTER
	const router = useRouter()

	//* VARIABLES DE USESTATE
	const [user, setUser] = useState(0)
	const [nextUser, setNextUser] = useState(null)
	const [pastUser, setPastUser] = useState(null)

	/**
	 * @author Iván Sánchez
	 * @name GET_USERS
	 * @version 1.0.0
	 * @description get a usuarios
	*/
	const OBTENER_USUARIOS = async (dataNext) => {

		// OBTENEMOS LOS USUARIOS EN GENERAL DE LA API
		const { data } = await axios.get('https://admin.licorne.mx/wp-json/wp/v2/teams?per_page=100.&_embed')
		// CORREMOS EL GET QUE ME TRAE LA INFORMACION DEL SIGUIENTE USUARIO EN LA LISTA
		// PASANDO LOS PARAMETROS DE ID ACTUAL Y DE CUANTOS USUARIOS HAY REGISTARDOS
		GET_NEXT_USER(dataNext, data.length)

	}

	/**
	 * @author Iván Sánchez
	 * @name GET_USER_FILTER
	 * @version 1.0.0
	 * @description get al usuario filtrado
	*/
	const GET_USER = async () => {

		// OBTENEMOS EL USUARIO FILTRADO DE LA API
		const { data } = await axios.get(`https://admin.licorne.mx/wp-json/wp/v2/teams?slug=${router.query.slug}.&_embed`)

		// GUARDAMOS LA DATA EN UNA VARIABLE
		setUser(data)
		// CORREMOS EL GET DE USUARIOS EN GENERAL
		OBTENER_USUARIOS(data[0].identifier)

		// CORREMOS EL GET QUE TRAE LA INFORMACION DEL ANTERIOR USUARIO EN LA LISTA
		// PASANDOLE COMO PARAMETRO EL ID ACTUAL
		GET_PAST_USER(data[0].identifier)

	}

	// /**
	//  * @author Iván Sánchez
	//  * @name GET_NEXT_USER
	//  * @version 1.0.0
	//  * @description get al siguiente usuario en la lista
	// */
	const GET_NEXT_USER = async (dataNext, length) => {
		// CONDICIONAMOS A QUE EL ID ACTUAL MAS 1 SEA MENOR QUE LA CANTIDAD DE USUARIOS REGISTRADOS
		if(parseInt(dataNext) + 1 <= parseInt(length)){
			// SE HACE EL GET AL SIGUIENTE USUARIO EN LA LISTA
			const { data } = await axios.get('https://admin.licorne.mx/wp-json/wp/v2/teams?per_page=100.&_embed')
			data.forEach(a => {
				if(parseInt(a.identifier) === parseInt(dataNext) + 1){
					setNextUser(a)
				}
			})

		}
	}

	// */**
	//  * @author Iván Sánchez
	//  * @name GET_PAST_USER
	//  * @version 1.0.0
	//  * @description get al anterior usuario en la lista
	// */
	const GET_PAST_USER = async (dataNext) => {

		// CONDICIONAMOS A QUE EL ID ACTUAL MENOS 1 SEA MAYOR QUE 0
		if(parseInt(dataNext) - 1 !== 0){

			// SE HACE EL GET AL ANTERIOR USUARIO EN LA LISTA
			const { data } = await axios.get('https://admin.licorne.mx/wp-json/wp/v2/teams?per_page=100.&_embed')
			data.forEach(a => {
				if(parseInt(a.identifier) === parseInt(dataNext) - 1){
					setPastUser(a)
				}
			})

		}

	}

	// USEEFFECT
	useEffect(() => {
		// ESPERAMOS A QUE CARGE LA RUTA
		if (!router.isReady) return

		// CORREMOS EL GET_USER_FILTER
		GET_USER()

		// CORREMOS EL GET_USERS
		OBTENER_USUARIOS()

	}, [router.isReady])

	const title = 'Equipo'
	const description = 'Licorne Startup Kings'

	return (

		<MainLayout title={title} description={description}>

			<div className='integrantes'>

				<div className='integrantes__contenedor container'>

					<div className='integrantes__contenedor__izquierda'>
						<div className='integrantes__contenedor__izquierda__img'>
							<img src={user[0]?.secundary_thumbnail_url} alt="" />
						</div>
						{/* BOTON IZQUIERDO */}
						{
							pastUser !== null ?
								<a href={ `/equipo/${pastUser?.slug}`} className="boton-izquierdo">
									<div className="link-personalizado">
										<div className="icono">
											<div className="linea"></div>
											<div className="circulo">
												<div className="flecha"></div>
											</div>
											<div className="texto">{pastUser?.name}</div>
										</div>
									</div>
								</a>
								: false
						}
					</div>

					<div className='integrantes__contenedor__derecha'>
						<div className='integrantes__contenedor__derecha__frase'>
							<h1>{user[0]?.phrase}</h1>
						</div>
						{/* BOTON DERECHO */}
						{
							nextUser !== null ?
								<a href={ `/equipo/${nextUser?.slug}`} className="boton-derecho">
									<div className="link-personalizado">
										<div className="icono">
											<div className="linea"></div>
											<div className="circulo">
												<div className="flecha"></div>
											</div>
											<div className="texto">{nextUser?.name}</div>
										</div>
									</div>
								</a>
								: false
						}
						<div className='integrantes__contenedor__derecha__grid'>
							<div className='integrantes__contenedor__derecha__grid__descripcion'>
								<h2>¡HOLA SOY {user[0]?.name}, {user[0]?.position} EN LICORNE® STARTUP KINGS!</h2>
								<p>{user[0]?.description}</p>
							</div>
							<div className='integrantes__contenedor__derecha__grid__hobbies'>
								<h2>INTERESES / HOBBIES</h2>
								<div className='integrantes__contenedor__derecha__grid__hobbies__grid'>
									{
										user[0]?._embedded['wp:term'][1].map((hobbie, index) => (

											<Hobbies
												key={index}
												hobbie={hobbie}
											/>

										))
									}
								</div>
							</div>
						</div>

						<div className='integrantes__contenedor__derecha__educacion'>
							<h2>EDUCACIÓN</h2>
							<p>{user[0]?.education}</p>
						</div>
						<div className='integrantes__contenedor__derecha__habilidades'>
							<h2>HABILIDADES Y TECNOLOGÍA</h2>
							<div className='integrantes__contenedor__derecha__habilidades__grid'>
								{
									user[0]?._embedded['wp:term'][0].map((categoria, index) => (

										<p key={index} className='integrantes__contenedor__derecha__habilidades__grid__contenido'>{categoria.name}</p>

									))
								}
							</div>

						</div>

					</div>

				</div>

			</div>

		</MainLayout>

	)
}

export default integrante
import Amigos from '../../svg/hobbies/Amigos'
import Anime from '../../svg/hobbies/Anime'
import Aprender from '../../svg/hobbies/Aprender'
import Atardecer from '../../svg/hobbies/Atardecer'
import Ayudar from '../../svg/hobbies/Ayudar'
import Bailar from '../../svg/hobbies/Bailar'
import Box from '../../svg/hobbies/Box'
import Bucear from '../../svg/hobbies/Bucear'
import Cantar from '../../svg/hobbies/Cantar'
import Cine from '../../svg/hobbies/Cine'
import Coleccionista from '../../svg/hobbies/Coleccionista'
import Comer from '../../svg/hobbies/Comer'
import Comics from '../../svg/hobbies/Comics'
import Correr from '../../svg/hobbies/Correr'
import Cultura from '../../svg/hobbies/Cultura'
import Equitacion from '../../svg/hobbies/Equitacion'
import Escribir from '../../svg/hobbies/Escribir'
import Esquiar from '../../svg/hobbies/Esquiar'
import Estrategia from '../../svg/hobbies/Estrategia'
import Explorar from '../../svg/hobbies/Explorar'
import Familia from '../../svg/hobbies/Familia'
import Fiesta from '../../svg/hobbies/Fiesta'
import Flores from '../../svg/hobbies/Flores'
import Fotografia from '../../svg/hobbies/Fotografia'
import Futbol from '../../svg/hobbies/Futbol'
import Gatos from '../../svg/hobbies/Gatos'
import Gym from '../../svg/hobbies/Gym'
import Hornear from '../../svg/hobbies/Hornear'
import Humor from '../../svg/hobbies/Humor'
import Lectura from '../../svg/hobbies/Lectura'
import Lluvia from '../../svg/hobbies/Lluvia'
import Mandalas from '../../svg/hobbies/Mandalas'
import Manga from '../../svg/hobbies/Manga'
import Maquillaje from '../../svg/hobbies/Maquillaje'
import Meditacion from '../../svg/hobbies/Meditacion'
import Memes from '../../svg/hobbies/Memes'
import Moda from '../../svg/hobbies/Moda'
import Moto from '../../svg/hobbies/Moto'
import Museos from '../../svg/hobbies/Museos'
import Musica from '../../svg/hobbies/Musica'
import Nadar from '../../svg/hobbies/Nadar'
import Naturaleza from '../../svg/hobbies/Naturaleza'
import Orden from '../../svg/hobbies/Orden'
import Perros from '../../svg/hobbies/Perros'
import Pilates from '../../svg/hobbies/Pilates'
import Pintura from '../../svg/hobbies/Pintura'
import Podcast from '../../svg/hobbies/Podcast'
import Reposteria from '../../svg/hobbies/Reposteria'
import Series from '../../svg/hobbies/Series'
import Tcg from '../../svg/hobbies/Tcg'
import Viajar from '../../svg/hobbies/Viajar'
import Videojuegos from '../../svg/hobbies/Videojuegos'
import Vino from '../../svg/hobbies/Vino'

const Hobbies = ({ hobbie }) => {

	return (

		<>

			<div className='integrantes__contenedor__derecha__grid__hobbies__grid__contenido'>
				{
					hobbie.name === 'Amigos' ? <Amigos />
						: hobbie.name === 'Anime' ? <Anime />
							: hobbie.name === 'Aprender' ? <Aprender />
								: hobbie.name === 'Atardecer' ? <Atardecer />
									: hobbie.name === 'Ayudar' ? <Ayudar />
										: hobbie.name === 'Bailar' ?  <Bailar />
											: hobbie.name === 'Box' ?  <Box />
												: hobbie.name === 'Bucear' ?  <Bucear />
													: hobbie.name === 'Cantar' ?  <Cantar />
														: hobbie.name === 'Cine' ?  <Cine />
															: hobbie.name === 'Coleccionista' ?  <Coleccionista />
																: hobbie.name === 'Comer' ?  <Comer />
																	: hobbie.name === 'Comics' ?  <Comics />
																		: hobbie.name === 'Correr' ?  <Correr />
																			: hobbie.name === 'Cultura' ?  <Cultura />
																				: hobbie.name === 'Equitacion' ?  <Equitacion />
																					: hobbie.name === 'Escribir' ?  <Escribir />
																						: hobbie.name === 'Esquiar' ?  <Esquiar />
																							: hobbie.name === 'Estrategia' ?  <Estrategia />
																								: hobbie.name === 'Explorar' ?  <Explorar />
																									: hobbie.name === 'Familia' ?  <Familia />
																										: hobbie.name === 'Fiesta' ?  <Fiesta />
																											: hobbie.name === 'Flores' ?  <Flores />
																												: hobbie.name === 'Fotografia' ?  <Fotografia />
																													: hobbie.name === 'Futbol' ?  <Futbol />
																														: hobbie.name === 'Gatos' ?  <Gatos />
																															: hobbie.name === 'Gym' ?  <Gym />
																																: hobbie.name === 'Hornear' ?  <Hornear />
																																	: hobbie.name === 'Humor' ?  <Humor />
																																		: hobbie.name === 'Lectura' ?  <Lectura />
																																			: hobbie.name === 'Lluvia' ?  <Lluvia />
																																				: hobbie.name === 'Mandalas' ?  <Mandalas />
																																					: hobbie.name === 'Manga' ?  <Manga />
																																						: hobbie.name === 'Maquillaje' ?  <Maquillaje />
																																							: hobbie.name === 'Meditacion' ?  <Meditacion />
																																								: hobbie.name === 'Memes' ?  <Memes />
																																									: hobbie.name === 'Moda' ?  <Moda />
																																										: hobbie.name === 'Moto' ?  <Moto />
																																											: hobbie.name === 'Museos' ?  <Museos />
																																												: hobbie.name === 'Musica' ?  <Musica />
																																													: hobbie.name === 'Nadar' ?  <Nadar />
																																														: hobbie.name === 'Naturaleza' ?  <Naturaleza />
																																															: hobbie.name === 'Orden' ?  <Orden />
																																																: hobbie.name === 'Perros' ?  <Perros />
																																																	: hobbie.name === 'Pilates' ?  <Pilates />
																																																		: hobbie.name === 'Pintura' ?  <Pintura />
																																																			: hobbie.name === 'Podcast' ?  <Podcast />
																																																				: hobbie.name === 'Reposteria' ?  <Reposteria />
																																																					: hobbie.name === 'Series' ?  <Series />
																																																						: hobbie.name === 'Tcg' ?  <Tcg />
																																																							: hobbie.name === 'Viajar' ?  <Viajar />
																																																								: hobbie.name === 'Videojuegos' ?  <Videojuegos />
																																																									: hobbie.name === 'Vino' ?  <Vino />
																																																										: false
				}
				
			</div>

		</>
	)

}

export default Hobbies
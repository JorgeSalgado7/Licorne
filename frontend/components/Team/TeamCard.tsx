//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//* Reac components
import { useState, useEffect } from 'react'

interface Props{ 

	user: {
		name:string
		primary_thumbnail_url:string
		secundary_thumbnail_url:string
		position:string
		slug:string
	}
	
}

/**
 * @author Iván Sánchez
 * @name TeamCard
 * @description TeamCard
 */
const TeamCard: NextPage<Props> = ( { user }) => {

	// VARIABLES DE USESTATE
	const [firstName, setFirstName] = useState('')

	/**
		 * @author Iván Sánchez
		 * @name TRANSFORM_NAME
		 * @version 1.0.0
		 * @description transforma los nombres complejo a first_name y recorte nombres mas largos a 9 caracteres
		*/
	const TRANSFORM_NAME = () => {
	
		// VARIABLE DONDE GUADAMOS EL NOMBRE
		const name = user.name
	
		// CONDICIONAMOS A QUE TENGA UN ESPACIO
		if(name.includes(' ')){
	
			// SI TIENE ESPACIO TODO DESPUES DEL MISMO SE ELIMINA
			const index = name.indexOf(' ')
			setFirstName(name.substring(0, index))
				
		}else{
	
			// SI NO TIENE ESPACIO VERIFICAMOS QUE MIDA MAS DE 10 CARACTERES
			if(name.length > 10){
	
				// EN CASO DE QUE MIDA MAS DE 10 SE RECORTA A 9
				setFirstName(name.substring(0, 9))
	
			} else {
				//  EN CASO DE QUE NO MIDA MAS DE 10 SE GUARDA DIRECTO EN LA VARIABLE
				setFirstName(name)
	
			}
		}
			
	}
	
	useEffect(() => {

		TRANSFORM_NAME()
	
	}, [])

	return (

		<div>

			<div className='team_card'>

				<div className='team_card__image'>
					<img src={user.primary_thumbnail_url} alt="" />
				</div>

				<div className='team_card__image_two'>
					<img src={user.secundary_thumbnail_url} alt="" />
				</div>

				<div className='team_card__information'>

					<div className='team_card__information__name'>
						<h1>{firstName}</h1>
					</div>

					<div className='team_card__information__ocupation'>
						<p>{user.position}</p>
					</div>

					<div className='team_card__information__button'>
						<Link href={ `/equipo/${user.slug}`}>
							<a>
								<div className="team_card__information__button__icon">
									<div className="team_card__information__button__line"></div>
									<div className="team_card__information__button__circle">
										<div className="team_card__information__button__icon__circle__arrow"></div>
									</div>
								</div>
							</a>
						</Link>
					</div>

				</div>

			</div>

		</div>

	)

}

export default TeamCard
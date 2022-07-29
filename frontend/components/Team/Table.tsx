//* Next components
import type { NextPage } from 'next'

//* React components
import { useEffect, useState } from 'react'
import axios from 'axios'

//* Components
import TeamCard from './TeamCard'

//* SVG

/**
 * @author Iván Sánchez
 * @name Table
 * @description Table
 */
const Table: NextPage = () => {

	const [users, setUsers] = useState<Array<[]>>([])

	const OBTENER_USUARIOS = async () => {
		const { data } = await axios.get('https://admin.licorne.mx/wp-json/wp/v2/teams?per_page=100.&_embed')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const temp = data.sort(( a:any, b:any ) => (parseInt(a.identifier) > parseInt(b.identifier) ? 1 : parseInt(a.identifier) < parseInt(b.identifier) ? -1 : 0))
		setUsers(temp)
	}

	useEffect(() => {
		
		OBTENER_USUARIOS()

	}, [])

	return (

		<div>

			<div className="table_team">

				<div className="table_team__container container">

					<div className="table_team__container__grid">
						
						{

							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							users.map((user:any, index) => (

								<div key={index}>

									<TeamCard 
										user={ user }
									/>

								</div>
								
							))

						}
						
					</div>

				</div>

			</div>
			
		</div>

	)

}

export default Table
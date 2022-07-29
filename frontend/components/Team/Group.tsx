//* Next components
import type { NextPage } from 'next'

/**
 * @author Iván Sánchez
 * @name Group
 * @description Group
 */
const Group: NextPage = () => {

	return (

		<div>

			<div className='equipo__grupal'>

				<div className='equipo__grupal__image'>
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/equipo/allTeam.png" alt="" />
				</div>
				
				<div className='equipo__grupal__image__black'>
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/equipo/allTeamB%26W.png" alt="" />
				</div>

			</div>

		</div>

	)

}

export default Group
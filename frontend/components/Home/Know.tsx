//* Next components
import type { NextPage } from 'next'
import Conversation1 from '../../svg/home/Conversation1'
import Conversation2 from '../../svg/home/Conversation2'

/**
 * @author Maria 
 * @name Know
 * @description Know-home
 */

//*Components
import Titulo from '../Common/Title'

const Home: NextPage = () => {

	return (
		<div>
			<div className='know'>

				<div className='container'>

					<Titulo
						alternativo=""
						superior="¡Sí le"
						inferior="Sabemos!"
						invertido={true}
					/>

					<div className='know__animation'>
						<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/telefono.svg"	alt="tecnologia digital"/>
						<div className='know__animation__conversations'>
							<div className="know__animation__conversations__scroll">
						
								<Conversation1/>
					
								<Conversation2/>
				
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

	)

}

export default Home
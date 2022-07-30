///* React components
import type { NextPage } from 'next'

//*Image
import Titulo from '../Common/LicorneTitle'
import Swift from '../../svg/App/Swift'
import Flutter from '../../svg/App/Flutter'
import React from '../../svg/Development/React'
import Cordova from '../../svg/App/Cordova'

/**
 * @author Maria Meza
 * @name WeKnow
 * @description WeKnow App
 */

const WeKnow: NextPage = () => {

	return (
		<div>
			<div className='we_know'>
				<div className='container'>

					<Titulo
						text=""
						title="Sí le sabemos:"
						subtitle=""
						alternative={false}
					/>

					<div className='we_know__swift'>
						<Swift />
					</div>
					<div className='we_know__flutter'>
						<Flutter />
					</div>
					<div className='we_know__React'>
						<React />
					</div>
					<div className='we_know__cordova'>
						<Cordova />
					</div>

				</div>

			</div>
		</div>
	)
}

export default WeKnow
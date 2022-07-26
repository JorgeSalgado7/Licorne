//* Next components
import type { NextPage } from 'next'
import Hand from '../../svg/home/Hand'
import Move from '../../svg/home/Move'

/**
 * @author Maria Meza
 * @name Focus
 * @description Focus_home
 */
const Focus: NextPage = () => {

	return (

		<div>
			<div className='focus'>

				<div className='container'>

					<div className='focus__top'>

						<div className='focus__top__text'>
							<h3>PONEMOS FOCO EN LO QUE IMPORTA</h3>
							<p>Dile <span>¡adiós! </span> a los aburridos reportes con &quot;vanity metrics&quot; que no aportan valor y dile <span>¡hola! </span> a las
						&quot;actionable metrics&quot; que nos indican el camino correcto para hallar el product market fit.</p>
						</div>

					</div>

					<div className='focus__down'>

						<div className='focus__down__animation'>
							<div className="focus__down__animation__hand">
								<div className='focus__down__animation__hand__image'>
									<Hand/>
								</div>
						
							</div>

							<div className="focus__down__animation__move">
								<div className='focus__down__animation__move__image'>
									<Move/>
								</div>
						
							</div>

						</div>

					</div>

				</div>

			</div>
		</div>

	)

}

export default Focus
//* Next components
import type { NextPage } from 'next'

//*Image
import Meter from '../../svg/Web/Meter'
import WordPress from '../../svg/Web/Wordpress'

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name Tecnology
 * @description Creative Web
 */

const Tecnology: NextPage = () => {

	return (
		
		<div>
			<div className='tecnology'>
				<div className='container'>
					<div className='tecnology__container'>

						<Titulo 
							alternativo=""
							superior="Usamos tecnologías" 
							inferior="seguras y dinámicas"
							invertido={false}
						/>

						<div className='tecnology__container__wordpress'>
							<div className='tecnology__container__wordpress__imgTec'>
								<WordPress/>
							</div>
							<div className='tecnology__container__wordpress__txtTec'>
								<h3>WordPress.</h3>
								<p>Creamos sitios amigables, seguros y que encajan perfectamente con tus objetivos.</p>
							</div>
						</div>
						<div className='tecnology__container__meter'>
							<div className='tecnology__container__meter__imgTec'>
								<Meter/>
							</div>
							<div className='tecnology__container__meter__txtTec'>
								<h3>A la medida.</h3>
								<p>Nos comprometemos con tu proyecto desde la idea hasta el producto terminado.</p>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			
		</div>
		
	)
}

export default Tecnology
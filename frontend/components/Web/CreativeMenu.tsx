//* Next components
import type { NextPage } from 'next'

//* Image
import Point from '../../svg/Web/Point'
import Ui from '../../svg/Web/Ui'
import Ux from '../../svg/Web/Ux'
import WorkShops from '../../svg/Web/Workshop'
import Illustration from '../../svg/Web/Illustration'

/**
 * @author Maria Meza
 * @name Creative
 * @description Creative Web
 */

const MenuCreative: NextPage = () => {

	return (	
		<div >
			<div className='menu_creactive'>
				<div className='container'>
					<div className='menu_creactive__contenedor'>
						<div className="menu_creactive__contenedor__creatives">

							<div className="menu_creactive__contenedor__creatives__workshops">
								<div className="menu_creactive__contenedor__creatives__workshops__imgWorkshops">
									<Point/>
								</div>
								<h3>WORKSHOPS & BRAINSTORMING</h3>
								<div className="menu_creactive__contenedor__creatives__workshops__imageWorkshops"> 
									<WorkShops/>
								</div>
							</div>
							
							<div className="menu_creactive__contenedor__creatives__ux">
								<div className="menu_creactive__contenedor__creatives__ux__imgUx">
									<Point/>
								</div>
								<h3>WIREFRAMING & UX DESING</h3>
								<div className="menu_creactive__contenedor__creatives__ux__imageUx"> 
									<Ux/>
								</div>
							</div>

							<div className="menu_creactive__contenedor__creatives__ui">
								<div className="menu_creactive__contenedor__creatives__ui__imgUi">
									<Point/>
								</div>
								<h3>UI DESING CONCEPTS & PROTOTYPING</h3>
								<div className="menu_creactive__contenedor__creatives__ui__imageUi"> 
									<Ui/>
								</div>
							</div>

							<div className="menu_creactive__contenedor__creatives__illustration">
								<div className="menu_creactive__contenedor__creatives__illustration__imgIllustration">
									<Point/>
								</div>
								<h3>ICONOGRAPHY & ILLUSTRATION</h3>
								<div className="menu_creactive__contenedor__creatives__illustration__imageIllustration"> 
									<Illustration/>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div> 
		</div>
	)
}

export default MenuCreative
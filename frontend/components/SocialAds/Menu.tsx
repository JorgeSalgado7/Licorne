//* Next components
import type { NextPage } from 'next'
import Point from '../../svg/LeanStartup/Point'
import Evolution from '../../svg/SocialAds/Evolution'
import Experience from '../../svg/SocialAds/Experience'
import Optimization from '../../svg/SocialAds/Optimization'
import Strategy from '../../svg/SocialAds/Strategy'

//*Image

/**
 * @author Maria Meza
 * @name Menu
 * @description Menu Social-Ads
 */

const Menu: NextPage = () => {

	return (
		<div>
			<div className='menu'>
				<div className='container'>
					<div className='menu__contenedor'>
						<div className='menu__contenedor__text'>
							<p>Contamos con un equipo experto en las plataformas “business” de las distintas redes sociales, todo con la finalidad de promover el poder de tu empresa o compañía, y así, incrementar el branding de marca y la generación de leads potenciales.</p>
							<p>Al contar con publicidad en alguna red social tendrás alcance a miles de usuarios y mediante la segmentación indicada, ¡lograrás conseguir tus objetivos de marketing y efectividad de inversión!</p>
						</div>
						<div className='menu__contenedor__container_menu'>
							<div className="menu__contenedor__container_menu__option">
								<div className="menu__contenedor__container_menu__option__responsive">
									<div className="menu__contenedor__container_menu__option__responsive__img">
										<Point/>
									</div>
									<h3>CRECIMIENTO</h3>
									<div className="menu__contenedor__container_menu__option__responsive__imagen"> 
										<Evolution/>
									</div>
								</div>
								<div className="menu__contenedor__container_menu__option__measure">
									<div className="menu__contenedor__container_menu__option__measure__img">
										<Point/>
									</div>
									<h3>ESTRATEGIA</h3>
									<div className="menu__contenedor__container_menu__option__measure__imagen"> 
										<Strategy/>
									</div>
								</div>
								<div className="menu__contenedor__container_menu__option__security">
									<div className="menu__contenedor__container_menu__option__security__img">
										<Point/>
									</div>
									<h3>EXPERIENCIA</h3>
									<div className="menu__contenedor__container_menu__option__security__imagen"> 
										<Experience/>
									</div>
								</div>
								<div className="menu__contenedor__container_menu__option__support">
									<div className="menu__contenedor__container_menu__option__support__img">
										<Point/>
									</div>
									<h3>OPTIMIZACIÓN</h3>
									<div className="menu__contenedor__container_menu__option__support__imagen"> 
										<Optimization/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>

		</div>

	)
}

export default Menu
//* Next components
import type { NextPage } from 'next'
import Image from 'next/image'

//*Components
import Titulo from '../Common/LicorneTitle'

//*Image
import Glass from '../../svg/Google/Glass'
import Scenery from '../../svg/Google/Scenery'
import Video from '../../svg/Google/Video'
import Tag from '../../svg/Google/Tag'
import Youtube from '../../svg/Google/Youtube'

/**
 * @author Maria Meza
 * @name Road
 * @description Portada Google-Ads
 */

const Road: NextPage = () => {

	return (
		<div>
			<div className='road'>

				<div className='road__roadDesktop'>
					<div className='container'>
						<div className='road__roadDesktop__contenedor'>
							<Titulo
								text=""
								title="El camino hacia tu éxito"
								subtitle="comienza aquí: "
								alternative={false}
							/>
							<div className="road__roadDesktop__contenedor__text">
								<p>Te brindamos total transparencia en tu inversión, reportes con información precisa, mejora continua y un equipo internacional certificado y avalado por Google Ads en su programa <span>Google Partners.</span></p>
							</div>
							<div className='road__roadDesktop__contenedor__menu'>
								<div className="road__roadDesktop__contenedor__menu__opciones">
									<div className="road__roadDesktop__contenedor__menu__opciones__search">
										<h3>Google search</h3>
										<div className="road__roadDesktop__contenedor__menu__opciones__search__imagenSearch">
											<Glass />
										</div>
									</div>
									<div className="road__roadDesktop__contenedor__menu__opciones__display">
										<h3>Display</h3>
										<div className="road__roadDesktop__contenedor__menu__opciones__display__imagenDisplay">
											<Scenery />
										</div>
									</div>
									<div className="road__roadDesktop__contenedor__menu__opciones__video">
										<h3>Video</h3>
										<div className="road__roadDesktop__contenedor__menu__opciones__video__imagenVideo">
											<Video />
										</div>
									</div>
									<div className="road__roadDesktop__contenedor__menu__opciones__shopping">
										<h3>Shopping</h3>
										<div className="road__roadDesktop__contenedor__menu__opciones__shopping__imagenShopping">
											<Tag />
										</div>
									</div>
									<div className="road__roadDesktop__contenedor__menu__opciones__youtube">
										<h3>Youtube</h3>
										<div className="road__roadDesktop__contenedor__menu__opciones__youtube__imagenYoutube">
											<Youtube />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

				<div className='road__roadResponsive'>
					<div className='container'>
						<Titulo
							text=""
							title="El camino hacia tu éxito"
							subtitle="comienza aquí: "
							alternative={false}
						/>
						<div className='road__roadResponsive__contenedor'>
							<div className='road__roadResponsive__contenedor__menu'>
								<div className="road__roadResponsive__contenedor__menu__opciones">
									<div className="road__roadResponsive__contenedor__menu__opciones__search">
										<h3>Google search</h3>
										<div className="road__roadResponsive__contenedor__menu__opciones__search__imagenSearch">
											<Glass />
										</div>
									</div>
									<div className="road__roadResponsive__contenedor__menu__opciones__display">
										<h3>Display</h3>
										<div className="road__roadResponsive__contenedor__menu__opciones__display__imagenDisplay">
											<Scenery />
										</div>
									</div>
									<div className="road__roadResponsive__contenedor__menu__opciones__video">
										<h3>Video</h3>
										<div className="road__roadResponsive__contenedor__menu__opciones__video__imagenVideo">
											<Video />
										</div>
									</div>
									<div className="road__roadResponsive__contenedor__menu__opciones__shopping">
										<h3>Shopping</h3>
										<div className="road__roadResponsive__contenedor__menu__opciones__shopping__imagenShopping">
											<Tag />
										</div>
									</div>
									<div className="road__roadResponsive__contenedor__menu__opciones__youtube">
										<h3>Youtube</h3>
										<div className="road__roadResponsive__contenedor__menu__opciones__youtube__imagenYoutube">
											<Youtube />
										</div>
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

export default Road
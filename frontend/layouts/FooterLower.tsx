///* Next components
import type { NextPage } from 'next'

//* SVG
import Facebook from '../svg/footer/Facebook'
import Instagram from '../svg/footer/Instagram'
import Twitter from '../svg/footer/Twitter'
import Linkedin from '../svg/footer/Linkedin'
import Tiktok from '../svg/footer/Tiktok'
import Youtube from '../svg/footer/Youtube'
import Spoty from '../svg/footer/Spoty'
import Link from 'next/link'

/**
 * @author Jorge Salgado
 * @name Footer
 */
const FooterLower: NextPage = () => {

	return (

		<footer className="footer_lower">

			<main className='footer_lower__main'>

				<div className="container">

					{/** Social */}
					<div className='footer_lower__main__social'>

						<h2 className='footer_lower__main__social__h2'>Síguenos</h2>

						<div className='footer_lower__main__social__grid'>

							<a target='_blank' rel="noreferrer" href="https://www.facebook.com/licornemx" className='footer_lower__main__social__grid__item'>
								<Facebook />
							</a>

							<a target='_blank' rel="noreferrer" href="https://www.instagram.com/licornestartupkings/" className='footer_lower__main__social__grid__item'>
								<Instagram />
							</a>

							<a target='_blank' rel="noreferrer" href="https://twitter.com/licornemx" className='footer_lower__main__social__grid__item'>
								<Twitter />
							</a>

							<a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@licornestartupkings" className='footer_lower__main__social__grid__item'>
								<Tiktok />
							</a>

							<a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/licorne-startup-kings" className='footer_lower__main__social__grid__item'>
								<Linkedin />
							</a>

							<a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UC3yTvO5TnWKIWr-F6QiImyg" className='footer_lower__main__social__grid__item'>
								<Youtube />
							</a>

							<a target='_blank' rel="noreferrer" href="https://spoti.fi/3uzahY8" className='footer_lower__main__social__grid__item'>
								<Spoty />
							</a>

						</div>

					</div>

					{/** Trabajamos */}
					<div className='footer_lower__main__work'>
						<h2>Trabajamos con <img src="https://licorne-web.s3.us-east-2.amazonaws.com/footer/corazon.png" alt="" /></h2>
						<p>Las marcas registradas y logotipos mostradas en este sitio web, son propiedad de sus respectivos propiertarios y titulares y son utilizados únicamente con fines enunciativos.</p>
						<Link href="/aviso-de-privacidad">
							<a>Aviso de Privacidad</a>
						</Link>
					</div>

				</div>

			</main>

		</footer>

	)
}

export default FooterLower
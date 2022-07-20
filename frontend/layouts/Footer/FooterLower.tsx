//* SVG
import Facebook from '../../svg/footer/Facebook'
import Twitter from '../../svg/footer/Twitter'
import Linkendl from '../../svg/footer/Linkendli'
import Instagram from '../../svg/footer/Instagram'
import Tiktok from '../../svg/footer/Tiktok'
import Youtube from '../../svg/footer/Youtube'
import Spoty from '../../svg/footer/Spoty'

/**
 * @author Maria Meza
 * @name Footer
 * @description FooterLower general
 */
const FooterLower = () => {

	return (

		<>
			<div className="footer_lower">

				<div className="footer_lower__black">

					<div className="container">

						<div className="footer_lower__black_text">
							
							<div className="footer_lower__black_text__siguenos">
								<h1>Síguenos</h1>

								<div className="footer_lower__black_text__siguenos__redes">
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://www.facebook.com/licornemx"><Facebook/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://www.instagram.com/licornestartupkings/"><Instagram/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://twitter.com/licornemx"><Twitter/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://www.tiktok.com/@licornestartupkings"><Tiktok/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/licorne-startup-kings"><Linkendl/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UC3yTvO5TnWKIWr-F6QiImyg"><Youtube/></a>
									</div>
									<div className="footer_lower__black_text__siguenos__redes__redesImagenes">
										<a target='_blank' rel="noreferrer" href="https://spoti.fi/3uzahY8"><Spoty/></a>
									</div>
								</div>

							</div>

							<div className="footer_lower__black_text__trabajamos">
								<h1>Trabajamos con <img src="https://licorne-web.s3.us-east-2.amazonaws.com/footer/corazon.png" alt="" /></h1>
								<p>Las marcas registradas y logotipos mostradas en este sitio web, son propiedad de sus respectivos propiertarios y titulares;
									y son utilizados únicamente con fines enunciativos.
								</p>
								<a href="/aviso-de-privacidad">  <p>Aviso de Privacidad</p></a>
							</div>

							</div>
					</div>

				</div>

			</div>
			
		</>

	)
}

export default FooterLower
//* Next components
import Link from 'next/link'

/**
 * @author Maria Meza
 * @name Footer
 * @description FooterTop general
 */

const FooterTop = () => {

	return (

		<>
			<div className='footerTop'>

				<div className='container'>

					<div className="footerTop__text">
						<h1>Llegó el momento de decir &quot;Hola Licorne&quot;.</h1>
						
							<div className="footerTop__text__botones">

							<div className="footerTop__text__botones__boton_proyectos">
								<Link href="/portafolio">
									<a>
										<h1>ÚLTIMOS PROYECTOS +</h1>
									</a>
								</Link>
							</div>

					</div>
				</div>

					

							{/* <div className="footer__superior__boton_contacto">
								<LinkPersonalizado
									url="/contacto"
									texto="CONTACTO"
								/>
							</div> */}

				</div>

			</div>
		</>

	)
}

export default FooterTop
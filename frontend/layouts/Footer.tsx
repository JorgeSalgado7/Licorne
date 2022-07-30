//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

/**
 * @author Jorge Salgado
 * @name Footer
 * @description Footer
 */
const Footer: NextPage = () => {

	return (

		<footer className='footer'>

			<div className="container">

				<h2 className='footer__title'>Llegó el momento de decir &quot;Hola Licorne&quot;</h2>

				<Link href="/saludanos">
					<a className='footer_link'>

						{/** Text */}
						<div className="footer_link__text">Contacto</div>

						{/** Icon */}
						<div className='footer_link__icon'>
							<div className='footer_link__icon__line' />
							<div className='footer_link__icon__circle'>
								<div className='footer_link__icon__circle__arrow' />
							</div>
						</div>

					</a>
				</Link>

				<Link href="/portafolio">
					<a className='footer__proyect_link'>Últimos proyectos +</a>
				</Link>

			</div>

		</footer >

	)
}

export default Footer
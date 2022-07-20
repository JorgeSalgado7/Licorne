//* Next components
import Link from 'next/link'

//* SVG
import Whats from '../svg/Whats'

/**
 * @author Maria Meza
 * @name Lateral
 * @description Lateral general
 */

const Lateral = () => {

	return (
		<>

			<div className='lateral_general'>

				<aside className="lateral_general__logo_pequeno">
					
					<div className="lateral_general__logo_pequeno__imgBx">
						<a href='https://licorne.mx/'> <img src="https://licorne-web.s3.us-east-2.amazonaws.com/logo/logo-pequeno.svg" alt='' width={120} height={120} /></a> 
					</div>

					<div className="lateral_general__logo_pequeno__text">
						<Link href="/portafolio">
							<a>Últimos proyectos</a>
						</Link>
						<div className="lateral_general__logo_pequeno__text__circulo"></div>
					</div>

				</aside>

				<div className="lateral_general__whats">
					<a target='_blank' rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=525547934997&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n'>
						<Whats/>
					</a>
				</div>

			</div>
			
		</>

	)

}

export default Lateral
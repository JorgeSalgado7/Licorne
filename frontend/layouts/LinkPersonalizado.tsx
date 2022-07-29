///* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//* Interfaces
import { link } from '../interfaces/link'

const LinkPersonalizado: NextPage <link>  = ({ url, text }) => {
	return (
        
		<Link href={url}>
        
			<a className="link_personalizado">

				<div className="link_personalizado__texto">{text}</div>
				<div className="link_personalizado__icono">
					<div className="link_personalizado__icono__flecha"></div>
				
				</div>

			</a>

		</Link>

	)
}

export default LinkPersonalizado
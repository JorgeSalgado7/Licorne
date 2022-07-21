//* Next components
import { useState } from 'react'
import type { NextPage } from 'next'

//* Interfaces
interface MenuProps {
	open: boolean,
}
/**
 * @author Maria Meza
 * @name Buscador
 * @description Buscador General 
 */

const buscador: NextPage<MenuProps> = ({ open }) => {

	const [openPanel, setOpenPanel] = useState(false)

	return (

		<nav className={'licorne_buscador ' + (open ? 'licorne_buscador--active' : '')}>

			<div className="licorne_buscador__search">		
				<button onClick={() => setOpenPanel(!openPanel)}>
					<img className="licorne_buscador__search__image" src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/lupa.png" alt="" />
					<img className={'licorne_buscador__search__amarilla ' + (openPanel? 'licorne_buscador__search__amarilla--active' : '')} src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/centro-lupa.png" alt="" /> 
				</button>
				
				
			</div>

			<div className="licorne_buscador__shazam">
				<input type="text" placeholder="SHAZAM!"></input>
			</div>

			<div className="display">
				<div className="licorne_buscador__contenedor_opciones">
					<button>CONTACTO</button>
					<button>NEWSLETTER</button>
				</div>
			</div>

		</nav>

	)

}

export default buscador
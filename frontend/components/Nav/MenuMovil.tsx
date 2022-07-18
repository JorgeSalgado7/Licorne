import Link from 'next/link'
import { useState } from 'react'

//*Components
import Menu from './Menu/Menu'
import Buscador from './Buscador'

/**
 * @author Maria Meza
 * @name MenuMovil
 * @description Menu Movil general 
 */

const MenuMovil = () => {

	const [openMenu, setOpenMenu]= useState(false)
	const [openSearch, setOpenSearch]= useState(false)

	return (
		<>
			<nav className={'menu_movil_licorne ' + (openMenu? 'menu_movil_licorne--active': '')} >

			<a className={'menu_movil_licorne__icono ' + (openMenu? 'menu_movil_licorne__icono--active': '')} href="tel:525543359023" >
				<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/telefono.png" alt="" />
			</a>

			<a target='_blank' rel="noreferrer" className={'menu_movil_licorne__icono ' + (openMenu? 'menu_movil_licorne__icono--active': '')} href="https://api.whatsapp.com/send?phone=525547934997&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n">
				<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/whatsapp.png" alt="" />
			</a>

			<div className={'menu_movil_licorne__icono_abrir_menu ' + (openMenu? 'menu_movil_licorne__icono_abrir_menu--active': '') } onClick={ () => setOpenMenu(!openMenu) }>
				<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/logo-blanco.png" alt="" />
			</div>

			<Link href="/contacto">
				<a className={'menu_movil_licorne__icono ' + (openMenu? 'menu_movil_licorne__icono--active': '')}>
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/correo.png" alt="" />
				</a>
			</Link>


			<button  className={'menu_movil_licorne__icono ' + (openMenu? 'menu_movil_licorne__icono--active': '')} onClick={ () => setOpenSearch(!openSearch) } >
				<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/lupa-blanca.png" alt="" />
			</button>
		

			</nav>
			<Buscador open={openSearch}/>
			<Menu open={openMenu}/>
		</>

	)

}

export default MenuMovil
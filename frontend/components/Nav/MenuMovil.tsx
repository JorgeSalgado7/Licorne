import Link from 'next/link'
import { useEffect } from 'react'
//*IMAGE
import MenuHamburguesa from '../../svg/nav/MenuHamburguesa'


const MenuMovil = () => {



	return (

		<nav className="menu_movil">

			<nav className="menu_movil__licorne">

				<a className="menu_movil__licorne__icono" href="tel:525543359023">
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/telefono.png" alt="" />
				</a>

				<a target='_blank' rel="noreferrer" className="menu_movil__licorne__icono" href="https://api.whatsapp.com/send?phone=525547934997&text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n">
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/whatsapp.png" alt="" />
				</a>

				<div className="menu_movil__licorne__icono menu_movil__licorne__icono_abrir_menu ">
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/logo-blanco.png" alt="" />
				</div>

				<Link href="/contacto">
					<a className="menu_movil__licorne__icono">
						<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/correo.png" alt="" />
					</a>
				</Link>

				<button className="menu_movil__licorne__icono">
					<img src="https://licorne-web.s3.us-east-2.amazonaws.com/menu/lupa-blanca.png" alt="" />
				</button>

			</nav>
            
			<nav className="menu_movil__oculto">
				<MenuHamburguesa/>
			</nav>
            
		</nav>

	)

}

export default MenuMovil
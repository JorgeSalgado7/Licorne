//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//* Custom Hooks
import { usePathname } from '../../hooks/usePathname'
import Technology from './Submenu/Technology'
import WeAre from './Submenu/WeAre'

//* Interfaces
interface MenuProps {
	open: boolean,
}

/**
 * @author Jorge Salgado
 * @name Menu
 * @description Menú del sitio web
 */
const Menu: NextPage<MenuProps> = ({ open }) => {

	const { pathname } = usePathname()

	return (

		<nav className={'licorne_menu ' + (open ? 'licorne_menu--activate' : '')}>

			{/** OPCIONES MENU */}
			<div className="licorne_menu__container">

				{/** Home */}
				<Link href="/">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Home</span>
					</a>
				</Link>

				{/** Lean startup */}
				<Link href="/consultoria-lean-startup">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/consultoria-lean-startup' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Lean Startup</span>
					</a>
				</Link>

				{/**  Tecnología */}
				<Technology pathname={pathname} />

				{/** Más que marketing digital */}
				<Link href="/mas-que-marketing-digital">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/mas-que-marketing-digital' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Así lo hacemos</span>
					</a>
				</Link>

				{/** Somos */}
				<WeAre pathname={pathname} />

				{/** Portafolio */}
				<Link href="/portafolio">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/portafolio' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Portafolio</span>
					</a>
				</Link>

				{/** Blog */}
				<Link href="/blog">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/blog' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Blog</span>
					</a>
				</Link>

				{/** Salúdanos */}
				<Link href="/">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/saludanos' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Salúdanos</span>
					</a>
				</Link>

			</div>

		</nav>

	)

}

export default Menu
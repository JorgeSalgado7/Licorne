//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//* React Hooks
import { useState } from 'react'

//* Interfaces
interface Pathname {
	pathname: string,
}

/**
 * @author Jorge Salgado
 * @name Technology
 * @description Submenú para la sección tecnología del sitio web
 * @param {String} pathname
 */
const Technology: NextPage<Pathname> = ({ pathname }) => {

	const [openMenu, setOpenMenu] = useState(false)

	return (

		<div className="licorne_menu__dropdown">

			{/** TECNOLOGÍA */}
			<div className="licorne_menu__dropdown__title" onClick={() => setOpenMenu(!openMenu)}>
				<span className="licorne_menu__dropdown__title__text">Tecnología</span>
				<div className='licorne_menu__dropdown__title__icon'>
					<div className={'bar ' + (openMenu ? 'bar--active' : '')}></div>
				</div>
			</div>

			{/** SUBMENÚ */}
			<div className={'licorne_menu__dropdown__submenu ' + (openMenu ? 'licorne_menu__dropdown__submenu--active' : '')}>

				{/** DESARROLLO */}
				<Link href="/desarrollo-de-aplicaciones-web">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/desarrollo' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Desarrollo</span>
					</a>
				</Link>

				{/** WEB */}
				<Link href="/sitio-web">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/web' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Web</span>
					</a>
				</Link>

				{/** ECOMMERCE */}
				<Link href="/ecommerce">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/ecommerce' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Ecommerce</span>
					</a>
				</Link>

				{/** APP */}
				<Link href="/app">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/app' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">App</span>
					</a>
				</Link>

				{/** MANTENIMIENTO */}
				<Link href="/mantenimiento">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/mantenimiento' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Mantenimiento</span>
					</a>
				</Link>

			</div>

		</div>

	)

}

export default Technology
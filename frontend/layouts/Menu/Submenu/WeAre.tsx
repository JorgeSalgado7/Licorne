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
 * @name WeAre
 * @description Submenú para la sección tecnología del sitio web
 * @param {String} pathname
 */
const WeAre: NextPage<Pathname> = ({ pathname }) => {

	const [openMenu, setOpenMenu] = useState(false)

	return (

		<div className="licorne_menu__dropdown">

			{/** Somos */}
			<div className="licorne_menu__dropdown__title" onClick={() => setOpenMenu(!openMenu)}>
				<span className="licorne_menu__dropdown__title__text">Somos</span>
				<div className='licorne_menu__dropdown__title__icon'>
					<div className={'bar ' + (openMenu ? 'bar--active' : '')}></div>
				</div>
			</div>

			{/** Submenú*/}
			<div className={'licorne_menu__dropdown__submenu ' + (openMenu ? 'licorne_menu__dropdown__submenu--active' : '')}>

				{/** Equipo */}
				<Link href="/equipo">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/equipo' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Equipo</span>
					</a>
				</Link>

				{/** Misión y Visión */}
				<Link href="/mision-y-vision">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/mision-y-vision' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Misión y Visión</span>
					</a>
				</Link>

				{/** Historia*/}
				<Link href="/licorne-startup-kings">
					<a className="licorne_menu__link">
						<div className={'licorne_menu__link__marker ' + (pathname === '/licorne-startup-kings' ? 'licorne_menu__link__marker--active' : '')} />
						<span className="licorne_menu__link__text">Historia</span>
					</a>
				</Link>

			</div>

		</div>

	)

}

export default WeAre
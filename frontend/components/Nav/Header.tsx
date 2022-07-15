//* Next components
import type { NextPage } from 'next'

//* React Hooks
import { useEffect, useState, useRef } from 'react'
import Menu from './Menu/Menu'

/**
 * @author Jorge Salgado
 * @name Header
 * @description Header del sitio web
 */
const Header: NextPage = () => {

	const [openMenu, setOpenMenu] = useState(false)
	const header = useRef<HTMLDivElement>(null)

	useEffect(() => {

		let lastScroll = 0

		window.addEventListener('scroll', () => {

			//* Escondemos el header si el scroll es mayor a 100
			const scrollY = window.scrollY
			scrollY > 100 ? header.current?.classList.add('licorne_header--hide') : false

			//* Escondemos el header mientras se encuentra en movimiento
			if((scrollY < lastScroll) && header.current?.classList.contains('licorne_header--hide')){
				header.current.classList.remove('licorne_header--hide')
			}

			lastScroll = scrollY

		})

	}, [])

	return (

		<>

			<header className='licorne_header' ref={header}>

				{/** Toggle */}
				<button className='licorne_header__toggle' type='button' onClick={ () => setOpenMenu(!openMenu)}>
					<div className={'licorne_header__toggle__square ' + (openMenu ? 'licorne_header__toggle__square--deactivate' : '') }></div>
					<div className="licorne_header__toggle__icon">
						<div className={'licorne_header__toggle__icon__bar ' + (openMenu ? 'licorne_header__toggle__icon__bar--activate' : '') }></div>
					</div>
				</button>

			</header>

			<Menu open={openMenu} />

		</>

	)

}

export default Header
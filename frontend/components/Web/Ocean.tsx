//* Next components
import type { NextPage } from 'next'
import Image from 'next/image'

import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Image
import Vue from '../../svg/Development/Vue'

//*Components
import Titulo from '../Common/Title'
import React from '../../svg/Development/React'
import Postgre from '../../svg/Development/Postgre'
import Mongo from '../../svg/Development/Mongo'
import MySQL from '../../svg/Development/MySQL'
import Php from '../../svg/Development/Php'
import Python from '../../svg/Development/Python'
import Bird from '../../svg/Web/Bird'
import BirdTwo from '../../svg/Web/BirdTwo'
import Shell from '../../svg/Web/Shell'
import Node from '../../svg/Development/Node'

/**
 * @author Maria Meza
 * @name Ocean
 * @description Ocean Web
 */

const Ocean: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			'(max-width: 576px)': function () {

				const tl = gsap.timeline({

				})

				tl
					.to('.nubes', { opacity: 0, duration: 1 }, '+=2')
					.to('.bird', { opacity: 0, duration: 1 }, '+=3')

			},
		})

	}, [])

	return (

		<div>
			<div className='ocean'>
				{/* OCEANO */}
				<div className='ocean__web'>
					<div className='container'>
						<div className='ocean__web__contenedor'>

							<Titulo
								text=""
								title="El primer gran paso para llegar al"
								subtitle="océano azul es un sitio web único."
								alternative={false}
							/>

							<div className="ocean__web__contenedor__bird_two">
								<Bird />
							</div>
							<div className="ocean__web__contenedor__bird">
								<BirdTwo />
							</div>

							<div className="ocean__web__contenedor__shell">
								<Shell />
							</div>
							<div className='ocean__web__contenedor__table_lenguajes'>
								<div className='ocean__web__contenedor__table_lenguajes__fila'>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<Vue />
									</div>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<React />
									</div>
								</div>
								<div className='ocean__web__contenedor__table_lenguajes__fila'>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<Node />
									</div>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<Postgre />
									</div>
								</div>
								<div className='ocean__web__contenedor__table_lenguajes__fila'>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<Postgre />
									</div>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<Mongo />
									</div>
								</div>
								<div className='ocean__web__contenedor__table_lenguajes__fila'>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<span><MySQL /></span>
									</div>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column">
										<span><Php /></span>
									</div>
								</div>
								<div className='ocean__web__contenedor__table_lenguajes__fila'>
									<div className="ocean__web__contenedor__table_lenguajes__fila__column_two">
										<Python />
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</div>

	)
}

export default Ocean
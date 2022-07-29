///* React components
import { useEffect, useRef } from 'react'
import type { NextPage } from 'next'

//*Animation
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

//*Components
import Titulo from '../Common/Title'

/**
 * @author Maria Meza
 * @name StartKings
 * @description component StartupKing
 */
const StartKings: NextPage = () => {

	gsap.registerPlugin(ScrollTrigger)
	const animation = useRef(null)

	useEffect(() => {

		ScrollTrigger.matchMedia({

			'(max-width: 1200px)': function () {

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				tl
					.from('.lean_startup__animation__ojoLean', { top: '-100%', left: '-30%', opacity: '0', duration: 1 }, '-=1')
					.to('.lean_startup__animation__ojoLean', { top: '0', left: '-30%', opacity: '1', duration: 1 }, '-=1')

					.from('.lean_startup__animation__ojoGuiñoLean', { top: '-100%', left: '20%', opacity: '0', duration: 1 }, '-=2')
					.to('.lean_startup__animation__ojoGuiñoLean', { top: '0', left: '20%', opacity: '1', duration: 1 }, '-=2')

					.from('.lean_startup__animation__bocaLean', { top: '-100%', left: '35%', opacity: '0', duration: 1 }, '-=3')
					.to('.lean_startup__animation__bocaLean', { top: '50%', left: '15%', opacity: '1', duration: 1 }, '-=3')

					.to('.lean_startup__animation__ojoLean', { height: '80px', transform: 'rotate(45deg)', top: '10%', opacity: '1' }, '+=1')
					.to('.lean_startup__animation__bocaLean', { left: '-30%', top: '70%', transform: 'rotate(225deg)', opacity: '1' })
					.to('.lean_startup__animation__ojoGuiñoLean', { height: '30px', width: '80px', transform: 'rotate(-45deg)', top: '25%', opacity: '1' }, '+=1')

					.from('.lean_startup__animation__ojoDosLean', { opacity: '0' }, '+=1')
					.to('.lean_startup__animation__ojoDosLean', { opacity: '1', left: '-30%', top: '10%' }, '+=1')
					.from('.lean_startup__animation__ojoGuiñoDosLean', { opacity: '0' }, '+=1')
					.to('.lean_startup__animation__ojoGuiñoDosLean', { opacity: '1', left: '35%', top: '10%' }, '+=1')

					.to('.lean_startup__animation__bocaLean', { left: '-30%', top: '70%', transform: 'rotate(225deg)', opacity: '1' })

					.to('.lean_startup__animation__mosca', { opacity: '1', top: '-50%', left: '15%' }, '+=1')
			},

			'(min-width: 1199px)': function () {

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: animation.current,
						markers: false,
						start: 'top',
						end: '200%',
						scrub: true,
						pin: true,
					}
				})

				tl
					.from('.lean_startup__animation__ojoLean', { top: '-100%', left: '-30%', opacity: '0', duration: 1 }, '-=1')
					.to('.lean_startup__animation__ojoLean', { top: '0', left: '-30%', opacity: '1', duration: 1 }, '-=1')

					.from('.lean_startup__animation__ojoGuiñoLean', { top: '-100%', left: '20%', opacity: '0', duration: 1 }, '-=2')
					.to('.lean_startup__animation__ojoGuiñoLean', { top: '0', left: '20%', opacity: '1', duration: 1 }, '-=2')

					.from('.lean_startup__animation__bocaLean', { top: '-100%', left: '35%', opacity: '0', duration: 1 }, '-=3')
					.to('.lean_startup__animation__bocaLean', { top: '50%', left: '15%', opacity: '1', duration: 1 }, '-=3')

					.to('.lean_startup__animation__ojoLean', { height: '160px', transform: 'rotate(45deg)', top: '10%', opacity: '1' }, '+=1')
					.to('.lean_startup__animation__bocaLean', { left: '-30%', top: '70%', transform: 'rotate(225deg)', opacity: '1' })
					.to('.lean_startup__animation__ojoGuiñoLean', { height: '60px', width: '160px', transform: 'rotate(-45deg)', top: '25%', opacity: '1' }, '+=1')

					.from('.lean_startup__animation__ojoDosLean', { opacity: '0' }, '+=1')
					.to('.lean_startup__animation__ojoDosLean', { opacity: '1', left: '-30%' }, '+=1')
					.from('.lean_startup__animation__ojoGuiñoDosLean', { opacity: '0' }, '+=1')
					.to('.lean_startup__animation__ojoGuiñoDosLean', { opacity: '1', left: '35%' }, '+=1')

					.to('.lean_startup__animation__bocaLean', { left: '-30%', top: '70%', transform: 'rotate(225deg)', opacity: '1' })

					.from('.lean_startup__animation__mosca', { opacity: '0' }, '+=1')
					.to('.lean_startup__animation__mosca', { opacity: '1', top: '-50%', left: '15%' }, '+=1')

			},

		})

	}, [])

	return (
		<div>
			<div className='lean_startup' ref={animation}>

				<div className='container'>

					<Titulo
						alternativo="LA DIFERENCIA ENTRE"
						title="Escalar o morir se llama"
						subtitle="Lean Startup"
						invertido={false}
					/>

					<div className='lean_startup__animation'>
						<div className='lean_startup__animation__mosca'>
							<img src="https://licorne-web.s3.us-east-2.amazonaws.com/home/moscas.svg" alt="marketing digital" />
						</div>

						<div className="lean_startup__animation__ojoLean"></div>
						<div className="lean_startup__animation__ojoDosLean"></div>
						<div className="lean_startup__animation__ojoGuiñoLean"></div>
						<div className="lean_startup__animation__ojoGuiñoDosLean"></div>
						<div className="lean_startup__animation__bocaLean"></div>
					</div>

					{/* <LinkPersonalizado
						url="/asi-lo-hacemos"
						texto="¿CÓMO LO HACEN?"
					/> */}

				</div>

			</div>
		</div>

	)
}

export default StartKings 
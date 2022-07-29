//* React components
import { useEffect, useRef } from 'react'

//* Animations librarys
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

//* Next components
import type { NextPage } from 'next'

//*Components
import Titulo from '../Common/Title'

//*SVG
import Onece from '../../svg/History/Onece'
import Book from '../../svg/History/Book'
import BookTwo from '../../svg/History/BookTwo'
import BookThree from '../../svg/History/BookThree'
import BookFour from '../../svg/History/BookFour'

/**
 * @author Iván Sánchez
 * @name History
 * @description Digitise
 */
const History: NextPage = () => {

	const history = useRef<HTMLDivElement>(null)

	useEffect(() => {

		const Tl = gsap.timeline({  
			scrollTrigger: {
				trigger: history.current,
				markers: false,
				start: 'top',
				end: '200%',
				scrub: true,
				pin: true,
			}
		})

		ScrollTrigger.matchMedia({

			'(max-width: 1200px)': function(){

				Tl
					.to('.history__container__time', { opacity: 0, duration: 1 })
					.to('.history__container__circle', { top:'46%', duration: 1 })
					.to('.history__container__triangle', { top:'80%', duration: 1 }, '-=1')
					.to('.title', { opacity: 1, duration: 1 })
					.to('.history__container__circle', { opacity: 0, duration: 1 })
					.to('.history__container__triangle', { opacity: 0, duration: 1 }, '-=1')
					.to('.history__container__book', { opacity: 1, duration: 1 })
					.to('.history__container__book', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.history__container__book_two', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_three', { opacity: 1, duration: 1 }, '-=1')
					.to('.history__container__book_three', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_four', { opacity: 1, duration: 1 }, '-=1')
            
			},
			'(min-width: 1199px)': function(){

				Tl
					.to('.history__container__time', { opacity: 0, duration: 1 })
					.to('.history__container__circle', { left:'56%', duration: 1 })
					.to('.history__container__triangle', { left:'100%', duration: 1 }, '-=1')
					.to('.title', { opacity: 1, duration: 1 })
					.to('.history__container__circle', { opacity: 0, duration: 1 })
					.to('.history__container__triangle', { opacity: 0, duration: 1 }, '-=1')
					.to('.history__container__book', { opacity: 1, duration: 1 })
					.to('.history__container__book', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_two', { opacity: 1, duration: 1 }, '-=1')
					.to('.history__container__book_two', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_three', { opacity: 1, duration: 1 }, '-=1')
					.to('.history__container__book_three', { opacity: 0, duration: 1 }, '+=1')
					.to('.history__container__book_four', { opacity: 1, duration: 1 }, '-=1')

			},

		})

	}, [])

	return (

		<div>

			<div className='history' ref={history}>

				<div className='history__container container'>

					<div className='history__container__circle'></div>

					<div className='history__container__triangle'></div>

					<div className='history__container__time'>
						<Onece />
					</div>

					<div className='history__container__book'>
						<Book />
					</div>

					<div className='history__container__book_two'>
						<BookTwo />
					</div>

					<div className='history__container__book_three'>
						<BookThree />
					</div>

					<div className='history__container__book_four'>
						<BookFour />
					</div>

					<Titulo
						alternativo="NUESTRAS MEMORIAS"
						superior="Esta es la historia"
						inferior="de Licorne"
						invertido={false}
					/>

				</div>

			</div>

		</div>

	)

}

export default History
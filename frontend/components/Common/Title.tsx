///* Next components
import type { NextPage } from 'next'

//* Interfaces
interface Title{
	title: string,
	subtitle: string,
	text?: string,
	principal?: boolean,
}

const Title: NextPage <Title>  = ({ title, subtitle, text = null, principal = false }) => {

	return (
		<>

			{
				!principal ? (
					<div className='title'>
						{ text !== null && <p className='title__text'></p> }
						<h1 className='title__title'>{title}</h1>
						<h2 className='title__subtitle'>{subtitle}</h2>
					</div>
				) : (
					<div className='title'>
						{ text !== null && <p className='title__text'></p> }
						<h2 className='title__subtitle'>{subtitle}</h2>
						<h1 className='title__title'>{title}</h1>
					</div>
				)
			}

		</>
	)

}

export default Title
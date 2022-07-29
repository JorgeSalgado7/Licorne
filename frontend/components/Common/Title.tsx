///* Next components
import type { NextPage } from 'next'

//* Interfaces
interface Title{
	title: string,
	subtitle: string,
	text?: string,
	alternative?: boolean,
}

const Title: NextPage <Title>  = ({ title, subtitle, text = null, alternative = false }) => {

	return (
		<>

			{
				!alternative ? (
					<div className='title'>
						{ text !== null && <p className='title__text'>{text}</p> }
						<h1 className='title__title'>{title}</h1>
						<h2 className='title__subtitle'>{subtitle}</h2>
					</div>
				) : (
					<div className='title'>
						{ text !== null && <p className='title__text'>{text}</p> }
						<h1 className='title__subtitle'>{title}</h1>
						<h2 className='title__title'>{subtitle}</h2>
					</div>
				)
			}

		</>
	)

}

export default Title
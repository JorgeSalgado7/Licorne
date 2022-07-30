///* Next components
import type { NextPage } from 'next'

//* Interfaces
interface Title{
	title: string,
	subtitle: string,
	text?: string,
	alternative?: boolean,
}

const LicorneTitle: NextPage <Title>  = ({ title, subtitle, text = null, alternative = false }) => {

	return (
		<>

			{
				!alternative ? (
					<div className='licorne_title'>
						{ text !== null && <p className='licorne_title__text'>{text}</p> }
						<h1 className='licorne_title__title'>{title}</h1>
						<h2 className='licorne_title__subtitle'>{subtitle}</h2>
					</div>
				) : (
					<div className='licorne_title'>
						{ text !== null && <p className='licorne_title__text'>{text}</p> }
						<h1 className='licorne_title__subtitle'>{title}</h1>
						<h2 className='licorne_title__title'>{subtitle}</h2>
					</div>
				)
			}

		</>
	)

}

export default LicorneTitle
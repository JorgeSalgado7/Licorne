///* Next components
import type { NextPage } from 'next'

//* Interfaces
import { Title } from '../../interfaces/title'

const Title: NextPage <Title>  = ({ superior, inferior, alternativo, invertido }) => {

	return (
		<>

			{
				!invertido ? (
					<div className="title">
						<p>{alternativo}</p>
						<div className='display'>
							<h1 className='title__top'>{superior}</h1>
							<h1 className='title__low'>{inferior}</h1>
						</div>
					</div>
				) : (
					<div className='title'>
						<p>{alternativo}</p>
						<div className='display'>
							<h1 className='title__low'>{superior}</h1>
							<h1 className='title__top'>{inferior}</h1>
						</div>
					</div>
				)
			}

		</>
	)

}

export default Title
///* Next components
import type { NextPage } from 'next'
import { useState } from 'react'

//*interface
interface projects{
	content:string
	title:string
	url:string
	primary_thumbnail_url:string
	slug:string
}

const Project: NextPage <projects> = ({ content, title, url, primary_thumbnail_url }) => {

	const [getInfo, setGetInfo] = useState(false)
	
	return (

		<div >
			<div className={ (getInfo? 'indivudual_project_active ' : ' ') + 'individual_project'}>
				<div className="individual_project__imagen">
					<img src={primary_thumbnail_url} alt="" />
				
					<button  className='individual_project__button' onClick={() => { setGetInfo( getInfo=> { return !getInfo})}}>
						<div className="individual_project__button__text">SABER MÁS</div>
						<div className="individual_project__button__icon">
							<div className="individual_project__button__icon__flecha"></div>
						</div>
					</button>

				</div>
				
				<article className="individual_project__info">
					
					<div className='individual_project__info__container'>

						<div className='individual_project__info__container__text'>

							<h3>{title}</h3>

							<div dangerouslySetInnerHTML={{ __html: content }}></div>
						
							<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

						</div>

						<button className="individual_project__button two" onClick={() => { setGetInfo( getInfo=> { return !getInfo}) }}>
							<div className="individual_project__button__icon">
								<div className="individual_project__button__icon__flecha"></div>
							</div>
							<div className="individual_project__button__text">REGRESAR</div>
							
						</button>

					</div>
				</article>
			</div>
		</div>

	)

}

export default Project
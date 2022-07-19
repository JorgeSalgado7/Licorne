
/**
 * @author Maria Meza
 * @name FrontPage
 * @description Portada home
 */

const frontPage = () => {

	return (

		<div className='front_page'>

				{/**  PORTADA */}
				<div className='front_page__desktop'>

					<div className='container'>
						<div className='front_page__desktop__cuadrado'></div>
						<div className='front_page__desktop__triangulo'></div>
						<div className='front_page__desktop__logo'>
							<div className='front_page__desktop__logo__image_logo'>
								<img src='https://licorne-web.s3.us-east-2.amazonaws.com/logo/logo.svg' alt='consultoria' />
							</div>
							
						</div>
					</div>

				</div>

				<div className='front_page__mobile'>

					<div className='container'>
						<div className='front_page__mobile__logo'>
							<div className='front_page__mobile__logo__image_logo'>
								<img src='https://licorne-web.s3.us-east-2.amazonaws.com/logo/logo-movile.svg' alt='tecnologia' />
							</div>
						</div>
					</div>

				</div>
		
		</div>

	)
}

export default frontPage
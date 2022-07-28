//* Next components
import type { NextPage } from 'next'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, {
	Autoplay,
	Pagination,
	Navigation,
	EffectCoverflow,
	EffectCube,
} 
	from 'swiper'
//*Image
import Media from './Media'
import Paypal from '../../svg/MisionVision/PayPal'
import GoogleAnaly from '../../svg/MisionVision/GoogleAnaly'
import Hubs from '../../svg/MisionVision/Hubs'
import GoogleP from '../../svg/MisionVision/GoogleP'
import Dracula from '../../svg/MisionVision/Dracula'
import RD from '../../svg/MisionVision/Rd'
import Shopify from '../../svg/SlidePartners/Shopify'
import CetifyFacebook from '../../svg/MisionVision/CetifyFacebook'
import Planner from '../../svg/MisionVision/Planner'
import AeSolar from '../../svg/MisionVision/AeSolar'
import Sensea from '../../svg/MisionVision/Sensea'
import Becco from '../../svg/MisionVision/Becco'
import Albya from '../../svg/MisionVision/Albya'
import Volvo from '../../svg/MisionVision/Volvo'
import Mansion from '../../svg/MisionVision/Mansion'
import Meat from '../../svg/MisionVision/Meat'
import Spa from '../../svg/MisionVision/Spa'
import TecMonterrey from '../../svg/MisionVision/TecMonterrey'

SwiperCore.use([
	Autoplay,
	Pagination,
	Navigation,
	EffectCoverflow,
	EffectCube
	,
])

//*Components

/**
 * @author Maria Meza
 * @name Partners
 * @description Portada Mision y vision
 */

const Partners: NextPage = () => {

	return (
		<div>
			<div className='partners'>
				<div className='container'>
					<div className='partners__container'>

						<div className='partners__container__business'>

							<div className='partners__container__business__txt'>
								<h1>Socios <span>Estratégicos</span></h1>
							</div>

							<div className='partners__container__business__carousel'>

								<Swiper 
									centeredSlides={false} 
									slidesPerView={'auto'} 
									coverflowEffect={{
										'rotate': 0,
										'stretch': 0,
										'depth': 1,
										'modifier': 1,
										'slideShadows': false
									}} 
									hashNavigation={{
										'watchState': false
									}} 
									navigation={false}
									className="mySwiper"
									autoplay={{
										'delay': 2500,
										'disableOnInteraction': false
									}}
								>
									<SwiperSlide>

										<div className="partners__container__business__carousel">

											<GoogleP/>
							
										</div> 
									</SwiperSlide>

									<SwiperSlide>

										<div className="swiper-slide__img">

											<Paypal/>
						
										</div>
				
									</SwiperSlide>

									<SwiperSlide>

										<div className="swiper-slide__img">

											<Hubs/>

										</div>
					
									</SwiperSlide>

									<SwiperSlide>

										<div className="swiper-slide__img">

											<GoogleAnaly/>

										</div>
					
									</SwiperSlide>

									<SwiperSlide>

										<div className="swiper-slide__img">
											
											<Dracula/>
											
										</div>
				
									</SwiperSlide>

									<SwiperSlide>

										<div className="swiper-slide__img">

											<RD/>

										</div>
					
									</SwiperSlide>

									<SwiperSlide>
					
										<div className="swiper-slide__img">

											<Shopify/>

										</div>
					
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__img">

											<CetifyFacebook/>
					
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__img">

											<Planner/>
					
										</div>
									</SwiperSlide>

								</Swiper>

							</div>

							<div className="partners__container__business__carousel_responsive">

								<Swiper 
									effect={'cube'} 
									grabCursor={true} 
									cubeEffect={{
										'shadow': false,
										'slideShadows': true,
										'shadowOffset': 0,
										'shadowScale': 0
									}}
									className="mySwiper"
									autoplay={{
										'delay': 2500,
										'disableOnInteraction': false
									}}
								>
									<SwiperSlide>
										<div className="swiper-slide__image">

											<GoogleP/>
							
										</div> 
						
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">
											
											<Paypal/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">

											<Hubs/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">
											
											<GoogleAnaly/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">

											<Dracula/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">

											<RD/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">

											<Shopify/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
						
										<div className="swiper-slide__image">

											<CetifyFacebook/>

										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="swiper-slide__image">
										
											<Planner/>

										</div>
									</SwiperSlide>

								</Swiper>

							</div>

						</div>

						<div className='partners__container__clients'>
							<div className='partners__container__clients__txt'>
								<h1>Nuestros <span>Clientes</span></h1>
							</div>
							<div className='partners__container__clients__imagenes'>
								<div className="partners__container__clients__imagenes__img">

									<AeSolar/>

								</div>

								<div className="partners__container__clients__imagenes__img">

									<Sensea/>

								</div>

								<div className="partners__container__clients__imagenes__img">

									<Becco/>

								</div>

								<div className="partners__container__clients__imagenes__img">
						
									<div className="albya">
										<Albya/>
									</div>

								</div>

								<div className="partners__container__clients__imagenes__img"> 

									<Spa/>

								</div>

								<div className="partners__container__clients__imagenes__img">

									<TecMonterrey/>

								</div>

								<div className="partners__container__clients__imagenes__img">

									<Volvo/>

								</div>

								<div className="partners__container__clients__imagenes__img">
									
									<Mansion/>

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<Image 
										src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/14.svg"
										layout='responsive'
										width='161px'
										height='99px' 
										alt="" 
									/>

								</div>

								<div className="partners__container__clients__imagenes__img">

									<img src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/4.png"/>

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<img src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/5.png"  />

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<img src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/10.png"/>

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<img src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/7.png" />

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<div className='partners__container__clients__imagenes__img__small'>
										<Meat/>
									</div>

								</div> 

								<div className="partners__container__clients__imagenes__img">

									<img src="https://licorne-web.s3.us-east-2.amazonaws.com/misionVision/Clientes/12.png"/>

								</div>
							
							</div>
							
						</div>
					</div>
					<Media/>
				</div>
			
			</div>
		</div>

	)
}

export default Partners
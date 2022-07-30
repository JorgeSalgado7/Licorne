//* Next components
import type { NextPage } from 'next'

//* React components
import React from 'react'

//* Swiper components
import SwiperCore, { Autoplay, Pagination, Navigation, EffectCoverflow, EffectCube } from 'swiper'
SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow, EffectCube])
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

//* Components
import Title from '../Common/LicorneTitle'

//* SVG
import GooglePartners from '../../svg/MisionVision/GoogleP'
import Paypal from '../../svg/SlidePartners/Paypal'
import Hubspot from '../../svg/SlidePartners/Hubspot'
import GoogleAnalytics from '../../svg/SlidePartners/GoogleAnalytics'
import DraculaStudio from '../../svg/SlidePartners/DraculaStudio'
import RDStation from '../../svg/SlidePartners/RDStation'
import Shopify from '../../svg/SlidePartners/Shopify'
import FacebookCertification from '../../svg/SlidePartners/FacebookCertification'
import FacebookPlanner from '../../svg/SlidePartners/FacebookPlanner'

/**
 * @author Iván Sánchez
 * @name Partners
 * @description Carrusel de socios de Licorne
 */
const Partners: NextPage = () => {

	return (

		<div className='partners' >
			<div className='partners__content'>

				<div className='partners__content__container container'>

					<div className='partners__content__container__slide'>

						<Title
							title="Socios"
							subtitle="Estrategicos"
						/>

						<div className='partners__content__container__slide__content'>

							<Swiper
								centeredSlides={false}
								slidesPerView={'auto'}
								navigation={false}
								className="mySwiper"
							>

								<SwiperSlide>
									<div className="imagen-swiper">
										<GooglePartners />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper play">
										<Paypal />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper hub">
										<Hubspot />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper ana">
										<GoogleAnalytics />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper dracula">
										<DraculaStudio />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper rd">
										<RDStation />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper shopy">
										<Shopify />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper facebook">
										<FacebookCertification />
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="imagen-swiper facebook">
										<FacebookPlanner />
									</div>
								</SwiperSlide>

							</Swiper>

						</div>

						<div className="partners__content__container__slide__responsive">

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
									<GooglePartners />
								</SwiperSlide>

								<SwiperSlide>
									<Paypal />
								</SwiperSlide>

								<SwiperSlide>
									<Hubspot />
								</SwiperSlide>

								<SwiperSlide>
									<GoogleAnalytics />
								</SwiperSlide>

								<SwiperSlide>
									<DraculaStudio />
								</SwiperSlide>

								<SwiperSlide>
									<RDStation />
								</SwiperSlide>

								<SwiperSlide>
									<Shopify />
								</SwiperSlide>

								<SwiperSlide>
									<span>
										<FacebookCertification />
									</span>
								</SwiperSlide>

								<SwiperSlide>
									<span>
										<FacebookPlanner />
									</span>
								</SwiperSlide>

							</Swiper>

						</div>

					</div>

					<div className='partners__content__container__hastags'>

						<div>
							<Title
								title="Expertos"
								subtitle=""
							/>
						</div>

						<div className='partners__content__container__hastags__content'>
							<div className="partners__content__container__hastags__content__one">
								<p>#LeanStartup <span> #EstrategiaDeNegocio </span> #OKR <span> #Scrum </span> #Agile <span> #InboundMarketing </span> #GoogleAds <span> #SocialMedia </span> #SocialMedia <span> #PlaneaciónEstratégica </span> #LeanStartup <span> #EstrategiaDeNegocio </span> #OKR <span> #Scrum </span> #Agile <span> #InboundMarketing </span> #GoogleAds <span> #SocialMedia </span> #PlaneaciónEstratégica <span> #LeanStartup </span> #EstrategiaDeNegocio <span> #OKR </span> #Scrum <span> #Agile </span> #InboundMarketing <span> #GoogleAds </span></p>
							</div>
							<div className="partners__content__container__hastags__content__two">
								<p>#Vue.js <span> #React </span> #Node <span> #Django </span> #PostgreSQL <span> #MongoDB </span> #MySQL <span> #Python </span> #Php <span> #Vue.js </span> #React <span> #Node </span> #Django <span> #PostgreSQL </span> #MongoDB <span> #MySQL </span> #Python <span> #Php </span> #Vue.js <span> #React </span> #Node <span> #Django </span> #PostgreSQL <span> #MongoDB </span> #MySQL <span> #Python </span> #Php <span> #Vue.js </span> #React <span> #Node </span> #Django <span> #PostgreSQL </span> #MongoDB <span> #MySQL </span> #Python <span> #Php </span> #Vue.js <span> #React </span> #Node <span> #MySQL </span> #Python <span> #Php </span></p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

	)

}

export default Partners
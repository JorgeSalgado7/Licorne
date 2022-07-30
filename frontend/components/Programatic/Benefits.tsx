//* Next components
import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, {
	Autoplay,
	Pagination,
	Navigation,
	EffectCoverflow,
	EffectFlip
} from 'swiper'

SwiperCore.use([
	Autoplay,
	Pagination,
	Navigation,
	EffectCoverflow,
	EffectFlip
])

//*Components
import Titulo from '../Common/LicorneTitle'
import People from '../../svg/Programatic/People'
import Molecules from '../../svg/Programatic/Molecules'
import Shield from '../../svg/Programatic/Shield'
import PeopleTwo from '../../svg/Programatic/PeopleTwo'
import Media from '../../svg/Programatic/Media'

//*Image

/**
 * @author Maria Meza
 * @name Benefits
 * @description Benefits Programatic
 */

const Benefits: NextPage = () => {

	return (
		<div>
			<div className='benefits'>
				<div className='container'>
					<div className='benefits__contenedor'>
						<Titulo
							text=""
							title="Beneficios del marketing programático"
							subtitle=""
							alternative={false}
						/>
						<div className='benefits__contenedor__slide'>
							<Swiper effect={'flip'}
								grabCursor={true}
								pagination={false}
								navigation={true}
								modules={[EffectFlip, Pagination, Navigation]}
								className="mySwiper"
								autoplay={{
									'delay': 6000,
									'disableOnInteraction': false
								}}
							>

								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<div className='swiper-slide__imagen__img'>
											<People />

										</div>

									</div>
									<div className="swiper-slide__texto">
										<p className="llamado">HIPERSEGMENTACIÓN:</p>
										<p>El marketing programático posee una personalización de anuncios basada en hábitos y patrones de consumo, misma que la hace ser más precisa.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<div className='swiper-slide__imagen__img'>

											<Molecules />

										</div>

									</div>
									<div className="swiper-slide__texto">
										<p className="llamado">INTELIGENCIA ARTIFICIAL (IA) Y MACHINE LEARNING (ML):</p>
										<p>Proporcionan un análisis detallado de data que optimiza la eficacia de la estrategia publicitaria para maximizar resultados.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<div className='swiper-slide__imagen__img'>

											<Shield />

										</div>

									</div>
									<div className="swiper-slide__texto">
										<p className="llamado">BRAND SAFETY:</p>
										<p>El programmatic otorga mayor protección a las amenazas digitales que pueden dañar o perjudicar las ventas y la presencia de una marca en la web.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<div className='swiper-slide__imagen__img'>
											<PeopleTwo />

										</div>

									</div>
									<div className="swiper-slide__texto">
										<p className="llamado">USO DE DATOS DE TERCEROS(THIRD PARTY DATA):</p>
										<p>Mediante la recopilación de datos relevantes de los usuarios creamos estrategias de publicidad más eficaces.</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="swiper-slide__imagen">
										<div className='swiper-slide__imagen__img'>

											<Media />

										</div>

									</div>
									<div className="swiper-slide__texto">
										<p className="llamado">RICH MEDIA:</p>
										<p>Uso de anuncios publicitarios de tecnología avanzada que resultan más atractivos para los usuarios.</p>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>

						<div className='benefits__contenedor__slideDesktop'>
							<Swiper
								centeredSlides={true}
								slidesPerView={'auto'}
								hashNavigation={{
									'watchState': true
								}}
								navigation={true}
								className="mySwiper"
								autoplay={{
									'delay': 2500,
									'disableOnInteraction': false
								}}
							>
								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<People />

									</div>
									<div className="swiper-slide__text">
										<p>HIPERSEGMENTACIÓN:</p>
										<p>El marketing programático posee una personalización de anuncios basada en hábitos y patrones de consumo, misma que la hace ser más precisa.</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<Molecules />

									</div>
									<div className="swiper-slide__text">
										<p>INTELIGENCIA ARTIFICIAL (IA) Y MACHINE LEARNING (ML):</p>
										<p>Proporcionan un análisis detallado de data que optimiza la eficacia de la estrategia publicitaria para maximizar resultados.</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<Shield />

									</div>
									<div className="swiper-slide__text">
										<p>BRAND SAFETY:</p>
										<p>El programmatic otorga mayor protección a las amenazas digitales que pueden dañar o perjudicar las ventas y la presencia de una marca en la web.</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<PeopleTwo />

									</div>
									<div className="swiper-slide__text">
										<p>USO DE DATOS DE TERCEROS(THIRD PARTY DATA):</p>
										<p>Mediante la recopilación de datos relevantes de los usuarios creamos estrategias de publicidad más eficaces.</p>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="swiper-slide__imagen">

										<Media />

									</div>
									<div className="swiper-slide__text">
										<p>RICH MEDIA:</p>
										<p>Uso de anuncios publicitarios de tecnología avanzada que resultan más atractivos para los usuarios.</p>
									</div>
								</SwiperSlide>

							</Swiper>
						</div>
					</div>
				</div>

			</div>
		</div>

	)
}

export default Benefits
//* React components
import { useEffect, useState } from 'react'
import axios from 'axios'

//* Next components
import type { NextPage } from 'next'

//* Slide components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

//* Components
import TeamCard from './TeamCard'

/**
 * @author Iván Sánchez
 * @name Slide
 * @description Slide
 */
const Slide: NextPage = () => {

	const [users, setUsers] = useState<Array<[]>>([])

	const OBTENER_USUARIOS = async () => {
		const { data } = await axios.get('https://admin.licorne.mx/wp-json/wp/v2/teams?per_page=100.&_embed')
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const temp = data.sort(( a:any, b:any ) => (parseInt(a.identifier) > parseInt(b.identifier) ? 1 : parseInt(a.identifier) < parseInt(b.identifier) ? -1 : 0))
		setUsers(temp)
	}

	useEffect(() => {
		
		OBTENER_USUARIOS()

	}, [])

	return (

		<div>

			<div className="slide">
				
				<div className="slide__container container">
							
					<>

						<Swiper
							grabCursor={true}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="mySwiper"
						>

							{
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								users.map((user:any, index) => (

									<SwiperSlide key={index}>

										<TeamCard 
											user={user}
										/>

									</SwiperSlide>
									
								))

							}

						</Swiper>

					</>

				</div>

			</div>

		</div>

	)

}

export default Slide
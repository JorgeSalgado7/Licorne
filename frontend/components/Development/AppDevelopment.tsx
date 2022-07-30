//* Next components
import type { NextPage } from 'next'

//* Components
import Titulo from '../Common/LicorneTitle'

//* SVG
import Html from '../../svg/Development/Html'
import Php from '../../svg/Development/Php'
import Angular from '../../svg/Development/Angular'
import Css from '../../svg/Development/Css'
import Laravel from '../../svg/Development/Laravel'
import Vue from '../../svg/Development/Vue'
import Js from '../../svg/Development/Js'
import CodeIgniter from '../../svg/Development/CodeIgniter'
import MySQL from '../../svg/Development/MySQL'
import Ajax from '../../svg/Development/Ajax'
import Python from '../../svg/Development/Python'
import Postgre from '../../svg/Development/Postgre'
import Json from '../../svg/Development/Json'
import Django from '../../svg/Development/Django'
import Sql from '../../svg/Development/Sql'
import Axios from '../../svg/Development/Axios'
import React from '../../svg/Development/React'
import Mongo from '../../svg/Development/Mongo'

/**
 * @author Iván Sánchez
 * @name AppDevelopment
 * @description Animación de portada de consultoria
 */
const AppDevelopment: NextPage = () => {

	return (

		<div className='app_development'>

			<div className="app_development__content">

				<div className="app_development__content__container container">

					<Titulo
						title="Desarrollo de"
						subtitle="aplicaciones web."
						text=""
						alternative={false}
					/>

					<div className="app_development__content__container__text">Tu aplicación web enfocada en <span>la experiencia del usuario</span> y un <span>armonioso</span> funcionamiento entre <span>backend y frontend.</span> Deja en tus visitantes experiencias únicas, experiencias que convierten <span>visitas en clientes.</span></div>

					<div className="app_development__content__container__images">

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Html />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Php />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Angular />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Css />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Laravel />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Vue />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Js />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<CodeIgniter />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<MySQL />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Ajax />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Python />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Postgre />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Json />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Django />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Sql />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Axios />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<React />
							</div>
						</div>

						<div className="app_development__content__container__images__individual">
							<div className="app_development__content__container__images__individual__no_flex">
								<Mongo />
							</div>
						</div>

					</div>

				</div>

			</div>

		</div>

	)

}

export default AppDevelopment
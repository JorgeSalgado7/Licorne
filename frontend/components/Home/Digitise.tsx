//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//*Components
import Titulo from '../Common/Title'
/**
 * @author Maria Meza
 * @name Digitise
 * @description Digitise
 */
const Digitise: NextPage = () => {

	return (

		<div>
			<div className='digitise'>

				<div className='container'>

					<Titulo
						alternativo=""
						superior="Digitalízate"
						inferior=""
						invertido={false}
					/>

					<div className="digitise__menu">

						<div className="digitise__menu__links">

							<Link href="./../consultoria-lean-startup">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Lean Startup </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../desarrollo-de-aplicaciones-web">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Desarrollo </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="../../sitio-web">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Web </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../ecommerce">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Ecommerce </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../app">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> APP </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../mantenimiento">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Mantenimiento </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../inbound-marketing">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a className="a2"> Inbound marketing </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../seo">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> SEO </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="./../social-media">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Social Media </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="/google-ads">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Google Ads </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="/social-ads">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Social Ads </a></div>
									<div className="digitise__menu__links__option__separating"></div>
								</div>
							</Link>

							<Link href="/programatic">
								<div className="digitise__menu__links__option">
									<div className="digitise__menu__links__option__selection"></div>
									<div className="digitise__menu__links__option__text"><a> Programmatic </a></div>
								</div>
							</Link>

						</div>
					</div>

				</div>
			</div>
		</div>

	)

}

export default Digitise
//* Next components
import type { NextPage } from 'next'
import Link from 'next/link'

//* Interfaces
interface Props {
	url: string,
	text: string,
}

/**
 * @author JorgeSalgado
 * @name LicorneLink
 * @description  LicorneLink
 */

const LicorneLink: NextPage<Props> = ({ url, text }) => {

	return (

		<Link href={url}>

			<a className='licorne_link'>

				{/** Text */}
				<div className="licorne_link__text">{text}</div>

				{/** Icon */}
				<div className='licorne_link__icon'>
					<div className='licorne_link__icon__line' />
					<div className='licorne_link__icon__circle'>
						<div className='licorne_link__icon__circle__arrow' />
					</div>
				</div>

			</a>

		</Link>

	)

}

export default LicorneLink
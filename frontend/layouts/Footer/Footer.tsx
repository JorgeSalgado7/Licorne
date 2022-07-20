//*COMPONENTS
import FooterTop from './FooterTop'
import FooterLower from './FooterLower'

/**
 * @author Maria Meza
 * @name Footer
 * @description Footer general web
 */

const Footer = () => {

	return (

		<>

			<footer id="footer">
			
				<div className='footer '>

					<FooterTop/>

					<FooterLower/>

					</div>

			</footer>

		</>

	)
}

export default Footer
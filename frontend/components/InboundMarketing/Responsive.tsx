//* Next components
import type { NextPage } from 'next'

/**
 * @author Iván Sánchez
 * @name SVG_Responsive
 * @description Imagen SVG
 */
const Responsive: NextPage = () => {

	return (

		<div className='responsive_inbound'>
			<div className='responsive_inbound__container container'>
				<h1 className='responsive_inbound__container__title'>Resultados</h1>
				<div className='responsive_inbound__container__section'>
					<p>Nuestra metodología <span> Inbound Marketing FIT </span> permite enganchar a tu público objetivo en el momento justo, lo cual disminuye el costo de adquisición y aumenta la efectividad en un 35%. </p>
					<p>Llevamos de la mano a tu buyer persona mediante contenidos relevantes que faciliten el cierre de ventas para clientes felices que <span> recomienden a tu marca. </span></p> 
					<p>Incrementa tus ventas con <span> upselling, cross selling y recomendación de boca en boca. </span></p>
				</div>  
			</div>
		</div>

	)

}

export default Responsive
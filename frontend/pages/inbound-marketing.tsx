//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Fit from '../components/InboundMarketing/Fit'
import Boost from '../components/InboundMarketing/Boost'
import Stages from '../components/InboundMarketing/Stages'
import Results from '../components/InboundMarketing/Results'
import Responsive from '../components/InboundMarketing/Responsive'
import Learning from '../components/InboundMarketing/Learning'

/**
 * @author Iván Sánchez	
 * @name consultoria
 * @description Página sobre Lean Start Up
 */

const Consultoria: NextPage = () => {

	const title = 'Estrategias de Inbound Marketing a la medida de tus metas'
	const description = 'Nuestra Metodología Inbound Marketing FIT nos permite trabajar todas las etapas del embudo para disminuir el costo de adquisición y aumentar la efectividad'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Fit />
			<Boost />
			<Stages />
			<Responsive />
			<Results />
			<Learning />
		</MainLayout>

	)

}

export default Consultoria

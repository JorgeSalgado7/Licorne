//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import History from '../components/History/History'
import Chapter00 from '../components/History/Chapter00'
import Chapter01 from '../components/History/Chapter01'
import Chapter02 from '../components/History/Chapter02'
import Chapter03 from '../components/History/Chapter03'
import Chapter04 from '../components/History/Chapter04'
import Chapter05 from '../components/History/Chapter05'
import Chapter06 from '../components/History/Chapter06'
import Chapter07 from '../components/History/Chapter07'
import Chapter08 from '../components/History/Chapter08'
import Chapter09 from '../components/History/Chapter09'
import Chapter10 from '../components/History/Chapter10'

/**
 * @author Iván Sánchez	
 * @name Historia
 * @description Página principal de Historia
*/
const Historia: NextPage = () => {

	const title = 'Nuestra historia la escribimos juntos. ¡Conócela!'
	const description = 'Somos precursores en la implementación e innovación de estrategias de marketing digital creativas y ganadoras dirigidas al crecimiento de tu marca.'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<History />
			<Chapter00 />
			<Chapter01 />
			<Chapter02 />
			<Chapter03 />
			<Chapter04 />
			<Chapter05 />
			<Chapter06 />
			<Chapter07 />
			<Chapter08 />
			<Chapter09 />
			<Chapter10 />
		</MainLayout>

	)

}

export default Historia
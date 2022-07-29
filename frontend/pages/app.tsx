//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../hooks/useViewheight'

//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/App/Hero'
import Methodology from '../components/App/Methodology'
import Requirements from '../components/App/Requirements'
import WeKnow from '../components/App/WeKnow'

/**
 * @author Maria Meza 
 * @name App
 * @description Página alternative del sitio web
 */

const App: NextPage = () => {

	const title = 'Desarrollo de Apps: Swift, Flutter, React Native, Cordova.'
	const description = 'Conéctate digitalmente con apps que ofrecen la mejor experiencia de usuario. Fáciles de entender y usar. Compatibles con App Store y Play Store.'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Hero />
			<Methodology />
			<Requirements />
			<WeKnow />
		</MainLayout>

	)

}

export default App

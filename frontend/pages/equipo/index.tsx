//* Next components
import type { NextPage } from 'next'

//* Custom Hooks
import { useViewheight } from '../../hooks/useViewheight'

//* Components
import MainLayout from '../../layouts/MainLayout'
import Success from '../../components/Team/Success'
import Table from '../../components/Team/Table'
import Slide from '../../components/Team/Slide'
import Group from '../../components/Team/Group'

/**
 * @author Iván Sánchez
 * @name Team
 * @description Página principal de Team
 */
const Team: NextPage = () => {

	const title = 'Equipo'
	const description = 'Licorne Startup Kings'

	useViewheight()

	return (

		<MainLayout title={title} description={description}>
			<Success />
			<Table />
			<Slide />
			<Group />
		</MainLayout>

	)

}

export default Team
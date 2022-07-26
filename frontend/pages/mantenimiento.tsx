//* Components
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Maintenance/Hero'
import Update from '../components/Maintenance/Update'
import Policy from '../components/Maintenance/Policy'
import Since from '../components/Maintenance/Since'

const mantenimiento = () => {

	const title = 'Mantenimiento - Licorne'
	const description = ''

	return (

		<MainLayout title={title} description={description}>
			<Hero/>
			<Update/>
			<Policy/>
			<Since/>
		</MainLayout>

	)
}

export default mantenimiento
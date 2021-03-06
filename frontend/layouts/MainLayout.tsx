//* Next components
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

//* Interfaces
import { LayoutProps } from '../interfaces/layout'

//* Components
import Header from './Header'
import Lateral from './Lateral'
import MenuMovil from './Menu/MenuMovil'
import Footer from './Footer'
import FooterLower from './FooterLower'

/**
 * @author Jorge Salgado
 * @name MainLayout
 * @description Plantilla alternative del sitio
 */
const MainLayout: NextPage<LayoutProps> = ({ title, description, children }) => {

	return (

		<>

			<Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-119255819-1"></Script>
			<Script strategy="lazyOnload">
				{
					`
						window.dataLayer = window.dataLayer || []
						function gtag(){
							dataLayer.push(arguments)
						}
						gtag('js', new Date())
						gtag('config', 'UA-119255819-1')
					`
				}
			</Script>

			<Script strategy="lazyOnload" src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/d2dabca4-10df-4bb7-a1bd-d394fe093a90-loader.js" ></Script>

			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>

			<Lateral />
			<Header />
			{children}
			<MenuMovil />
			<Footer />
			<FooterLower />
		</>

	)

}

export default MainLayout

/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'scss')],
	},
	images: {
		domains: ['licorne-web.s3.us-east-2.amazonaws.com'],
	},
}

module.exports = nextConfig
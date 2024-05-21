// /** @type {import('next').NextConfig} */
// const nextConfig = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
			  protocol: "https",
			  hostname: "scontent-sea1-1.cdninstagram.com",
			  pathname: "**",
			},
			{
			  protocol: "https",
			  hostname: "cdn.sanity.io",
			  pathname: "**",
			},
		  ],
		// domains: ['cdn.sanity.io', 'scontent-sea1-1.cdninstagram.com'],
	}
}

export default nextConfig;

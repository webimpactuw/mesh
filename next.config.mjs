// /** @type {import('next').NextConfig} */
// const nextConfig = {};
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
			  protocol: "https",
			  hostname: "scontent.cdninstagram.com",
			  port: "",
			},
		  ],
		domains: ['cdn.sanity.io', 'scontent-sea1-1.cdninstagram.com'],
	}
}

export default nextConfig;

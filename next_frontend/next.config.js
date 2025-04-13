/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
	  return [
		// Allow bf (back and forward) cache for HTML Pages
		{
			source: "/:path*",
			headers: [
				{
				key: "Cache-Control",
				value: "public, max-age=0, must-revalidate", // Allow caching in bfcache
				},
			],
		},
		// Cache images for 1 year
		{
			source: '/images/:path*', // Source = All Assets in /public/images/
			headers: [
			{
				key: 'Cache-Control',
				value: 'public, max-age=31536000, immutable, stale-while-revalidate=86400',
				// stale-while-revalidate = Serve cache for 1 year, refresh in background daily
			},
			],
		},
		// Cache svg for 1 year
		{
			source: '/svg/:path*', // Source = All Assets in /public/images/
			headers: [
			{
				key: 'Cache-Control',
				value: 'public, max-age=31536000, immutable, stale-while-revalidate=86400',
				// stale-while-revalidate = Serve cache for 1 year, refresh in background daily
			},
			],
		},
		// Cache fonts for 1 year (add stale-while-revalidate for consistency)
		{
			source: '/fonts/:path*', // Source = All assets in /public/fonts/
			headers: [
			{
				key: 'Cache-Control',
				value: 'public, max-age=31536000, immutable',
			},
			],
		},
	  ];
	},
	images: {
		domains: ['scontent-det1-1.cdninstagram.com', 'cdninstagram.com'],
	},
	output: "standalone", // Makes the Next.js app deploy as a "single" and "self contained" unit -> Suitable for containerized environments
  };
  
  module.exports = nextConfig;

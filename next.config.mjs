/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true, // Isso garante que o GitHub Pages funcione corretamente
	experimental: {
	  outputStandalone: true, // Garantir que o projeto funcione de forma independente
	},
  };
  
  export default nextConfig;
  
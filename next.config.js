/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: "/nextjs-github-pages",
    assetPrefix: 'https://binh168.github.io/phank_wedding_final/',
    images: {
        unoptimized: true,
        domains: ['binh168.github.io/phank_wedding_final']
    }
}

module.exports = nextConfig

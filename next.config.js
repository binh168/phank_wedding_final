/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    basePath: "/nextjs-github-pages",
    assetPrefix: 'https://binh168.github.io/phank_wedding_final/',
    images: {
        // unoptimized: true,
        loader: 'imgix',
        path: 'leorio-649772974.imgix.net',
    }
}

module.exports = nextConfig

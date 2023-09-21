const env = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: env.NEXT_PUBLIC_BASE_PATH,
    // assetsPrefix: "https://binh168.github.io/phank_wedding_final/",
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
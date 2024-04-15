/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "images.unsplash.com" },
            { hostname: "daisyui.com" },
        ]
    }
};

export default nextConfig;
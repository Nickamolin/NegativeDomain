/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "zvajkoxglyawliuigirq.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
    allowedDevOrigins: [
        '192.168.1.194',
        '192.168.1.195',
        '192.168.1.196',
        '192.168.1.197',
        '192.168.1.198',
        '192.168.1.199'
    ],
};

export default nextConfig;

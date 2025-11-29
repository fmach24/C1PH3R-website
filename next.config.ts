import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // Statyczny eksport - generuje zwykłe pliki HTML
  trailingSlash: true,  // Dla lepszej kompatybilności z serwerami
  images: {
    unoptimized: true,  // Wyłącz optymalizację obrazów dla static export
  },
};

export default nextConfig;

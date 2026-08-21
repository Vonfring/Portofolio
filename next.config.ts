import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next memblokir permintaan lintas-origin ke aset dev secara default. Saat menguji
  // dari HP lewat IP LAN, origin-nya bukan localhost — tanpa daftar ini HMR dan aset
  // dev akan diblokir. Hanya berlaku di `next dev`, tidak berpengaruh pada build.
  // Ganti IP di bawah kalau jaringan/router-mu memberi alamat berbeda (cek: ipconfig).
  allowedDevOrigins: ["192.168.1.9"],
};

export default nextConfig;

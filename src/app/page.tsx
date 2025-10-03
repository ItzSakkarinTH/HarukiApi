import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        {/* Logo/Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl">
            API Services
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl w-full bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-red-900/30">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-red-500">
            Product Management API
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-12">
            RESTful API สำหรับการจัดข้อมูลสินค้าและหมวดหมู่
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:bg-gray-800/70 hover:border-red-700/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-2">Product Management</h3>
              <p className="text-gray-400">จัดการข้อมูลสินค้า เพิ่ม ลบ แก้ไข และค้นหาสินค้า</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:bg-gray-800/70 hover:border-red-700/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Category System</h3>
              <p className="text-gray-400">จัดการหมวดหมู่สินค้าแบบมีโครงสร้าง</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:bg-gray-800/70 hover:border-red-700/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Search</h3>
              <p className="text-gray-400">ค้นหาและกรองข้อมูลได้อย่างรวดเร็ว</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-red-900/30 hover:bg-gray-800/70 hover:border-red-700/50 transition-all hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Reliable</h3>
              <p className="text-gray-400">ประสิทธิภาพสูง รองรับการใช้งานจำนวนมาก</p>
            </div>
          </div>

          {/* API Endpoint Display */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-red-800/40 mb-8">
            <p className="text-red-400 text-sm mb-2">Base URL</p>
            <code className="text-white text-lg font-mono">
              https://haruki-api.vercel.app/api
            </code>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://haruki-api.vercel.app/api/products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg text-center"
            >
              🚀 View Products
            </a>
            <a
              href="https://haruki-api.vercel.app/api/categories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm border border-red-900/30 hover:border-red-700/50 text-center"
            >
              📋 View Categories
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </div>
  );
}
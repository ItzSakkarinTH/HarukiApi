import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-8">
        {/* Logo/Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-2xl">
            API Services
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Product Management API
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 text-center mb-12">
            RESTful API สำหรับจัดการข้อมูลสินค้าและหมวดหมู่
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-white mb-2">Product Management</h3>
              <p className="text-purple-200">จัดการข้อมูลสินค้า เพิ่ม ลบ แก้ไข และค้นหาสินค้า</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Category System</h3>
              <p className="text-purple-200">จัดการหมวดหมู่สินค้าแบบมีโครงสร้าง</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Search</h3>
              <p className="text-purple-200">ค้นหาและกรองข้อมูลได้อย่างรวดเร็ว</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Reliable</h3>
              <p className="text-purple-200">ประสิทธิภาพสูง รองรับการใช้งานจำนวนมาก</p>
            </div>
          </div>

          {/* API Endpoint Display */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mb-8">
            <p className="text-purple-300 text-sm mb-2">Base URL</p>
            <code className="text-white text-lg font-mono">
              https://new-api-x-3dbr.vercel.app/api
            </code>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://new-api-x-3dbr.vercel.app/api/products"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg text-center"
            >
              🚀 View Products
            </a>
            <a
              href="https://new-api-x-3dbr.vercel.app/api/categories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm border border-white/20 text-center"
            >
              📋 View Categories
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-purple-300">
          <p className="text-sm">Built with Next.js & TypeScript</p>
        </div>
      </div>
    </div>
  );
}
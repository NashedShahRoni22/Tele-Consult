import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Stethoscope,
  CheckCircle,
  Star,
  MessageSquare,
} from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero({ fadeInUp, staggerContainer }) {
  const [searchQuery, setSearchQuery] = useState("");
  // Stats
  const stats = [
    { value: "500+", label: "Verified Doctors" },
    { value: "10K+", label: "Happy Patients" },
    { value: "50+", label: "Specializations" },
    { value: "24/7", label: "Available" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <MessageSquare size={16} className="mr-2" />
              Your Health, Our Priority
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Connect with{" "}
              <span className="text-green-600">Qualified Doctors</span> Online
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Book instant video consultations with verified doctors. Get
              prescriptions, medical advice, and care from home.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="relative max-w-xl mx-auto lg:mx-0 mb-6"
            >
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Search
                </motion.button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg"
              >
                Find a Doctor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all"
              >
                How It Works
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Placeholder for illustration - you can replace with actual image */}
              <div className="aspect-square flex items-center justify-center">
                {/* <Spline scene="https://prod.spline.design/D4MddUFS5Fqe0Q5T/scene.splinecode"  /> */}
                <Spline scene="https://prod.spline.design/Bh3BTTWX7CzH6IR1/scene.splinecode"  />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Verified</p>
                    <p className="text-sm text-gray-600">500+ Doctors</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <Star
                    className="text-yellow-500"
                    size={24}
                    fill="currentColor"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">4.9 Rating</p>
                    <p className="text-sm text-gray-600">10K+ Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

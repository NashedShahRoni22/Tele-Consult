import { motion } from "framer-motion";
import {
  Stethoscope,
  Heart,
  Brain,
  Baby,
  Bone,
  Activity,
} from "lucide-react";

export default function Departments({fadeInUp, staggerContainer}) {
  // Departments data
  const departments = [
    {
      name: "Cardiology",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      doctors: 45,
    },
    {
      name: "Neurology",
      icon: Brain,
      color: "bg-purple-100 text-purple-600",
      doctors: 32,
    },
    {
      name: "Pediatrics",
      icon: Baby,
      color: "bg-blue-100 text-blue-600",
      doctors: 38,
    },
    {
      name: "Orthopedics",
      icon: Bone,
      color: "bg-orange-100 text-orange-600",
      doctors: 28,
    },
    {
      name: "General",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600",
      doctors: 56,
    },
    {
      name: "Dermatology",
      icon: Activity,
      color: "bg-pink-100 text-pink-600",
      doctors: 24,
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Specialty
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the right specialist for your health needs
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:border-green-500 hover:shadow-xl transition-all"
            >
              <div
                className={`w-16 h-16 ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <dept.icon size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{dept.name}</h3>
              <p className="text-sm text-gray-600">{dept.doctors} Doctors</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

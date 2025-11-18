import { motion } from "framer-motion";
import {
  Video,
  Calendar,
  FileText,
  Shield,
  Clock,
  Phone,
} from "lucide-react";

export default function Features({ fadeInUp, staggerContainer }) {
  // Features data
  const features = [
    {
      icon: Video,
      title: "Video Consultation",
      description:
        "Face-to-face consultations with doctors from the comfort of your home",
    },
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments instantly based on doctor availability",
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive and store prescriptions digitally for easy access",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and completely confidential",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Access healthcare services anytime, anywhere you need",
    },
    {
      icon: Phone,
      title: "Pre-Consultation",
      description:
        "Junior doctors collect your case history before consultation",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TCP?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience healthcare that's convenient, secure, and patient-focused
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

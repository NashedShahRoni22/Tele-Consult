import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Works({ fadeInUp, staggerContainer }) {
  // How it works steps
  const steps = [
    {
      number: "01",
      title: "Search Doctor",
      description: "Find the right doctor by specialty or name",
    },
    {
      number: "02",
      title: "Book Appointment",
      description: "Choose a convenient time slot and book instantly",
    },
    {
      number: "03",
      title: "Pre-Consultation",
      description: "Junior doctor collects your medical history",
    },
    {
      number: "04",
      title: "Consult Online",
      description: "Join video call with your doctor at scheduled time",
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
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with online consultation in 4 simple steps
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-green-200">
                  <ArrowRight
                    className="absolute -right-2 -top-3 text-green-500"
                    size={24}
                  />
                </div>
              )}
              <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

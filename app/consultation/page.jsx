"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Brain, Baby, Bone, Eye, Ear, Pill,
  Activity, Stethoscope, User, Users, Search, ChevronRight,
  Thermometer, Droplet, HeartPulse, Zap, Wind, Shield
} from 'lucide-react';

const ConsultationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // Specialist Categories (Departments)
  const specialists = [
    { id: 1, name: 'Cardiologist', icon: Heart, color: 'from-red-400 to-red-600', doctors: 45, description: 'Heart & Blood Vessels' },
    { id: 2, name: 'Neurologist', icon: Brain, color: 'from-purple-400 to-purple-600', doctors: 32, description: 'Brain & Nervous System' },
    { id: 3, name: 'Pediatrician', icon: Baby, color: 'from-blue-400 to-blue-600', doctors: 38, description: 'Child Health Specialist' },
    { id: 4, name: 'Orthopedic', icon: Bone, color: 'from-orange-400 to-orange-600', doctors: 28, description: 'Bones & Joints' },
    { id: 5, name: 'Ophthalmologist', icon: Eye, color: 'from-cyan-400 to-cyan-600', doctors: 22, description: 'Eye Specialist' },
    { id: 6, name: 'ENT Specialist', icon: Ear, color: 'from-pink-400 to-pink-600', doctors: 25, description: 'Ear, Nose & Throat' },
    { id: 7, name: 'Pulmonologist', icon: Wind, color: 'from-teal-400 to-teal-600', doctors: 18, description: 'Lung & Respiratory' },
    { id: 8, name: 'General Physician', icon: Stethoscope, color: 'from-green-400 to-green-600', doctors: 65, description: 'General Healthcare' },
    { id: 9, name: 'Dermatologist', icon: Activity, color: 'from-rose-400 to-rose-600', doctors: 30, description: 'Skin Specialist' },
    { id: 10, name: 'Psychiatrist', icon: User, color: 'from-indigo-400 to-indigo-600', doctors: 20, description: 'Mental Health' },
    { id: 11, name: 'Gastroenterologist', icon: Pill, color: 'from-yellow-400 to-yellow-600', doctors: 24, description: 'Digestive System' },
    { id: 12, name: 'Urologist', icon: Droplet, color: 'from-sky-400 to-sky-600', doctors: 19, description: 'Urinary System' }
  ];

  // Clinical Areas
  const clinicalAreas = [
    { id: 1, name: 'Sexual Health', icon: HeartPulse, color: 'bg-pink-100 text-pink-600 border-pink-200', query: 'sexual-health' },
    { id: 2, name: 'Women\'s Health', icon: Users, color: 'bg-purple-100 text-purple-600 border-purple-200', query: 'womens-health' },
    { id: 3, name: 'Mental Health', icon: Brain, color: 'bg-indigo-100 text-indigo-600 border-indigo-200', query: 'mental-health' },
    { id: 4, name: 'Child Health', icon: Baby, color: 'bg-blue-100 text-blue-600 border-blue-200', query: 'child-health' },
    { id: 5, name: 'Elderly Care', icon: Shield, color: 'bg-orange-100 text-orange-600 border-orange-200', query: 'elderly-care' },
    { id: 6, name: 'Emergency Care', icon: Zap, color: 'bg-red-100 text-red-600 border-red-200', query: 'emergency-care' },
    { id: 7, name: 'Chronic Diseases', icon: Activity, color: 'bg-green-100 text-green-600 border-green-200', query: 'chronic-diseases' },
    { id: 8, name: 'Preventive Care', icon: Shield, color: 'bg-teal-100 text-teal-600 border-teal-200', query: 'preventive-care' }
  ];

  // Common Health Problems
  const healthProblems = [
    { id: 1, name: 'Fever & Cold', icon: Thermometer, color: 'bg-orange-50 border-orange-200 hover:border-orange-400', query: 'fever-cold' },
    { id: 2, name: 'Diabetes', icon: Droplet, color: 'bg-blue-50 border-blue-200 hover:border-blue-400', query: 'diabetes' },
    { id: 3, name: 'High Blood Pressure', icon: Heart, color: 'bg-red-50 border-red-200 hover:border-red-400', query: 'high-blood-pressure' },
    { id: 4, name: 'Asthma', icon: Wind, color: 'bg-cyan-50 border-cyan-200 hover:border-cyan-400', query: 'asthma' },
    { id: 5, name: 'Anxiety & Stress', icon: Brain, color: 'bg-purple-50 border-purple-200 hover:border-purple-400', query: 'anxiety-stress' },
    { id: 6, name: 'Skin Problems', icon: Activity, color: 'bg-pink-50 border-pink-200 hover:border-pink-400', query: 'skin-problems' },
    { id: 7, name: 'Digestive Issues', icon: Pill, color: 'bg-yellow-50 border-yellow-200 hover:border-yellow-400', query: 'digestive-issues' },
    { id: 8, name: 'Back Pain', icon: Bone, color: 'bg-orange-50 border-orange-200 hover:border-orange-400', query: 'back-pain' },
    { id: 9, name: 'Headache & Migraine', icon: Brain, color: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400', query: 'headache-migraine' },
    { id: 10, name: 'Allergies', icon: Shield, color: 'bg-green-50 border-green-200 hover:border-green-400', query: 'allergies' },
    { id: 11, name: 'Eye Problems', icon: Eye, color: 'bg-teal-50 border-teal-200 hover:border-teal-400', query: 'eye-problems' },
    { id: 12, name: 'Ear Infection', icon: Ear, color: 'bg-rose-50 border-rose-200 hover:border-rose-400', query: 'ear-infection' }
  ];

  // Handle navigation for specialist
  const handleSpecialistClick = (specialist) => {
    // In real app: router.push(`/doctors?specialty=${specialist.name.toLowerCase()}`)
    console.log(`Navigating to: /doctors?specialty=${specialist.name.toLowerCase()}`);
    alert(`Navigating to doctors with specialty: ${specialist.name}`);
  };

  // Handle navigation for clinical area
  const handleClinicalAreaClick = (area) => {
    // In real app: router.push(`/doctors?clinical-area=${area.query}`)
    console.log(`Navigating to: /doctors?clinical-area=${area.query}`);
    alert(`Navigating to doctors for clinical area: ${area.name}`);
  };

  // Handle navigation for health problem
  const handleHealthProblemClick = (problem) => {
    // In real app: router.push(`/doctors?health-issue=${problem.query}`)
    console.log(`Navigating to: /doctors?health-issue=${problem.query}`);
    alert(`Navigating to doctors for health issue: ${problem.name}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-green-600">Consultation</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a specialist, clinical area, or search by health concern
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search doctors, specialties, or health issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400 shadow-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* Specialists Section */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Find Specialist
            </h2>
            <p className="text-gray-600">Browse doctors by their specialty</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {specialists.map((specialist) => (
              <motion.div
                key={specialist.id}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleSpecialistClick(specialist)}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${specialist.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <specialist.icon size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-lg">{specialist.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{specialist.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{specialist.doctors} Doctors</span>
                  <ChevronRight size={18} className="text-green-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Clinical Areas Section */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Clinical Areas
            </h2>
            <p className="text-gray-600">Specialized care for specific health needs</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {clinicalAreas.map((area) => (
              <motion.div
                key={area.id}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.03 }}
                onClick={() => handleClinicalAreaClick(area)}
                className={`${area.color} rounded-xl p-6 border-2 cursor-pointer hover:shadow-lg transition-all group`}
              >
                <area.icon size={32} className="mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-base">{area.name}</h3>
                <ChevronRight size={16} className="mt-2 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Common Health Problems Section */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Common Health Problems
            </h2>
            <p className="text-gray-600">Quick access to doctors for common conditions</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {healthProblems.map((problem) => (
              <motion.div
                key={problem.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                onClick={() => handleHealthProblemClick(problem)}
                className={`${problem.color} bg-white rounded-xl p-5 border-2 cursor-pointer hover:shadow-md transition-all group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <problem.icon size={24} className="text-gray-700 group-hover:scale-110 transition-transform" />
                  <ChevronRight size={18} className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{problem.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Talk to our health advisors to get personalized doctor recommendations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg"
          >
            Contact Health Advisor
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default ConsultationPage;
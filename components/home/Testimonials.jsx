import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Ahmed',
      role: 'Mother of Two',
      location: 'Dhaka, Bangladesh',
      image: '👩‍💼', // Replace with actual image URL
      rating: 5,
      text: 'TCP made it so easy to consult with a pediatrician for my children. The pre-consultation by the junior doctor was thorough, and the video call was seamless. Highly recommended!',
      date: 'October 2024'
    },
    {
      id: 2,
      name: 'Rakib Hassan',
      role: 'Software Engineer',
      location: 'Chittagong, Bangladesh',
      image: '👨‍💻',
      rating: 5,
      text: 'As someone with a busy schedule, TCP has been a lifesaver. I can consult doctors from my home office without taking time off work. The digital prescriptions are a great feature!',
      date: 'November 2024'
    },
    {
      id: 3,
      name: 'Nadia Khan',
      role: 'Teacher',
      location: 'Sylhet, Bangladesh',
      image: '👩‍🏫',
      rating: 5,
      text: 'The quality of care I received was exceptional. The doctor was professional, and the junior doctor who collected my case history made the whole process smooth and efficient.',
      date: 'September 2024'
    },
    {
      id: 4,
      name: 'Dr. Mahmud Rahman',
      role: 'Senior Doctor - Cardiology',
      location: 'Dhaka, Bangladesh',
      image: '👨‍⚕️',
      rating: 5,
      text: 'As a doctor on TCP, I appreciate the pre-consultation system. It saves time and helps me prepare better for each patient. The platform is intuitive and reliable.',
      date: 'October 2024'
    },
    {
      id: 5,
      name: 'Fatima Begum',
      role: 'Retired Government Officer',
      location: 'Rajshahi, Bangladesh',
      image: '👵',
      rating: 5,
      text: 'At my age, traveling to clinics is difficult. TCP brought healthcare to my doorstep. The doctors are caring, and my children can easily book appointments for me.',
      date: 'November 2024'
    },
    {
      id: 6,
      name: 'Amir Hossain',
      role: 'Business Owner',
      location: 'Dhaka, Bangladesh',
      image: '👨‍💼',
      rating: 5,
      text: 'The subscription plan is worth every taka. I saved money on consultation fees and got access to quality healthcare for my entire family. TCP is the future of healthcare!',
      date: 'October 2024'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Get visible testimonials (current and next 2)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} className="mr-2" fill="currentColor" />
            Trusted by Thousands
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who trust TCP for their healthcare needs
          </p>
        </motion.div>

        {/* Desktop View - 3 Cards */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                    idx === 0 ? 'border-2 border-green-500' : 'border border-gray-100'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-green-500" size={32} fill="currentColor" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View - Single Card */}
        <div className="md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-500"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="text-green-500" size={32} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-green-500 hover:bg-green-50 transition-all shadow-sm"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-green-600'
                    : 'w-2 bg-gray-300 hover:bg-green-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-green-500 hover:bg-green-50 transition-all shadow-sm"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </motion.button>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Star size={24} className="text-yellow-400" fill="currentColor" />
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">10,000+</p>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Verified Doctors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, ChevronDown, X, Star, 
  MapPin, Clock, Video, Calendar, Heart, Award,
  Filter, RotateCcw
} from 'lucide-react';

const DoctorsListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [sortBy, setSortBy] = useState('Recommended');
  
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [availability, setAvailability] = useState({
    onlineNow: false,
    next2Hours: false,
    today: false,
    femaleOnly: false
  });
  const [doctorTitle, setDoctorTitle] = useState({
    dr: false,
    profDr: false,
    assocProfDr: false,
    asstProfDr: false
  });
  const [availableFor, setAvailableFor] = useState({
    instantVideo: false,
    onlineAppointment: false
  });
  const [rating, setRating] = useState(0);

  // Department options
  const departments = [
    'All Departments',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Medicine',
    'Gynecology',
    'Psychiatry',
    'ENT',
    'Ophthalmology'
  ];

  // Sort options
  const sortOptions = [
    'Recommended',
    'Price: Low to High',
    'Price: High to Low',
    'Experience: High to Low',
    'Rating: High to Low',
    'Availability'
  ];

  // Sample doctor data
  const doctors = [
    {
      id: 1,
      name: 'Dr. Raihana Musawwir',
      title: 'MBBS, FCPS (Gynae & Obs)',
      specialty: 'Gynecologist & Obstetrician',
      rating: 5,
      reviews: 106,
      visits: 364,
      experience: '18+ Years',
      hospital: 'Wyckoff Heights Medical Center',
      fee: 1200,
      available: 'Online Now',
      image: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Prof. Dr. Ahmed Hassan',
      title: 'MBBS, MD (Cardiology)',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 238,
      visits: 1205,
      experience: '25+ Years',
      hospital: 'Dhaka Medical College Hospital',
      fee: 1500,
      available: 'Available in 2 hours',
      image: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Fatima Rahman',
      title: 'MBBS, FCPS (Pediatrics)',
      specialty: 'Pediatrician',
      rating: 4.8,
      reviews: 156,
      visits: 892,
      experience: '15+ Years',
      hospital: 'United Hospital',
      fee: 1000,
      available: 'Available today',
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Kamal Hossain',
      title: 'MBBS, MS (Orthopedics)',
      specialty: 'Orthopedic Surgeon',
      rating: 4.7,
      reviews: 89,
      visits: 542,
      experience: '12+ Years',
      hospital: 'Square Hospital',
      fee: 1300,
      available: 'Available today',
      image: '👨‍⚕️'
    },
    {
      id: 5,
      name: 'Dr. Nazia Khan',
      title: 'MBBS, DDV (Dermatology)',
      specialty: 'Dermatologist',
      rating: 4.9,
      reviews: 145,
      visits: 678,
      experience: '10+ Years',
      hospital: 'Apollo Hospital',
      fee: 900,
      available: 'Online Now',
      image: '👩‍⚕️'
    },
    {
      id: 6,
      name: 'Prof. Dr. Mahmud Ali',
      title: 'MBBS, FCPS, FRCP (Medicine)',
      specialty: 'General Physician',
      rating: 5,
      reviews: 312,
      visits: 1567,
      experience: '30+ Years',
      hospital: 'Labaid Hospital',
      fee: 1400,
      available: 'Available in 2 hours',
      image: '👨‍⚕️'
    }
  ];

  const resetFilters = () => {
    setPriceRange([0, 8000]);
    setAvailability({ onlineNow: false, next2Hours: false, today: false, femaleOnly: false });
    setDoctorTitle({ dr: false, profDr: false, assocProfDr: false, asstProfDr: false });
    setAvailableFor({ instantVideo: false, onlineAppointment: false });
    setRating(0);
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header with Search */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Leading Doctors in Bangladesh
          </h1>
          <p className="text-gray-600 mb-6">
            Find the best doctors and specialists for your healthcare needs
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search Doctor's name/code"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-green-500 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <SlidersHorizontal size={20} />
              Filter
            </motion.button>

            {/* Department Dropdown */}
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="appearance-none px-6 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors font-medium bg-white cursor-pointer"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-2xl shadow-sm p-6 mb-6 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Filter Options</h3>
                <button
                  onClick={resetFilters}
                  className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              </div>

              {/* Consultation Fee Range */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Consultation Fee</h4>
                <div className="px-2">
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="0"
                      max="8000"
                      step="100"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(0, e.target.value)}
                      className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Min: ৳{priceRange[0]}</span>
                    <span>Max: ৳8,000</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Availability */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Availability</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availability.onlineNow}
                        onChange={(e) => setAvailability({...availability, onlineNow: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Online Now</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availability.next2Hours}
                        onChange={(e) => setAvailability({...availability, next2Hours: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Available in next 2 hours</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availability.today}
                        onChange={(e) => setAvailability({...availability, today: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Available today</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availability.femaleOnly}
                        onChange={(e) => setAvailability({...availability, femaleOnly: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Female doctors only</span>
                    </label>
                  </div>
                </div>

                {/* Doctor Title */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Doctor Title</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={doctorTitle.dr}
                        onChange={(e) => setDoctorTitle({...doctorTitle, dr: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Dr.</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={doctorTitle.profDr}
                        onChange={(e) => setDoctorTitle({...doctorTitle, profDr: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Prof. Dr.</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={doctorTitle.assocProfDr}
                        onChange={(e) => setDoctorTitle({...doctorTitle, assocProfDr: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Assoc. Prof. Dr.</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={doctorTitle.asstProfDr}
                        onChange={(e) => setDoctorTitle({...doctorTitle, asstProfDr: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Asst. Prof. Dr.</span>
                    </label>
                  </div>
                </div>

                {/* Available for */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Available for</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availableFor.instantVideo}
                        onChange={(e) => setAvailableFor({...availableFor, instantVideo: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Instant Video Consultation</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={availableFor.onlineAppointment}
                        onChange={(e) => setAvailableFor({...availableFor, onlineAppointment: e.target.checked})}
                        className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700">Online Appointment</span>
                    </label>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Rating</h4>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          size={32}
                          className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sort and Results Count */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{doctors.length}</span> doctors
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none bg-white cursor-pointer font-medium"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-4xl relative">
                    {doctor.image}
                    {doctor.available === 'Online Now' && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{doctor.title}</p>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {doctor.specialty}
                      </span>
                    </div>
                    <div className="text-right lg:text-right">
                      <div className="text-2xl font-bold text-gray-900 mb-1">৳{doctor.fee}</div>
                      <p className="text-sm text-gray-600">Consultation Fee</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Star size={16} className="text-yellow-400" fill="currentColor" />
                      <span className="font-semibold text-gray-900">{doctor.rating}</span>
                      <span className="text-gray-600">({doctor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award size={16} />
                      <span>{doctor.visits} visits completed</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="font-medium text-green-600">{doctor.available}</span>
                    </div>
                  </div>

                  {/* Hospital Info */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={16} />
                    <span>Working in {doctor.hospital}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Award size={16} />
                    <span>{doctor.experience} Experience</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 sm:flex-none px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar size={18} />
                      Book Appointment
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 sm:flex-none px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Video size={18} />
                      Video Consult
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsListingPage;
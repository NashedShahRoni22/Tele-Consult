"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Calendar, Clock, User, ArrowRight, 
  TrendingUp, Heart, Eye, MessageCircle, ChevronDown,
  Tag, BookOpen
} from 'lucide-react';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Latest');

  // Categories (Departments)
  const categories = [
    'All Categories',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Mental Health',
    'Nutrition',
    'General Health',
    'Women\'s Health',
    'Men\'s Health',
    'Senior Care',
    'Preventive Care'
  ];

  // Sort options
  const sortOptions = [
    'Latest',
    'Oldest',
    'Most Popular',
    'Most Viewed',
    'Trending'
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 Warning Signs of Heart Disease You Should Never Ignore',
      excerpt: 'Learn about the critical symptoms that could indicate heart problems and when to seek immediate medical attention.',
      category: 'Cardiology',
      author: 'Dr. Ahmed Hassan',
      authorRole: 'Cardiologist',
      date: 'Nov 15, 2024',
      readTime: '8 min read',
      views: 2453,
      likes: 189,
      comments: 45,
      image: '❤️',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Anxiety: A Complete Guide for Patients and Families',
      excerpt: 'Comprehensive information about anxiety disorders, treatment options, and coping strategies.',
      category: 'Mental Health',
      author: 'Dr. Nazia Khan',
      authorRole: 'Psychiatrist',
      date: 'Nov 14, 2024',
      readTime: '12 min read',
      views: 1876,
      likes: 234,
      comments: 67,
      image: '🧠',
      featured: false
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for Growing Children',
      excerpt: 'Expert nutritional advice to ensure your child gets the right nutrients for optimal growth and development.',
      category: 'Pediatrics',
      author: 'Dr. Fatima Rahman',
      authorRole: 'Pediatrician',
      date: 'Nov 13, 2024',
      readTime: '6 min read',
      views: 1543,
      likes: 156,
      comments: 34,
      image: '👶',
      featured: false
    },
    {
      id: 4,
      title: 'Managing Diabetes: Diet, Exercise, and Lifestyle Changes',
      excerpt: 'Practical tips and strategies for living well with diabetes through proper management.',
      category: 'General Health',
      author: 'Dr. Kamal Hossain',
      authorRole: 'Endocrinologist',
      date: 'Nov 12, 2024',
      readTime: '10 min read',
      views: 3201,
      likes: 298,
      comments: 89,
      image: '🩺',
      featured: true
    },
    {
      id: 5,
      title: 'The Importance of Regular Health Screenings After 40',
      excerpt: 'Essential health checks and preventive measures for maintaining wellness in middle age.',
      category: 'Preventive Care',
      author: 'Dr. Mahmud Ali',
      authorRole: 'General Physician',
      date: 'Nov 11, 2024',
      readTime: '7 min read',
      views: 1932,
      likes: 167,
      comments: 52,
      image: '🔬',
      featured: false
    },
    {
      id: 6,
      title: 'Pregnancy Care: What to Expect in Each Trimester',
      excerpt: 'A trimester-by-trimester guide to pregnancy, covering changes, care, and what to watch for.',
      category: 'Women\'s Health',
      author: 'Dr. Raihana Musawwir',
      authorRole: 'Gynecologist',
      date: 'Nov 10, 2024',
      readTime: '15 min read',
      views: 2789,
      likes: 312,
      comments: 98,
      image: '🤰',
      featured: true
    }
  ];

  // Top/Featured Content
  const topContent = [
    {
      id: 1,
      title: 'Breaking: New COVID-19 Variant Detected',
      views: 15432,
      category: 'Health News'
    },
    {
      id: 2,
      title: 'Mental Health in the Digital Age',
      views: 12876,
      category: 'Mental Health'
    },
    {
      id: 3,
      title: 'Benefits of Telemedicine Consultations',
      views: 10234,
      category: 'General Health'
    },
    {
      id: 4,
      title: 'Understanding Heart Attack Symptoms',
      views: 9876,
      category: 'Cardiology'
    },
    {
      id: 5,
      title: 'Nutrition Tips for Healthy Aging',
      views: 8543,
      category: 'Nutrition'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Health <span className="text-green-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert medical advice, health tips, and the latest in healthcare
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles, topics, or conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white cursor-pointer font-medium min-w-[200px]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-6 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none bg-white cursor-pointer font-medium min-w-[180px]"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-2 space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden ${
                  post.featured ? 'border-2 border-green-500' : 'border border-gray-100'
                }`}
              >
                <div className="p-6 md:p-8">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      <TrendingUp size={16} />
                      Featured
                    </div>
                  )}

                  {/* Category Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span className="font-medium text-gray-700">{post.author}</span>
                      <span>• {post.authorRole}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        {post.comments}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Previous
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Top Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="text-green-600" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Trending Articles</h3>
              </div>
              <div className="space-y-4">
                {topContent.map((item, index) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    className="cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-bold text-green-600 min-w-[32px]">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-1 leading-tight">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Eye size={14} />
                            {item.views.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < topContent.length - 1 && (
                      <div className="h-px bg-gray-100 mt-4"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Categories Quick Links */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="text-green-600" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat}
                    className="px-4 py-2 bg-gray-100 hover:bg-green-100 hover:text-green-700 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={24} />
                <h3 className="text-xl font-bold">Stay Updated</h3>
              </div>
              <p className="text-green-100 mb-4">
                Get the latest health tips and medical news delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-green-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Subscribe Now
                </motion.button>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Diabetes', 'Heart Health', 'Nutrition', 'Exercise', 'Mental Health', 'Sleep', 'Pregnancy', 'Children', 'Elderly Care', 'COVID-19'].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-green-100 hover:text-green-700 text-gray-700 rounded-full text-sm font-medium transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function Footer() {
  const departments = [
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "General Medicine",
  ];

  const quickLinks = [
    "About Us",
    "Subscription Plans",
    "FAQ",
    "Terms & Conditions",
    "Privacy Policy",
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TCP</span>
              </div>
              <span className="text-xl font-bold">TeleConsult Pro</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting patients with qualified doctors through secure,
              convenient online consultations. Your health, our priority.
            </p>
            <div className="flex space-x-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-to-primary-dark transition-colors duration-200"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 2 }} className="group">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0"
                    />
                    <span className="group-hover:ml-1 transition-all">
                      {link}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Departments</h3>
            <ul className="space-y-2.5">
              {departments.map((dept, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} className="group">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm flex items-center"
                  >
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0"
                    />
                    <span className="group-hover:ml-1 transition-all">
                      {dept}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-400">+880 1234-567890</p>
                  <p className="text-sm text-gray-400">+880 9876-543210</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-400">support@tcp.com</p>
                  <p className="text-sm text-gray-400">info@tcp.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 TeleConsult Pro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

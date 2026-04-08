'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '../App';

const WebDesignLagos: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Local Web Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-slate-900">
            Web Design in <span className="text-blue-600">Lagos</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Expert web development services for Lagos businesses. Based in the heart of Nigeria's tech hub, 
            we understand the local market and deliver websites that convert Nigerian customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Why Lagos Businesses Choose Us</h2>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span><strong>Yaba Tech Hub Experts</strong> - We operate minutes from Yaba, Nigeria's Silicon Valley</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span><strong>Local Payment Integration</strong> - Paystack, Flutterwave, MTN Mobile Money, Opay</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span><strong>Mobile-First for Nigeria</strong> - Optimized for slow connections and mobile users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span><strong>Fast Loading Times</strong> - Under 2 seconds even on 3G networks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span><strong>Local SEO Domination</strong> - Rank #1 for "web developer Lagos" searches</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-100 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">Our Lagos Location</h3>
            <div className="space-y-3 text-slate-600 mb-6">
              <p><strong>📍 Yaba Technology Corridor</strong></p>
              <p>Near the Yaba Tech Hub and University of Lagos (UNILAG)</p>
              <p><strong>Serving all of Lagos:</strong></p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Lekki', 'Ajah', 'Victoria Island', 'Ikeja', 'Surulere', 'Apapa', 'Yaba', 'Ojuelegba', 'Fadeyi', 'Mushin', 'Oshodi', 'Egbeda', 'Badagry', 'Epe', 'Ikorodu', 'Sango Ota', 'Magodo', 'Ikoyi', 'Banana Island', 'Oniru'].map(area => (
                  <span key={area}>• {area}</span>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-sm text-slate-500">
                <strong>Nearby Landmarks:</strong> University of Lagos, Yaba Tech, Lagos State University, 
                Tejuosho Market, Ojuelegba, Fadeyi, Carter Bridge
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">We Work Internationally Too</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { flag: "🇬🇧", country: "United Kingdom", city: "London" },
              { flag: "🇨🇦", country: "Canada", city: "Toronto" },
              { flag: "🇨🇦", country: "Canada", city: "Vancouver" },
              { flag: "🇦🇪", country: "UAE", city: "Dubai" },
              { flag: "🇺🇸", country: "United States", city: "New York" },
              { flag: "🇺🇸", country: "United States", city: "Los Angeles" },
              { flag: "🇩🇪", country: "Germany", city: "Berlin" },
              { flag: "🇳🇬", country: "Nigeria", city: "Lagos" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
                <span className="text-3xl block mb-2">{item.flag}</span>
                <p className="font-semibold">{item.country}</p>
                <p className="text-sm text-slate-500">{item.city}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-6">
            Serving clients in <strong>UK, Canada, Dubai, USA, Germany</strong> and across Africa. 
            Remote collaboration is our specialty.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Web Services Available in Lagos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Corporate Websites", price: "From ₦250,000" },
              { title: "E-commerce Stores", price: "From ₦350,000" },
              { title: "Web Applications", price: "From ₦500,000" },
              { title: "SEO Services", price: "From ₦150,000" },
              { title: "UI/UX Design", price: "From ₦150,000" },
              { title: "Maintenance", price: "From ₦50,000/mo" }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-blue-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-blue-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Lagos Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 50+ Lagos businesses that trust us with their web presence. 
            Free consultation available.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDesignLagos;

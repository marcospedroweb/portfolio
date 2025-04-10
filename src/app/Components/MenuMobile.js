'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LinksNav from './LinksNav';


export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-white border-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <LinksNav />
      </motion.div>
    </div>
  );
}

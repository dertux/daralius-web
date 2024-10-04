"use client";

// components/Navbar.tsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">Daralius</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#inicio" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Inicio</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Características</a>
            <a href="#desarrollo" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Desarrollo</a>
            <a href="#desarrolladores" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">Equipo</a>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#inicio" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Inicio</a>
            <a href="#features" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Características</a>
            <a href="#desarrollo" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Desarrollo</a>
            <a href="#desarrolladores" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Equipo</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
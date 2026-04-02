import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm h-16">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-serif font-bold text-primary flex items-center">
            <span className="text-3xl mr-1 leading-none">💧</span>
            HomePlumber
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l">
            <a href="tel:+919914148836" className="flex items-center gap-2 font-semibold text-gray-800 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              +91 9914148836
            </a>
            <Button asChild>
              <Link href="/booking">Book a Plumber</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 z-50 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20 px-6 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-6 text-xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`block font-serif font-medium ${
                  location === link.href ? "text-primary" : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="mt-10 pt-8 border-t flex flex-col gap-6">
          <a href="tel:+919914148836" className="flex items-center gap-3 text-2xl font-bold text-gray-800">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            +91 9914148836
          </a>
          
          <Button asChild size="lg" className="w-full text-lg h-14" onClick={closeMenu}>
            <Link href="/booking">Book a Plumber Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

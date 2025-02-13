"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change shadow when scrolled 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 bg-primary transition-shadow z-50 duration-100 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white hover:text-sky-500"
          >
            My Portfolio
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex md:space-x-8 mr-10 text-lg  md:justify-center flex-1">
            {["about", "projects", "skills", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => scrollToSection(page)}
                className={`text-white hover:text-sky-500 ${
                  pathname === `/${page}` ? "font-semibold" : ""
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          {/* Burger Icon for Small Screens */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`absolute md:hidden top-16 left-0 text-center w-full bg-primary px-4 transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {["about", "projects", "skills", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => {
                  scrollToSection(page);
                  setMenuOpen(false);
                }}
                className="block py-3 text-white text-center hover:text-gray-300 w-full"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

// header.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl">
                DeepFake Detector
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {["About", "How It Works", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-indigo-200 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleLogin}
                  className="text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  Sign in
                </button>
                <button
                  onClick={handleLogin}
                  className="bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Sign up
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-white font-medium">John Doe</span>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  <FiLogOut />
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 py-4">
          <div className="px-4 space-y-4">
            {["Upload", "How It Works", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-white hover:text-indigo-200 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            {!isLoggedIn ? (
              <div className="space-y-2">
                <button
                  onClick={handleLogin}
                  className="w-full text-left text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  Sign in
                </button>
                <button
                  onClick={handleLogin}
                  className="w-full bg-white text-indigo-600 hover:bg-indigo-100 px-4 py-2 rounded-full font-medium transition-colors duration-200"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="https://github.com/shadcn.png"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="text-white font-medium">John Doe</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-indigo-200 transition-colors duration-200"
                >
                  <FiLogOut />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

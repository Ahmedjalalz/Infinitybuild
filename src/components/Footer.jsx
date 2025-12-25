import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer - Three Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo + Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Infinity logo"
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto"
              />
              <p className="text-xl md:text-2xl font-bold text-[var(--primary-color)]">
                InfinityBuild
              </p>
            </div>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              We craft exceptional digital experiences that drive growth. From stunning websites to powerful web applications.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="./" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="./about" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="./get-quote" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="./contact" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Contact</h3>
            <a
              href="mailto:hello@infinitybuild.com"
              className="text-gray-600 hover:text-[var(--primary-color)] transition block"
            >
              admin@infinitybuild.fr
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 InfinityBuild. All rights reserved.</p>
          <p>Crafted with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
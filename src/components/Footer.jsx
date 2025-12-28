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
                alt="Logo Infinity"
                width={48}
                height={48}
                className="h-10 md:h-12 w-auto"
              />
              <p className="text-xl md:text-2xl font-bold text-[var(--primary-color)]">
                InfinityBuild
              </p>
            </div>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Nous créons des expériences digitales exceptionnelles qui stimulent votre croissance,
              des sites web élégants aux applications web performantes.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-lg">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="./" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="./about" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="./get-quote" className="text-gray-600 hover:text-[var(--primary-color)] transition">
                  Demander un devis
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
              href="mailto:admin@infinitybuild.fr"
              className="text-gray-600 hover:text-[var(--primary-color)] transition block"
            >
              admin@infinitybuild.fr
            </a>
            <a
              href="https://instagram.com/infinitybuild.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--primary-color)] transition block"
            >
              Instagram : @infinitybuild.fr
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 InfinityBuild. Tous droits réservés.</p>
          <p>Conçu avec précision et passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

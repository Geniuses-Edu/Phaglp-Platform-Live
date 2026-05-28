import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { siteConfig, navigation } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo size="md" className="text-white" />
            <p className="text-gray-300 leading-relaxed text-sm font-medium">
              Discover wisdom through philosophy. Join thousands of learners 
              exploring ancient wisdom, modern ethics, and critical thinking.
            </p>
            <div className="flex space-x-5 pt-2">
              <a
                href={siteConfig.social.twitter}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                className="text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider text-white">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/ancient-philosophy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 inline-block">
                  Ancient Philosophy
                </Link>
              </li>
              <li>
                <Link href="/courses/modern-philosophy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 inline-block">
                  Modern Philosophy
                </Link>
              </li>
              <li>
                <Link href="/courses/ethics" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 inline-block">
                  Ethics & Morality
                </Link>
              </li>
              <li>
                <Link href="/courses/logic" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 inline-block">
                  Logic & Reasoning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">hello@phaglp.com</span>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-0.5 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                  123 Philosophy Street<br />
                  Wisdom City, WC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm font-medium">
              © 2024 PHAGLP. All rights reserved.
            </p>
            <div className="flex space-x-8 flex-wrap justify-center md:justify-end gap-4">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

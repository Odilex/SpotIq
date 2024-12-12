import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A] py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Lumion</h3>
            <p className="text-sm text-slate-400">
              Transforming brands through innovative digital marketing solutions in Rwanda.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-sm text-slate-400 not-italic">
              1 KN 78 St<br />
              Kigali, Rwanda<br />
              <a href="tel:+250780217221">+250 780 217 221</a><br />
              <a href="mailto:info@lumion.rw">info@lumion.rw</a>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Lumion. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


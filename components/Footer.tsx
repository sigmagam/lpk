import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-site px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-bold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-slate-400">{siteConfig.shortName}</p>
          </div>
          <nav aria-label="Navigasi footer">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Menu</p>
            <ul className="mt-4 space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">Kontak</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={siteConfig.instagram} className="text-sm text-slate-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.tiktok} className="text-sm text-slate-400 hover:text-white">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 LPK PMS Karawang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

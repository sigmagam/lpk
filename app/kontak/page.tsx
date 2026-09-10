import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | LPK PMS Karawang",
  description: "Hubungi LPK PMS Karawang melalui WhatsApp, Instagram, atau TikTok.",
};

const contacts = [
  {
    name: "WhatsApp Admin",
    value: siteConfig.whatsappNumber,
    href: siteConfig.whatsapp,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    ),
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    name: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    ),
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    name: "TikTok",
    value: siteConfig.tiktokHandle,
    href: siteConfig.tiktok,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h13.5A2.25 2.25 0 0120.25 4.5v11.25m-18 0c0 4.142 3.358 7.5 7.5 7.5h1.5" />
    ),
    color: "text-slate-800",
    bg: "bg-slate-100",
  }
];

export default function KontakPage() {
  return (
    <div className="bg-white py-16 sm:py-24 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Hubungi Kami</h1>
          <p className="text-lg text-slate-600">Punya pertanyaan seputar program pelatihan kami? Jangan ragu untuk menghubungi tim admin kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-xl hover:border-slate-200 hover:-translate-y-1"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-6 ${contact.bg} ${contact.color} transition-transform group-hover:scale-110`}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {contact.icon}
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">{contact.name}</h2>
              <p className="text-slate-500 mb-6">{contact.value}</p>
              <span className="mt-auto text-sm font-semibold text-brand-600 group-hover:text-brand-700">Hubungi Sekarang →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak | LPK Panca Multiguna Sukses Karawang",
  description: "Hubungi LPK Panca Multiguna Sukses Karawang melalui WhatsApp, Instagram, atau TikTok.",
};

const contacts = [
  {
    name: "Chat WhatsApp",
    value: siteConfig.whatsappNumber,
    href: siteConfig.whatsapp,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    ),
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10",
    hoverBg: "hover:bg-[#25D366]",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "Instagram",
    value: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    ),
    color: "text-pink-600",
    bg: "bg-pink-50",
    hoverBg: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600",
    hoverColor: "group-hover:text-white"
  },
  {
    name: "TikTok",
    value: siteConfig.tiktokHandle,
    href: siteConfig.tiktok,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h13.5A2.25 2.25 0 0120.25 4.5v11.25m-18 0c0 4.142 3.358 7.5 7.5 7.5h1.5" />
    ),
    color: "text-slate-900",
    bg: "bg-slate-100",
    hoverBg: "hover:bg-black",
    hoverColor: "group-hover:text-white"
  }
];

export default function KontakPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Hubungi Kami</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Punya pertanyaan seputar program pelatihan kami? Jangan ragu untuk menghubungi tim admin {siteConfig.shortName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-10 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden relative"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${contact.hoverBg} -z-0`}></div>
              
              <div className="relative z-10 flex flex-col items-center w-full h-full">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-6 ${contact.bg} ${contact.color} transition-all duration-300 group-hover:bg-white/20 ${contact.hoverColor}`}>
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {contact.icon}
                  </svg>
                </div>
                <h2 className={`text-xl font-bold text-slate-900 mb-2 transition-colors ${contact.hoverColor}`}>{contact.name}</h2>
                <p className={`text-slate-500 mb-8 transition-colors group-hover:text-white/80`}>{contact.value}</p>
                <span className={`mt-auto inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-50 text-sm font-semibold text-slate-900 transition-colors group-hover:bg-white`}>
                  Hubungi Sekarang
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

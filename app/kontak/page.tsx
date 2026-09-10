import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Kontak | ${siteConfig.name}`,
  description: "Hubungi LPK Panca Multiguna Sukses Karawang untuk informasi lebih lanjut mengenai program pelatihan dan pendaftaran.",
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
    name: "Alamat Lengkap",
    value: siteConfig.address,
    href: siteConfig.maps,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    icon2: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    ),
    color: "text-primary-600",
    bg: "bg-primary-50",
    hoverBg: "hover:bg-primary-600",
    hoverColor: "group-hover:text-white"
  }
];

export default function KontakPage() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-800 uppercase mb-6 shadow-sm">
            KONTAK KAMI
          </div>
          <h1 className="text-3xl font-heading font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-6">Mari Terhubung</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Punya pertanyaan seputar program pelatihan kami? Jangan ragu untuk menghubungi tim admin {siteConfig.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-10 rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-2 overflow-hidden relative"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${contact.hoverBg} -z-0`}></div>
              
              <div className="relative z-10 flex flex-col items-center w-full h-full">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl mb-6 ${contact.bg} ${contact.color} transition-all duration-300 group-hover:bg-white/20 ${contact.hoverColor}`}>
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {contact.icon}
                    {contact.icon2 && contact.icon2}
                  </svg>
                </div>
                <h2 className={`text-xl font-bold text-slate-900 mb-4 transition-colors ${contact.hoverColor}`}>{contact.name}</h2>
                <p className={`text-slate-500 mb-8 transition-colors group-hover:text-white/90 leading-relaxed text-sm`}>{contact.value}</p>
                <span className={`mt-auto inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-900 transition-colors group-hover:bg-white group-hover:border-transparent`}>
                  {contact.name === "Chat WhatsApp" ? "Hubungi Sekarang" : "Buka Google Maps"}
                </span>
              </div>
            </a>
          ))}
        </div>
        
        {/* Map Section */}
        <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 rounded-[2rem] border border-slate-200 shadow-sm">
           <div className="w-full h-full min-h-[400px] sm:min-h-[500px] rounded-3xl overflow-hidden relative bg-slate-200">
              <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4190861502447!2d107.36214531476985!3d-6.340051695412437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69774d0e513813%3A0xc1230e70a48b598b!2sPancawati%2C%20Kec.%20Purwasari%2C%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0"
              ></iframe>
           </div>
        </div>

      </div>
    </div>
  );
}

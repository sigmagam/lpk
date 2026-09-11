import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import FloatingWhatsApp from "@/components/public/FloatingWhatsApp";
import SearchResultSitelinks from "@/components/public/SearchResultSitelinks";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <SearchResultSitelinks />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

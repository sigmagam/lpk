import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import InformationDashboard from "@/components/InformationDashboard";
import Programs from "@/components/Programs";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import SocialMedia from "@/components/SocialMedia";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfo />
        <InformationDashboard />
        <Programs />
        <About />
        <Process />
        <FAQ />
        <SocialMedia />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

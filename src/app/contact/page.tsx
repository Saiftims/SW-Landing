import Navbar from "@/components/Navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Silent Witness",
  description: "Get in touch with the Silent Witness team. Reach out for demos, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

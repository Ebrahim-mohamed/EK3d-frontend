import { CommunicationSection } from "@/components/contact/CommunicationSection";
import { EndSection } from "@/components/contact/EndSection";
import { Hero } from "@/components/Hero";

export default function Contact() {
  return (
    <div>
      <Hero
        page="contact"
        title="Contact Us"
        pra="Let's build together. Contact us to begin."
      />
      <CommunicationSection />
      <EndSection />
    </div>
  );
}

import { Hero } from "@/components/Hero";
import { CommunicationSection } from "@/components/joinFormPage/CommunicationSection";

export default function JoinForm() {
  return (
    <div>
      <Hero
        page="community"
        title="Join Our Team"
        pra="Apply for internships and open positions"
      />
      <CommunicationSection />
    </div>
  );
}

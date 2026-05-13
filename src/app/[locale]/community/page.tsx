import { BlackSection } from "@/components/communityPage/BlackSection";
import { InternshipsSection } from "@/components/communityPage/InternshipsSection";
import { JobsSection } from "@/components/communityPage/JobSection";
import { Hero } from "@/components/Hero";

export default function Community() {
  return (
    <div>
      <Hero
        page="community"
        title="Our Community"
        pra="Build Your Future with EGY Smart"
      />
      <JobsSection />
      <BlackSection />
      <InternshipsSection />
    </div>
  );
}

import { StepBox } from "./StepBox";

export function InformationBox() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-white text-[2.5rem] font-bold ">
          <span className="text-[#277FCD]">Internship</span> Application <br />{" "}
          Program
        </h1>
        <p className="text-[1rem] leading-[160%] font-normal text-[#D1D1D6]">
          Start your journey with EGYSmart and gain real-world engineering{" "}
          <br />
          experience.
        </p>
      </div>
      <div className="flex  flex-col gap-4">
        <StepBox
          head="Apply"
          number="1"
          pra={
            <span>
              Complete the internship application form and upload your CV with{" "}
              <br /> accurate and up-to-date information.
            </span>
          }
          secHead="Submit Your Application"
        />
        <StepBox
          head="Review"
          number="2"
          pra={
            <span>
              Our community and HR team carefully review your profile to assess
              <br /> your skills, interests, and alignment with EK3DPrints
              values.
            </span>
          }
          secHead="Application Under Review"
        />
        <StepBox
          head="Response"
          number="3"
          pra={
            <span>
              You will receive an official response via email regarding your
              <br /> application status and next steps.
            </span>
          }
          secHead="Final Decision & Feedback"
        />
      </div>
    </div>
  );
}

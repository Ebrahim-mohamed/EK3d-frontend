import { ReactNode } from "react";

export function MostTextPattern({
  blueText,
  redText,
  whiteText,
  pra,
  moreWidth,
  horz,
  isCenter,
}: {
  blueText?: string;
  redText: string;
  whiteText: string;
  pra?: string | ReactNode;
  moreWidth?: boolean;
  horz?: boolean;
  isCenter?: boolean;
}) {
  return (
    <div className="flex flex-col  gap-4">
      <p
        className={`text-[1rem] font-medium text-[#CD2735] max-[700px]:text-center ${isCenter && " text-center "}`}
      >
        &#x2014; {redText}
      </p>
      <div
        className={`${horz ? " flex items-center justify-between gap-4 max-[850px]:flex-col max-[850px]:items-start " : " flex flex-col gap-4"}`}
      >
        <div>
          <p
            className={`text-[4rem] max-[1000px]:text-[3.5rem] max-[800px]:text-[2.5rem] font-medium text-white leading-[110%] ${isCenter && " text-center "} `}
          >
            {whiteText}
          </p>
          {blueText && (
            <p
              className={`text-[4rem] max-[1000px]:text-[3.5rem] max-[800px]:text-[2.5rem] font-medium  text-[#277FCD] ${isCenter && " text-center "} `}
            >
              {blueText}
            </p>
          )}
        </div>
        {pra && (
          <p
            className={`text-[#BBC4D1] font-normal text-[1rem] ${moreWidth ? "" : " max-w-120 "} ${isCenter && " text-center "} `}
          >
            {pra}
          </p>
        )}
      </div>
    </div>
  );
}

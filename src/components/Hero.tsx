import Link from "next/link";
import { ReactNode } from "react";

export function Hero({
  title,
  pra,
  page,
}: {
  title: string | ReactNode;
  pra: string | ReactNode;
  page: string;
}) {
  return (
    <div
      className="relative p-[var(--section-padding)] w-dvw h-dvh flex items-center justify-center gap-4 text-white text-center flex-col bg-cover bg-no-repeat overflow-hidden"
      style={
        
           { backgroundImage: `url(/${page}/hero.png)` }
          
      }
      // style={
      //   page !== "home"
      //     ? { backgroundImage: `url(/${page}/hero.webp)` }
      //     : undefined
      // }
    >
      {/* Background video (home only) */}
      {/* {page === "home" && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/ved.mp4" type="video/mp4" />
        </video>
      )} */}

      {/* Radial gradient overlay */}
      {page === "home" && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.80) 100%)",
          }}
        />
      )}

      {/* Content */}
      {/* {page === "home" && (
        <p className="relative z-10 text-[1rem] max-[700px]:text-[1.5rem] font-[1000] text-[#BBC4D1]">
          Est 2015 - CAIRO, EGYPT
        </p>
      )} */}

      <div className="relative z-10 font-black text-[5rem] max-[1200px]:text-[6.5rem] max-w-[85%] max-[600px]:text-[4.5rem] max-[900px]:text-[5.5rem] leading-[110%]">
        {title}
      </div>

      {/* <div className="relative z-10 text-[1.25rem] font-normal">{pra}</div> */}

      <Link href="#first" className="relative z-10 text-[1.5rem] text-white">
        &darr;
      </Link>
    </div>
  );
}

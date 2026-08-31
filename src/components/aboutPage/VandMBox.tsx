import Image from "next/image";

export function VandMBox({
  img,
  title,
  pra,
}: {
  img: string;
  title: string;
  pra: string;
}) {
  return (
    <div className="flex items-start flex-col justify-start gap-2 flex-1  relative">
      <div className="w-full relative">
        <Image
          width={500}
          height={500}
          src={`/about/${img}.webp`}
          alt="image"
          className="w-full aspect-[122/41] "
        />
        <div
          className="absolute top-0 left-0 w-full h-full  
         bg-[rgba(0,0,0,0.55)]
         bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
      <div className="p-6">
        <h1
          className={`z-50 ${title === "Mission" ? " text-[#277FCD] " : " text-[#FF383C] "} text-[2.5rem] font-extrabold `}
        >
          {title}
        </h1>
        <p className="z-50 text-white text-[1.25rem] font-[325] leading-[160%]">
          {pra}
        </p>
      </div>
    </div>
  );
}

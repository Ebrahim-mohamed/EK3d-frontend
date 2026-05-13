import Image from "next/image";

export function ValueBox({ title, pra }: { title: string; pra: string }) {
  return (
    <div className="flex flex-col items-center justify-center max-[800px]:w-[80%]">
      <div className="w-52  aspect-square rounded-full bg-black flex items-center justify-center gap-2 flex-col text-white flex-1 font-[350] -mb-12 z-20">
        <Image
          alt={`${title} icon`}
          src={`/about/${title}.png`}
          width={100}
          height={100}
          className="w-13 aspect-square"
        />
        <p className="text-[1.25rem] ">{title}</p>
      </div>
      <div
        className="flex items-center justify-center 
  w-full max-w-[80%] h-56 max-[800px]:w-[80%] max-[800px]:max-w-full
  bg-[#d9d9d9]/40 backdrop-blur-md
  text-[1.5rem] text-center p-4 text-white "
      >
        {pra}
      </div>
    </div>
  );
}

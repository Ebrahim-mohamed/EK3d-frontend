import Image from "next/image";

export function FieldBox({
  head,
  des,
  img,
  num,
}: {
  head: string;
  des: string;
  img: string;
  num: number;
}) {
  const isReversed = num % 2 !== 0;

  return (
    <div className="w-full grid grid-cols-2 max-[700px]:grid-cols-1 overflow-hidden rounded-2xl bg-[#111111] min-h-[28rem]">
      {/* IMAGE */}
      <div
        className={`
          relative
          min-h-[28rem]
          max-[700px]:min-h-[20rem]
          ${isReversed ? "order-2 max-[700px]:order-1" : "order-1"}
        `}
      >
        <Image
          alt={head}
          fill
          className="object-cover"
          src={`/home/${img}.jpg`}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`
          flex
          flex-col
          justify-center
          p-[4rem]
          max-[1000px]:p-[2.5rem]
          max-[700px]:p-[2rem]
          ${isReversed ? "order-1 max-[700px]:order-2" : "order-2"}
        `}
        dir="auto"
      >
        <h2 className="text-white text-[2.5rem] max-[1000px]:text-[2rem] max-[500px]:text-[1.7rem] font-semibold leading-tight mb-6">
          {head}
        </h2>

        <p className="text-white/70 text-[1.05rem] max-[1000px]:text-[1rem] leading-[1.8]">
          {des}
        </p>
      </div>
    </div>
  );
}
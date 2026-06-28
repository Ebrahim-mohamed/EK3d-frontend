import Image from "next/image";
import Link from "next/link";

type FooterLinkProps = {
  name: string;
  to: string;
  social?: boolean;
  title?: boolean;
};

export function FooterLink({
  name,
  to,
  social = false,
  title = false,
}: FooterLinkProps) {
  if (social) {
    return (
      <Link
        href={to}
        target="_blank"
        className="text-[#277FCD] text-[1.25rem] font-bold mb-4"
      >
        <Image
          src={`/footer/${name}.svg`}
          alt={`${name} icon`}
          width={100}
          height={100}
          className="w-12 aspect-square"
        />
      </Link>
    );
  }

  return (
    <Link
      href={`/${to}`}
      className={
        title
          ? "text-[#277FCD] text-[1.25rem] font-bold mb-4 max-[800px]:mb-0"
          : "text-white text-[1rem] font-[325]"
      }
    >
      {name}
    </Link>
  );
}
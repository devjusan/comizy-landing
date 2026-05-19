import Image from "next/image";

const Logo = () => {
  return (
    <span className="inline-flex items-center gap-1 text-xl font-semibold text-text-primary">
      <Image
        src="/logo.png"
        alt="Comizy"
        width={26}
        height={26}
        className="shrink-0"
      />
      <span>
        comiz<span className="text-brand-500">y</span>
      </span>
    </span>
  );
};

export default Logo;

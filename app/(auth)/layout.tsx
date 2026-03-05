import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-dvh px-8 py-2 md:p-2 bg-black md:bg-[url(/hero.jpg)]">
      <Image
        src="/logo.png"
        alt="logo"
        width={1280}
        height={346}
        className="h-12 w-auto"
      />
      <div className="w-full mt-4 md:flex md:justify-center">{children}</div>
    </div>
  );
}

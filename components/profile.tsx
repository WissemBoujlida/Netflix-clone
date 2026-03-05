"use client";

import Image from "next/image";
import Link from "next/link";

export function Profile() {
  return (
    <div className="h-dvh bg-zinc-900 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white font-bold tracking-wide">
        Who&apos;s watching?
      </h1>
      <Link href="/home">
        <Image
          src={"/default-red.png"}
          alt="profile-logo"
          width={320}
          height={320}
          className="h-32 w-auto mt-4 border-white border-2 rounded-sm hover:cursor-pointer"
        />
      </Link>

      <p className="text-white text-md mt-2">antonio</p>
    </div>
  );
}

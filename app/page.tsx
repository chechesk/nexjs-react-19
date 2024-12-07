'use client'
import Image from "next/image";
import Logo from '@/public/logo.webp'
import PokemonList from "@/src/Components/List/List";
import Footer from "@/src/Components/Footer/footer";
// import { useEffect, useState } from "react";
// import Loading from "@/src/Components/Loading/Loading";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("Cargando:", isLoading);
  //   const timer = setTimeout(() => setIsLoading(false), 1000);
  //   return () => clearTimeout(timer);
  // }, [isLoading]);

  // if (isLoading) return <Loading />;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Image
          src={Logo}
          alt="Logo Pokemon"
          width={200}
          height={100}
          priority
          className="w-auto h-auto"
        />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <PokemonList />
      </main>
      <Footer />
    </div>
  );
}

import { IconLoader2 } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      void router.push("/menu");
    }, 2500);
  }, []);

  return (
    <>
      <Head>
        <title>Fornecedor7 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100">
        <Image
          src={"/images/logo.png"}
          height={500}
          width={500}
          alt="logo"
          className="animate-pulse"
        />

        <IconLoader2 className="text-blue mt-8 h-32 animate-spin" />
        <div className="mt-4 animate-pulse">Carregando...</div>
      </main>
    </>
  );
}

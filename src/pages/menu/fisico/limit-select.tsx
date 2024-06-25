import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { LimitItem } from "~/components/LimitItem";
import { Footer } from "../../../components/Footer";

export default function LimitSelect() {
  const router = useRouter();

  const handleLimitSelect = (limit: number) => {
    void router.push({
      pathname: "/menu/fisico/checkout",
      query: {
        ...router.query,
        limit,
      },
    });
  };

  return (
    <>
      <Head>
        <title>App - Fornecedor7 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <Image src={"/images/card.png"} alt="card" height={150} width={150} />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            💳 Cartões Físicos
          </div>
        </div>
        <div className="mx-12 mb-6 mt-[-10px] flex flex flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            Cartões físicos enviados discretamente até o endereço informado.
            Nossos pacotes vão camuflados, sem riscos ao cliente.
          </span>
          <div className="mx-auto mt-6  flex flex-row items-center gap-2">
            <IconAlertCircle className="text-black" />
            Siga as instruções devidamente!
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">Você selecionou:</div>
          <div className="">✅ {router.query.card}</div>
        </div>

        <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
          <span className="text-blue">3.</span> Selecione o limite desejado:
        </div>

        <div className="flex flex-col gap-8">
          <LimitItem price={65} limit={500} onClick={handleLimitSelect} />
          <LimitItem
            price={100}
            limit={850}
            special
            onClick={handleLimitSelect}
          />
          <LimitItem price={150} limit={1500} onClick={handleLimitSelect} />
        </div>
        <div className="mx-12 mb-[200px] mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
          <span>
            Caso o banco desejado esteja indisponível, aguarde.
            <br />
            Nosso estoque varia diariamente.
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
}

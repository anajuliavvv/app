import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { LimitItem } from "~/components/LimitItem";
import { ECard } from "~/enums/EBank";
import { Footer } from "../../../components/Footer";

export const ctLimitMap: Record<ECard, number[]> = {
  [ECard.BRADESCO]: [500, 750, 1100, 2000, 2500],
  [ECard.SX]: [450, 700, 1050, 1950, 2450],
  [ECard.ITAU]: [400, 650, 1000, 1900, 2400],
  [ECard.OUROCARD]: [500, 750, 1100, 2000, 2500],
  [ECard.C6]: [550, 800, 1150, 2050, 2550],
  [ECard.NUBANK]: [450, 700, 1050, 1950, 2450],
};

const values = [75, 100, 150, 250, 300];

export default function LimitSelect() {
  const router = useRouter();

  const handleLimitSelect = (limit: number) => {
    console.log(values);
    const ct = ctLimitMap[(router.query.card?.toString() ?? "") as ECard];
    const index = ct.indexOf(limit);
    const value = values[index];
    void router.push({
      pathname: "/menu/fisico/checkout",
      query: {
        ...router.query,
        limit,
        value,
      },
    });
  };

  return (
    <>
      <Head>
        <title>App - Fornecedor7 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <Image
            src={"/images/card-anim.gif"}
            alt="card"
            height={150}
            width={150}
          />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            Cartões Físicos
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

        <div className="mx-12 mb-4 text-center text-xl font-semibold text-gray-800">
          <span className="text-blue">3.</span> Selecione o limite desejado:
        </div>

        <div className="flex flex-col gap-8">
          {ctLimitMap[(router.query.card?.toString() ?? "") as ECard]?.map(
            (value, index) => {
              if (index === 1)
                return (
                  <LimitItem
                    price={values[index] ?? 100}
                    limit={value}
                    onClick={handleLimitSelect}
                    special
                    key={`value-${index}`}
                  />
                );
              return (
                <LimitItem
                  price={values[index] ?? 100}
                  limit={value}
                  onClick={handleLimitSelect}
                  key={`value-${index}`}
                />
              );
            },
          )}
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

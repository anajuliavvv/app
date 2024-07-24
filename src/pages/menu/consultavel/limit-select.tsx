import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { LimitItem } from "~/components/LimitItem";
import { EConsultavel } from "~/enums/EBank";
import { Footer } from "../../../components/Footer";

export const ctLimitMap: Record<EConsultavel, number[]> = {
  [EConsultavel.BRADESCO]: [3000, 5500, 7500, 10000, 13500],
  [EConsultavel.WAY]: [2500, 5000, 7000, 9500, 13000],
  [EConsultavel.ITAU]: [2000, 4500, 6500, 9000, 12500],
  [EConsultavel.HIPERCARD]: [3500, 6000, 8000, 10500, 14000],
  [EConsultavel.CAIXA]: [3000, 5500, 7500, 10000, 13500],
  [EConsultavel.OUROCARD]: [3000, 5500, 7500, 10000, 13500],
};

const values = [150, 250, 350, 400, 500];

export default function LimitSelect() {
  const router = useRouter();

  const handleLimitSelect = (limit: number) => {
    console.log(values);
    const ct =
      ctLimitMap[(router.query.card?.toString() ?? "") as EConsultavel];
    const index = ct.indexOf(limit);
    const value = values[index];
    void router.push({
      pathname: "/menu/consultavel/checkout",
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
            src={"/images/ct-anim.gif"}
            alt="card"
            height={150}
            width={150}
          />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            Consultáveis
          </div>
        </div>
        <div className="mx-auto my-5 flex flex max-w-[350px] flex-row flex-col text-justify  text-sm leading-4 text-gray-500">
          <span>
            Obtenha não só o cartão, mas também o acesso aos dados, limite do
            cartão e aprovação de compras online no aplicativo do titular da
            conta.
          </span>
          <div className="mx-auto my-4  flex flex-row items-center gap-2">
            <IconAlertCircle className="text-black" />
            Siga as instruções devidamente!
          </div>
          <div className="">
            Após confirmação do pagamento na tela de checkout, será exibido os
            dados de acesso do aplicativo do banco escolhido. Você poderá então
            baixar o aplicativo correspondente e acessar.
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
          {ctLimitMap[
            (router.query.card?.toString() ?? "") as EConsultavel
          ]?.map((value, index) => {
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
          })}
        </div>
        <div className="mx-12 mb-4 mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
          <span>
            Caso o banco desejado esteja indisponível, aguarde.
            <br />
            Nosso estoque varia diariamente.
          </span>
        </div>
        <div className="mb-24 mt-6 flex w-full flex-row items-center justify-center gap-8  p-6">
          <Image src={"/images/ssl.png"} alt="badge" height={100} width={100} />
          <Image
            src={"/images/compra-safe.png"}
            alt="badge"
            height={100}
            width={100}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

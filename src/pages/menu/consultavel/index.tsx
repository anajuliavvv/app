import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { HighDisponibilityMini } from "~/components/disponibilityMinis/HighDisponibilityMini";
import { LowDisponibilityMini } from "~/components/disponibilityMinis/LowDisponibilityMini";
import { MediumDisponibilityMini } from "~/components/disponibilityMinis/MediumDisponibilityMini";
import { EConsultavel } from "~/enums/EBank";
import { Footer } from "../../../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleCardSelect = (card: EConsultavel) => {
    void router.push({
      pathname: "/menu/consultavel/limit-select",
      query: {
        ...router.query,
        card,
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
          <div className=" mt-2 text-2xl font-bold ">Consultáveis</div>
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

        <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
          <span className="text-blue">2.</span> Selecione dentre as opções:
        </div>

        <div className=" grid grid-cols-2 gap-8 ">
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.BRADESCO)}
          >
            <Image
              src={"/images/bradesco-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-xl font-semibold text-gray-800  ">
                Bradesco Cartões
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.WAY)}
          >
            <Image
              src={"/images/santander-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Santander Way
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.ITAU)}
          >
            <Image
              src={"/images/itau-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Itaú Cartões
              </div>
              <LowDisponibilityMini />
            </div>
          </button>

          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.CAIXA)}
          >
            <Image
              src={"/images/caixa-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Cartões Caixa
              </div>
              <MediumDisponibilityMini />
            </div>
          </button>

          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.HIPERCARD)}
          >
            <Image
              src={"/images/hipercard-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Hipercard
              </div>
              <LowDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(EConsultavel.OUROCARD)}
          >
            <Image
              src={"/images/ourocard-ct.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Ourocard App
              </div>
              <MediumDisponibilityMini />
            </div>
          </button>
        </div>
        <div className="mx-12  mb-[200px] mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
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

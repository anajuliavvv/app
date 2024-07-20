import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { HighDisponibilityMini } from "~/components/disponibilityMinis/HighDisponibilityMini";
import { LowDisponibilityMini } from "~/components/disponibilityMinis/LowDisponibilityMini";
import { MediumDisponibilityMini } from "~/components/disponibilityMinis/MediumDisponibilityMini";
import { ECard } from "~/enums/EBank";
import { Footer } from "../../../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleCardSelect = (card: ECard) => {
    void router.push({
      pathname: "/menu/fisico/limit-select",
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
          <div className="text-center text-xl font-semibold text-gray-800">
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

        <div className="mx-12 mb-4 text-center text-xl font-semibold text-gray-800">
          <span className="text-blue">2.</span> Selecione dentre as opções:
        </div>

        <div className=" grid grid-cols-2 gap-8 ">
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.BRADESCO)}
          >
            <Image
              src={"/images/bradesco.png"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-xl font-semibold text-gray-800 ">
                Bradesco
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.NUBANK)}
          >
            <Image
              src={"/images/nubank.png"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800 ">
                Nubank
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.ITAU)}
          >
            <Image
              src={"/images/itau.png"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800 ">
                Itaú
              </div>
              <MediumDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.C6)}
          >
            <Image
              src={"/images/c6.png"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800 ">
                C6
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.SX)}
          >
            <Image
              src={"/images/sx.png"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800 ">
                SX
              </div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleCardSelect(ECard.OUROCARD)}
          >
            <Image
              src={"/images/ourocard.webp"}
              alt="card"
              className="shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800 ">
                Ourocard - BB
              </div>
              <LowDisponibilityMini />
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

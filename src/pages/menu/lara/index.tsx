import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { HighDisponibilityMini } from "~/components/disponibilityMinis/HighDisponibilityMini";
import { MediumDisponibilityMini } from "~/components/disponibilityMinis/MediumDisponibilityMini";
import { ELara } from "~/enums/EBank";
import { Footer } from "../../../components/Footer";

export default function Home() {
  const router = useRouter();

  const handleProductSelect = (product: ELara, value: number) => {
    void router.push({
      pathname: "/menu/lara/checkout",
      query: {
        ...router.query,
        product,
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
          <Image src={"/images/bank.png"} alt="card" height={150} width={150} />
          <div className="text-xl font-semibold text-gray-800 ">🍊 Lara</div>
        </div>
        <div className="mx-auto my-5 flex flex max-w-[350px] flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            Obtenha acesso à uma conta de terceiro, com a possibilidade de
            enviar e receber PIX, solicitar empréstimo, solicitar cartão de
            crédito e lavagem de dinheiro.
          </span>
          <div className="mx-auto mt-6  flex flex-row items-center gap-2">
            <IconAlertCircle className="text-black" />
            Siga as instruções devidamente!
          </div>
        </div>

        <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
          <span className="text-blue">2.</span> Selecione dentre as opções:
        </div>

        <div className=" grid grid-cols-2 gap-8 ">
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleProductSelect(ELara.NUBANK, 100)}
          >
            <Image
              src={"/images/nubank-lara.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-xl font-semibold text-gray-800  ">
                Nubank
              </div>
              <div className="text-xl font-bold text-emerald-500"> R$100</div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleProductSelect(ELara.PICPAY, 100)}
          >
            <Image
              src={"/images/picpay-lara.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Picpay
              </div>
              <div className="text-xl font-bold text-emerald-500"> R$100</div>
              <HighDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleProductSelect(ELara.ITAU, 150)}
          >
            <Image
              src={"/images/itau-lara.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                Itaú
              </div>
              <div className="text-xl font-bold text-emerald-500"> R$150</div>
              <MediumDisponibilityMini />
            </div>
          </button>
          <button
            className="flex flex-col items-center justify-center"
            onClick={() => handleProductSelect(ELara.PAGBANK, 100)}
          >
            <Image
              src={"/images/pagbank-lara.png"}
              alt="card"
              className="rounded-xl shadow-outline-custom"
              height={150}
              width={150}
            />
            <div className="mt-4 flex flex-col justify-center gap-2">
              <div className="px-2 text-center text-xl font-semibold text-gray-800  ">
                PagBank
              </div>
              <div className="text-xl font-bold text-emerald-500"> R$100</div>
              <HighDisponibilityMini />
            </div>
          </button>
        </div>
        <div className="mx-12  mb-4 mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
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

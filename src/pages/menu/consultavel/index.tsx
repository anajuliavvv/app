import { IconAlertCircle } from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { DefaultDisponibilityMini } from "~/components/disponibilityMinis/DefaultDisponibilityMini";
import { HighDisponibilityMini } from "~/components/disponibilityMinis/HighDisponibilityMini";
import { MediumDisponibilityMini } from "~/components/disponibilityMinis/MediumDisponibilityMini";
import { ZeroDisponibilityMini } from "~/components/disponibilityMinis/ZeroDisponibilityMini";
import { ECard } from "~/enums/EBank";
import { EDisponibility } from "~/enums/EDisponibilty";
import { Footer } from "../../../components/Footer";

export default function Home() {
  const router = useRouter();
  const disponibilities: Record<ECard, EDisponibility> = useMemo(() => {
    return {
      [ECard.BRADESCO]: EDisponibility.HIGH,
      [ECard.ITAU]: EDisponibility.MEDIUM,
      [ECard.NUBANK]: EDisponibility.MEDIUM,
      [ECard.C6]: EDisponibility.LOW,
      [ECard.SX]: EDisponibility.MEDIUM,
      [ECard.OUROCARD]: EDisponibility.ZERO,
    };
  }, []);

  const [dispoComps, setDispoComps] = useState<Record<ECard, JSX.Element>>({
    [ECard.BRADESCO]: <DefaultDisponibilityMini />,
    [ECard.NUBANK]: <DefaultDisponibilityMini />,
    [ECard.ITAU]: <DefaultDisponibilityMini />,
    [ECard.C6]: <DefaultDisponibilityMini />,
    [ECard.SX]: <DefaultDisponibilityMini />,
    [ECard.OUROCARD]: <DefaultDisponibilityMini />,
  });

  const getComponent = (disponibility: EDisponibility): JSX.Element => {
    switch (disponibility) {
      case EDisponibility.HIGH:
        return <HighDisponibilityMini />;
      case EDisponibility.MEDIUM:
        return <MediumDisponibilityMini />;
      case EDisponibility.LOW:
        return <MediumDisponibilityMini />;
      case EDisponibility.ZERO:
        return <ZeroDisponibilityMini />;
      default:
        return <DefaultDisponibilityMini />;
    }
  };

  const handleCardSelect = (card: ECard) => {
    void router.push({
      pathname: "/menu/virtual/limit-select",
      query: {
        ...router.query,
        card,
      },
    });
  };

  useEffect(() => {
    const newDispoComps: Record<ECard, JSX.Element> = {
      [ECard.BRADESCO]: getComponent(disponibilities[ECard.BRADESCO]),
      [ECard.NUBANK]: getComponent(disponibilities[ECard.NUBANK]),
      [ECard.ITAU]: getComponent(disponibilities[ECard.ITAU]),
      [ECard.C6]: getComponent(disponibilities[ECard.C6]),
      [ECard.SX]: getComponent(disponibilities[ECard.SX]),
      [ECard.OUROCARD]: getComponent(disponibilities[ECard.OUROCARD]),
    };
    setTimeout(() => {
      setDispoComps(newDispoComps);
    }, 1500);
  }, [disponibilities]);

  return (
    <>
      <Head>
        <title>App - Fornecedor7 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <Image
            src={"/images/card3.png"}
            alt="card"
            height={150}
            width={150}
          />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            💳 Consultáveis
          </div>
        </div>
        <div className="mx-12 mb-6 mt-[-10px] flex flex flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            eaque voluptas impedit omnis, ex provident excepturi commodi
            architecto consectetur atque?
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
              <div className="px-2 text-xl font-semibold text-gray-800 shadow-xl ">
                Bradesco
              </div>
              {dispoComps[ECard.BRADESCO]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                Itaú
              </div>
              {dispoComps[ECard.NUBANK]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                Santander way
              </div>
              {dispoComps[ECard.ITAU]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                hipercard
              </div>
              {dispoComps[ECard.SX]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                Ourocard - BB
              </div>
              {dispoComps[ECard.OUROCARD]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                monobank - universal card
              </div>
              {dispoComps[ECard.OUROCARD]}
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
              <div className="px-2 text-center text-xl font-semibold text-gray-800 shadow-xl ">
                will bank
              </div>
              {dispoComps[ECard.C6]}
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

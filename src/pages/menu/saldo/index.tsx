import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { LimitItem } from "~/components/LimitItem";
import { Footer } from "../../../components/Footer";

export default function LimitSelect() {
  const router = useRouter();

  const handleLimitSelect = (value: number) => {
    void router.push({
      pathname: "/menu/saldo/checkout",
      query: {
        ...router.query,
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
            src={"/images/vs-anim.gif"}
            alt="card"
            height={150}
            width={150}
          />
          <div className="mt-2 text-xl font-semibold text-gray-800 shadow-xl">
            Virada de Saldo
          </div>
        </div>
        <div className="mx-12 my-5 flex flex flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            O processo de virada de saldo consiste na utilização de uma conta
            laranja para efetuar empréstimo ou pix via cartão de crédito,
            seguido do envio do valor para a conta do cliente. <br /> <br />{" "}
            Recomendamos aguardar ao menos 1 semana entre as compras, para
            evitar comprometer a integridade da sua conta.
          </span>
        </div>

        <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
          <span className="text-blue">2.</span> Selecione o valor desejado:
        </div>

        <div className="flex flex-col gap-8">
          <LimitItem
            limitText="PIX ou Depósito"
            price={150}
            limit={700}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="PIX ou Depósito"
            price={250}
            limit={1400}
            special
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="PIX ou Depósito"
            price={300}
            limit={1800}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="PIX ou Depósito"
            price={400}
            limit={2600}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="PIX ou Depósito"
            price={500}
            limit={3500}
            onClick={handleLimitSelect}
          />
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

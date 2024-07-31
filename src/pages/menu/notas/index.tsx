import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { LimitItem } from "~/components/LimitItem";
import { Footer } from "../../../components/Footer";

export default function LimitSelect() {
  const router = useRouter();

  const handleLimitSelect = (value: number) => {
    void router.push({
      pathname: "/menu/notas/checkout",
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
          <Image src={"/images/cash.gif"} alt="card" height={150} width={150} />
          <div className="mt-2 text-xl font-semibold text-gray-800 shadow-xl">
            Notas Falsas
          </div>
        </div>
        <div className="mx-12 my-5 flex flex flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            Notas fibradas passando em todos os testes de segurança. Cédulas de
            R$10, R$20, R$50 e R$100. Entrega via SEDEX expresso, média de 3
            dias com código de rastreio. Nossos pacotes vão camuflados, sem
            riscos ao cliente. <br /> <br /> Inclua no campo de observação, caso
            tenha preferência de cédula.
          </span>
        </div>

        <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
          <span className="text-blue">2.</span> Selecione o valor desejado:
        </div>

        <div className="flex flex-col gap-8">
          <LimitItem
            limitText="$ em Cédulas"
            price={100}
            limit={900}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="$ em Cédulas"
            price={150}
            limit={1600}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="$ em Cédulas"
            price={250}
            limit={3000}
            special
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="$ em Cédulas"
            price={300}
            limit={3600}
            onClick={handleLimitSelect}
          />
          <LimitItem
            limitText="$ em Cédulas"
            price={400}
            limit={5400}
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

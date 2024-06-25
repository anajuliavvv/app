import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatedDots } from "~/components/AnimatedDots";
import { awaitFor } from "~/helpers/awaitFor";
import { Footer } from "../../../components/Footer";

export default function Checkout() {
  const [loadingText, setLoadingText] = useState("Obtendo informações");
  const [loadingChecks, setLoadingChecks] = useState<JSX.Element[]>([]);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  const load = async () => {
    await awaitFor(1500);
    setLoadingChecks((prev) => [
      ...prev,
      <div key={Math.random()}>✅ Dados carregados</div>,
    ]);
    setLoadingText("Buscando em nossa base de dados");
    await awaitFor(2000);
    setLoadingChecks((prev) => [
      ...prev,
      <div key={Math.random()}>✅ Cartão requirido encontrado</div>,
    ]);
    setLoadingText("Fazendo testes");
    await awaitFor(2500);
    setLoadingChecks((prev) => [
      ...prev,
      <div key={Math.random()}>✅ Cartão verificado</div>,
    ]);

    setReady(true);
  };

  useEffect(() => {
    void load();
  }, []);
  return (
    <>
      <Head>
        <title>App - Fornecedor7 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <Image
            src={"/images/card2.png"}
            alt="card"
            height={150}
            width={150}
          />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            💳 Cartões Virtuais
          </div>
        </div>
        <div className="mx-12 mb-6 mt-[-10px] flex flex flex-row flex-col text-justify text-sm leading-4 text-gray-500">
          <span>
            Cartões para serem utilizados virtualmente, em lojas online.
            Verifique a disponibilidade abaixo, e selecione o banco desejado.
            Após a confirmação do pagamento, iremos enviar também as instruções
            de uso.
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">Você selecionou:</div>
          <div className="">✅ {router.query.card}</div>
          <div className="">✅ R${router.query.limit}</div>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex flex-col gap-2">{loadingChecks}</div>
          {!ready && (
            <div className="mt-8">
              {loadingText}
              <AnimatedDots />
            </div>
          )}
        </div>

        {ready && (
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <div className="flex h-[150px] w-[300px] flex-col items-center justify-center rounded-lg bg-purple-800 shadow-2xl">
              <div className="flex animate-pulse flex-col items-center justify-center ">
                <Image src={"/svg/lock.svg"} alt="" width={20} height={20} />
                <span className="text-xs text-gray-300">
                  Aguardando Confirmação de Pagamento
                </span>
              </div>
            </div>
            <div className="mx-12 mb-4 text-start text-xl font-semibold text-gray-800">
              <span className="text-blue">4.</span> Efetue o pagamento:
            </div>
            <Image src={"/qrs/65.png"} width={200} height={200} alt="qr" />
          </div>
        )}

        <div className="mx-12 mb-[200px] mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
          <span>
            Caso a plataforma de pagamento não retorne a confirmação do
            pagamento do pix, entre em contato conosco via DM do Instagram.
          </span>
        </div>
        <Footer />
      </main>
    </>
  );
}

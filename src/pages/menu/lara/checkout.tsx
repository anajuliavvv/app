/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IconAlertCircle, IconCopy } from "@tabler/icons-react";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { AnimatedDots } from "~/components/AnimatedDots";
import { awaitFor } from "~/helpers/awaitFor";
import { type Code } from "~/interfaces";
import { Footer } from "../../../components/Footer";

export default function Checkout() {
  const [loadingText, setLoadingText] = useState("Obtendo informações");
  const [loadingChecks, setLoadingChecks] = useState<JSX.Element[]>([]);
  const [ready, setReady] = useState(false);
  const [paymentQr, setPaymentQr] = useState<string>();
  const [paymentCode, setPaymentCode] = useState<string>();
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
      <div key={Math.random()}>✅ Conta encontrada</div>,
    ]);
    setLoadingText("Fazendo testes");
    await awaitFor(2500);
    setLoadingChecks((prev) => [
      ...prev,
      <div key={Math.random()}>✅ Conta verificada</div>,
    ]);

    setReady(true);
  };

  const updatePaymentInfo = async () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) return;
    const value = Number(router.query.value);

    const res = await axios.get(url);
    const codes = res?.data?.codes as Code[];
    if (!codes) return;

    const code = codes.find((cd) => cd.value === value);
    if (!code) return;

    setPaymentQr(code.code);
    setPaymentCode(code.code);
  };

  const copyPix = () => {
    if (!paymentCode) return;
    void navigator.clipboard.writeText(paymentCode);
    toast.success("Copiado para a área de transferência.");
  };

  useEffect(() => {
    if (!ready) return;
    void updatePaymentInfo();
  }, [ready]);

  useEffect(() => {
    void load();
  }, []);
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

        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">Você selecionou:</div>
          <div className="">✅ {router.query.product}</div>
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
            {paymentQr && (
              <QRCode
                size={200}
                value={paymentQr}
                viewBox={`0 0 200 200`}
                className="h-auto max-w-[75vw]"
              />
            )}
            {paymentCode && (
              <button
                className="flex flex-col items-center justify-center gap-2"
                onClick={copyPix}
              >
                <div className="flex flex-row gap-2">
                  <IconCopy />
                  <span className="text-sm">
                    {" "}
                    {paymentCode.slice(0, 25)}...{" "}
                  </span>
                </div>
                <span className="border-b border-blue text-sm text-blue">
                  Código Pix
                </span>
              </button>
            )}
          </div>
        )}

        <div className="mx-12 mb-4 mt-12 flex flex flex-row flex-col text-center text-sm leading-4 text-gray-400">
          <span>
            Caso a plataforma de pagamento não retorne a confirmação do
            pagamento do pix, entre em contato conosco via DM do Instagram.
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

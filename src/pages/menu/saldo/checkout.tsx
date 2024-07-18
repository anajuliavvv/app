/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import { IconCopy } from "@tabler/icons-react";
import axios from "axios";
import { consultarCep } from "correios-brasil/dist";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { AnimatedDots } from "~/components/AnimatedDots";
import { awaitFor } from "~/helpers/awaitFor";
import { type Code } from "~/interfaces";
import { Footer } from "../../../components/Footer";

interface ICheckoutFormParams {
  cep: number;
  name: string;
  uf: string;
  city: string;
  road: string;
  neighbourhood: string;
  number: number;
}

export default function Checkout() {
  const [loadingText, setLoadingText] = useState("Obtendo informações");
  const [loadingChecks, setLoadingChecks] = useState<JSX.Element[]>([]);
  const [ready, setReady] = useState(false);
  const [payment, setPayment] = useState(false);
  const [paymentQr, setPaymentQr] = useState<string>();
  const [paymentCode, setPaymentCode] = useState<string>();
  const router = useRouter();

  const { register, getValues, watch, setValue } =
    useForm<ICheckoutFormParams>();

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
      <div key={Math.random()}>✅ Conta alvo encontrada</div>,
    ]);
    setLoadingText("Validando");
    await awaitFor(2500);
    setLoadingChecks((prev) => [
      ...prev,
      <div key={Math.random()}>✅ Conta alvo validada</div>,
    ]);

    setReady(true);
  };

  const updatePaymentInfo = async () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) return;
    const returnValue = Number(router.query.value);
    const values: Record<number, number> = {
      700: 150,
      1400: 250,
      1800: 300,
      2600: 400,
      3500: 500,
    };
    const value = values[returnValue];

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

  const updateAdress = async () => {
    const { cep } = getValues();
    const cepString = cep?.toString();
    if (!cepString || cepString.length !== 8) return;
    const cepInfo = await consultarCep(cepString);
    console.log({ cepInfo });
    setValue("road", cepInfo.logradouro);
    setValue("neighbourhood", cepInfo.bairro);
    setValue("city", cepInfo.localidade);
    setValue("uf", cepInfo.uf);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setPayment(true);
  };

  useEffect(() => {
    void updateAdress();
  }, [watch("cep")]);

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

        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">Você selecionou:</div>
          <div className="">💲 R${router.query.value}</div>
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
          <form
            onSubmit={handleFormSubmit}
            className="mx-auto flex w-full max-w-[90vw] flex-col items-center justify-center gap-4 rounded-md border bg-cream p-6 shadow-2xl"
          >
            <h2 className="font-semibold">🚀 Dados para o envio:</h2>

            <select className="w-full rounded-md border px-2 py-1">
              <option value="">CHAVE ALEATÓRIA</option>
              <option value="">CHAVE EMAIL</option>
              <option value="">CHAVE CPF</option>
              <option value="">CHAVE TELEFONE</option>
            </select>

            <input
              type="text"
              className="w-full rounded-md border px-2 py-1"
              required
              placeholder="Chave PIX"
              {...register("name")}
            />

            <span className="mx-auto text-center text-sm text-gray-500">
              Não se preocupe. Após o envio, nosso sistema descarta
              completamente os dados.
            </span>
            <button className="bg-main mt-8 w-full rounded-md px-6 py-3 font-bold text-white">
              Confirmar
            </button>
          </form>
        )}

        {payment && (
          <div className="flex flex-col items-center justify-center">
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
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-row gap-2" onClick={copyPix}>
                  <IconCopy />
                  <span className="text-sm">
                    {" "}
                    {paymentCode.slice(0, 25)}...{" "}
                  </span>
                </div>
                <span className="border-b border-blue text-sm text-blue">
                  Código Pix
                </span>
              </div>
            )}
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

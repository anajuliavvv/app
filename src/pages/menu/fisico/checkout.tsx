/* eslint-disable react-hooks/exhaustive-deps */
import { IconAlertCircle, IconCopy } from "@tabler/icons-react";
import { consultarCep } from "correios-brasil/dist";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { QrCodePix } from "qrcode-pix";
import { useEffect, useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import QRCodePIX from "react-qrcode-pix";
import { toast } from "react-toastify";
import { AnimatedDots } from "~/components/AnimatedDots";
import { priceTable } from "~/constants/priceTable";
import { awaitFor } from "~/helpers/awaitFor";
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

  const updatePaymentInfo = async () => {
    const value = priceTable.virtual[Number(router.query.limit)] as
      | number
      | undefined;
    const qrCodePix = QrCodePix({
      version: "01",
      key: "5516988675837", //or any PIX key
      name: "TESTENAME",
      city: "SAO PAULO",
      transactionId: `id-${Math.random()}`, //max 25 characters
      message: "",
      cep: "99999999",
      value,
    });
    setPaymentQr(await qrCodePix.base64());
    setPaymentCode(
      "00020126610014br.gov.bcb.pix0111169886758370224nada52040000530398654045.505802BR5921testen6008sp62100506hahaha6304A2F7",
    );
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
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-100">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <Image src={"/images/card.png"} alt="card" height={150} width={150} />
          <div className="text-xl font-semibold text-gray-800 shadow-xl">
            💳 Cartões Físicos
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

        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold">Você selecionou:</div>
          <div className="">💳 {router.query.card}</div>
          <div className="">💲 R${router.query.limit}</div>
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
            <h2 className="font-semibold">🚚 Dados para o envio:</h2>

            <input
              type="text"
              className="w-full rounded-md border px-2 py-1"
              required
              placeholder="Nome do destinatário"
              {...register("name")}
            />
            <input
              type="number"
              className="w-full rounded-md border px-2 py-1"
              required
              placeholder="CEP - Apenas números"
              {...register("cep")}
            />
            <input
              type="text"
              className="w-full rounded-md border px-2 py-1"
              required
              readOnly
              placeholder="Rua/Av - Preencha o CEP"
              {...register("road")}
            />
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                readOnly
                className="col-span-2 rounded-md border px-2 py-1"
                placeholder="Bairro - Preencha o CEP"
                required
                {...register("neighbourhood")}
              />
              <input
                type="number"
                className=" rounded-md border px-2 py-1"
                placeholder="Número"
                required
                {...register("number")}
              />
            </div>
            <input
              type="text"
              readOnly
              className="w-full rounded-md border px-2 py-1"
              placeholder="Cidade"
              required
              {...register("city")}
            />
            <input
              type="text"
              readOnly
              className="w-full rounded-md border px-2 py-1"
              placeholder="Estado"
              required
              {...register("uf")}
            />
            <span className="mx-auto text-center text-sm text-gray-500">
              Não se preocupe. Após o envio, nosso sistema descarta
              completamente os dados.
            </span>
            <button className="mt-8 w-full rounded-md bg-dark-blue px-6 py-3 font-bold text-white">
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
              <div>
                <QRCodePIX
                  pixkey={"16988675837"}
                  merchant={"merchant"}
                  city={"city"}
                  amount={100.0}
                />
              </div>
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

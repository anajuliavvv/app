/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  IconAnalyze,
  IconBox,
  IconEditCircle,
  IconTicket,
} from "@tabler/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Footer } from "~/components/Footer";

const tableDataBase = [
  {
    date: "24/07/2024 - 14:10:40",
    code: "12CK307U",
    type: "SALDO",
    amount: "R$150",
    status: "AGUARDANDO ENVIO",
    icon: <IconEditCircle />,
  },
  {
    date: "24/07/2024 - 14:00:01",
    code: "P0LL56AZ",
    type: "SALDO",
    amount: "R$250",
    status: "AGUARDANDO ENVIO",
    icon: <IconEditCircle />,
  },
  {
    date: "24/07/2024 - 11:39:22",
    code: "JKBG6BB4U",
    type: "FÍSICO",
    amount: "R$150",
    status: "AGUARDANDO ENVIO",
    icon: <IconEditCircle />,
  },
  {
    date: "24/07/2024 - 09:03:56",
    code: "15UYK9H5",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "23/07/2024 - 23:51:44",
    code: "13BG6H7U",
    type: "FÍSICO",
    amount: "R$150",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "23/07/2024 - 23:40:14",
    code: "1MBG6HDA",
    type: "FÍSICO",
    amount: "R$75",
    status: "AGUARDANDO ENVIO",
    icon: <IconEditCircle />,
  },
  {
    date: "23/07/2024 - 22:33:12",
    code: "32MN9F4R",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },

  {
    date: "23/07/2024 - 18:45:20",
    code: "56TR4V8B",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "23/07/2024 - 14:05:30",
    code: "98PL7Q2M",
    type: "FÍSICO",
    amount: "R$250",
    status: "ENVIADO",
    icon: <IconEditCircle />,
  },
  {
    date: "23/07/2024 - 10:22:15",
    code: "84JG9K3P",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },

  {
    date: "22/07/2024 - 13:47:05",
    code: "11GV8N5K",
    type: "CONSULTÁVEL",
    amount: "R$300",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },

  {
    date: "22/07/2024 - 11:59:45",
    code: "45BX7S3D",
    type: "SALDO",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "22/07/2024 - 09:10:55",
    code: "77HK5L1C",
    type: "SALDO",
    amount: "R$250",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },

  {
    date: "21/07/2024 - 15:55:33",
    code: "29HY4L9J",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "21/07/2024 - 14:05:30",
    code: "98PL7Q2M",
    type: "FÍSICO",
    amount: "R$200",
    status: "ENVIADO",
    icon: <IconEditCircle />,
  },
  {
    date: "21/07/2024 - 10:22:15",
    code: "84JG9K3P",
    type: "CONSULTÁVEL",
    amount: "R$75",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },

  {
    date: "21/07/2024 - 07:25:50",
    code: "65DQ6T2W",
    type: "FÍSICO",
    amount: "R$250",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 18:45:20",
    code: "56TR4V8B",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 09:10:55",
    code: "77HK5L1C",
    type: "FÍSICO",
    amount: "R$250",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 22:33:12",
    code: "32MN9F4R",
    type: "CONSULTÁVEL",
    amount: "R$300",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 13:47:05",
    code: "11GV8N5K",
    type: "SALDO",
    amount: "R$300",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 11:59:45",
    code: "45BX7S3D",
    type: "FÍSICO",
    amount: "R$75",
    status: "ENVIADO",
    icon: <IconEditCircle />,
  },

  {
    date: "19/07/2024 - 07:25:50",
    code: "65DQ6T2W",
    type: "FÍSICO",
    amount: "R$250",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 15:55:33",
    code: "29HY4L9J",
    type: "CONSULTÁVEL",
    amount: "R$150",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 12:34:12",
    code: "33AB2D7Y",
    type: "FÍSICO",
    amount: "R$80",
    status: "ENVIADO",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 08:20:56",
    code: "71XC4M5L",
    type: "CONSULTÁVEL",
    amount: "R$45",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 19:10:30",
    code: "92TR8K4N",
    type: "FÍSICO",
    amount: "R$160",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "19/07/2024 - 14:25:40",
    code: "47JH6F1Q",
    type: "CONSULTÁVEL",
    amount: "R$130",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 10:44:50",
    code: "28PL9X7V",
    type: "FÍSICO",
    amount: "R$190",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 16:37:22",
    code: "53NM8Q2S",
    type: "CONSULTÁVEL",
    amount: "R$220",
    status: "ENVIADO",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 13:18:34",
    code: "66BC5Z3K",
    type: "FÍSICO",
    amount: "R$75",
    status: "AGUARDANDO ENVIO",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 09:56:15",
    code: "99LS3X2J",
    type: "CONSULTÁVEL",
    amount: "R$140",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 17:41:45",
    code: "82HY7P4D",
    type: "FÍSICO",
    amount: "R$100",
    status: "AGUARDANDO PAGAMENTO",
    icon: <IconEditCircle />,
  },
  {
    date: "18/07/2024 - 11:33:12",
    code: "64UJ6W2L",
    type: "CONSULTÁVEL",
    amount: "R$55",
    status: "ENTREGUE",
    icon: <IconEditCircle />,
  },
];

export default function Dashboard() {
  const [password, setPassword] = useState("");

  const [tableData, setTableData] = useState(tableDataBase);

  const tableRows = useMemo(() => {
    return tableData.map((row, index) => {
      const color = (): string => {
        console.log(row.status);
        if (row.status === "ENVIADO") return "rgb(22 115 200)";
        if (row.status === "ENTREGUE") return "rgb(115 200 22)";
        if (row.status === "AGUARDANDO ENVIO") return "rgb(22 115 150)";
        if (row.status === "AGUARDANDO PAGAMENTO") return "rgb(249 115 22)";
        return "red";
      };
      return (
        <tr className="bg-pale" key={index}>
          <td className="border-l border-r border-gray-700 px-2 text-start">
            {row.date}
          </td>
          <td className="border-r border-gray-700 px-2 text-start">
            {row.code}
          </td>
          <td className="border-r border-gray-700 px-2 text-start">
            {row.type}
          </td>
          <td className="border-r border-gray-700 px-2 text-start">
            {row.amount}
          </td>
          <td
            className={`border-r border-gray-700 px-2 text-start text-white`}
            style={{ backgroundColor: color() }}
          >
            {row.status}
          </td>
          <td className="border-r border-gray-700 px-2 text-start">
            {row.icon}
          </td>
        </tr>
      );
    });
  }, [tableData]);

  const waitFS = async (sec: number) => {
    return await new Promise((resolve) =>
      setTimeout(() => resolve(9), sec * 1000),
    );
  };

  const mimic = async () => {
    await waitFS(5);
    toast.success("🔥🚀 Novo pedido - ID: OKPG90Z");
    setTableData((prev) => {
      const newtable = [...prev];
      newtable.unshift({
        amount: "R$150",
        code: "MMA56J",
        date: "24/07/2024 - 16:00:41",
        icon: <IconEditCircle />,
        status: "AGUARDANDO PAGAMENTO",
        type: "FÍSICO",
      });
      return newtable;
    });
    await waitFS(2);
    toast.success("🔥🚀 Atualização - Pagamento H740AZ CONFIRMADO");
    await waitFS(2);
    toast.info("🚗 Pedido GB60T1 - Aguardando frete");
  };

  if (password !== "332440")
    return (
      <>
        <Head>
          <title>Fornecedor7 App</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            className=""
            height={300}
            width={300}
          />
          <div className="mx-auto mb-4 max-w-[80vw] border-b border-blue px-8 pb-2 text-center font-semibold text-gray-400"></div>

          <input
            type="text"
            className="rounded-lg border px-3 py-1 text-center text-blue"
            placeholder="code"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mb-24 mt-6 flex w-full flex-row items-center justify-center gap-8  p-6">
            <Image
              src={"/images/ssl.png"}
              alt="badge"
              height={100}
              width={100}
            />
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

  return (
    <>
      <Head>
        <title>Fornecedor7 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100">
        <div className="flex flex-row items-center justify-center gap-16">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            className=""
            height={300}
            width={300}
          />
          <div className="flex flex-row items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center rounded-lg bg-main p-6 font-semibold tracking-tight text-white shadow-xl">
              <IconBox />
              Estoque
            </div>
            <div
              className="flex flex-col items-center justify-center rounded-lg bg-main p-6 font-semibold tracking-tight text-white shadow-xl"
              onClick={mimic}
            >
              <IconTicket />
              Pedidos
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-main p-6 font-semibold tracking-tight text-white shadow-xl">
              <IconAnalyze />
              Métricas
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1200px]  flex-col rounded-lg border p-4">
          <table className="w-full border-separate border-spacing-y-2">
            <thead className="bg-main font-semibold text-white">
              <tr>
                <th className="px-2">Data</th>
                <th className="px-2">ID</th>
                <th className="px-2">Tipo</th>
                <th className="px-2">Valor</th>
                <th className="px-2">Status</th>
                <th className="px-2">-</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
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

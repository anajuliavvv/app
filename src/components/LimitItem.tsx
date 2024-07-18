import Image from "next/image";

export interface ILimitItemParams {
  price: number;
  limit: number;
  special?: boolean;
  onClick: (_: number) => unknown;
  limitText?: string;
}

export const LimitItem = ({
  limit,
  price,
  special,
  onClick,
  limitText,
}: ILimitItemParams) => {
  if (special)
    return (
      <div
        className="relative flex flex-row gap-4 rounded-md bg-light-blue p-6 shadow-2xl"
        onClick={() => onClick(limit)}
      >
        <div className="absolute right-[-25px] top-[-15px] rounded-xl bg-beak px-2 py-1 text-xs font-bold text-black">
          Mais Popular
        </div>
        <div className="flex basis-[25%] flex-col items-center justify-center">
          <div className="text-xl font-semibold">R${price}</div>
          <div className="text-gray-800">Valor</div>
        </div>
        <div className="">
          <Image
            src={"/svg/arrow.svg"}
            width={50}
            height={50}
            alt="arrow"
            className="mx-8"
          />
        </div>
        <div className="ml-auto flex flex-col items-center justify-center">
          <div className="text-3xl font-bold">
            R${limit.toLocaleString("pt-BR")}
          </div>
          <div className="text-gray-800">{limitText ?? "Limite"}</div>
        </div>
      </div>
    );

  return (
    <div
      className="relative flex flex-row gap-4 rounded-md bg-blue p-6 shadow-2xl"
      onClick={() => onClick(limit)}
    >
      <div className="flex basis-[25%] flex-col items-center justify-center">
        <div className="text-xl font-semibold">R${price}</div>
        <div className="text-cream">Valor</div>
      </div>
      <div className="basis-[25%]">
        <Image
          src={"/svg/arrow-dark.svg"}
          width={50}
          height={50}
          alt="arrow"
          className="mx-8"
        />
      </div>
      <div className="ml-auto flex flex-col items-center justify-center">
        <div className="text-3xl font-bold">
          R${limit.toLocaleString("pt-BR")}
        </div>
        <div className="text-cream">{limitText ?? "Limite"}</div>
      </div>
    </div>
  );
};

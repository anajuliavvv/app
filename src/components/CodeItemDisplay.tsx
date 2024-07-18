import axios from "axios";
import Image from "next/image";
import { useState, type ChangeEvent } from "react";
import { type Code } from "~/interfaces";

export interface ICodeItemDisplayParams {
  code: Code;
}

export const CodeItemDisplay = ({ code }: ICodeItemDisplayParams) => {
  const [codeValue, setCodeValue] = useState(code.code);
  const [iconSrc, setIconSrc] = useState("/svg/save.svg");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCodeValue(newValue);
  };

  const update = async () => {
    const url = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!url) return;
    const res = await axios.put(url, {
      id: code.id,
      code: codeValue,
    });

    if (res.data) {
      setIconSrc("/svg/done.svg");
    }
  };

  const trade = async () => {
    const newValue = await navigator.clipboard.readText();
    setCodeValue(newValue);
  };

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4">
      <div className="basis-[15%] bg-blue px-2 py-1 text-sm text-white">
        ${code.value}
      </div>
      <input
        type="text"
        className="rounded-md px-2 py-1 tracking-tighter"
        value={codeValue}
        onChange={handleChange}
        id={`code-input-${code.id}`}
      />
      <button onClick={trade}>
        <Image src={"/svg/trade.svg"} width={25} height={25} alt="trde-icon" />
      </button>
      <button onClick={update}>
        <Image src={iconSrc} width={25} height={25} alt="save-icon" />
      </button>
    </div>
  );
};

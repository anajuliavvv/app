import { IconArrowBackUp, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();

  const handleBack = () => {
    void router.back();
  };

  return (
    <div className="bg-main title fixed bottom-0 flex w-full flex-row px-4 py-3 text-center font-bold tracking-wider text-white">
      <div className="mr-auto">
        <IconBrandInstagram />
      </div>
      <Link href={"/menu"}>Fornecedor7</Link>
      <div className="ml-auto" onClick={handleBack}>
        <IconArrowBackUp />
      </div>
    </div>
  );
};

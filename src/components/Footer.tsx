import { IconArrowBackUp, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();

  const handleBack = () => {
    void router.back();
  };

  return (
    <div className="title fixed bottom-0 flex w-full flex-row bg-main px-4 py-3 text-center font-bold tracking-wider text-white">
      <Link className="mr-auto" href={"https://instagram.com/fornecedor_app7/"}>
        <IconBrandInstagram />
      </Link>
      <Link href={"/menu"}>Fornecedor7</Link>
      <div className="ml-auto" onClick={handleBack}>
        <IconArrowBackUp />
      </div>
    </div>
  );
};

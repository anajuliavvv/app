import { IconLoader } from "@tabler/icons-react";

export const DefaultDisponibilityMini = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 shadow-xl">
      <div className=" animate-pulse font-semibold text-gray-800">
        <IconLoader className="animate-spin" />
      </div>
      <div className="text-xs font-semibold text-gray-400">Disponibilidade</div>
    </div>
  );
};

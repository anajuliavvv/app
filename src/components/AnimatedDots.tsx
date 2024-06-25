import { useEffect, useState } from "react";

export const AnimatedDots = () => {
  const [dots, setDots] = useState(".");

  const animate = () => {
    setTimeout(() => {
      setDots((prev) => {
        if (prev === ".") return "..";
        if (prev === "..") return "...";
        return ".";
      });
      animate();
    }, 333);
  };

  useEffect(() => {
    animate();
  }, []);

  return dots;
};

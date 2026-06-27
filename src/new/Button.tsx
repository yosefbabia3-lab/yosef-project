import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "linear" | "dark";
  size?: "sm" | "lg";
};

export function Button({
  children,
  variant = "linear",
  size = "sm",
}: ButtonProps) {
  return (
    <button
      className={`font-black rounded-[10px] hover:scale-[1.1] transition-transform cursor-pointer duration-500
        ${
          variant === "linear"
            ? "bg-linear-[50deg] from-purple-400 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            : "bg-[#131313] text-[#f1f1f1]"
        }
        ${size === "lg" ? "text-lg px-4 py-2" : "text-sm py-1.5 px-2.5"}
      `}
    >
      {children}
    </button>
  );
}

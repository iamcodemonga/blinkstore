import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "./ui/animated-gradient-text";

export async function GradientText() {
  return (
    <div className="z-10 flex min-h-4 items-center justify-center pb-4">
      <AnimatedGradientText>
        ✨  <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Easy selling on twitter
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}

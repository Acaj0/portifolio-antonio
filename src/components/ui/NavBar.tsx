"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme";

export default function NavBar() {
  return (
    <div className="flex min-w-max px-1 lg:mx-36 mx-2 items-center justify-between h-16">
      <div className="gap-4 flex flex-row texl-xl md:text-2xl">
        <a
          href="/"
          className="hover:text-[#6D9886] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
        >
          Inicio
        </a>
        <a
          href="/Trabalhos"
          className="hover:text-[#6D9886] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
        >
          Trabalhos
        </a>
        <a
          href="/orcamento"
          className="hover:text-[#6D9886] hover:animate-pulse rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-250"
        >
        Orçamentos
        </a>
      </div>

      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

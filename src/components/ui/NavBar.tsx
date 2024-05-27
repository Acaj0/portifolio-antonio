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
      <div className="gap-4 flex flex-row text-2xl">
        <a
          href="/"
          className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
        >
          Inicio
        </a>
        <a className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
          Trabalhos
        </a>
        <Drawer>
          <DrawerTrigger className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
            Sobre
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center">Bem Vindo!</DrawerTitle>
              <DrawerDescription className="text-center lg:mx-80 mt-2">
                teste
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="text-center">
              Antonio Carlos de Abreu Junior.
              <DrawerClose>
                <Button variant="outline">Fechar</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

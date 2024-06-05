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
        <a
          href="/Trabalhos"
          className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
        >
          Trabalhos
        </a>
        <Drawer>
          <DrawerTrigger className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
            Sobre
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center">Bem Vindo!</DrawerTitle>
              <DrawerDescription className="text-center md:mx-[700px] mt-2">
                Olá! Meu nome é Antonio Carlos de Abreu Junior e sou um
                apaixonado desenvolvedor de sites, com uma missão clara:
                transformar ideias em experiências digitais excepcionais. Com
                experiência na criação de sites personalizados e responsivos, já
                tive a oportunidade de colaborar com empresas de diversos
                setores e tamanhos, sempre buscando superar as expectativas dos
                meus clientes. Quando descobri a alegria de criar e inovar no
                ambiente digital. Desde então, venho aprimorando minhas
                habilidades em várias tecnologias e plataformas, incluindo HTML,
                CSS, JavaScript, WordPress, e-commerce, e muito mais. Cada
                projeto é uma nova aventura, onde busco soluções criativas e
                eficientes para os desafios apresentados. Filosofia de Trabalho
                Acredito que um bom site é aquele que combina estética,
                funcionalidade e uma experiência de usuário intuitiva. Meu
                processo de trabalho é colaborativo e transparente, garantindo
                que cada cliente esteja envolvido em todas as etapas do projeto.
                Desde a concepção inicial até o lançamento e manutenção, estou
                comprometido em fornecer um serviço de alta qualidade que atenda
                às necessidades específicas de cada cliente.
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

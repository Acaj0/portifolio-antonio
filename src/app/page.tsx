import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:mx-36 mx-2 flex mt-20 flex-col">
        <div className=" flex lg:flex-row flex-col min-w-fill">
          <div className=" flex flex-col">
            <h1 className="text-5xl md:text-left text-center">Antonio Carlos de Abreu Junior</h1>
            <span className=" mt-4 text-wrap text-center md:text-left text-2xl lg:min-w-fit">
              Eu sou estudante de Sistema de informação, sou apaixonado por
              musica e tecnologia, atualmente estou aprendendo e desenvolvendo
              aplicações em Next.js
            </span>
            <div className="flex flex-row mt-10 gap-10 text-center items-center md:justify-start justify-center">
              <a href="https://1drv.ms/b/c/c8603f43faf0ff7c/EX9MPf5CoDRMl80lpkoVGiQBFJNgXSyg_Qho-6gnT-5ChQ?e=jpzpuy" target="_blank" className="cursor-pointer h-9 outline px-4 text-center flex items-center hover:bg-black hover:text-white dark:hover:bg-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:text-black rounded text-xl">
                Currículo
              </a>
              <div className="w-10 flex items-center gap-0">
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://github.com/Acaj0"
                  target="_blank"
                >
                  <Image
                    className="dark:hidden"
                    alt="github"
                    src={"/github.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://github.com/Acaj0"
                  target="_blank"
                >
                  <Image
                    className="hidden dark:flex"
                    alt="github"
                    src={"/github-claro.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
              </div>
              <div className="w-10 flex items-center gap-0">
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://www.linkedin.com/in/acaj0/"
                  target="_blank"
                >
                  <Image
                    className="dark:hidden"
                    alt="linkedin"
                    src={"/linkedin.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
                <a
                  className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100"
                  href="https://www.linkedin.com/in/acaj0/"
                  target="_blank"
                >
                  <Image
                    className="hidden dark:flex"
                    alt="linkedin"
                    src={"/linkedin-claro.svg"}
                    width={100}
                    height={100}
                  ></Image>
                </a>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="items-center flex justify-center lg:justify-center mt-4 container mx-auto">
            <Image
              className="rounded-full border-4 border-black/70 dark:border-white/80"
              alt="foto"
              src={"/antonio2.jpeg"}
              width={250}
              height={100}
            ></Image>
          </div>
          
        </div>
        <Separator className="mt-36" />
        <div className="text-4xl text-center items-center justify-center flex flex-col mt-10">
          <h2>Favoritos</h2>
          <div className="bg-white/10 min-w-full h-44 rounded-full items-center justify-center flex mt-10">

          </div>
        </div>
      </div>
    </div>
  );
}

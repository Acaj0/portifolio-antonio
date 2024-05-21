import NavBar from "@/components/ui/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mx-36 flex mt-28 flex-col">
        <h1 className="text-4xl">Antonio Carlos de Abreu Junior</h1>
        <span className=" mt-8 text-wrap text-left w-[650px]">
          Eu sou estudante da área de Sistema de informação, apaixonado por
          musica e tecnologia,atualmente estou aprendendo e desenvolvendo
          aplicações em Next.js
        </span>
        <div className="flex flex-row mt-10 gap-10">
          <button className="outline p-2 hover:bg-black hover:text-white dark:hover:bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:text-black rounded text-xl">
            Currículo
          </button>
          <div className="w-10 flex items-center gap-0">
            <a
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="https://github.com/Acaj0"
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
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="https://github.com/Acaj0"
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
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="https://www.linkedin.com/in/acaj0/"
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
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              href="https://www.linkedin.com/in/acaj0/"
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
        </div>
      </div>
    </div>
  );
}

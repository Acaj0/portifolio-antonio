import NavBar from "@/components/ui/NavBar";
import Image from "next/image";

export default function Trabalhos() {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-2xl">Trabalhos</h1>
      </div>
      <div className="min-w-screen px-1 lg:mx-36 min-h-[550px] grid md:grid-rows-2 grid-rows-4 grid-flow-col gap-4 items center mb-10 mt-10">
        <div className="border-2 rounded-lg items-center flex justify-center p-1">
          <div className="p-1 gap-2 flex flex-col md:flex-row items-center justify-center">
            <div className="relative text-center">
              <Image
                className="blur p-2"
                alt="foto"
                src={"/digito.jpg"}
                width={400}
                height={200}
              ></Image>
              <div className="min-w-full h-full absolute top-0 left-0 text-center justify-center flex items-center bg-black/15 rounded ">
                <a
                  target="_blank"
                  className="transition hover:underline"
                  href="https://www.bandadigitozero.com.br/"
                >
                  Digito Zero
                </a>
              </div>
            </div>
            <div className="max-w-96 items-center justify-center flex flex-col p-4">
              <h2 className="text-lg text-start text-wrap">
                O site da banda Digito Zero oferece aos fãs e visitantes uma
                plataforma envolvente e informativa, repleta de recursos
                exclusivos para explorar o universo musical e artístico da
                banda.
              </h2>
              <a
                href="/DigitoZero"
                className="mt-4 text-lg text-center border rounded p-2 hover:text-gray-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg items-center flex justify-center">
          2
        </div>
        <div className="border-2 rounded-lg items-center flex justify-center">
          <div className="border rounded-lg min-w-full min-h-96 p-1 gap-2 flex flex-col md:flex-row  2xl:flex-row items-center justify-center">
            <div className="relative text-center">
              <Image
                className="blur p-2"
                alt="foto"
                src={"/diario.png"}
                width={400}
                height={200}
              ></Image>
              <div className="min-w-full h-full absolute top-0 left-0 text-center justify-center flex items-center bg-black/15 rounded ">
                <a
                  target="_blank"
                  className="transition hover:underline"
                  href="https://diario-alerta.vercel.app"
                >
                  Diario Alerta
                </a>
              </div>
            </div>
            <div className="max-w-96 items-center justify-center flex flex-col p-4">
              <h2 className="text-lg text-start text-wrap">
                O Diário Alerta é um aplicativo que oferece a tranquilidade de
                monitorar se o seu CPF ou CNPJ foi mencionado no Diário Oficial
                da União. Com uma interface intuitiva, você pode cadastrar seus
                documentos e receber notificações instantâneas sempre que houver
                uma citação relevante para você.
              </h2>
              <a
                href="/DiarioAlerta"
                className="mt-4 text-lg text-center border rounded p-2 hover:text-gray-200 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-lg items-center flex justify-center">
          4
        </div>
      </div>
    </div>
  );
}

import NavBar from "@/components/ui/NavBar";
import { Separator } from "@/components/ui/separator";

export default function orcamento() {
  return (
    <div className="">
      <NavBar></NavBar>

      <div className="flex items-center mt-10 min-w-screen mx-36 min-h-[800px] flex-col">
        <span className="text-2xl">Orçamentos</span>
        <div className="flex flex-row gap-5 mt-5">
          <div className="flex w-60 h-60 items-center justify-center">1</div>
          <Separator
            orientation="vertical"
            className="h-60 w-[3px] rounded-md"
          />
          <div className="flex w-60 h-60 items-center justify-center">2</div>
        </div>
        <Separator className="w-96 h-[3px] rounded-md mt-10" />
        <div className="grid grid-cols-2 grid-rows-2 mt-10 gap-5">
          <div className="border rounded p-10 flex flex-row items-center gap-5 w-[450px]">
            <div className="w-20 h-20 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#69b595"
                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Totalmente Personalizado</h2>
              <h3 className="text-sm mt-1">
                Site com a sua cara, totalmente customizado
              </h3>
            </div>
          </div>
          <div className="border rounded p-10 flex flex-row items-center gap-5 w-[450px]">
            <div className="w-16 h-15 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  fill="#69b595"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Otimização</h2>
              <h3 className="text-sm mt-1">SEO, Analytics e Velocidade</h3>
            </div>
          </div>
          <div className="border rounded p-10 flex flex-row items-center gap-5 w-[450px]">
            <div className="w-14 h-14 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#69b595"
                  d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Responsividade</h2>
              <h3 className="text-sm mt-1">Funcionalidade mobile completa</h3>
            </div>
          </div>
          <div className="border rounded p-10 flex flex-row items-center gap-5 w-[450px]">
            <div className="w-20 h-20 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="#69b595"
                  d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl">Domínio e Hospedagem</h2>
              <h3 className="text-sm mt-1">
                Primeiro ano de dominio e hospedagem inclusas
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

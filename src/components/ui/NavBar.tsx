import { ModeToggle } from "./theme";

export default function NavBar() {
  return (
    <div className="flex min-w-max px-1 mx-36 items-center justify-between h-16">
      <div className="gap-4 flex flex-row text-xl">
        <button className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
          Inicio
        </button>
        <button className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
          Trabalhos
        </button>
        <button className="hover:text-gray-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-50">
          Sobre
        </button>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

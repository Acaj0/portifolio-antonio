import { ModeToggle } from "./theme";

export default function NavBar() {
  return (
    <div className="flex min-w-max px-1 mx-36 items-center justify-between h-16">
      <div className="gap-4 flex flex-row text-xl">
        <button className="hover:text-[#76ABAE]">Inicio</button>
        <button className="hover:text-[#76ABAE]">Trabalhos</button>
        <button className="hover:text-[#76ABAE]">Sobre</button>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
}

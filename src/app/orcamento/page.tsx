import NavBar from "@/components/ui/NavBar";
import { Separator } from "@/components/ui/separator"

export default function orcamento() {
  return (
    <div className="">
      <NavBar></NavBar>
      
      <div className="flex items-center mt-10 min-w-screen mx-36 min-h-[800px] flex-col">
      <span className="text-2xl">Orçamentos</span>
        <div className="flex flex-row gap-5 mt-5">
          <div className="flex w-60 h-60 items-center justify-center">1</div>
          <Separator orientation="vertical" className="h-60 w-[3px] rounded-md"/>
          <div className="flex w-60 h-60 items-center justify-center">2</div>
        </div>
        <Separator className="w-96 h-[3px] rounded-md mt-10" />
        <div className="grid"></div>
      </div>
    </div>
  );
}

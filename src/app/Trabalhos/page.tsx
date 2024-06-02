import NavBar from "@/components/ui/NavBar";

export default function Trabalhos() {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="flex items-center justify-center mt-10">
        <h1 className="text-2xl">Trabalhos</h1>
      </div>
      <div className="min-w-max px-1 lg:mx-36 min-h-[550px] grid md:grid-rows-2 grid-rows-4 grid-flow-col gap-4 items center mb-10 mt-10">
      <div className="border-2 rounded-lg items-center flex justify-center">1</div>
      <div className="border-2 rounded-lg items-center flex justify-center">2</div>
      <div className="border-2 rounded-lg items-center flex justify-center">3</div>
      <div className="border-2 rounded-lg items-center flex justify-center">4</div>
      </div>
    </div>
  );
}

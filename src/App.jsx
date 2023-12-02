import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {

  return (
    <div className="w-full h-screen flex flex-col relative items-center bg-slate-700 overflow-x-hidden">
      <h1 className="text-white rounded-sm w-11/12 border-slate-500 border-[1px] text-center mt-5 py-5 text-3xl">Random GIF's</h1> 
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag/>
      </div>
    </div>
  )
}

export default App

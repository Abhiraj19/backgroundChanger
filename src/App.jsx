import { useState } from "react"



function App() {
  const [color,setColor]=useState("olive")



  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
       <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl"  >
   
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}>
          Red
        </button>
        <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"blue"}}>
          Blue
        </button>
        <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"green"}}>
       Green
        </button>
        <button onClick={()=>setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"olive"}}>
          Olive
        </button>
        <button onClick={()=>setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"gray"}}>
          Gray
        </button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"yellow"}}>
          Yellow
        </button>
        <button onClick={()=>setColor("Orange")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Orange"}}>
          Orange
        </button>
        <button onClick={()=>setColor("Aqua")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Aqua"}}>
          Aqua
        </button>
        <button onClick={()=>setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"violet"}}>
        violet
        </button>
        <button onClick={()=>setColor("Pink")} className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"Pink"}}>
          Pink
        </button>
       

       </div>
     

      </div>


    </div>
  )
}

export default App

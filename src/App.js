import './App.css';
import { useState } from 'react';

function App() {

  const [color, setColor] = useState("olive")

  function colorChange(color){
    setColor(color)
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={() => colorChange("red")}>Red</button>

          <button className="outline-none px-4 rounded-full text-white" style={{backgroundColor: "green"}} onClick={() => colorChange("green")}>Green</button>

          <button className='oulinne-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={() => colorChange("blue")}>Blue</button>

          <button className='oulinne-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}} onClick={() => colorChange("olive")}>Olive</button>

          <button className='oulinne-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "gray"}} onClick={() => colorChange("gray")}>Gray</button>

          <button className='oulinne-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "yellow"}} onClick={() => colorChange("yellow")}>Yellow</button>

          <button className='oulinne-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "pink"}} onClick={() => colorChange("pink")}>Pink</button>

          <button className='oulinne-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "purple"}} onClick={() => colorChange("purple")}>Purple</button>

          <button className='oulinne-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "lavender"}} onClick={() => colorChange("lavender")}>Lavender</button>

          <button className='oulinne-none px-4 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}} onClick={() => colorChange("white")}>White</button>

          <button className='oulinne-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}} onClick={() => colorChange("black")}>Black</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;

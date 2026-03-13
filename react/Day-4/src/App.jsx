import { useState } from 'react'
import { useGenerate } from './useGenerate';

function App() {

  const { val, setVal, image, color , setColor , bg , setBg } = useGenerate();

  return (
    <>
      <p>Welcome to the image generator by text</p>
      <br />
      <label htmlFor="val">Text Here : </label>
      <input
        value={val}
        placeholder='Enter Your text'
        onChange={(e) => setVal(e.target.value)}
      />
      <img src={image} alt="generated" height={300} style={{width:"vw"}} />

      <label htmlFor="color">Enter color : </label>
      <input
        value={color}
        placeholder='Enter Your Color'
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor="bg">Enter BG color : </label>
      <input
        value={bg}
        placeholder='Enter Your BG Color'
        onChange={(e) => setBg(e.target.value)}
      />
    </>
  )
}

export default App;
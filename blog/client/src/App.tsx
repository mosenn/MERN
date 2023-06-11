import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="text-4xl bg-slate-600 font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App

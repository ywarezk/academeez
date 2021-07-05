import { useState } from "react"


export default function Child() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>
        Child component {counter}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>
        Child button increment
      </button>
    </>
  )
}

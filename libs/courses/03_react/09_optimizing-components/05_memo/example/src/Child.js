import { memo, useMemo, useState } from "react"


function Child({
  calc1,
  calc2
}) {
  const [counter, setCounter] = useState(0);

  const value1 = useMemo(() => {
    let value1 = 0;
    for (let i = 0; i < 100000; i++) {
      value1+=calc1;
    }
    return value1
  }, [calc1])

  const value2 = useMemo(() => {
    let value2 = 0;
    for (let i = 0; i < 100000; i++) {
      value2+=calc2;
    }
    return value2
  }, [calc2])


  return (
    <>
      <h1>
        Child component
      </h1>
      <p>
         value1: {value1}
      </p>
      <p>
         value2: {value2}
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Child button increment
      </button>
    </>
  )
}

export default memo(Child)

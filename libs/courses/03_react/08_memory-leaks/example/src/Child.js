import { useEffect, useState } from "react"

export default function Child() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [mem, setMem] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setMem((mem) => {
        return [...mem, ...(new Array(10000)).join(',').split(',').map(() => document.createElement('div')) ]
      });
      setRandomNumbers((randomNumbers) => {
        return [...randomNumbers, Math.random()]
      })
    }, 1000)
  }, [])

  return (
    <div>
      <h1>
        I have a memory leak
      </h1>

      <ul>
        {
          randomNumbers.map((num, index) => <li key={index}>{num}</li>)
        }
        <li>
        </li>
      </ul>
    </div>
  )
}

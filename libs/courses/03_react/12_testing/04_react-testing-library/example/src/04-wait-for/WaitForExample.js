import { useEffect, useState } from "react"


const WaitForExample = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 500)
  }, [isVisible])

  return (
    <div>
      <h2>
        waitFor
      </h2>
      <p>
        Wait a period of time for a condition to be met
      </p>
      {
        isVisible && (
          <p data-testid="toggle">
            This will toggle every second
          </p>
        )
      }
    </div>
  )
}

export default WaitForExample;

import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface FunctionalComponentProps {
  mainTitle: string
  subTitle?: string
}

type CustomPastaType = null | string

const FunctionalComponent = ({
  mainTitle,
  subTitle,
}: FunctionalComponentProps) => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Stefano')

  const location = useLocation()
  console.log(location.pathname)

  const navigate = useNavigate()

  const [selectedPasta, setSelectedPasta] = useState<CustomPastaType>(null)

  return (
    <div>
      <h2 onClick={() => setSelectedPasta('Stefano')}>{mainTitle}</h2>
      <h4>{subTitle}</h4>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p onClick={() => navigate('/class')}>
        The value of the counter is: {counter}
      </p>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}

export default FunctionalComponent

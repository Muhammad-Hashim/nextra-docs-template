// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './counters.module.css'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      fsdjkkfsdffjkd'gdkhl;ghfkghfdgh;fkghdfgh;dfksglhfkghsdkghldk;fghsdfkghsdkghksdlgh;klgh
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}

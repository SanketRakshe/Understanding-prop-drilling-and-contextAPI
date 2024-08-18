import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>  
      <Count count = {count} setCount = {setCount}/>
    </>
  )
}

function Count({count, setCount}) {
  return (
    <>
      <div>
        <CountRenderer count = {count}/>
        <ButtonRenderer count = {count} setCount = {setCount} />
      </div>
    </>
  )
}


function CountRenderer({count}) {
  return (
    <>
      <div>
        {count}
      </div>
    </>
  )
}


function ButtonRenderer({count, setCount}) {
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }
      }>Increment</button>

      <button onClick={() => {
        setCount(count - 1);
      }
      }> Decrement</button>
    </>
  )
}

export default App

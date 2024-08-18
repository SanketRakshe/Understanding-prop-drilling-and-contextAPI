import { useState } from 'react'
import { useContext } from 'react';
import { countContext } from './context';

function ContextAPI() {

  const [count, setCount] = useState(0);

  return (
    <>  
        <countContext.Provider value={count}>
            <Count count = {count} setCount = {setCount} />
        </countContext.Provider>
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


function CountRenderer() {
    const count = useContext(countContext);
    return (
        <>
        <div>
            {count}
        </div>
        </>
    )
}


function ButtonRenderer({ setCount}) {

  const count = useContext(countContext);
  
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

export default ContextAPI;

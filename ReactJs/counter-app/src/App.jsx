import React, { useState } from 'react'



const App = (props) => {

  const [counter, setCounter] = useState(0);

  function onclickfunction(){
    setCounter(counter + 1)
  }
  

  return (
    <div>
      <Button onClick ={onclickfunction}>Counter {counter}</Button>
    </div>
  )
}

export default App;






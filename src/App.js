import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"


const App = () => {

  const [amount, setAmount] =useState(0)
  const [total ,setTotal] = useState(125)

  function handleIncrease(){
    let copyAmount = amount
    setAmount(copyAmount+1)
    setTotal((copyAmount+1)*125)
  }

  function handleDecrease(){
    if(amount > 0){
      let copyAmount = amount
      setAmount(copyAmount-1)
      setTotal((copyAmount-1)*125)
    }
  }
  return(
    <>
      <Navbar amount={amount}/>
      <Content 
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        amount={amount}
        zeroAmount={setAmount}
        total={total}
        />
    </>
  )
}

export default App
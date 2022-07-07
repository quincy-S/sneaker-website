import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"


const App = () => {

  const [amount, setAmount] =useState(0)
  const [total ,setTotal] = useState(125)
  const [showCart, setShowCart] = useState(false)
  const [dataFromContent, setDataFromContent]= useState(false)

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

  function handleAdd(data){
    setDataFromContent(true)
  }

  function viewCart(){
    showCart ? setShowCart(false) : setShowCart(true)
  }

  return(
    <>
      <Navbar amount={amount} popUpData={dataFromContent} viewCart={viewCart}/>
      <Content 
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        amount={amount}
        clearCart={setDataFromContent}
        total={total}
        callFromApp = {handleAdd}
        showCart={showCart}
        />
    </>
  )
}

export default App
import { useState } from "react"
import Counter from "./Counter"

let App=()=>{
  let obj={"item":"laptop","name":"Dell","price":56000}
  let [qty,setqty]=useState(1)
  let inc=()=>{
    setqty(()=>qty+1)
  }
  let dec=()=>{
    if(qty>1)
    {
      setqty(()=>qty-1)
    }
  }
  return(
    <div>
      <h1>Item:{obj.item}</h1>
      <h1>Name:{obj.name}</h1>
      <h1>Price:{obj.price}</h1>
      <Counter qty={qty} inc={inc} dec={dec}/>
      <div>Total-Amount:{obj.price*qty}</div>
    </div>

  )
}
export default App
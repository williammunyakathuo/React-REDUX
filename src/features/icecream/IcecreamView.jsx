import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const [num, setNum] = useState(1)
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of icecream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <input type="number" 
      value={num} 
      onChange={(e) => setNum(parseInt(e.target.value))} />
      <button onClick={() => dispatch(restocked(num))}>Restock icecream</button>
    </div>
  )
}

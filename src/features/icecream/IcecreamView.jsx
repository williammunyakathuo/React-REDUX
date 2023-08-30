import React from 'react'
import { useSelector } from 'react-redux'

export const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)

  return (
    <div>
        <h2>Number of icecream - {numOfIcecream}</h2>
        <button>Order icecream</button>
        <button>Restock icecream</button>
    </div>
  )
}

import React from 'react'

import { ExampleComponent } from 'masspa-eshipping'
import 'masspa-eshipping/dist/index.css'
const address = [
  {
    name: "Nguyen A",
    address: "12 Tran Quang Dieu Quan 3 TPHCM",
    mobile: "0934879888"
  }
]
const App = () => {
  return (
  <ExampleComponent  
    address = {address} 
    defaultAddress = {0} 
  />
  )
}

export default App

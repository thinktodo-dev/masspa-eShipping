import React from 'react'

import ExampleComponent  from 'masspa-eshipping'
import 'masspa-eshipping/dist/index.css'
const addressArray = [
  {
    name: "Nguyen A",
    address: "12 Tran Quang Dieu Quan 3 TPHCM",
    mobile: "0934879888",
    default: 0
  },
  {
    name: "Nguyen B",
    address: "12 Tran Quang Dieu Quan 5 TPHCM",
    mobile: "0934879888",
    default: 0
  },
  {
    name: "Nguyen c",
    address: "12 Tran Quang Dieu Quan 4 TPHCM",
    mobile: "0934879888",
    default: 1
  }
]
const App = () => {
  return (
  <ExampleComponent  
  addressArray = {addressArray} 
    defaultAddress = {0} 
  />
  )
}

export default App

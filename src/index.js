import React from 'react'
import styles from './styles.module.css'  
export default class ECartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  } 
  componentDidMount() { 
  }
  
  render() {
  let {addressArray = [], defaultAddress = 0} = this.props
  let {} = this.state 
   
  return  (
   addressArray.map((address) => {
     return(
       <div>
         <label>Ho ten</label> <input type = "text">{address.name}</input>
         <label>Dia chi</label><input type = "text">{address.name}</input>
         <label>SDT</label><input type = "text">{address.name}</input>
         <label>Sử dung làm mặc định</label><input type = "checked" value = {true}></input>
       </div>
     )
   })
  )
}
}
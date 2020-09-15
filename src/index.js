import React from 'react'
import styles from './styles.module.css'  
export default class ECartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address : {},
      indexActive: -1,
      addressArray: this.props.addressArray || [],
      text: this.props.text || {
        select_avaiable_address_below: "Select avaiable address below",
        default_status: "Default",
        ship_to_here: "Ship to here",
        you_want_to_ship_to_a_different_address: "You want to ship to a different address",
        add_new_a_new_address: "Add new a new address",
        name: "Name",
        address: "Address",
        mobile: "Mobile",
        use_default: "Use as default address",
        cancel_button: "Cancel",
        add_new_btn: "Add new",
        edit_btn: "Edit",
        delete_btn: "Delete",
      }
    }
  } 
  componentDidMount() { 
  }
  addNewAddress = () => {
    let {addressArray, address} = this.state
    if(address.name && address.address && address.mobile) {
      addressArray = addressArray.map((e) => {e.default = 0; return e})
      addressArray.push(address) 
      this.setState({
        displayEdit: false,
        address: {},
        indexActive: -1,
        addressArray: addressArray
      })
      if(this.props.changeAddress)   this.props.changeAddress(addressArray)
    } 
  }
  actionAddress = (address = {}, index) => {
    this.setState({
      address: {...address},
      indexActive: index,
      displayEdit: true
    })
  }
  updateAddress = (address) => {
    let {addressArray, indexActive} = this.state
    if(address.name && address.address && address.mobile) {
      addressArray = addressArray.map((e) => {e.default = 0; return e})
      addressArray[indexActive] = address
      this.setState({
        displayEdit: false,
        address: {},
        indexActive: -1,
        addressArray: addressArray
      })
      if(this.props.changeAddress)   this.props.changeAddress(addressArray)
    }
  }
  onChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    if(name === "default") value = e.target.checked ? 1 : 0
    let {address} = this.state
    address[name] = value
    this.setState({address: address})
  }
  selectAddress = (address) => {
    if(this.props.selectAddress) this.props.selectAddress(address)
  }
  deleteAddress= (index) => {
    let {addressArray} = this.state
    addressArray.splice(index, 1)
    this.setState({
      addressArray: addressArray
    })
    if(this.props.selectAddress) this.props.selectAddress(addressArray)
  }
  render() {
  let {address, displayEdit = false, addressArray = [], indexActive,text = {}} = this.state 
  return(
  <div> 
    {/* <div>Shipping Address</div> */}
  <div className = {styles.eshipping_address_text}>{text.select_avaiable_address_below}</div>
    <div className = {styles.eshipping_container}> 
    {addressArray.map((address, index) => {
      return(
        <div key = {index} className = {(address.default === 1) ? styles.eshipping_address_active : styles.eshipping_address}>
          {address.default === 1 && <p className = {styles.defaultSelect}>{text.default_status}</p>}
          <div className = {styles.eshipping_address_title}>{address.name}</div>
          <div className = {styles.eshipping_address_subTitle}>{address.address}</div>
          <div className = {styles.eshipping_address_subTitle}>{address.mobile}</div>
          <div className = {styles.containerButton}>
      <button className = {address.default === 1 ? styles.btnSelectActive : styles.btnSelect} onClick = {() => this.selectAddress(address)}>{text.ship_to_here}</button>
            <button className = {styles.btnEdit} onClick = {() => this.actionAddress(address, index)}>{text.edit_btn}</button>
            {address.default !== 1 && <button className = {styles.btnEdit} onClick = {() => this.deleteAddress(index)}>{text.delete_btn}</button>}
          </div>
        </div>
      )})}
     </div>
     <div className = {styles.addNewAddress}>{text.you_want_to_ship_to_a_different_address} <a href = "#" onClick = {() => this.actionAddress({}, -1)}>{text.add_new_a_new_address}</a></div>
     <div style = {!displayEdit ? {display:"none"}  : {}} className = {styles.eshipping_editAddress_container}> 
      <div className = {styles.eshipping_editAddress}>
        <div className = {styles.eshipping_form}><label className = {styles.eshipping_formLabel}>{text.name}</label> <input  className = {styles.eshipping_formInput} type = "text" name = "name" value = {address.name || ""}  onChange = {this.onChange}/></div>
        <div className = {styles.eshipping_form}><label className = {styles.eshipping_formLabel}>{text.address}</label> <input  className = {styles.eshipping_formInput} type = "text"  name = "address" value = {address.address || ""}  onChange = {this.onChange}/></div>
        <div className = {styles.eshipping_form}><label className = {styles.eshipping_formLabel}>{text.mobile}</label> <input  className = {styles.eshipping_formInput} type = "text" value = {address.mobile || ""}  name = "mobile"  onChange = {this.onChange}/></div>
        <div className = {styles.eshipping_form}><label className = {styles.eshipping_formLabel}>{text.use_default}</label> <input  className = {styles.eshipping_formCheckBox} type = "checkbox"  name = "default"  onChange = {this.onChange} checked = {address.default || 0} /></div>
        <div  className = {styles.eshipping_form_containerButton} >
          <button className = {styles.eshipping_cancelBtn} onClick = {() => {this.setState({displayEdit: false})}}>{text.cancel_button}</button> 
          <button className = {styles.eshipping_updateBtn} onClick = {() => indexActive === -1 ? this.addNewAddress() : this.updateAddress(address)}>{indexActive === -1 ? text.add_new_btn : text.edit_btn}</button></div>
      </div>
     </div>
  </div>
  )
  }
}


 
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AssignmentIcon from '@material-ui/icons/Assignment';




export default class App extends Component {
  state= {
    cont:0,
    isShow:false
  }
  increment=()=>{
    this.setState({cont:this.state.cont+1})
  }
  handelShow=()=>{
    this.setState({isShow:!this.state.isShow})
  }
  componentDidMount()
  {
    setInterval(
      this.increment
      ,1000
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.handelShow}>{this.state.isShow?"hide":"Show"}</button>
        {
          this.state.isShow&&<div>
 <div className="container">
  <div className="row">
    <div className="col align-self-start">
      <img src="https://i.pinimg.com/236x/64/1c/4a/641c4acc7b305df3eb11fc5a8941b0b6.jpg" alt="" />
      <h5>Name</h5>
      <p> Baya</p>
      
      <h5>Second Name</h5>
      <p> Ben Mohamed</p>

      <h5>{this.state.cont}</h5>
      <button onClick={()=>this.increment()}>Compteur</button>
    </div>
    <div className="col align-self-center">
      <div className="box">
     <AddIcCallIcon/>
      <p>20000000</p>
     
  <AlternateEmailIcon/>
  <p>www.bayaBenmohamed@gamil.com</p>
  <AssignmentIcon/>
  <p>Baya Ben Mohamed dévloppeur react js experience 10 years</p>
      </div>
      
    </div>
    
  </div>
</div>
          </div>
        }
       

</div>
      
      
    )
  }
}

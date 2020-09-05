import React, { Component } from 'react';
import axios from 'axios'
 class Ladingpage extends Component {

    state={
        text:''
    }

handlechange=(e)=>{

    this.setState({
        text:e.target.value
    })
   
}

submitfunc=(e)=>{
    e.preventDefault()
    axios.post("https://hooks.slack.com/services/${your_slack_token}", {text:this.state.text})
    .then(res=>{
        console.log("then", res)
    })
}




  render() {
    return (
      <div>
        <input onChange={this.handlechange}></input>
        <button onClick={this.submitfunc}>submit</button>
      </div>
    );
  }
}

export default Ladingpage;

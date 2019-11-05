import React, { Component } from "react";
// import "./style.css";
import API from "../utils/API"
class Login extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.logMeIn({
      username:this.state.username,
      password:this.state.password
    }).then(data=>{
      console.log(data);
    })
    // create new object that contains all the login data
    // axios.post(url of choice, userdata) .then (user profile info )/.catch request to the backend 
    // 
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Login!</button>
        </form>
      </div>
    );
  }
}

export default Login;
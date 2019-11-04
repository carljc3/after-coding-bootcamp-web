import React, { Component } from "react";
// import "./style.css";

class SignUp extends Component {
  // Setting the component's initial state
  state = {
    email: "",
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.username || !this.state.password) {
      alert("Fill out your E-mail, Username and Password please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.username}!`
      );
    } else {
      alert(`Hello ${this.state.username}`);
    }
  
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-mail"
          />
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
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Create Account!</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
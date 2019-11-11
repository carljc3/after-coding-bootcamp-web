import React, { Component } from 'react';
import API from "../utils/API";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Login.css" 

export default class Login extends Component {
  state = {
    isShown: false,
    email: '',
    username: "",
    password: "",
    loggedInUser: '',
    redirect: false,
    modalClasses: "modal d-block",
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
      username: this.state.username,
      password: this.state.password
    }).then(data => {
      console.log(data)
      this.setState({
        redirect: true
      })
    })
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/portfolio' />
    }
  }

  hideModal = () => {
    this.setState({
      modalClasses: 'modal fade'
    })
  }

  render() {

      return (
          <div>
              <div className={this.state.modalClasses} id="modalChefLogInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                  aria-hidden="true">
                  <div className="modal-dialog" role="document">
                      <div className="modal-content">
                          <div className="modal-header text-center">
                              <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                              <button  onClick={this.props.clickHandler} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span className= "XButton" aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body modal-open mx-3">

                          <h5 className="text-center">Login to your account</h5>
                              <div className="md-form mb-5">
                                  {/* <i className="fas fa-user prefix grey-text"></i> */}
                                  <label className="Username" data-error="wrong" data-success="right" htmlFor="form34">Username:</label>
                                  <input type="text" required name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="" />

                                  <br />
                                  {/* <i className="fas fa-lock"></i> */}
                                  <label className="Password" data-error="wrong" data-success="right" htmlFor="form34">Password:</label>
                                  <input type="password" required name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="" />
                              </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">

    return (
      <div>
        <div className={this.state.modalClasses} id="modalChefLogInForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                <button onClick={this.props.clickHandler} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal-open mx-3">

                <h5 className="text-center">Login to your account</h5>
                <div className="md-form mb-5">
                  {/* <i className="fas fa-user prefix grey-text"></i> */}
                  <label data-error="wrong" data-success="right" htmlFor="form34">Username</label>
                  <input type="text" required name="username" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="" />

                  <br />
                  {/* <i className="fas fa-lock"></i> */}
                  <label data-error="wrong" data-success="right" htmlFor="form34">Password</label>
                  <input type="password" required name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="" />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">



                <button onClick={this.handleFormSubmit} data-dismiss="modal" className="login-btn btn btn-info my-4 btn-block" type="submit">Log In</button>

              </div>
            </div>
          </div>
        </div>

        {this.renderRedirect()};
          </div>
    )
  }
}
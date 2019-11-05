import React, { Component } from 'react';




export default class Login extends Component {
  state = {
      isShown: false,
      email: '',
      password: '',
      user: "",
      loggedInUser: '',
      redirect: false,
      modalClasses : "modal d-block"
  };
  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  };
  handleFormSubmit = event => {
      event.preventDefault();

  };
  hideModal = ()=>{
    this.setState({
      modalClasses :'modal fade'
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
                              <h4 className="modal-title w-100 font-weight-bold">Signup</h4>
                              <button  onClick={this.props.clickHandler} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body modal-open mx-3">
                          <h5 className="text-center">Login to your Chef account</h5>
                              <div className="md-form mb-5">
                                  {/* <i className="fas fa-user prefix grey-text"></i> */}
                                  <label data-error="wrong" data-success="right" htmlFor="form34">Email</label>
                                  <input type="email" required name="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="" />
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
          </div>
      )
  }
}
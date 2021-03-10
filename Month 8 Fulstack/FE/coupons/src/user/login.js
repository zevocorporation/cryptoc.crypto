import React from "react";
import "./login.css";
import GoogleLogin from "react-google-login"
// import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      profile : ""
    }
  }

  responseGoogle = (response) => {
    console.log(response)
    let profile = response.profileObj
    sessionStorage.setItem('name', profile.name)
    sessionStorage.setItem('email', profile.email)
    sessionStorage.setItem('image', profile.imageUrl)
    this.setState({profile})
    this.props.history.push('/home')
  }

  renderpage = () => {
    if(sessionStorage.getItem('email')){
      console.log("user logged in")
    }else{
      return(
        <div className="loginform">
        <div className="card" id="logincard">
          <center>
            <h2>Login</h2>
            <p>We are currently offering login with google only</p>
            <GoogleLogin clientId="625349983682-306el13aqdstmb6j8or95a8qse6tgedu.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}/>
          </center>
        </div>
      </div>
      )
    }
  }


  render() {
    return (
      <div>
      {this.renderpage()}
      </div>
    );
  }

  componentDidMount(){
    fetch("https://month8test.herokuapp.com/")
    .then((res) => {
      console.log("app is working")
    })
  }
}

export default Login;

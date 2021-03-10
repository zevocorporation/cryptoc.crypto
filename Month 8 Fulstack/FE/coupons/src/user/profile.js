import React from 'react'



class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            name : sessionStorage.getItem('name'),
            email : sessionStorage.getItem('email'),
            image : sessionStorage.getItem('image')
        }
    }

    logoutHandler = () => {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('image')
        this.props.history.push('/')
    }

    renderPage = () => {
        if(sessionStorage.getItem('email')){
            return(
                <div className="loginform">
                <div className="card" id="logincard">
                <center>
                <h2>Profile</h2>
                <img src={this.state.image} alt="profile"/>
                <h3>Hello {this.state.name}</h3>          
                <h3>Email: {this.state.email}</h3>          
                <button className="btn btn-danger" onClick={() => this.logoutHandler()}>Logout</button>
                </center>
                </div>
                </div>
            )
        }else{
            this.props.history.push('/')
        }
    }
    render(){
        return(
            <div>
                {this.renderPage()}
            </div>
        )
    }
}
export default Profile
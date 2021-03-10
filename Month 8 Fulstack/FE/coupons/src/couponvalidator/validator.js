import React from 'react'
const validatorurl = "http://localhost:5300/validate"

class Validator extends React.Component{
    constructor(){
        super()
        this.state = {
            coupon : "",
            err: "",
            succ : "",
            alldet: "",
            link: ""
        }
    }

    couponChangeHandler = (event) => {
        this.setState({
          coupon: event.target.value
        });
      };

    submitHandler = () => {
        this.setState({err: '', succ: '', link: ""})
        let velurl = `${validatorurl}/${this.state.coupon}`
        if(!this.state.coupon){
            this.setState({err: 'Please Enter The Code'})
        }else{
        fetch(velurl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            if(data.err){
                this.setState({err: data.err})
            }else{
                this.setState({alldet: data,
                succ: "Congratulations! Coupon is Valid",
            link: data.websitelink})
            }
        })
        }
    }

    renderlink = () => {
        if(this.state.link){
            return(
                <a href={this.state.link}>Click here to go to {this.state.alldet.websitelink}</a>
            )
        }else{
            return(
                <p>Kindly enter the code</p>
            )
        }
    }

    renderPage = () => {
        if(sessionStorage.getItem('email')){
            return(
                <div className="loginform">
                <div className="card" id="logincard">
                <center>
                <h2><u>Coupon Validator</u></h2>
                <label htmlFor="exampleInputPassword1">Enter the coupon you got after scanning the QR</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Code here"
                    onChange={this.couponChangeHandler}
                    value={this.state.coupon}
                    style={{margin: '20px 0 20px 0'}}
                />        
                <button className="btn btn-danger" onClick={() => this.submitHandler()}>Submit</button>
                <h3 style={{color: 'red'}}>{this.state.err}</h3>
                <h3 style={{color: 'green'}}>{this.state.succ}</h3>
                {this.renderlink()}
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
export default Validator
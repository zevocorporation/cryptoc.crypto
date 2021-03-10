import React from 'react'
const deturl = "https://month8test.herokuapp.com/couponbyid"


class Details extends React.Component{
    constructor(){
        super()
        this.state = {
            coupondetails : ""
        }
    }

    clickHandler = () => {
        this.props.history.push('/validate')
    }

    renderPage = () => {
        console.log(this.state.coupondetails)
        if(this.state.coupondetails){
            return(
                <div className="loginform">
                <div className="card" id="logincard">
                <center>
                <h2 style={{marginBottom: "20px"}}><u>Coupon Details</u></h2>
                <img src={this.state.coupondetails.qrlink} alt="profile"/>
                <p style={{margin:"20px 50px 0 50px", color: "blue", backgroundColor:"pink"}}><b>Scan this QR from your Phone then you will get a code, after getting the code click the button below</b></p>
                <h1>Discount: <span style={{color: "green"}}>{this.state.coupondetails.discount}</span></h1>        
                <h5>Category: <u style={{color: "red"}}>{this.state.coupondetails.category}</u></h5>
                <h5>Website: <u style={{color: "red"}}>{this.state.coupondetails.website}</u></h5>
                <button className="btn btn-primary" onClick={() => this.clickHandler()}>After Scannig Click Me</button>    
                </center>
                </div>
                </div>
            )
        }else{
            return(
                <>getting</>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderPage()}
            </div>
        )
    }

    componentDidMount(){
        const newurl = `${deturl}/${this.props.match.params.id}`
        fetch(newurl, {method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({coupondetails: data[0]})
        })

    }
}
export default Details
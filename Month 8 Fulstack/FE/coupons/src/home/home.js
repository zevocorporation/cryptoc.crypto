import React from 'react'
import arrayShuffle from 'array-shuffle'
import "./home.css"
const allCouponsurl = "https://month8test.herokuapp.com/allcoupons"
const categoryUrl = "https://month8test.herokuapp.com/category"
const categorynameurl = "https://month8test.herokuapp.com/categoryname"
const websiteUrl = "https://month8test.herokuapp.com/web"
const expiredUrl = "https://month8test.herokuapp.com/allexpired"

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            couponslist: "",
            categories: "",
            originaldata: "",
            website: ""
        }
    }

    renderCategories = () => {
        if (this.state.categories) {
            return this.state.categories.map((items) => {
                return (
                    <option value={items} key={items}>
                        {items}
                    </option>
                )
            })
        }
    }

    categoryChangeHandler = (event) => {
        let cate = { category: event.target.value }
        if (event.target.value === 'All') {
            this.setState({ couponslist: this.state.originaldata })
        }else if(event.target.value === 'Expired'){
            fetch(expiredUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ couponslist: data })
            })
        } else {
            fetch(categoryUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cate)
            })
                .then((res) => res.json())
                .then((data) => {
                    this.setState({ couponslist: data })
                })
        }
    }

    detailsHandler = (id) => {
        this.props.history.push(`/details/${id}`);
    };


    renderCoupons = () => {
        if (!this.state.couponslist) {
            return (
                <>No data available</>
            )
        } else {
            return (
                this.state.couponslist.map((items) => {
                    return (
                        <div key={items._id} className="card mb-3" style={{ maxWidth: "700px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={items.websiteimage} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 style={{ color: "green" }}>{items.discount}</h1>
                                        <h5 className="card-title">{items.website}</h5>
                                        <p className="card-text">You can get upto <strong>{items.discount}</strong> with this coupn code on {items.website}. Grab it fast before it gets expired</p>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={this.detailsHandler.bind(this, items._id)}
                                        >
                                            More Deatils
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    websiteChangeHandler = (event) => {
        this.setState({
          website: event.target.value
        });
    };

    searchHandler = () => {
        if(!this.state.website){

        }else{
            fetch(websiteUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({website: this.state.website})
            })
                .then((res) => res.json())
                .then((data) => {
                    this.setState({ couponslist: data })
                })
        }
    }

    renderHomePage = () => {
        if (sessionStorage.getItem('email')) {
            if (!this.state.couponslist) {
            } else {
                return (
                    <div>
                        <center>
                            <h3 style={{ display: "inline" }}>Select Category: </h3>
                            <select onChange={this.categoryChangeHandler}>
                                <option value="All" defaultValue>---All---</option>
                                {this.renderCategories()}
                                <option value="Expired">Expired</option>
                            </select>
                            <span style={{ margin: "0 10px 0 10px" }}>OR Search by website</span>
                            <input placeholder="Search" aria-label="Search" style={{ width: "20%", margin: "0 10px 0 0x" }} onChange={this.websiteChangeHandler}
                                value={this.state.website} />
                            <button style={{ margin: "0 10px 0 10px" }} class="btn btn-primary" onClick ={() => this.searchHandler()}>Search</button>
                        </center>
                        <hr />

                        <center><h2><u>ALL AVAILABLE COUPONS</u></h2></center>
                        <div >
                            <div style={{ marginLeft: "20%" }}><p><b>result count: {this.state.couponslist.length}</b></p></div>
                            <div>{this.renderCoupons()}</div>
                        </div>
                    </div>
                )
            }
        } else {
            this.props.history.push('/login')
        }
    }


    render() {
        return (
            <>
                {this.renderHomePage()}
            </>
        )
    }

    componentDidMount() {
        fetch(allCouponsurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ couponslist: arrayShuffle(data), originaldata: arrayShuffle(data) })

            })

        fetch(categorynameurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ categories: data })
            })
        
    }
}

export default Home
import React from 'react'
import './contactUs.css'

function contactUs() {
    return (
        <div>
            <div className="contact__head">
                <p className="contact__heading">CONTACT US</p>
                <p className="conatact__h">Let’s work together</p>
                <p className="contact__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. </p>
                <div className="contact__en">
                    <span className="constct_details"><img className="contact__img" src="/Icons/Mail.svg" alt="" />contact@cryptocryptosi.com</span>
                    <span className="constct_details"><img className="contact__img" src="/Icons/Phone.svg" alt="" />+22 2231654789</span>
                </div>

                <div className="form__card">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="contact__p">Name</p>
                            <input className="contact__input" placeholder="enter your name" />
                        </div>
                        <div className="col-md-6">
                            <p className="contact__p">Email Address</p>
                            <input className="contact__input" placeholder="enter your email address" />
                        </div>
                        <div className="col-md-6">
                            <p className="contact__p">Organization</p>
                            <input className="contact__input" placeholder="enter your organization name" />
                        </div>
                        <div className="col-md-6">
                            <p className="contact__p">Budget</p>
                            <select className="contact__input">
                                <option>Whats your budget</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <p className="contact__p">Services you are interested on:</p>
                        <div className="col-md-6">
                            <div className="conarct__card">
                                <div className="contact__innerdiv">
                                    <img className="contact__img" src="/Icons/Front End.svg" alt="dev" />
                                    <span className="contact__card__text">Front End Development</span>
                                </div>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="conarct__card">
                                <div className="contact__innerdiv">
                                    <img className="contact__img" src="/Icons/Back end.svg" alt="dev" />
                                    <span className="contact__card__text">Back End Development</span>
                                </div>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="conarct__card">
                                <div className="contact__innerdiv">
                                    <img className="contact__img" src="/Icons/Bot Development.svg" alt="dev" />
                                    <span className="contact__card__text">Bot Development</span>
                                </div>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="conarct__card">
                                <div className="contact__innerdiv">
                                    <img className="contact__img" src="/Icons/Application Development.svg" alt="dev" />
                                    <div className="contact__card__text">Application Development</div>
                                </div>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                    <p className="contact__p">Message</p>
                    <textarea className="contact__text__area" defaultValue="Enter your message"></textarea>
                    <div className="row">
                    <button className="contRact__button">REQUEST QUOTE</button>
                    </div>
                    </div>
                </div>
                <div className="contact__down__color"></div>
            </div>
        </div>
    )
}

export default contactUs

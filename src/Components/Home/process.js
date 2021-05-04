import React from 'react'
import './process.css'

function process() {
    return (
        <div>
            <div className="container-fluid process__container">
                <p className="process__title">OUR PROCESS</p>
                <div className="process__head__container">
                    <p className="process__head">We have a simple, yet robust
                    and effective process</p>
                    <p className="process__p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem.
                    </p>
                </div>
                <div className="row process__card__container">
                    <div className="col-lg-6">
                        <div className="row process__card">
                            <div className="col-md-2">
                                <img className="process__card__image" src="/Icons/Idea Scoping.svg" alt="card-img" />
                            </div>
                            <div className="col-md-10">
                                <p className="process__card__titile">1. Idea Scoping</p>
                                <p className="process__card__det">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum elementum id semper consectetur sem. Eu faucibus lectus varius metus faucibus. Sociis purus purus non ullamcorper. Tellus tempor integer eu amet eget risus aliquet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row process__card">
                            <div className="col-md-2">
                                <img className="process__card__image" src="/Icons/Roadmap planning.svg" alt="card-img" />
                            </div>
                            <div className="col-md-10">
                                <p className="process__card__titile">2. Roadmap Planning</p>
                                <p className="process__card__det">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum elementum id semper consectetur sem. Eu faucibus lectus varius metus faucibus. Sociis purus purus non ullamcorper. Tellus tempor integer eu amet eget risus aliquet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row process__card">
                            <div className="col-md-2">
                                <img className="process__card__image" src="/Icons/Development _ Execution.svg" alt="card-img" />
                            </div>
                            <div className="col-md-10">
                                <p className="process__card__titile">3. Development & Execution</p>
                                <p className="process__card__det">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum elementum id semper consectetur sem. Eu faucibus lectus varius metus faucibus. Sociis purus purus non ullamcorper. Tellus tempor integer eu amet eget risus aliquet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row process__card">
                            <div className="col-md-2">
                                <img className="process__card__image" src="/Icons/Launch _ Maintenance.svg" alt="card-img" />
                            </div>
                            <div className="col-md-10">
                                <p className="process__card__titile">4. Launch & Maintenance</p>
                                <p className="process__card__det">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum elementum id semper consectetur sem. Eu faucibus lectus varius metus faucibus. Sociis purus purus non ullamcorper. Tellus tempor integer eu amet eget risus aliquet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="process__dot__vector1" src="\Illustrations\Dot Vector.svg" alt="dot-vector"/>
                <img src="/illustrations/Blob.svg" className="process__blob2" alt="blob" />
            </div>
        </div>
    )
}

export default process

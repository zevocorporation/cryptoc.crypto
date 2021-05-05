import React from 'react'
import './blogs.css'
function blogs() {
    return (
        <div className="blogs__container container__fluid" id="blogs">
            <div className="blogs__head">
                <p className="blogs__head1">BLOG & RESOURCES</p>
                <p className="blogs__head2">Browse our content on Tech and Development</p>
                <p className="blogs__head3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus lorem. </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card blog__card">
                        <img src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <div className="blog__card__profile">
                                <img className="blog__card__pimage" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                                <span className="blog__card__pname">Mark Michel</span>
                            </div>
                            <p className="blog__card__head">Once the Big Tech Battler, Open Source Is Now Big Tech's Battleground</p>
                            <p className="blog__card__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card blog__card">
                        <img src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <div className="blog__card__profile">
                                <img className="blog__card__pimage" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                                <span className="blog__card__pname">Mark Michel</span>
                            </div>
                            <p className="blog__card__head">Once the Big Tech Battler, Open Source Is Now Big Tech's Battleground</p>
                            <p className="blog__card__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="card blog__card">
                        <img src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <div className="blog__card__profile">
                                <img className="blog__card__pimage" src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img" />
                                <span className="blog__card__pname">Mark Michel</span>
                            </div>
                            <p className="blog__card__head">Once the Big Tech Battler, Open Source Is Now Big Tech's Battleground</p>
                            <p className="blog__card__det">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ante velit nunc morbi pretium. Ut nullam dolor, pulvinar proin viverra ullamcorper.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="blog__button">View all blog posts</button>
        </div>
    )
}

export default blogs

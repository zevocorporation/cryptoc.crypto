import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogs.css";
function Blogs() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/medium")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="blogs__container container__fluid" id="blogs">
      <div className="blogs__head">
        <p className="blogs__head1">BLOG & RESOURCES</p>
        <p className="blogs__head2">
          Browse our content on Tech and Development
        </p>
        <p className="blogs__head3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id integer ut
          faucibus sem risus. Praesent sagittis, ut diam diam odio faucibus
          lorem.{" "}
        </p>
      </div>
      <div className="row">
        {data?.slice(0, 3)?.map((value, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card blog__card">
                <img
                  src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <div className="blog__card__profile">
                    <img
                      className="blog__card__pimage"
                      src="https://images.unsplash.com/photo-1619944798826-ac0e092f0cef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      alt="img"
                    />
                    <span className="blog__card__pname">{value.creator}</span>
                  </div>
                  <p className="blog__card__head">{value.title}</p>
                  <p className="blog__card__det">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Faucibus ante velit nunc morbi pretium. Ut nullam dolor,
                    pulvinar proin viverra ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="blog__button">View all blog posts</button>
    </div>
  );
}

export default Blogs;

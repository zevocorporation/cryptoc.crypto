import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogs.css";
function Blogs() {
  const [dataMedium, setDataMedium] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhiverss.com%2F%40cryptosi%2Ffeed"
      )
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40cryptosixxx"
      )
      .then((res) => {
        const { data } = res;
        setDataMedium(data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

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
          lorem.
        </p>
      </div>
      <div className="row">
        {dataMedium?.slice(0, 1)?.map((value, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card blog__card">
                <div className="blog_img_fluid">
                  <img
                    src={value.thumbnail}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="blog__card__profile">
                    <img
                      className="blog__card__pimage"
                      src={value.thumbnail}
                      alt="img"
                    />
                    <span className="blog__card__pname">{value.author}</span>
                  </div>
                  <p className="blog__card__head">{value.title}</p>
                  <p
                    className="blog__card__det"
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  ></p>
                </div>
                <p className="blog_link">
                  <a
                    href="https://medium.com/@cryptosixxx"
                    target="_blank"
                    rel="noreferrer reopener"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          );
        })}
        {data?.slice(0, 2)?.map((value, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="card blog__card">
                <div className="blog_img_fluid">
                  <img
                    src={value.thumbnail}
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="blog__card__profile">
                    <img
                      className="blog__card__pimage"
                      src={value.thumbnail}
                      alt="img"
                    />
                    <span className="blog__card__pname">{value.creator}</span>
                  </div>
                  <p className="blog__card__head">{value.title}</p>
                  <p
                    className="blog__card__det"
                    dangerouslySetInnerHTML={{ __html: value.content }}
                  ></p>
                </div>
                <p className="blog_link">
                  <a
                    href="https://medium.com/@cryptosixxx"
                    target="_blank"
                    rel="noreferrer reopener"
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="blog__button">
        <a
          href="https://medium.com/@cryptosixxx"
          target="_blank"
          rel="noreferrer reopener"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View all blog posts
        </a>
      </button>
    </div>
  );
}

export default Blogs;

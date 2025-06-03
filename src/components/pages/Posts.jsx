import axios from "axios";
import { useState, useEffect } from "react";

let baseurlApi = "http://localhost:3000";

export default function Posts() {
  // presa dei dati
  const [posts, setPost] = useState([]);

  function fetchpost() {
    axios.get(`${baseurlApi}`).then((res) => {
      console.log(res.data);

      setPost(res.data.data);
    });
  }
  useEffect(fetchpost, []);
  return (
    <>
      <div className="container-sm  mt-5">
        <div className="row g-2">
          {posts.map((post) => (
            <div key={post.id} className="col-6  ">
              <div className="card ">
                <img
                  src={post.image}
                  className="card-img-top "
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <hr />
                  <small>Tags: {post.tags}</small>

                  <hr />

                  <p className="card-text fs-6 overflow-auto">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

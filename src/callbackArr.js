import { useState, useEffect } from "react";

function CallbackArr() {
  const [values, setValues] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);
  return (
    <div>
      <input value={values} onChange={(e) => setValues(e.target.value)} />
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CallbackArr;

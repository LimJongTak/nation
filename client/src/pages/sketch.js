import React, { useState, useEffect } from 'react';

const Sketch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API에서 스케치 게시물 데이터 가져오기
    fetch('/api/sketch')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="sketch">
      <h2>스케치 게시판</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <img src={post.image} alt={post.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sketch;
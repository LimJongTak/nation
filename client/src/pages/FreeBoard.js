import React, { useState, useEffect } from 'react';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API로부터 게시물 데이터 불러오기
    fetch('/api/freeboard')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="freeboard">
      <h2>자유게시판</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreeBoard;
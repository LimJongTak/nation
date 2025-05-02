import React, { useEffect, useState } from 'react';

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // API에서 공지사항 데이터 가져오기
    fetch('/api/notices')
      .then((response) => response.json())
      .then((data) => setNotices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="notices">
      <h2>공지사항</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id}>
            <h3>{notice.title}</h3>
            <p>{notice.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
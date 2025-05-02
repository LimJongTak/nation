import React from 'react';
import { Link } from 'react-router-dom';

const Board = () => {
  return (
    <div className="board">
      <h2>게시판</h2>
      <nav>
        <Link to="/freeboard">자유게시판</Link>
        <Link to="/sketch">스케치</Link>
        <Link to="/qna">묻고답하기</Link>
      </nav>
    </div>
  );
};

export default Board;
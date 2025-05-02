import React from 'react';
import { Route, Switch } from 'react-router-dom';  // React Router
import Home from './pages/Home';  // 메인 페이지
import Notices from './pages/Notices';  // 공지사항 페이지
import Schedule from './pages/Schedule';  // 일정 페이지
import Application from './pages/Application';  // 신청 페이지
import Board from './pages/Board';  // 게시판 페이지
import FreeBoard from './pages/FreeBoard';  // 자유게시판 페이지
import Sketch from './pages/sketch';  // 스케치 페이지
import QnA from './pages/QnA';  // 묻고답하기 페이지
import Login from './pages/Login';  // 로그인 페이지
import Signup from './pages/Signup';  // 회원가입 페이지

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notices" component={Notices} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/application" component={Application} />
        <Route path="/board" component={Board} />
        <Route path="/freeboard" component={FreeBoard} />
        <Route path="/sketch" component={Sketch} />
        <Route path="/qna" component={QnA} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
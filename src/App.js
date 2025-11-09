import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Community from './components/community/Community';
import Notice from './components/notice/Notice';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import CommunityDetailPage from './components/community/CommunityDetailPage';
import CommunityWritePage from './components/community/CommunityWritePage';
import NoticeDetailPage from './components/notice/NoticeDetailPage';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
          <Route path="/community" element={<Community />} />
          <Route path="/community/detail/:id" element={<CommunityDetailPage />} />
          <Route path="/community/write" element={<CommunityWritePage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice/detail/:id" element={<NoticeDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

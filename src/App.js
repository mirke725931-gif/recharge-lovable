import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Community from './components/community/Community';
import Notice from './components/notice/Notice';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import CommunityDetailPage from './components/community/CommunityDetailPage';
import CommunityWritePage from './components/community/CommunityWritePage';
import NoticeDetailPage from './components/notice/NoticeDetailPage';
import NoticeBoard from './components/admin/NoticeBoard';
import NoticeManagement from './components/admin/NoticeManagement'
import PostManagement from './components/admin/PostManagement';
import UserManagement from './components/admin/UserManagement';

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
          <Route path= "/admin/noticeboard" element={<NoticeBoard />} />
          <Route path= "/admin/noticemanage" element={<NoticeManagement />} />
          <Route path= "/admin/postmanage" element={<PostManagement />} />
          <Route path= "/admin/usermanage" element={<UserManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

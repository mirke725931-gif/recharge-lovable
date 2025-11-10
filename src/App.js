import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Community from './components/community/Community';
import Notice from './components/notice/Notice';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import CommunityDetailPage from './components/community/CommunityDetailPage';
import CommunityWritePage from './components/community/CommunityWritePage';
import NoticeDetailPage from './components/notice/NoticeDetailPage';
import NoticeWritePage from './components/admin/NoticeWritePage';
import NoticeManagement from './components/admin/NoticeManagement'
import PostManagement from './components/admin/PostReportManagement';
import UserReportManagement from './components/admin/UserReportManagement';

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
          <Route path= "/admin/noticemanage/write" element={<NoticeWritePage />} />
          <Route path= "/admin/noticemanage" element={<NoticeManagement />} />
          <Route path= "/admin/postmanage" element={<PostManagement />} />
          <Route path= "/admin/reportmanage" element={<UserReportManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

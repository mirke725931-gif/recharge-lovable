import './App.css';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';
import Fortune from './components/fortune/Fortune';
import Free from './components/free/Free';
import Bookmark from './components/auth/Bookmark';
import Mypage from './components/auth/Mypage';

function App() {
  return (  
    <div className="container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
          <Route path="/fortune" element={<Fortune />}></Route>
          <Route path="/free" element={<Free />}></Route>
          <Route path="/bookmark" element={<Bookmark />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

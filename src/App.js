import './App.css';
import FindChargerLogin from './components/findcharger/FIndChargerLogin';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';
import Fortune from './components/fortune/Fortune';
import Bookmark from './components/auth/Bookmark';
import Mypage from './components/auth/Mypage';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_main">
        <Routes>
          <Route path="/" element={<FindChargerLogout />} />
          <Route path="/find_charger" element={<FindChargerLogin />} />
          <Route path="/fortune" element={<Fortune />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

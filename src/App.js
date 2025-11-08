import './App.css';
import FindChargerLogin from './components/findcharger/FIndChargerLogin';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';
import Fortune from './components/fortune/Fortune';
import Bookmark from './components/auth/Bookmark';
import Mypage from './components/auth/Mypage';
import FindMovie from './components/findcontents/movie/FindMovie';
import AddMovie from './components/findcontents/movie/AddMovie';
import UserMovieDetail from './components/findcontents/movie/UserMovieDetail';
import MovieDetail from './components/findcontents/movie/MovieDetail';
import FindMusic from './components/findcontents/music/FindMusic';
import UserMusicDetail from './components/findcontents/music/UserMusicDetail';
import AddMusic from './components/findcontents/music/AddMusic';

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
          <Route path="/find_contents/movie" element={<FindMovie/>} />
          <Route path="/find_contents/music" element={<FindMusic/>} />
          <Route path="/find_contents/movie/addmovie" element={<AddMovie/>} />
          <Route path="/find_contents/music/addmusic" element={<AddMusic/>} />
          <Route path="/find_contents/movie/usermoviedetail" element={<UserMovieDetail/>} />
          <Route path="/find_contents/music/usermusicdetail" element={<UserMusicDetail/>} />
          <Route path="/find_contents/movie/moviedetail" element={<MovieDetail/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

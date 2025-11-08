import './App.css';
import FindChargerLogin from './components/findcharger/FIndChargerLogin';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';
import FindMovie from './components/findcontents/movie/FindMovie';
import AddMovie from './components/findcontents/movie/AddMovie';
import UserMovieDetail from './components/findcontents/movie/UserMovieDetail';
import MovieDetail from './components/findcontents/movie/MovieDetail';import FindMusic from './components/findcontents/music/FindMusic';import UserMusicDetail from './components/findcontents/music/UserMusicDetail';import AddMusic from './components/findcontents/music/AddMusic';import Fortune from './components/fortune/Fortune';import Bookmark from './components/auth/Bookmark';import Mypage from './components/auth/Mypage';

function App() {
  return (
    <div className="app_wrapper">      <Header />      <div className="app_main">        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
          <Route path="/find_contents/movie" element={<FindMovie/>}></Route>
          <Route path="/find_contents/music" element={<FindMusic/>}></Route>
          <Route path="/find_contents/movie/addmovie" element={<AddMovie/>}></Route>          <Route path="/find_contents/music/addmusic" element={<AddMusic/>}></Route>          <Route path="/find_contents/movie/usermoviedetail" element={<UserMovieDetail/>}></Route>          <Route path="/find_contents/music/usermusicdetail" element={<UserMusicDetail/>}></Route>          <Route path="/find_contents/movie/moviedetail" element={<MovieDetail/>}></Route>
          <Route path="/" element={<FindChargerLogout />} />
          <Route path="/find_charger" element={<FindChargerLogin />} />          <Route path="/fortune" element={<Fortune />} />          <Route path="/bookmark" element={<Bookmark />} />          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

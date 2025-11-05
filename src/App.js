import './App.css';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';
import FindMovie from './components/findcontents/movie/FindMovie';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
          <Route path="/find_contents" element={<FindMovie/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

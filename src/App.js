import './App.css';
import FindChargerLogin from './components/findcharger/FIndChargerLogin';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_main">
        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
          <Route path="/find_charger" element={<FindChargerLogin />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

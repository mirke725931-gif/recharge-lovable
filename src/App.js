import './App.css';
import FindChargerLogout from './components/findcharger/FindChargerLogout';
import Header from './components/layout/Header';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<FindChargerLogout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

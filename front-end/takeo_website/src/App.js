import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Formacoes from './components/Formacoes';
import Sobre from './components/Sobre';
import ErrorPage from './components/ErrorPage';
import TopBar from './components/Top/TopBar';
import Email from './components/Email';
function App() {
  fetch('http://localhost:3001/formacao/')
    .then((response) => {
      response.json();
    })
    .then(console.log);

  return (
    <div>
      <div className="head">
        <TopBar />
      </div>
      <div className="body">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacoes" element={<Formacoes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/email" element={<Email />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

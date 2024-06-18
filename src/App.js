import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './componentes/footer/Footer';
import  Navigator from './componentes/navigator/Navigator' ;
import Login from './componentes/login/Login';

function App() {
  return (
    <Router>
    <Navigator />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;

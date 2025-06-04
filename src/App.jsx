import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Poets from './pages/Poets';
import Poems from './pages/Poems';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import PoetPage from './pages/PoetPage';
import PoemPage from './pages/PoemPage';
import Login from './pages/Login';

import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/login" element={<Login />} />
    <Route
      path="/admin"
      element={
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
      }
    />
        <Route path="/" element={<Home />} />
        <Route path="/poets" element={<Poets />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/poet/:name" element={<PoetPage />} />
        <Route path="/poem/:id" element={<PoemPage />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import HomePage from './paginas/HomePage';
import AboutPage from './paginas/AboutPage';
import ProjectPage from './paginas/ProjectPage';
import ContactPage from './paginas/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/About' element={<AboutPage/>} />
          <Route path='/Projects' element={<ProjectPage/>} />
          <Route path='/Contact' element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

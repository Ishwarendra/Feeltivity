import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AboutUs from './page/AboutUs/AboutUs';
import Home from './page/Home/Home'
import Login from './page/Login/Login'
import  Register from './page/Register/Register'
import ChatPage from './page/ChatPage/ChatPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/aboutus' element={<AboutUs/>} />
        <Route exact path='/chatpage' element={<ChatPage/>} />

      </Routes>
    </Router>
  );
}

export default App;

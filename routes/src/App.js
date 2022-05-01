
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Nav } from './Components/Nav';
import { User } from './Components/Users';
import { UserInfo } from './Components/Userinfo';
function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route path='/' element ={<Home />}></Route>
      <Route path='/about' element={<About/>} />
      <Route path='/users' element={<User/>} />
      <Route path='/users/:id' element={<UserInfo/>} />

    </Routes>

    </div>
  );
}

export default App;

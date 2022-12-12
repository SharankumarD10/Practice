import './App.css';
// import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Navbar from './Components/Navbar';
import GetEx from './Http/GetEx';
// import Login from './Components/Login';
// import Aboutus from './Components/Aboutus';
// import Home from './Components/Home';

function App() 
{
  return (
    <div className="App">
    <Navbar/>
    <GetEx/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;

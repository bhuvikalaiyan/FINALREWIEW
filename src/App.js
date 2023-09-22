
import './App.css';

import Createaccount from './components/Signup';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Getdetails from './components/GetAccounting';
import PostAccounting from './components/PostAccounting';
import PutAccounting from './components/PutAccounting';
import DeleteAccounting from './components/DeleteAccounting';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path='/home' element={<Home></Home>}></Route>
                <Route exact path='/signup' element={<Createaccount/>}/>
                <Route exact path='/getdetails' element={<Getdetails></Getdetails>}></Route>
                <Route exact path='/PostAccounting' element={<PostAccounting></PostAccounting>}></Route>
                <Route exact path='/PutAccounting' element={<PutAccounting></PutAccounting>}></Route>
                <Route exact path='delete' element={<DeleteAccounting/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

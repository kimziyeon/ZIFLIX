import logo from './logo.svg';
import './App.css';
import './common.scss';
import {HashRouter,Routes,Route,Link} from "react-router-dom";
import Home from './component/Home';
import Detail from './component/Detail';



function App() {

  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Detail/:id" element={<Detail/>}/>
      </Routes>


    </HashRouter>
  );
}

export default App;

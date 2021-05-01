import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home/home'
import Navbar from './Components/Layout/Navbar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route} from 'react-router-dom'
import Home from './Components/Home/home'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

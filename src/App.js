import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation.jsx';
import Home from "./pages/Home/Home.jsx"


function App() {
  return (
   <BrowserRouter>
   {/** Navbar */ }
     <Navigation />
      <Routes>
        <Route path='/' exact element ={<Home />} />
      </Routes>  
   </BrowserRouter>
  );
}

export default App;

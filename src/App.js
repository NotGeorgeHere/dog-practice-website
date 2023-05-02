import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header'
import Home from './pages/Home/Home'
import ViewDogs from './pages/viewDog/viewDog'
import ChooseDogs from './pages/chooseDog/chooseDog'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/viewDogs' element={<ViewDogs />} />
        <Route path='/chooseDog' element={<ChooseDogs/>} />
      </Routes>
    </Router>
  );
}

export default App;

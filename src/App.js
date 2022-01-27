import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Achievments from './components/Achievments';
import Movies from './components/Movies';
import Gallery from './components/Gallery';
import Wikipedia from './components/Wikipedia'
import Navigation from './components/Navigation';
import Search from './components/Search';
// import Picture from './components/Picture';

function App() {
  return (
    <div >
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/wikipedia" element={<Wikipedia/>}/>
        <Route path="/achievments" element={<Achievments/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/search" element={<Search/>}/>
        {/* <Route path="/picture" element={<Picture/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

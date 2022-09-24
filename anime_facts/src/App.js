import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Frontdisplay from './Components/Frontdisplay'
import Animecardfacts from './Components/Animecardfacts';
import Animespecificfact from './Components/Animespecificfact';
import Navbar from './Components/Navbar';
import Cardshow from './Components/Cardshow';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element ={<Frontdisplay />}/>
          <Route exact path="/Home" element={<Cardshow />}/>
          <Route exact path="/anime_specific_facts/:anime_name/:fact_id" element={<Animespecificfact />}/>
          <Route exact path="/anime_facts/:anime_name" element = {<Animecardfacts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

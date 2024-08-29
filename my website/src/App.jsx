import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Football from './football.jsx';
import Body from './body.jsx';
import United from './assets/united';
import Planetary from './planetary.jsx';
import Serpentinisation from './serp.jsx';
import H2_PREDICTION from './hydro_prediction.jsx';
import Contact from './contact.jsx';
import twitter_img from "./assets/images/x-image.png";
import mail from "./assets/images/mail_img.png";
import Artificial from './AI.jsx';
import linkedin from "./assets/images/linkedIn.webp";


export default function App() {

  const [color, SetColor] = useState("black");
  const [color1, SetColor1] = useState("white");


  const change_color = () => {
    const new_color = color === "black" ? "white" : "black"
    const new_color1 = color1 === "white" ? "black" : "white"
    SetColor(new_color)
    SetColor1(new_color1)
  }


  return (
    <Router>
      <div className='header_items'>
        <NavLink to='/' className='home' ><h5 style={{fontFamily:"times", color:"gray"}}>Jeffrey K. Akuoko</h5></NavLink>
        <NavLink to='/PLANETARY/COSMIC GEOSCIENCE' className='navlink'>Geoscience</NavLink>
        <NavLink to='/ARTIFICIAL INTELLIGENCE' className='navlink'>Artificial Intelligence </NavLink>
        <NavLink to='/FOOTBALL' className='navlink'>Football</NavLink>
        <NavLink to='/contact' className='navlink'>Contact</NavLink>
        <a href="https://x.com/kwasi_Jay" target='_blank'><img src={twitter_img} alt="" style={{marginLeft:"20rem", verticalAlign:"bottom",marginTop:"0.8rem", width:"3rem"}}/></a>
        <a href="https://www.linkedin.com/in/jeffrey-akuoko-ba5b3b311/details/experience/" target='_blank'><img src={linkedin} alt="" style={{verticalAlign:"bottom",marginRight: "1rem", marginTop:"0.8rem"}} /></a>
        <a href="mailto:jk.akuoko@gmail.com" target='_blank'><img src={mail} alt="" style={{verticalAlign:"bottom",marginTop:"0.8rem"}} /></a>


      </div>



      <div>

        <div style={{ background: color, color: color1 }}>
          <Routes>
            <Route path='/' element={<Body color='white' />} />
            <Route path='/PLANETARY/COSMIC GEOSCIENCE' element={<Planetary />} />
            <Route path='/ARTIFICIAL INTELLIGENCE' element = {<Artificial />} />
            <Route path='/FOOTBALL' element={<Football />} />
            <Route path="/serp_reactions" element={<Serpentinisation />} />
            <Route path = "/h2_prediction" element = {<H2_PREDICTION/>}/>
            <Route path="/united" element={<United />} />
            <Route path="/contact" element={<Contact />} />


          </Routes>
          <button onClick={change_color} className='theme_btn'>Switch Theme</button>


        </div>

      </div>



    </Router>


  );



}


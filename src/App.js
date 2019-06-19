import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HavasuPioneers.com
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/175119469817/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coming Soon
        </a>
 
      </header>            
        <DemoCarousel />  
      
      <a className="App-radiolink"
         href="http://kntrtalk.com/" 
         target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" color="primary">
            KNTR Talk Radio
        </Button> 
      </a>
     
     
      
    </div>
  );
}

export default App;

//var DemoCarousel = React.createClass({
function DemoCarousel() {
        return (
             <Carousel autoPlay infiniteLoop={true} interval={6000} transitionTime={600} stopOnHover={false} >     
                <div>
                    <img src="assets/conniesBW.jpg" alt="pic1"/>
                    <p className="legend">Connies</p>
                </div>

                <div>
                    <img src="assets/BlueAngels.jpg" alt="pic2"/>
                    <p className="legend">Blue Angels</p>
                </div>
                <div>
                    <img src="assets/HollyJeepBW.jpg" alt="pic3"/>
                    <p className="legend">Holly Jeep</p>
                </div>
                <div>
                    <img src="assets/DannyDBW.jpg" alt="pic4"/>
                    <p className="legend">Danny</p>
                </div>
                <div>
                    <img src="assets/KNTRWide.jpg" alt="pic5"/>
                    <p className="legend">KNTR</p>
                </div>            
            </Carousel>
        );
}
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

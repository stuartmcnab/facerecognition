import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';


// const app = new Clarifai.App({
//   apiKey: '37e7c3af61094d51b672b09e93d9b2e1'
//  });

function App() {
  return (
    <div className="App">
        <Particles className='particles' 
            params={{
              particles: {
                    color: {value: "#a463f2",},
                    number: {value: "100",},
                    size: {value: "10"},
                    opacity: {value: "0.6"},
                    line_linked: {color:{value: "#a463f2",}}
                  }
                }}
          />
       
        <Navigation />
        <Logo />
        {/* <FaceRecognition /> */}
        <ImageLinkForm />
    </div>
  );
}
export default App;

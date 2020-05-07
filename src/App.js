import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
  apiKey: '37e7c3af61094d51b672b09e93d9b2e1'
 });

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
        calculateFaceLocation = (data) => {
            const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
            const image = document.getElementById('inputimage');
            const width = Number(image.width);
            const height = Number(image.height);
            return {
              leftCol: clarifaiFace.left_col * width,
              topRow: clarifaiFace.top_row * height,
              rightCol: width - (clarifaiFace.right_col * width),
              bottomRow: height - (clarifaiFace.bottom_row * height)
            }
          }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }
        <Navigation />
        <Logo />
        <FaceRecognition />
        <ImageLinkForm />
    </div>
  );
}
export default App;

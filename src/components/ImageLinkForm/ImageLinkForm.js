import React from 'react';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return(
        <div>
            <p className="f4">
                Enter the link of a picture and detect all the faces!
            </p>
            <div className='form center'>
                <input className='f4 pa2 w-30 center' type="text" id="URL" name="URL" placeholder="www.website.com/your-image.jpg" onChange={onInputChange}/>
                <br/>
                <button className='f4 pa2 w-30 center link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect Faces</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;
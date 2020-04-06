import React from 'react';

const ImageLinkForm = () => {
    return(
        <div>
            <form>
                <label for="fname">Image Link:</label>
                <input type="text" id="URL" name="URL" placeholder="website.com/image.jpg"/>
            </form>
        </div>
    );
}

export default ImageLinkForm;
import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// henter bildene fra upsplash
// implementerer keys til bildene
// når du skal renderer en list bruk JS map funskjonen
// hver gang vi lager en liste så må definere en key(id) i root elementet
const ImageList = props => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });
    return <div className="image-list">{images}</div>;

};

export default ImageList;
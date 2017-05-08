import React from 'react';
import Thumbnail from './Thumbnail';

function PhotoList(props) {

    console.log(props.photos)

    var images = [];
    props.photos.photo.forEach((p) => {
        let imgUrl = "https://farm"+p.farm+".staticflickr.com/"+p.server+"/"+p.id+"_"+p.secret+"_q.jpg";
        let alt = p.title
        images.push(<Thumbnail key={p.id}
                                url={imgUrl}
                                alt={alt}
                                onClick={() => props.onPhotoClick(p.id) } />);
    });

    return(
        <div>
            <h1>Photos: </h1>
            <p>Photos found: {props.photos.total}</p>
            {images}
        </div>
    )
}

export default PhotoList

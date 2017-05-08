import React from 'react';

function Thumbnail(props) {

    return(
        <img src={props.url}
                alt={props.alt}
                onClick={(event) => props.onClick()}
                className="img-thumbnail"
                data-toggle="modal"
                data-target=".photoDetails"/>)
}
export default Thumbnail

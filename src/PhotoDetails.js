import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

function PhotoDetails(props) {

    let i = props.infos
    let imgUrl = "https://farm"+i.farm+".staticflickr.com/"+i.server+"/"+i.id+"_"+i.secret+"_b.jpg";

    let tags = []
    i.tags.tag.forEach( (tag) => {
        tags.push(<span className="tag">{tag._content}</span>);
    });

    return(

        <Modal show="true"
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                onHide={() => props.close()}
                className="photoDetails">
            <Modal.Header closeButton>
                <Modal.Title>{i.title._content}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={imgUrl} alt={i.title}/>
                <p key="desc">{i.description._content}</p>
                <p key="tags"><b>Tags:</b> {tags}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
        // <div ref="photoDetails" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        //   <div className="modal-dialog modal-lg" role="document">
        //     <div className="modal-content">
        //             <p key="title"><b>Title:</b> {i.title._content}</p>
        //             <p key="desc"><b>Description:</b> {i.description._content}</p>
        //             <p key="tags"><b>Tags:</b> {tags}</p>
        //             <img src={imgUrl} alt={i.title}/>
        //     </div>
        //   </div>
        // </div>

        // <div className="photoDetails">
        //     <div className="content">
        //         <p key="title"><b>Title:</b> {i.title._content}</p>
        //         <p key="desc"><b>Description:</b> {i.description._content}</p>
        //         <p key="tags"><b>Tags:</b> {tags}</p>
        //         <img src={imgUrl} alt={i.title}/>
        //         <div><button onClick={() => props.close()}> Close </button></div>
        //     </div>
        // </div>
    )
}
export default PhotoDetails

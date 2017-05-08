import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Searcher from './view/Searcher';
import PhotoList from './view/PhotoList';
import PhotoDetails from './view/PhotoDetails';

var API_KEY = "<YOUR-API-KEY>";

class App extends Component {


    constructor() {
        super();
        this.state = {
            keywords : '',
            photos : {},
            photoDetails : {}
        };
    }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Flickr React App</h2>
        </div>

        <Searcher
            onKeywordsChange={(keywords) => this.onKeywordsChange(keywords)}
            onClick={() => this.searchPhotos()}
        />

        {this.hasPhotos() ?
            (<PhotoList photos={this.state.photos}
                        onPhotoClick={(photoId) => this.getPhotoDetails(photoId)}/>)
            : ""
        }

        {this.hasPhotoDetails() ?
            (<PhotoDetails infos={this.state.photoDetails}
                           close={() => this.closeDetails()}/>)
            : ""
        }

      </div>
    );
  }

  /********************************* SEARCH ***********************************/

  onKeywordsChange(newKeywords) {
      this.setState({keywords: newKeywords});
  }

  searchPhotos() {
      var format = "json";
      var method = "flickr.photos.search";
      var api_key = API_KEY;
      var keywords = this.state.keywords;
      var url = 'https://api.flickr.com/services/rest/?' +
                            'method='+ method +
                            '&api_key=' + api_key +
                            '&format=' + format +
                            '&nojsoncallback=true' +
                            '&text=' + keywords;
      axios.get(url)
           .then( (response) => {
               if(response.status === 200 && response.data.stat === "ok") {
                   this.setState({photos : response.data.photos});
               }
      });
      console.log(url);
  }

  hasPhotos() {
      return  Object.keys(this.state.photos).length > 0;
  }

  /********************************* DETAILS ***********************************/

  getPhotoDetails(photoId){
      var format = "json";
      var method = "flickr.photos.getInfo";
      var api_key = API_KEY;
      var url = 'https://api.flickr.com/services/rest/?' +
                            'method='+ method +
                            '&api_key=' + api_key +
                            '&format=' + format +
                            '&nojsoncallback=true' +
                            '&photo_id=' + photoId;
      axios.get(url)
           .then( (response) => {
               if(response.status === 200 && response.data.stat === "ok") {
                   console.log(response.data.photo)
                   this.setState({photoDetails : response.data.photo});
               }
      });
      console.log(url);
  }

  closeDetails(){
    this.setState({photoDetails : {}});
  }

  hasPhotoDetails() {
      return  Object.keys(this.state.photoDetails).length > 0;
  }

  getApiKey() {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", "file://flickr_api_key", false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status === 0)
              {
                  var allText = rawFile.responseText;
                  alert(allText);
              }
          }
      }
      rawFile.send(null);
  }
}

export default App;

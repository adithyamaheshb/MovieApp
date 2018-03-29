import React from 'react';
import axios from 'axios';
import $ from 'jquery';

const API = 'c93ae2a0598c1d1515057992865b14a5';
let finalURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API}&language=en-US`;

class InTheatres extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nowplaying: []
    }
    this.handleClick = this.handleClick.bind(this);
    let self = this;
    axios.get(finalURL)
    .then(function (response) {
      
      let movies = response.data.results.map(result => "http://image.tmdb.org/t/p/w500"+result.poster_path) ;
      
      self.setState({
        nowplaying: movies
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
}

handleClick(e) {
  e.preventDefault();
  
    $('#overlay').click(function() {
      $('#overlay').css('background-image', 'none');
      $('#overlay').append('<div id="text"><a href="#">Remind Me Later</a></div>');
      $('#overlay').append('<div id="text2"><a href="#">No Thanks</a></div>');
      $('#overlay').append('<div id="text3"><a href="#">Cancel</a></div>');
    });
    $('#text2').click(function() {
      $('#overlay').remove();
    });
    $('#text3').click(function() {
      $('#overlay').remove();
    });
    
  
}

render() {
    return (
      <div>
        <div id="overlay" onClick={this.handleClick}>
        </div>
        <div className="container-fluid text-center" id="intheatres">
          {
            this.state.nowplaying.map((image, i) => {
              let img = <img src={image} alt="Movies In Theatres"/>;
              return img;
            })
          }
        </div>
      </div>
    );
  }
}

export default InTheatres;

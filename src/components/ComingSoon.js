import React from 'react';
import axios from 'axios';


const API = 'c93ae2a0598c1d1515057992865b14a5';
let finalURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US`;

class ComingSoon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comingsoon: []
    }
  }

  componentDidMount() {
    let self = this;
    axios.get(finalURL)
    .then(function (response) {
      console.log(response.data.results);
      let movies = response.data.results.map(result => "http://image.tmdb.org/t/p/w500"+result.poster_path) ;
      console.log(movies);
      self.setState({
        comingsoon: movies
      });
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container-fluid text-center" id="comingsoon">
        {
          this.state.comingsoon.map((image, i) => {
            let img = <img src={image} alt="Coming Soon Movies"/>;
            return img;
          })
        }
      </div>
    );
  }
}

export default ComingSoon;

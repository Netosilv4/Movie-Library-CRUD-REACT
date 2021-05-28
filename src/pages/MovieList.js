import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import './MovieListStyle.css';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const m = await movieAPI.getMovies();
    console.log(m);
    this.setState({
      movies: [...m],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list" className="MovieList">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;

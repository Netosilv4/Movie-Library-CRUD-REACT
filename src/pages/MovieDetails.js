import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetailsStyle.css';

class MovieDetails extends Component {
  constructor() {
    super();
    this.deleteMovie = this.deleteMovie.bind(this);
    this.state = {
      movie: [],
      loading: true,
      id: '',
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchDetails();
  }

  componentWillUnmount() {
    this.setState = () => {
    };
  }

  async fetchDetails() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      loading: false,
      id,
    });
  }

  async deleteMovie(id) {
    this.setState({
      loading: true,
    });
    await movieAPI.deleteMovie(id);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { movie, loading, id, redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to="/" />
      );
    }
    if (loading) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-details" className="MovieDetails">
        <img alt="Movie Cover" src={ `../${movie.imagePath}` } />
        <h1>{`Tittle: ${movie.title}`}</h1>
        <p>{ `Subtitle: ${movie.subtitle}` }</p>
        <p>{ `Storyline: ${movie.storyline}` }</p>
        <p>{ `Genre: ${movie.genre}` }</p>
        <p>{ `Rating: ${movie.rating}` }</p>
        <Link to="/">VOLTAR</Link>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => this.deleteMovie(id) }>DELETAR</Link>
      </div>
    );
  }
}
MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default MovieDetails;

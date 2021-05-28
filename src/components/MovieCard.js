import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCardStyle.css';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const path = `/movies/${movie.id}`;
    return (
      <div data-testid="movie-card" className="MovieCard">
        <img src={ movie.imagePath } alt={ `Banner do filme ${movie.title}` } />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <strong>{movie.rating}</strong>
        <Link movie={ movie } to={ path }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
export default MovieCard;

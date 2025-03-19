import React from 'react';
import { useParams } from 'react-router-dom'; // To get the movie ID from the URL
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './ProductMoviePage.css'; // Optional: Create a CSS file for styling

// Sample movie data (replace with your actual data fetching logic)
const movies = [
  {
    id: 'movie1',
    title: 'The Cinematic Adventure',
    description: 'A thrilling tale of heroes and destiny, filled with breathtaking visuals and an unforgettable soundtrack.',
    genre: 'Action/Adventure',
    director: 'Visionary Director X',
    actors: ['Starring Actor A', 'Supporting Actress B', 'Character Actor C'],
    releaseYear: 2024,
    rating: 4.5,
    imageUrl: 'https://via.placeholder.com/300/007bff/FFFFFF?Text=Movie+Poster', // Placeholder image URL
    trailerUrl: 'https://www.youtube.com/embed/your_trailer_id', // Replace with actual trailer URL
    price: 19.99,
  },
  {
    id: 'movie2',
    title: 'A Quiet Drama',
    description: 'An emotionally resonant story exploring human connections in a challenging world.',
    genre: 'Drama',
    director: 'Introspective Director Y',
    actors: ['Lead Actor D', 'Ensemble Cast E'],
    releaseYear: 2023,
    rating: 4.2,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDgtM2YwZi00ZjNiLThlZTktYTBlNTBmMGNjNTRlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg', // Placeholder image URL
    trailerUrl: 'https://www.youtube.com/embed/another_trailer_id', // Replace with actual trailer URL
    price: 15.50,
  },
];

const ProductMoviePage = () => {
  const { movieId } = useParams(); 
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <Container className="mt-5"><h2>Movie Not Found</h2></Container>;
  }

  return (
    <Container className="mt-5 product-movie-page">
      <Row>
        <Col md={4}>
        <Image src={movie.imageUrl} alt={movie.title} fluid rounded />
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <p className="lead">{movie.description}</p>
          <hr className="my-4" />
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Rating:</strong> {movie.rating} / 5</p>
          <h4 className="mt-3">Price: ₹{movie.price.toFixed(2)}</h4>
          <Button variant="primary" size="lg" className="mt-3">
            Add to Cart
          </Button>
          <h4 className="mt-4">Watch Trailer</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={`${movie.trailerUrl}?autoplay=0&mute=1`} // Basic trailer embed
              title={`${movie.title} Trailer`}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
      {/* You can add more sections here, like customer reviews, related movies, etc. */}
    </Container>
  );
};

export default ProductMoviePage;
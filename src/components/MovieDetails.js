import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';
import { Typography, CircularProgress, Card, CardContent, CardMedia } from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <CircularProgress />;

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="600"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body1">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;

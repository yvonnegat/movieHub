import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Card key={movie.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Link to={`/movie/${movie.id}`}>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;

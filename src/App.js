import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchMovies } from './api';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchAndPagination from './components/SearchAndpagination';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(query, currentPage);
      setMovies(data.results);
    };
    getMovies();
  }, [query, currentPage]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchAndPagination
                  onSearch={(term) => setQuery(term)}
                  onPageChange={(page) => setCurrentPage(page)}
                  currentPage={currentPage}
                />
                <MovieList movies={movies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

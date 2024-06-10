import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchAndPagination = ({ onSearch, onPageChange, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={2}
      sx={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}
    >
      <form onSubmit={handleSearch} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search for a movie"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1, marginRight: '8px' }}
          size="small"
        />
        <Button type="submit" variant="contained" sx={{ height: '100%' }}>Search</Button>
      </form>
      <Box ml={1}>
        <Button onClick={handlePrevPage} disabled={currentPage <= 1} variant="outlined">
          Previous
        </Button>
        <Button onClick={handleNextPage} variant="outlined">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAndPagination;

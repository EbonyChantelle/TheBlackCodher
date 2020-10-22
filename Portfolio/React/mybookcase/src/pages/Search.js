import React from 'react';
import "./Search.css";

function Search (props) {
  
  function handleSubmit (event) {
    event.preventDefault();
    props.findBooks(props.keyword);
    props.setKeyword('');
    }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input type="text" className="searchBox" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)}/>
      <button className="searchBtn">Search</button>
    </form>
  );
}

export default Search;
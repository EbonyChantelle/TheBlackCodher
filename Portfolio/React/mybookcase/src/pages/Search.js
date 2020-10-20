import React from 'react';

function Search (props) {
  
  function handleSubmit (event) {
    event.preventDefault();
    props.findBooks(props.keyword);
    props.setKeyword('');
    }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input type="text" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)}/>
      <button>Search</button>
    </form>
  );
}

export default Search;
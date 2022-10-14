import React from "react";
import "./search.css"
const Search = ({ searchedvalue, handelsearch }) => {
  return (
    <div >
      {/* <input
        type="search"
        placeholder="What're you searching for?"
        aria-describedby="button-addon"
        className="form-control border-primary"
        // value={searchedvalue}
        onChange={(e) => handelsearch(e.target.value)}
      /> */}
      <div className="subheadline" style={{margin:"15px"}}>
        <h1 style={{display:"inline"}}>Discover </h1>
        <h3 style={{fontSize:"2em", fontWeight:"bolder"}}>food recipes</h3>
        </div>
      <div  className="search-form">
        <input placeholder="smoothie, salad" className="search-bar" type="text" onChange={(e) => handelsearch(e.target.value)} />
        {/* <button className="search-button" type="submit">Search</button> */}
      </div>
    </div>
  );
};

export default Search;

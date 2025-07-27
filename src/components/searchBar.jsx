import { useState } from "react";
import "./searchBar.css";

const SearchBar = ({setSearchParams})=>{
 const [query, setQuery] = useState("");
 
 const onSubmit = (e) => {
  e.preventDefault();
  console.log("Search query:", query);
  setSearchParams({
    search_value: query,
    page_number: 1
  });
 }


 return (
   <form onSubmit={onSubmit} className="search-bar">
     <input type="text" name="search" className="search-bar_field" onChange={(e)=>{
      setQuery(e.target.value);
     }} placeholder="Search for images..." required />
     <button type="submit" className="search_bar-button">Search</button>
   </form> 
 );
}

export default SearchBar;
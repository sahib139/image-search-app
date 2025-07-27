import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar'
import ImageBox from './components/imageList'
import searchApi from "./API/searchApi";


function App() {
  const [imagesData, updateImageData] = useState([])
  const [searchParams, setSearchParams] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams.search_value || !searchParams.page_number) return;
      try {
        const data = await searchApi(searchParams.search_value, 10, searchParams.page_number);
        setError(null);
        updateImageData(data);
      } catch (error) {
        setSearchParams({})
        setError("Unable to Fetch the Images!");
      }
    };
    fetchData();
  }, [searchParams]);

  const page_button = (e) => {
    const button_name = e.target.name;
    if (button_name === 'next') {
      setSearchParams({
        ...searchParams,
        page_number: searchParams.page_number + 1
      });
    } else if (button_name === 'previous') {
      setSearchParams({
        ...searchParams,
        page_number: searchParams.page_number - 1
      });
    }
  }

  return (
    <>
      <div className="app-header">
        <h1 className="app-title">Image Search App</h1>
      </div>
      <div className='main-content'>
        < SearchBar setSearchParams={setSearchParams} />
        < ImageBox images={imagesData} />
          {error && <h3>{error}</h3>}
      </div>
      <footer className="app-footer">
        {searchParams?.page_number && <div className="pagination">
          <button className="pagination-button" name='previous' disabled={searchParams.page_number == 1 && true}
            onClick={page_button}>Previous</button>
          <span className="pagination-info">{searchParams?.page_number}</span>
          <button className="pagination-button" name='next' onClick={page_button}>Next</button>
        </div>}
        <p className="footer-text">Made with ❤️ by Sahib Singh</p>
      </footer>
    </>
  )
}

export default App

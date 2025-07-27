import axios from 'axios';

const searchApi = async (query, item_per_page, page_number) => {
 try {

  const UNSPLASH_API_URL="https://api.unsplash.com/";
  const UNSPLASH_ACCESS_KEY="YOUR_UNSPLASH_ACCESS_KEY"; // Replace with your Unsplash access key

  const response = await axios.get(`${UNSPLASH_API_URL}/search/photos`, {
   params: { query, per_page: item_per_page, page: page_number},
   headers: {
     Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
     'Content-Type': 'application/json',
   },
  });
  return response.data;
 } catch (error) {
  console.error('Error fetching search results:', error);
  return {}
 }
}

export default searchApi;
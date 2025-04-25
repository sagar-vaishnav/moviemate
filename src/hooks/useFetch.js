import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseURL = process.env.REACT_APP_API_URL;  
    const [data, setData] = useState([]);
    const url = `${baseURL}${apiPath}?api_key=${apiKey}&query=${queryTerm}`;
    
    useEffect(()=>{        
        async function fetchMovies() {            
          const response = await fetch(url);          
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [url])
  return {data}
}

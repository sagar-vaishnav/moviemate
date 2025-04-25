import { Card } from "../components/Card";
import { useFetch, useTitle } from "../hooks";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query") || "";
  const {data: movies} = useFetch(apiPath, queryTerm);  
  useTitle(`Search results for ${queryTerm}`);
   
  return (
    <main>
      <section className="py-4">
        <p className="text-3xl text-gray-700 dark:text-white ">
          {movies.length > 0 ? `Search results for "${queryTerm}"` : `No results found for "${queryTerm}"`} 
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}          
        </div>
      </section>
  </main>
  )
}

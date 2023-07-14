
import { useState, useEffect } from "react";

import { getTrendingAllDay } from "../API/get-from-server";

import Loader from "../components/Loader";
import ErrorTitle from "../components/ErrorTitle";
// import { MovieList } from "components/MovieList/MovieList";


export default function Home() {
  const [trendingAllDay, setTrendingAllDay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingAllDay();
        console.log("🚀 ~ file: Home.jsx:23 ~ fetchData ~ data:", data)
        
        setTrendingAllDay(data);
        setError(null);
      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
   
  }, []);

  console.log(trendingAllDay);

  return (
    <>
      {isLoading && <Loader />}
      <h1>Trending All Days</h1>
      {/* <MovieList movies={trendingAllDay} /> */}
      {hasError && <ErrorTitle error={error} />}

    </>
  );
}
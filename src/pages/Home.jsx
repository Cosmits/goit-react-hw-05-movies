import { useState, useEffect } from "react";

import { getTrendingAllDay } from "../API/get-from-server";

import { StyledContainer } from "components/App.styled";

import Loader from "../components/Loader";
import ErrorTitle from "../components/ErrorTitle";
import Button from "components/Button/Button";
import ImageGallery from "components/ImageGallery/ImageGallery";


export default function Home() {
  const [page, setPage] = useState(1);

  const [trendingAllDay, setTrendingAllDay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);

  const addCurrentPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingAllDay(page);

        setTrendingAllDay(prevData => [...prevData, ...data.results]);

        setError(null);
      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

  }, [page]);

  return (
    <>
      {isLoading && <Loader />}
      <StyledContainer>
        <h1>Trending All Days</h1>
      </StyledContainer>
      {trendingAllDay?.length > 0 && <ImageGallery images={trendingAllDay}> </ImageGallery>}
      <Button onClick={addCurrentPage} />
      {hasError && <ErrorTitle error={error} />}
    </>
  );
}
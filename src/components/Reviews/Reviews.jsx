import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getMovieReviews } from "API/get-from-server";
import { DetailsItem, MovieSubTitle, MovieText, MovieTitle, Wrapper } from "pages/MovieDetails.styled";

import Loader from "components/Loader";
import ErrorTitle from "components/ErrorTitle";
import { StyledReviewsList } from "./Reviews.styled";

function Reviews() {

  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    const MovieReviews = async (id) => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(id);
        setMovieReviews(data);
      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    MovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {hasError && <ErrorTitle error={error} />}
      <Wrapper>
        <MovieTitle>Reviews</MovieTitle>
        {!movieReviews.results?.length > 0 && <MovieSubTitle>No Reviews</MovieSubTitle>}
        {movieReviews?.results && <StyledReviewsList>
          {movieReviews.results.map(item => (
            <DetailsItem key={item.id}>
              <MovieSubTitle>Author: {item.author}</MovieSubTitle>
              <MovieText>{item.content}</MovieText>
            </DetailsItem>
          ))}
        </StyledReviewsList>}
      </Wrapper>
    </>
  )
}

export default Reviews
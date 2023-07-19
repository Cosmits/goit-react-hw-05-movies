import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCredits } from "API/get-from-server";
import { MovieSubTitle} from "pages/MovieDetails.styled";

import ErrorTitle from "components/ErrorTitle/ErrorTitle";
import Loader from "components/Loader/Loader";
import { StyledCastImage, StyledCastItem, StyledCastList, StyledCastTitle } from "./Cast.styled";
import { getImg } from "API/utils";

const Cast = () => {

  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    const MovieCredits = async (id) => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(id);
        setMovieCast(data);
      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    MovieCredits(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {hasError && <ErrorTitle error={error} />}
      {!movieCast.cast?.length > 0 && <MovieSubTitle>No Cast</MovieSubTitle>}
      {movieCast?.cast && <StyledCastList>
        {movieCast.cast.map(item => (
          <StyledCastItem key={item.id}>
            <StyledCastImage src={getImg(item.profile_path)} alt={item.name} />
            <MovieSubTitle>{item.character}</MovieSubTitle>
            <StyledCastTitle>Actor: {item.name}</StyledCastTitle>
            <StyledCastTitle>Popularity: {item.popularity}</StyledCastTitle>
          </StyledCastItem>
        ))}
      </StyledCastList>}

    </>
  )
}

export default Cast
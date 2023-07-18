import { useEffect, useState, useRef, Suspense } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";

import { getMovieDetails } from "API/get-from-server";
import { getImg, getListToStr } from "API/utils";

import {
  DetailsImg, DetailsItem, DetailsList,
  GoBackBtn, MovieText, MovieTitle, Wrapper,
  InfoList, InfoLink, MovieSubTitle
} from "./MovieDetails.styled";
import { StyledContainer } from "components/App.styled";

import Loader from 'components/Loader';
import ErrorTitle from "components/ErrorTitle";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const MovieDetails = async (id) => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        setMovieDetails(data);
      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    MovieDetails(movieId);
  }, [movieId]);

  const { title, overview, poster_path, genres, vote_average, production_countries } = movieDetails;
  
  return (
    <>
      <StyledContainer>
        <GoBackBtn to={backLinkRef.current}>Go Back</GoBackBtn>
      </StyledContainer>
      {isLoading && <Loader />}
      {hasError && <ErrorTitle error={error} />}
      <Wrapper>
        <DetailsList>
          <DetailsItem>
            <DetailsImg src={getImg(poster_path)} alt={title} />
          </DetailsItem>
          <DetailsItem>
            <MovieTitle>{title}</MovieTitle>
            <MovieText>User Score: {vote_average}%</MovieText>
            <MovieSubTitle>Overview</MovieSubTitle>
            <MovieText>{overview}</MovieText>
            <MovieSubTitle>Genres</MovieSubTitle>
            <MovieText>{getListToStr(genres)}</MovieText>
            <MovieSubTitle>Production Countries</MovieSubTitle>
            <MovieText>{getListToStr(production_countries)}</MovieText>
            <InfoList>
              <li><InfoLink state={{ from: location.state?.from ?? '/' }} to={"cast"}>Cast</InfoLink></li>
              <li><InfoLink state={{ from: location.state?.from ?? '/' }} to={"reviews"}>Reviews</InfoLink></li>
            </InfoList>
          </DetailsItem>
        </DetailsList>
      </Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MovieDetails;

import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { getSearchMovie } from "API/get-from-server";

import TitleH1 from "components/TitleH1/TitleH1";
import Loader from "components/Loader/Loader";
import ImageGallery from "components/ImageGallery/ImageGallery";
import SearchBar from "components/SearchBar/SearchBar";
import ErrorTitle from "components/ErrorTitle/ErrorTitle";

export default function Movies() {

  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [theEnd, setTheEnd] = useState(false);

  const [error, setError] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = query => {
    if (searchValue !== query) {
      setSearchValue(query);
      setImages([]);
      setCurrentPage(1);
      setTotalHits(0)
      setTheEnd(false);
    }
  };

  // const addCurrentPage = () => {
  //   setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  // }


  useEffect(() => {
    if (!searchValue || theEnd) {
      setIsLoading(false);
      return;
    }

    const getImagesFromAPI = async () => {
      try {
        setIsLoading(true);

        const data = await getSearchMovie({ query: searchValue, page: currentPage });

        // All right 
        if (data.results.length && currentPage === 1) {
          toast.info(<span>Fined {data.total_results} movies with name {searchValue}</span>, {
            position: toast.POSITION.TOP_LEFT,
            theme: "colored",
          });
        }

        // not found
        if (!data.results.length) {
          return toast.warning(`Sorry movie('s) not found...`, {
            position: toast.POSITION.TOP_LEFT,
            theme: "colored",
          });
        }

        //The End
        let theEnd = false;
        if (!data.results.length || data.results.length < 12) theEnd = true;

        setTheEnd(theEnd);

        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalHits(data.total_results);
        setIsLoading(false);
        setError(null);

      } catch (error) {
        setHasError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImagesFromAPI();

  }, [searchValue, currentPage, theEnd])

  //! Infinite scroll - intersectionObserver
  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    // return () => {
    //   if (observerTarget.current) {
    //     observer.unobserve(observerTarget.current);
    //   }
    // };
  }, [observerTarget]);


  //================================================================
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery
        images={images}
        searchValue={searchValue}
        totalHits={totalHits} />}
      {isLoading && <Loader />}
      {/* {!theEnd && images.length > 0 && <Button onClick={addCurrentPage} />} */}
      {theEnd && images.length > 0 && <TitleH1 searchValue={"The END"} totalHits={totalHits} />}
      <div className='bottom' ref={observerTarget} />
      {hasError && <ErrorTitle error={error} />}
      <ToastContainer hideProgressBar />
    </>)
}